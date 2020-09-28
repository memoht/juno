const TweeterApp = {};
let userName = '@junobot';
let timestamp = Date($.now());
// const userName = `@` + prompt("Hello. Please enter your username").toLowerCase().trim().replace(/\s/g, '');

TweeterApp.init = function(){
  console.log(`Hello ${userName}`);
};

$(document).ready(function() {
  TweeterApp.init();
  $("#new-user").prop('required',true);
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
    $('#h1-message').text(`What\u0027s Happening ${userName}?`)
    $('#tweet-form').removeClass("d-none")
  });
});

$(() => {
  // var $newdiv = $( "<div class='media pt-3'></div>" );
  $('#tweet-form').on('submit', function(e) {
    e.preventDefault();
    const newTweet = $('#new-tweet').val();
  $("#new-user").prop('required',true);
    if (newTweet !== '') {
      $('#new-tweet').val('');
      $('#recentTweets')
        .prepend(
          `<div class='media pt-3 animate__animated animate__zoomInUp'>
            <img src="https://avatars.dicebear.com/api/initials/${userName}.svg?r=50&w=64&h=64&backgroundColors[]=brown" class="img-fluid mr-2" alt="${userName}"></img>
            <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
              <strong class="d-block ">${userName}</strong>
              ${newTweet}
            </p>
            <p class="small mr-2 timestamp">${Date($.now())}</p>
            <i class="fas fa-retweet" data-toggle="tooltip" data-placement="top" title="retweet"><span class="mr-2"></span></i>
            <i class="fas fa-heart" data-toggle="tooltip" data-placement="top" title="like"><span class="mr-2">0</span></i>
            <i class="fas fa-trash"></i>
            </div>`
        );
      }
    console.log(newTweet)
    $('[data-toggle="tooltip"]').tooltip()
  });
});

$(function() {
  $('#recentTweets').on('click', '.media .fa-heart', function() {
    const $likes = $(this).find('.ml-1');
    let likes = $likes.val()
    console.log(likes)
    likes++;
    if (likes >= 1) {
      $(this).css('color', 'rgb(220, 53, 69)')
    }
    $likes.val(likes);
    $likes.text($likes.val());
  });
});

$(() => {
  $('#recentTweets').on('click', '.media .fa-retweet', function() {
    const retweet = $(this).find('.fa-retweet');
    $(this).toggleClass('text-success');
  });
});


$(() => {
  $('#recentTweets').on('click', '.media .fa-trash', function() {
    const tweet = $(this).closest('.media');
    $(tweet).fadeOut( "slow", function() {
      // Animation complete.
    });
  });
});