var payload = msg.payload;
//console.log("Raw message..." + msg.payload);

var tweeter = msg.tweet.user.screen_name;
console.log("Tweeter...." + tweeter);

var color = payload.split(" ").slice(-1)[0];

var logMessage = "*** " + tweeter + "..." + payload;
console.log(logMessage);

//console.log ("Color chosen..." + color);

var piGlow = context.global.piglow;

//callback fires when board is initialized
piGlow(function(error, pi) {
		pi[color];
});

return msg;
