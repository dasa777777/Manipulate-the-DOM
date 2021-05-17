
 var names = ["Mark", "John", "Sarah","Peter","Dagmar"];
  names.forEach(myFunction);
  function myFunction(item) {
    document.getElementById("emo").innerHTML +=  item + "<br>" ; 
  } 