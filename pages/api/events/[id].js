const contents = require('../../../event.contents.json');

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const id = req.query.id;
        return res.status(200).json(contents.find(x => x.id == id));
    }
    return res.status(400).json({error: 'Bad request'});
}