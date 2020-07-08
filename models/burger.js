const orm = require('../config/orm');

const burger = {
    selectAll: (cb) =>{
        orm.selectAll('burgers');
    },
    insert: (valInput,cb) => {
        orm.insertOne('burgers', 'burger_name', valInput);
    },
    update: (cb) => {
        orm.updateOne('burgers', updateCondition, burgerId);
    }


}