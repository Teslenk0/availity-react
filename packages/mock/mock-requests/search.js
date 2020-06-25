const { get } = require('lodash.get');

module.exports = (fields, data) => q =>
  !q
    ? data
    : data.filter(
        obj =>
          fields
            .map(field => get(obj, field))
            .filter(
              val => val && val.toLowerCase().indexOf(q.toLowerCase()) > -1
            ).length > 0
      );
