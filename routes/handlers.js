const express = require("express");
const router = express.Router();
const orm = require("../config/orm")

router.get("/", function(req, res) {
    orm.selectAll(function (error, all_inventory) {
        if (error) {
            return res.status(501).json({
                message: 'Unable to query the database'
            });
        }
        console.log('Database: ', all_inventory)
        // Send and render all_inventory data to index
        res.render("index", { all_inventory, style: 'index' });
    });
});

// Route called add which will insert items into inventory_db 
router.post('/add', (req, res) => { 
    const itemName = req.body.item_name;
    const itemDesc = req.body.description;
    orm.insertItem(itemName, itemDesc, function(error, item_name) {
        if(error) {
            return res.status(401).json({
                message: "Not able to add item"
            });
        }

        return res.json({
            item_name: itemName,
            description: itemDesc,
            is_withdrawn: 0
        });
    });
})

// Delete items 
router.post('/delete', (req, res) => {
    const itemId = req.body.id;
    orm.deleteItem(itemId, function(error, id){
        if(error) {
            return res.status(401).json({
                message: "Not able to delete item"
            });
        }

        return res.json({
            id: itemId
        });
    });
})

router.get("table", function(req, res) {
    res.render("table", { all_inventory, style: 'table'});
})

module.exports = router;