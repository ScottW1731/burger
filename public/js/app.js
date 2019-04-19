

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
        //  If this method is called, the default action of the event will not be triggered.
        event.preventDefault();
        var newBurger = {
          name: $("#name").val().trim(),
          calories: $("#calories").val(),
          price: $("#price").val(),
          eaten: $("#eaten").val()
        }
  
      // Send the POST request.
      $.ajax("/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("nom nom nom", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".eatBurger").on("submit", function(event) {
              //  If this method is called, the default action of the event will not be triggered.
      event.preventDefault();
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten");
  
      var newBurgerState = {
        eaten: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("nom nom nom", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
