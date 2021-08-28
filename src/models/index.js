import Address from "./Address";
import Tech from "./Tech";
import User from "./User";

const models = { Address,Tech,User }, modelsArray = Object.values(models);


export default {
    init(connection){ modelsArray.forEach(model=>model.init(connection)) },

    associate(models){ modelsArray.forEach(model=>model.associate(models)) }
};