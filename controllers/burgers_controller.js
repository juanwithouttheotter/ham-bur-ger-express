const Burger = require('../classes/burger');

exports.read = async (req, res) => {
    const burger = new Burger();
    await burger.selectAll();
    const burgers = await burger.getLiteral();
    res.json(burgers);
}