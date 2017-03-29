var list = require('./list.json')

var kind = require('./kind.json')

module.exports = function() {
  return {
    'list.php': list,
    'kind.php':kind
  }
}
