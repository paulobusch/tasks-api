const queryString = require('query-string');
const config = { parseNumbers: true, parseBooleans: true };

function getData(req, res) {
  const json = req.body;
  const params = req.params;
  const query = queryString.parseUrl(req.url, config).query;
  for (var prop in query)
    json[prop] = query[prop];
  for (var prop in params)
    json[prop] = params[prop];

  return cast(obj, json);
}

function cast(obj, json){
  for (var prop in obj) {
    if (json.hasOwnProperty(prop))
      obj[prop] = json[prop];
  }
  return obj;
}

module.exports = {
  getData,
  cast
};
