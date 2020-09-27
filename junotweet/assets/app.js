const TweeterApp = {};
const userName = `@` + prompt("Hello. Please enter your username").toLowerCase().trim().replace(/\s/g, '');

TweeterApp.init = function(){
  console.log(`Hello ${userName}`);
};

$(document).ready(function() {
  TweeterApp.init();
});


