module.exports = {
    addTag: (req, res) => {

    },
    getTags: async (req, res) => {
        const db = req.app.get('db');

        const tags = await db.tags.get_all_tags();

        if (!tags[0]) {
            return res.status(500).send('Something went wrong...');
        }

        res.status(200).send(tags);
    },
    addTagsToGame: async (req, res) => {
        const { tags } = req.body;
        const db = req.app.get('db');

        for (let i = 0; i < tags.length; i++) {
            let game = tags[i].game;
            let tag = tags[i].tag;
            await db.tags.add_tag_to_game({ game, tag });
        }

        res.status(201).send('Tags added');
    }
}