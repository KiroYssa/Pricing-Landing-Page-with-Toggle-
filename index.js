$(".switch").on("click", function(){
if($( "input:checked" ).val() === "on"){
    $(".Basic-dollar").html("&dollar;19.99");
    $(".Professional-dollar").html("&dollar;24.99");
    $(".Master-dollar").html("&dollar;39.99");
}
else{
  $(".Basic-dollar").html("&dollar;199.99");
  $(".Professional-dollar").html("&dollar;249.99");
  $(".Master-dollar").html("&dollar;399.99");
}
})
