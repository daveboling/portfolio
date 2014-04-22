$(document).ready(function () {

/* SlickNav Controls */
$('.menu').slicknav();

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

//Handles filters within content

$('.top_content .backdrop .sub_content').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});


    $('div').children().removeClass('active');
	$(this).addClass('active');

    window.scrollTo(0, 0);

  });

//Handles filter within contact me, for request quote form

$('.contact_me .sub_content').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});


    $('div').children().removeClass('active');
    $(this).addClass('active');

    window.scrollTo(0, 0);

  });

$('.slicknav_menu').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    content.isotope({filter: filterValue});

    window.scrollTo(0, 0);
});



/* Top Menu Positioning */

var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.filter').addClass('fixed');
        $('.slicknav_menu').addClass('fixed');
    } else {
        $('.filter').removeClass('fixed');
        $('.slicknav_menu').removeClass('fixed');
    }
});







/* Request a Quote functionality */


$('.req_quote .sub_content .form .send').on('click', function(){
        $('.req_quote .sub_content form').submit();
});

$('body .overlay .sent .ok').on('click', function() {
    $('.overlay').hide();
});


});

