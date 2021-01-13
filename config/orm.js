const connection = require('./connection')

// In case there is an error, make the error the first print
const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM inventory_db", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    }
};

module.exports = orm;
