const comments = require('../data/comments');
const commentsCount = comments.length;
const listAll = (req, res) => {
    return res.json(comments);
}
const showOne = (req, res) =>{
    const id = req.params.commentsId;
    const filteredComment = comments.find(comment => comment._id === Number(id)); 
    return res.json(filteredComment)
}

const createNewEntry = (req, res) =>{
    const newComments = {
        _id: commentsCount + 1,
        ...req.body
        };
        comments.push(newComments);
        res.json(newComments);
}

module.exports = {
    listAll, 
    showOne, 
    createNewEntry
}