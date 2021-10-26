const router = require('express').Router();
const { Comment, User, Post } = require('../../models');

// GET /api/comments --> finds all the comments for a given post
router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/comments -->creates a comment for a given post
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
          comment_text: req.body.comment_text,
          user_id: req.session.user_id,
          post_id: req.body.post_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// DELETE /api/comments/1 -->deletes a single comment from 1 post
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;