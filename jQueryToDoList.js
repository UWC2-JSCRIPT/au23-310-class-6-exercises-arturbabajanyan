$( document ).ready(function() {
    // alert( "ready!" );

  let ulElement = $('.today-list');

  ulElement.on("click", "a", function(e) {
    $(e.target).parent().fadeOut(720, function () {
      $(e.target).closest('li').remove();
    });
  });
  ulElement.on("click", "span", e => $(e.target).closest('li').toggleClass('done'));

  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();

    if (text != '') {

      const newLiEl = $('<li>');
      const newAEl = $('<a>');
      newAEl.addClass('delete');
      newAEl.text('Delete');
      
      const newSpan = $('<span>');
      newSpan.text(`${text}\n`)

      newLiEl.append(newSpan, newAEl);

      ulElement.append(newLiEl);

      $('input').val('')

    }
  };

  const addItem = $('.add-item');
  addItem.on('click', addListItem)

});