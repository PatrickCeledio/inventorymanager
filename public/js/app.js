// Button click behavior
$('button[type="submit"]').on('click', function(event) {
    // Disable page refresh
    event.preventDefault();

    const itemName = $('input[name="item_name"]').val();
    const itemDesc = $('input[name="description"]').val();

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