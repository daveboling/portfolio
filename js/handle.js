$(document).ready(function () {



var content = $('#content').isotope({
	filter: '.about_me',
	itemSelector: '.item',
	layoutMode: 'masonry',
});

content.hide();
content.fadeIn(1500);


$('.filter .col-xs-6').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});

    console.log('I was clicked!');

    $('div').children().removeClass('active');
	$(this).addClass('active');

  });

});