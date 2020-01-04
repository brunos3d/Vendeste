module.exports = {
    async projects(req, res) {
        res.send({ ok: true, user: req.userId });
    }
};
