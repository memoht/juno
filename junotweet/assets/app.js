const TweeterApp = {};
let userName = '@junobot';
// const userName = `@` + prompt("Hello. Please enter your username").toLowerCase().trim().replace(/\s/g, '');

TweeterApp.init = function(){
  console.log(`Hello ${userName}`);
  $('input[type="submit"]').attr('disabled', true);
};

$(document).ready(function() {
  TweeterApp.init();
});

$("#new-tweet").keyup(function() {
  $(".characterCount").text(this.value.replace(/{.*}/g, "").length);
});


$(() => {
  $('#user-form').on('submit', function(e) {
    e.preventDefault();
    userName = `@` + $('#new-user').val().toLowerCase().trim().replace(/\s/g, '');
    $('#user-form').hide()
    console.log(`Welcome ${userName}`)
    $('#tweet-form').removeClass("d-none")
  });
});


$(() => {
  // var $newdiv = $( "<div class='media pt-3'></div>" );
  $('#tweet-form').on('submit', function(e) {
    e.preventDefault();
    const newTweet = $('#new-tweet').val();

    if (newTweet !== '') {
      $('#new-tweet').val('');
      $('#recentTweets')
        .append(
          `<div class='media pt-3'>
            <img src="https://avatars.dicebear.com/api/initials/memoht.svg?r=50&w=64&h=64&backgroundColors[]=brown" class="img-fluid mr-2" alt="${userName}"></img>
            <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
              <strong class="d-block ">${userName}</strong>
              ${newTweet}
            </p>
          </div>`
        );
      }
    console.log(newTweet)
  });
});