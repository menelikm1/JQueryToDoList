//check off specific todos by clicking
$("li").click(function () {
  // //check if it's checked off or not
  //   //if gray and line through
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     //turn black
  //       $(this).css({
  //         color: 'black',
  //         textDecoration: 'none'});
  //   }else {
  //     //if black and line through
  //       $(this).css({
  //         //turn gray
  //         color: 'gray',
  //         textDecoration: 'line-through'
  //       });
  //   }
    $(this).toggleClass("completed");
});

//click on X to delete todos
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type = 'text']").keypress(function () {
    console.log("enter text");
});
  
