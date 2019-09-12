/*
  Script created by Gunnar Correa, using in SatellaSoft softwares.
  Author: Gunnar Correa - https://www.gunnarcorrea.com
*/
const elements = {
  table : {
    remove : [
      'border',
      'cellpadding',
      'cellspacing',
      'style'
    ],
    add : {
      "class" : "uk-table uk-table-hover uk-table-striped"
    }
  }
}

function ResetStyle(listeningElement){
  const app = document.getElementById(listeningElement);

  for (var key in elements) {
    var el = app.getElementsByTagName(key);
    if(el.length === 0 || typeof el == undefined)
      return;
    //For each element
    for(var i = 0; i < el.length; i++){
      //Remove first
      var obj = elements[key];
      for(var r = 0; r < obj.remove.length; r++){
        if(el[i].hasAttribute(obj.remove[r]))//Check if atttribute exists
          el[i].removeAttribute(obj.remove[r])//Remove Attribute
      }
      //Add elements
      Object.keys(obj.add).forEach(function(key, index) {
        el[i].setAttribute(key, this[key]);//Add Attribute
      }, obj.add);
    }
  }
}
