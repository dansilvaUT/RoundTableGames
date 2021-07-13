module.exports = {
    getGames: async (req, res) => {
        const db = req.app.get('db');
        const games = await db.games.get_all_games();

        if (!games[0]) {
            return res.status(404).send('No games to display, add some!');
        }

        res.status(200).send(games);
    },
    getGame: async (req, res) => {
        const { game_id } = req.params;
        const db = req.app.get('db');

        const [game] = await db.games.get_game_by_id({ game_id });

        if (!game) {
            return res.status(500).send('Something went wrong...');
        }

        res.status(200).send(game);

    },
    addGame: async (req, res) => {
        const { game_name, game_image, game_description } = req.body;
        const db = req.app.get('db');

        const [game] = await db.games.get_game({ game_name });

        if (game) {
            return res.status(400).send(`${game_name} already exists in our database.`);
        }

        await db.games.add_game({ game_name, game_image, game_description });

        res.status(201).send(`${game_name}, added to RoundTable Game reviews!`);
    }
}