const { TypeService } = require('../services');
const { TypeModel } = require('../models/type/type-model');
const { BaseController } = require('./base-controller');
const { getData } = require('../utils/object/object-functions');

class TypesController extends BaseController {
  async getAsync(req, res) {
    const id = req.params.id;
    const result = await TypeService.getByIdAsync(id);
    super.sendResult(res, result);
  }

  async getAllAsync(req, res) {
    const result = await TypeService.getAllAsync();
    super.sendResult(res, result);
  }

  async createAsync(req, res) {
    const model = getData(new TypeModel(), req);
    const result = await TypeService.createAsync(model);
    super.sendResult(res, result);
  }

  async updateAsync(req, res) {
    const model = getData(new TypeModel(), req);
    const result = await TypeService.updateAsync(model);
    super.sendResult(res, result);
  }

  async deleteAsync(req, res) {
    const id = req.params.id;
    const result = await TypeService.deleteAsync(id);
    super.sendResult(res, result);
  }
}

module.exports = {
  TypesController: new TypesController()
};
