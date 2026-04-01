import express from "express";

const router = express.Router();

router.get('/shop', (req, res) => {
    res.send('<h2>Shop route: Welcome to the shop!</h2>');
});

export default router;