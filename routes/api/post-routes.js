const router = require('express').Router();
const { Post } = require('../../models');

// GET /api/posts
router.get('/', (req, res) => {});

// GET /api/posts/1
router.get('/:id', (req, res) => {});

// POST /api/posts
router.post('/', (req, res) => {});

// PUT /api/posts/1
router.put('/:id', (req, res) => {});

// DELETE /api/posts/1
router.delete('/:id', (req, res) => {});

module.exports = router;