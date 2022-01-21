const contents = require('../../../event.contents.json');

export default async function handle(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(contents);
    }
    return res.status(400).json({error: 'Bad request'});
}