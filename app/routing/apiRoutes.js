
const friendData = require('../data/friends');
// d

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    })
    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        res.json(true);
        
    })

}