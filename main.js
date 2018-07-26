const pigLatin = require("pig-latin-library")

function onClickPig(){
  let translator = document.getElementById("translator-input").value;
  translator=pigLatin(translator)
  document.getElementById("output").innerHTML=translator;
}

document.getElementById("pigButton").addEventListener("click", onClickPig)
