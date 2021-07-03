const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { email, username, password } = req.body;
        const db = req.app.get('db');
        const [foundUser] = await db.users.check_user({ username, email });

        if (foundUser && foundUser.username === username) {
            return res.status(400).send(`User with username ${username} already exists!`);
        }

        if (foundUser && foundUser.email === email) {
            return res.status(400).send(`User with email ${email} already exists`);
        }

        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.users.register_user({ username, email, hash })

        req.session.user = newUser;
        delete req.session.user.password;

        res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const [foundUser] = await db.users.get_user({ username });

        if (!foundUser) {
            return res.status(404).send(`No user with username ${username} found`);
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password);

        if (!authenticated) {
            return res.status(401).send(`Incorrect password for ${username}`);
        }

        delete foundUser.password;
        req.session.user = foundUser;
        res.status(200).send(req.session.user);
    },

    getUser: (req, res) => {
        if (!req.session.user) {
            return res.status(401).send('No user found, please login.');
        }

        res.status(200).send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('Successfully logged out');
    }
}