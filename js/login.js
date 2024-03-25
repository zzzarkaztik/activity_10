$(document).ready(function () {
  setTimeout(function () {
    $("#login-form").slideDown();
  }, 2000);

  // More specific input styling
  $("#login-form input").focus(function () {
    $(this).css("border", "3px solid green");
  });

  // Assuming the use of Bootstrap
  $("input").addClass("form-control-sm");

  $("#login-form").submit(function (event) {
    event.preventDefault();
    // Add input validation here
  });

  $("#loginBtn").click(function () {
    $.ajax({
      url: "data.txt",
      success: function (data) {
        // Ensure data is text before appending
        if (typeof data === "string") {
          $("#data").append("<h1>" + data + "</h1>");
        } else {
          // Handle the case where data is not text
          console.error("Error: Data is not text format");
        }
      },
      error: function () {
        console.error("Error loading data.txt");
      },
    });
  });
});
