'use strict';
var five = require("johnny-five");
var board = new five.Board();
var request = require('request');

var controller = process.argv[2] || "GP2Y0A02YK0F";
board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: controller,
    pin: "A0"
  });
    var unlocked=false;

  proximity.on("data", function() {
    //console.log("inches: ", this.inches);
    var cmmm=this.cm;
    //console.log(cmmm)
    if(cmmm!="Infinity"){
    	if(cmmm>200){
      if(!unlocked){
      console.log("");

    	console.log("Proximity : ", cmmm);
      console.log("Lock!!");
      console.log("");
unlocked=true;
}
// request('http://www.google.com', function (error, response, body) {
//   //console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body); // Print the HTML for the Google homepage.
// });
}
else{
  if(unlocked && cmmm>6 && cmmm<200){
  console.log("Unlock : ",cmmm);
  unlocked=false;
}
}
}
   // }
  });
});
