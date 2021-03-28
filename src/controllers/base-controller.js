class BaseController {
  sendResult(res, result) {
    res.status(result.status).json(result.getResult());
  }
}

module.exports = {
  BaseController
}
