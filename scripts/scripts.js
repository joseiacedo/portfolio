$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

jQuery(document).ready(function(jQuery) {

  	var topMenu = jQuery(".nav-list"),
  		offset = 40,
  		topMenuHeight = topMenu.outerHeight()+offset,
  		// All list items
  		menuItems =  topMenu.find('a[href*="#"]'),
  		// Anchors corresponding to menu items
  		scrollItems = menuItems.map(function(){
  		  var href = jQuery(this).attr("href"),
  		  id = href.substring(href.indexOf('#')),
  		  item = jQuery(id);
  		  //console.log(item)
  		  if (item.length) { return item; }
  		});

  	// Bind to scroll
  	jQuery(window).scroll(function(){
  	   // Get container scroll position
  	   var fromTop = jQuery(this).scrollTop()+topMenuHeight;

  	   // Get id of current scroll item
  	   var cur = scrollItems.map(function(){
		     if (jQuery(this).offset().top < fromTop)
  		   return this;
  	   });

  	   // Get the id of the current element
  	   cur = cur[cur.length-1];
  	   var id = cur && cur.length ? cur[0].id : "";

       menuItems.parent().children().children().removeClass("activenav");
   	   //jQuery(".nav-list").filter("[href*='#"+id+"']").removeClass("active-navbar") ;
  	   if(id){
  			menuItems.parent().end().filter("[href*='#"+id+"']").parent().children().children().addClass("activenav");
   			//jQuery(".nav-list").parent().end().filter("[href*='#"+id+"']").parent().children().children().addClass("active-navbar");
      }

  });
});
