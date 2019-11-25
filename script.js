var vacationType = prompt("What kind of trip would you like to go on - musical, tropical, or adventurous?");
var suggestion = ''

if (vacationType === "musical"){
  vacationType = vacationType
  suggestion = "to New Orleans"
} else if (vacationType === "tropical"){
   vacationType = vacationType
   suggestion = "to a beach vacation in Mexico"
} else if (vacationType === "adventurous"){
    vacationType = vacationType
    suggestion = "to go Whitewater Rafting at the Grand Canyon"
} else {
  console.log("please choose a vacation")
}


var groupSize = prompt("How many are in your group?")
var travelType = ''
if (groupSize >= 1 && groupSize <= 2){
  groupSize = groupSize
  travelType = "first class flight " + suggestion 
} else if (groupSize >= 3 && groupSize <= 5){
  travelType = "helicopter " + suggestion
} else if (groupSize >= 6){
  travelType = "charter flight " + suggestion
}

var result = "Since you’re a group of " +  groupSize +  " going on a " + vacationType + " vacation, you should take a " + travelType + ".";

console.log(result)
