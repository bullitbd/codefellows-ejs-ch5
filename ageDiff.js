//ageDiff.js

var ancestry = JSON.parse(require('./ancestry.js'));

//get an array of mothers' names:
var allMoms = [];
ancestry.forEach(function(obj) {
if (obj.mother !== null) allMoms.push(obj.mother);
})

//find the (unique) moms as children:
var moms = 
allMoms.filter(function(el, index, arr) { //filter moms array...
  if (arr.indexOf(el) === index) {
    return ancestry.some(function(obj) {  //
      return (el.indexOf(obj.name) > -1); //...where el in ancestry[obj].name;
    })
  }
});

//build the mom-children pairs;
var pairs = [],
    i;
ancestry.forEach(function(obj) { //iterate to find the moms with birth info;
  var element;
  if (moms.indexOf(obj.mother) > -1) { //if the mother is valid
    element = {"name": obj.name, "born": obj.born, "mother": obj.mother} //create the object
   
    //lookup mom's birth age:
    ancestry.some(function(elem, index) {
      if (elem.name === obj.mother) {
        element["birth"] = elem.born; //add mom's birthdate
        return true;  //stop looking
      }
    })
    pairs.push(element);
  }
}) 

//find average diff
var total = 0;
for (var i=0; i<pairs.length; i++) {
  total += pairs[i].born - pairs[i].birth;
};
var avg = Math.round(total/i*10)/10;

//console.log(moms);
console.log("Data:");
console.log(pairs);
console.log("\nThere are " + pairs.length + " children in the calculation;");
console.log("The average age difference is " + avg + " years.");



