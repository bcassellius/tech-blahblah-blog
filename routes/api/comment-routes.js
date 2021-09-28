const router = require('express').Router();
const { Post } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {});

// GET /api/comments/1
router.get('/:id', (req, res) => {});

// POST /api/comments
router.post('/', (req, res) => {});

// PUT /api/comments/1
router.put('/:id', (req, res) => {});

// DELETE /api/comments/1
router.delete('/:id', (req, res) => {});

module.exports = router;