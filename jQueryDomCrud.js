// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
let $newAEl = $('<a>')
$newAEl.html('Buy New!');
$newAEl.attr('id', 'cta');
$('main').append($newAEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
console.log($('img').data('color'));

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
let $li = $('li');
$li.eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
// $('p').last().remove();
$('p').eq(-1).remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$newAEl.on('click', () => {
    $newAEl.html('Added to cart');
})





// $( document ).ready(function() {
//     alert( "ready!" );
//     // All of your code in here
//     // This uses jQuery, but there is a plain
//     // JavaScript way to do this as well
//     });
    