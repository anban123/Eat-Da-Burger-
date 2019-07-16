// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#good").on("click", ".change-devour", function(event) {
    var id = $(this).data("id"); 

    var newdevourState = {
      devoured: true
    };
    console.log("newdevour====================", newdevourState)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, { 
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#devoured").on("click", ".change-devour", function(event) {
    var id = $(this).data("id");

    var newdevourState = {
      devoured: false
    };
    console.log("newdevour====================", newdevourState)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, { 
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
