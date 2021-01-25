/* General */

// Item content list template
const itemTemplate = (item_name, id, description, is_withdrawn) => {
    const itemContainer = $('<div>').attr({
        class:"item-content__list",
        id: id
    });

    const itemImg = $('<img>').attr({
        class: "item-content__picture",
    });

    const itemId = $('<p>').attr({
        class: 'item-content__id',
        id: id
    });

    const itemName = $('<p>').attr({
        class: 'item-content__entry'
    });

    const itemDesc = $('<p>').attr({
        class: 'item-content__entry'
    });

    const itemWithdrawn = $('<p>').attr({
        class: 'item-content__entry'
    });

    const buttonWithdraw = $('<button>').attr({
        type: 'button',
        class: 'btn',
        'data-id': id,
        'data-state': is_withdrawn
    });

    const buttonDelete = $('<button>').attr({
        type: 'button',
        class: '.btn-deleteitem'
    });

    const itemCreation = $('<td>').attr({
        class: 'item=content__entry'
    });

    itemName.html(item_name);
    itemDesc.html(description);
    buttonWithdraw.html('Withdraw');

    itemContainer.append(itemImg, itemId, itemName, itemDesc, itemWithdrawn, buttonWithdraw, buttonDelete, itemCreation);

    return itemContainer;
}

/* Button click behavior */
 
// Adding items
$('button[class="add-item_button"]').on('click', function(event) {
    // Disable page refresh
    event.preventDefault();

    // Send data to /add
    const itemName = $('input[name="item_name"]').val();
    const itemDesc = $('input[name="description"]').val();

    // ajax call
    $.ajax({
      url: '/add',
      method: 'POST',
      data: {
          item_name: itemName,
          description: itemDesc
      }  
    })
    .then(function(){
        alert("Item successfully added")
    })
    .catch(insertItemFail);

});

// Display new item into table
function addRow() {
    
}
// WIP - Deleting items
$('button[class=".btn-deleteitem"]').on('click', function(event) {
    
    const itemId = $('<p>').attr('item-content__id');

    // This might be causing SQL error
    $.ajax({
        url: '/delete',
        method: 'POST',
        data: {
            id: itemId,
        }
    })
    .then(function() {
        alert('Item successfully deleted!');
    })
    .catch(deleteItemFail);

});

/* Responses */

const displayNewItem = (item) => {
    const name = item.itemName;
    const id = item.id;
    const description = item.itemDesc;
    const is_withdrawn = item.is_withdrawn;

    const newItem = itemTemplate(name, id, description, is_withdrawn);

    $('.item-content').prepend(newItem);
};

const insertItemFail = (response) => {
    alert('Unable to add item');
};

const deleteItemFail = (response) => {
    alert('Unable to delete item');
};