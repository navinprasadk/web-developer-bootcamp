// click event
$("button").click(function() {
  var txt = $(this).text();
  alert(txt + " clicked")
})
//  above function gives you a alert if you clicked the any of the button

// if you click the any of the list, it will changes its color and background color to red and black respectively
$("li").click(function() {
  $(this).css({color: "red", backgroundColor: "black"})
})

// if you click the textInput class i.e input field, it will change its background color to grey
$(".textInput").click(function() {
  $(this).css("backgroundColor", "grey")
})

// Keypress() event
$("#keypressEventInput").keypress(function(event) {
  $(this).css({width: "300px", height: "50px", backgroundColor: "pink"})
  console.log(event);
  // event.which contains the ASCII code of characters we type
  console.log(event.which);
})


// On() event
$(".onEventButton").on("mouseenter", function(){
  $(this).css({
fontWeight: "bolder", color: "blue"  })
})
$(".onEventButton").on("mouseleave", function(){
  $(this).css({
fontWeight:"normal", color: "black"  })
})
