console.log("Hello boybands.js")

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = bands[loopTracker]
// `<p id="band--${loopTracker}">
// 							"${bands[loopTracker]}"
// 							</p>`;

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[loopTracker]
// `<p id="vegetable--${loopTracker}">
// 							"${vegetables[loopTracker]}"
// 							</p>`;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");


// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");


// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  bandElement.innerHTML += "<p>" + bands[loopTracker] + "</p>";
  veggieElement.innerHTML += "<p>" + vegetables[loopTracker] + "</p>";
//   currentBand = bands[loopTracker];
//   currentVeggie = vegetables[loopTracker];
//   console.log(loopTracker)
//   console.log(bands[loopTracker])
//   console.log(currentBand)
//   console.log(bandElement)
//   var bandPara = document.createElement("p" + loopTracker);
//   var veggiePara = document.createElement("p" + loopTracker);
//   document.getElementById("boy-bands").appendChild(bandPara)
//   document.getElementById("vegetables").appendChild(veggiePara)
  // Add the band names into the correct <div>
  //currentBand = bandElement.innerHTML;
  //document.getElementById("boy-bands").appendChild(bandElement);
  // Add the veggie names into the correct <div>
  // currentVeggie = veggieElement.innerHTML;
  //document.getElementById("vegetables").appendChild(veggieElement);

}