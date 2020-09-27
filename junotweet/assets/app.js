const TweeterApp = {};
const userName = `@` + prompt("Hello. Please enter your username").toLowerCase().trim().replace(/\s/g, '');

TweeterApp.init = function(){
  console.log(`Hello ${userName}`);
};

$(document).ready(function() {
  TweeterApp.init();
});


$("#new-tweet").keyup(function() {
  $(".characterCount").text(this.value.replace(/{.*}/g, "").length);
});

$(() => {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const newTweet = $('#new-tweet').val();
    $('#recentTweets').prepend(`<li>${newTweet}</li>`);
    console.log(newTweet)
  });
});