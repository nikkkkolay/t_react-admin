module.exports = () => (req, res, next) => {
    res.header("Content-Range", "posts 0-100/100");
    next();
};
