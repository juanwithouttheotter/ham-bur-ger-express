const Burger = require('../classes/burger');

exports.read = async (req, res) => {
    const burger = new Burger();
    await burger.selectAll();
    const burgers = await burger.getLiteral();
    const hbsObject = {
        burgers: burgers
    };
    res.render("index", hbsObject);
}
exports.create = async (req, res) => {
    const burger = new Burger(req.body);
    await burger.insert();
    const burgers = await burger.getLiteral();
    res.json(burgers);
}
exports.update = async (req, res) => {
    const burgerId = req.params.id;
    const burger = new Burger();
    burger.merge(req.body);
    await burger.update(burgerId);
    const burgers = await burger.getLiteral();
    res.json(burgers);
}
exports.delete = async (req, res) => {
    const burgerId = req.params.id;
    const burger = new Burger();
    await burger.delete(burgerId);
    res.json({ deleted: true });
}