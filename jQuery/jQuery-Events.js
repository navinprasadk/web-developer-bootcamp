// click event
$("button").click(function(){
  var txt = $(this).text();
  alert(txt + " clicked")
})
//  above function gives you a alert if you clicked the any of the button


// if you click the any of the list, it will changes its color and background color to red and black respectively
$("li").click(function(){
$(this).css({
  color:"red",backgroundColor:"black"
})
})

// if you click the textInput class i.e input field, it will change its background color to grey
$(".textInput").click(function(){
  $(this).css("backgroundColor","grey")
})
