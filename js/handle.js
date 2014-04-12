$(document).ready(function () {



//ISOTOPE CONTROLS
var content = $('#content').isotope({
	filter: '.about_me',
	itemSelector: '.item',
	layoutMode: 'masonry',
});


//FADE-IN ON THE FIRST LOAD
content.hide();
content.fadeIn(1500);


//Filtering System for ISOTOPE
$('.filter .col-xs-6').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});


    $('div').children().removeClass('active');
	$(this).addClass('active');

    window.scrollTo(0, 0);

  });

$('.top_content .backdrop .sub_content').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});


    $('div').children().removeClass('active');
	$(this).addClass('active');

    window.scrollTo(0, 0);

  });

$('.contact_me .sub_content').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});


    $('div').children().removeClass('active');
    $(this).addClass('active');

    window.scrollTo(0, 0);

  });



/* Top Menu Positioning */

var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.filter').addClass('fixed');
    } else {
        $('.filter').removeClass('fixed');
    }
});


});