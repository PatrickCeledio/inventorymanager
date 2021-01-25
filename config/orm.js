/* Database mgmt */

// Establish connection
const connection = require('./connection')

const orm = {
    // Selects everything from inventory_db and returns them via callback
    selectAll: function (cb) {
        connection.query("SELECT * FROM all_inventory", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    // Insert item into inventory_db.all_inventory table
    insertItem: function (item_name, description, cb) {
        const sqlQuery = `INSERT INTO inventory_db.all_inventory (item_name, description, is_withdrawn) VALUES ('${item_name}', '${description}', 0)`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    deleteItem: function(id, cb){
        // This might be throwing SQL error
        const sqlDelete = `DELETE FROM inventory_db.all_inventory WHERE (id = '${id}')`; 
        connection.query(sqlDelete, function(err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
};

module.exports = orm;
