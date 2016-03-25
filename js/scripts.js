$(function() {

  $("#survey").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    $(".destination2").hide();

    var antarctica = 0;
    var sanDiego = 0;
    var boracay = 0;

    // Increment for temperature
    if ($("input[name=temperature]:checked").val() === "1") {
      antarctica = ++antarctica;
    }
    else if ($("input[name=temperature]:checked").val() === "2") {
      sanDiego = ++sanDiego;
    }
    else {
      boracay = ++boracay;
    }
    // Increment for disconnect
    if ($("input[name=disconnect]:checked").val() === "1") {
      antarctica = ++antarctica;
    }
    else if ($("input[name=disconnect]:checked").val() === "2") {
      sanDiego = ++sanDiego;
    }
    else {
      boracay = ++boracay;
    }
    // Increment for precipitation
    if ($("input[name=precipitation]:checked").val() === "1") {
      antarctica = ++antarctica;
    }
    else if ($("input[name=precipitation]:checked").val() === "2") {
      sanDiego = ++sanDiego;
    }
    else {
      boracay = ++boracay;
    }
    // Increment for beach
    if ($("input[name=beach]:checked").val() === "1") {
      antarctica = ++antarctica;
    }
    else if ($("input[name=beach]:checked").val() === "2") {
      sanDiego = ++sanDiego;
    }
    else {
      boracay = ++boracay;
    }
    // Increment for penguin
    if ($("input[name=penguin]:checked").val() === "1") {
      antarctica = ++antarctica;
    }
    else if ($("input[name=penguin]:checked").val() === "2") {
      sanDiego = ++sanDiego;
    }
    else {
      boracay = ++boracay;
    }

    // Determine destination(s)
    if (antarctica > sanDiego && antarctica > boracay) {
      $(".destination").text("Antarctica");
    }
    else if (sanDiego > antarctica && sanDiego > boracay) {
      $(".destination").text("San Diego");
    }
    else if (sanDiego > antarctica && sanDiego === boracay) {
      $(".destination").text("San Diego");
      $(".destination2").text(" or Boracay");
      $(".destination2").show();
    }
    else if (antarctica > sanDiego && antarctica === boracay) {
      $(".destination").text("Antarctica");
      $(".destination2").text(" or Boracay");
      $(".destination2").show();
    }
    else if (antarctica > boracay && antarctica === sanDiego) {
      $(".destination").text("Antarctica");
      $(".destination2").text(" or San Diego");
      $(".destination2").show();
    }
    else {
      $(".destination").text("Boracay");
    }


  });
});
