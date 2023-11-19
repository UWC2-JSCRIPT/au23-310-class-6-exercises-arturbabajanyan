let ulElement = $('.today-list');

ulElement.on(('click'), (e) => {
	if (e.target.nodeName.toLowerCase() == 'span') {
		e.target.parentNode.classList.toggle('done');
	}
	if (e.target.className == 'delete') {
		e.target.parentElement.remove();
	}
})

const addListItem = function(e) {
  e.preventDefault();
  let text = $('input').val();

  if (text != '') {

    const newLiEl = $('<li>');
    const newAEl = $('<a>');
    newAEl.addClass('delete');
    newAEl.text('Delete');
  
    const newSpanItem = $('<span>');
    newSpanItem.text(`${text}\n`);
  
    newLiEl.append(newSpanItem, newAEl);
    ulElement.append(newLiEl);
  
    $('input').val('')
    
  }
}

const addItem = $('a.add-item');
addItem.on("click", addListItem);



// $(document).ready(function() {
//   alert('Hello')
// })