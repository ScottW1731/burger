

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".newForm").on("click", function(event) {
        //  If this method is called, the default action of the event will not be triggered.
        event.preventDefault();
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
  
      var newBurgerState = {
        name: $("#name")
        // Get the current value of the first element in the set of matched elements or set the value of every matched element .val()
            .val(),
            eaten: $("#eaten").val()
      };
  
      // Send the PUT request.
      $.ajax("/:id" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("nom nom nom", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".eatBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newEaten = {
        name: $("#ca").val().trim(),
        burger: $("[name=burger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/create", {
        type: "POST",
        data: newEaten
      }).then(
        function() {
          console.log("yum yum yum");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
