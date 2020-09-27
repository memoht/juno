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
  // var $newdiv = $( "<div class='media pt-3'></div>" );
  $('form').on('submit', function(e) {
    e.preventDefault();
    const newTweet = $('#new-tweet').val();
    $('#recentTweets')
      .prepend(
        `<div class='media pt-3'>
            <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
            <strong class="d-block ">${userName}</strong>
          ${newTweet}
          </p>
        </div>`
        );
    console.log(newTweet)
  });
});