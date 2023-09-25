$(document).ready(function() {
    loadGuests();
});

function loadGuests() {
    $.ajax("http://jsonplaceholder.typicode.com/users/1", {
        "type": "get"
    }).done(function(user) {
        displayUser(user);
        loadUserPosts(user.id);
    });
}

function loadUserPosts(userId) {
    $.ajax(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        "type": "get"
    }).done(function(posts) {
        displayUserPosts(posts);
    });
}

function displayUser(user) {
    var userInfo = `
        <h1>User Information</h1>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
    `;
    $("#guestListDiv").html(userInfo);
}

function displayUserPosts(posts) {
    var postList = "<h2>User Posts</h2><ul>";
    $.each(posts, function(index, post) {
        postList += `<li>${post.title}</li>`;
    });
    postList += "</ul>";
    $("#guestListDiv").append(postList);
}
