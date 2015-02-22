var piGlow = context.global.piglow;


//callback fires when board is initialized
piGlow(function(error, pi) {
	console.log("Turning it off...");
		pi.all = 0;
});

return msg;