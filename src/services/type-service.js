const { TypeDb } = require('../schemas');
const { Result } = require('../utils/models/result');
const { Error } = require('../utils/models/error');
const { Status } = require('../utils/enums/status');

const { Op } = require('sequelize');

class TypeService {
  async getByIdAsync(id) {
    const query = { where: { id } };
    const entity = await TypeDb.findOne(query);
    if (!entity) return new Error(Status.NotFund, 'Type with id is not found');
    return new Result(entity);
  }

  async getAllAsync() {
    const query = { order: [['name', 'asc']] };
    const result = await TypeDb.findAndCountAll(query);
    return new Result(result);
  }

  async createAsync(model) {
    const validationResult = await model.validateAsync();
    if (validationResult.status !== Status.Success) 
      return validationResult;
    
    const query = { where: { name: model.name } };
    const existName = await TypeDb.count(query);
    if (existName) return new Error(Status.Conflict, 'Type with name already exist');

    const entity = await TypeDb.create(model);
    return new Result({ id: entity.id });
  }

  async updateAsync(model) {
    const validationResult = await model.validateAsync();
    if (validationResult.status !== Status.Success) 
      return validationResult;
    
    const query = { where: { name: model.name, id: { [Op.ne]: model.id } } };
    const existName = await TypeDb.count(query);
    if (existName) return new Error(Status.Conflict, 'Type with name already exist');

    const queryUpdate = { where: { id: model.id } };
    await TypeDb.update(model, queryUpdate);
    return new Result();
  }

  async deleteAsync(id) {
    const query = { where: { id } };
    const count = await TypeDb.count(query);
    if (!count) return new Error(Status.NotFund, 'Type with id is not found');
    await TypeDb.destroy(query);
    return new Result();
  }
}

module.exports = {
  TypeService
}
