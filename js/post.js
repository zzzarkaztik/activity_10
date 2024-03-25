$(document).ready(function () {
  loadPosts(); // Load posts on page load

  $("#newPostForm").submit(function (event) {
    event.preventDefault();

    let newPost = {
      title: $("#title").val(),
      body: $("#body").val(),
      userId: 11,
    };

    $.ajax({
      type: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: newPost,
      success: function (response) {
        console.log("Post successful!", response);
        loadPosts();
        $("#postList").append(
          `<li>${newPost.title} by ID#${newPost.userId}</li>`
        );
        // Refresh list (consider updating just the new item)
      },
      error: function () {
        $("#postList li:last-child").remove();
        alert("An error occurred while submitting the post.");
      },
    });
  });
});

function loadPosts() {
  $("#postList").empty();
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (posts) {
      posts.forEach((post) => {
        $("#postList").append(`<li>${post.title} by ID#${post.userId}</li>`);
      });
    },
    error: function () {
      alert("An error occurred while loading the posts.");
    },
  });
}
