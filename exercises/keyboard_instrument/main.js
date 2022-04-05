// this is where you write your javascript

$(window).keydown(function(e){

  var key = e.key;

  console.log(key);

  if (key == "m") {
      $(".message").html("michael");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "i") {
      $(".message").html("ichaelm");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "c") {
      $(".message").html("chaelmi");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "h") {
      $(".message").html("haelmic");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "a") {
      $(".message").html("aelmich");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "e") {
      $(".message").html("elmicha");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }
  else if (key == "l") {
      $(".message").html("lmichae");
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $("body").css("font-size", "100px");
  }

  else {
      $(".message").html("Oops! Looks like someone made an itsy wittle f*cky wucky. </br> why don't you try another key?");
      $("body").css("background-color", "red");
      $("body").css("color", "white");
      $("body").css("font-size", "100px");
  }

});



