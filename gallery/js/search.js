$("#search").keyup(function(){     // listen for User Input
  
  var $input = $(this).val();    //store User Input in a variable
  
  $("#gallery li a").each(function(){   // iterate through all anker elements inside # gallery
    
    //compare value of caption attribut with user input
    if ($(this).attr('data-lightview-caption').search(new RegExp($input, "i")) < 0) { 
    $(this).hide();
    } else {
    $(this).show();
    }
  });
});