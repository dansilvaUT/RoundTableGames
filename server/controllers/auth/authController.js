const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { email, username, password } = req.body;
        const db = req.app('db');

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

        res.status(201).send(newUser);
    }
}