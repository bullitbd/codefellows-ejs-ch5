//LifeEx.js Life Expectancy by Century

var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//make array of {century, lifespan}:
var people = [],
    obj,
    century,
    lifespan;
for (var i=0; i<ancestry.length; i++) {
  lifespan = ancestry[i].died - ancestry[i].born;
  century = Math.ceil(ancestry[i].died / 100);
  obj = {"century": century, "lifespan": lifespan};
  people.push(obj);
  //console.log(century + '  ' + lifespan)
};

function averageSpan(century) {
  var span = [];
  people.filter(function(el) {
    if (el.century === century) {
      span.push(el.lifespan);
      
    }
  });
  return (average(span));
  //console.log(span);
}

console.log("Century LifeEx\n")
for (var i=16; i<22; i++) {
  console.log(i + ' :    ' + Math.round(averageSpan(i)*10) / 10);
};





