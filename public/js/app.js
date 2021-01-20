/* Button click behavior */
 
// Adding items
$('button[class=".btn-additem"]').on('click', function(event) {
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
          description: itemDesc,
      }  
    })
    .then(function() {
        alert('Item added');
    })
    .catch(function(){
        alert('Unable to add item');
    });

});

// Deleting items
$('button[class=".btn-deleteitem"]').on('click', function(event) {
    
    const itemId = $(this).attr('item-content__id');

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
    .catch(function() {
        alert('Unable to delete item');
    });
    
});