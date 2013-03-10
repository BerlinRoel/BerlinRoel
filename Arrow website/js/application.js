// Put your application scripts here

// cache container
var $container = $('.main-content');

$(document).ready(function() {
  // Initialize Isotope.js
  $container.isotope({
    itemSelector : '.item',
    layoutMode : 'masonry',
    masonry : {
      columnWidth : 242,
      rowHeight: 182 
    }
  });

  // filter items when filter link is clicked
  $('nav a[class!="contact"]').click(function(){
    $('nav a').removeClass('selected');
    $(this).addClass('selected');

    // get href attr, remove leading #
    var href = $(this).attr('href').replace( /^#/, '' ),
    // convert href into object
    // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
    option = $.deparam( href, true );
    // set hash, triggers hashchange on window
    $.bbq.pushState( option );
    return false;
  });

  $(window).bind( 'hashchange', function( event ){
    // get options object from hash
    var hashOptions = $.deparam.fragment();
   
    $('nav a').removeClass('selected');
    
    // if filter is empty, it's the home page
    if(hashOptions.filter === undefined || hashOptions.filter === '*') { 
      hashOptions.filter = '*'; 
      $('nav a[href$="*"]').addClass('selected');
    } else {
      $('nav a[href$="\\'+hashOptions.filter+'"]').addClass('selected');
    }

    // apply options from hash
    $container.isotope( hashOptions );
  }).trigger('hashchange');


  // CONTACT FORM
  $('nav a.contact, .lets-connect a').click(function(){
    $('body').prepend("<div class='modal-background'></div>");
    $('.contact-form').fadeIn('fast').find('input:first').focus();

    $('.contact-form').bind("keyup" ,function(event) {
      if (event.keyCode == "27") { $('.contact-form .close').click(); }
    });

    return false;
  });

  $('.contact-form .close').click(function() {
    $('.contact-form').find('input[type="text"], input[type="email"], textarea').val('');
    $('.contact-form, .modal-background').fadeOut('fast');
    $('.contact-form').unbind("keyup");
    return false;
  });

  $('.contact-form form').submit(function() {
    $('.contact-form form, .contact-success').toggle();
  });

});
