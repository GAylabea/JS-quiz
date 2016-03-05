// Need to capture input from user
var treeHeight = document.getElementById("treeheight");
var treeCharacter = document.getElementById("treecharacter");
var button = document.getElementById("button");
// var enterKey = document.getElementById(key 13); 
// var cv = treeCharacter.value
// var hv = treeHeight.value

// This function creates these variables - changing the input into number values
function getValue() {
  var cv = treeCharacter.value;
  var hv = treeHeight.value;
  checkInput(cv, hv);
}

// This function is to make sure the user inputs character and number; if yes, calls buildObj
function checkInput(cv, hv) {
  if (!cv || !hv) {
    alert("please fill out all fields!"); 
  } else {
    buildObj(cv, hv);
  }
}

// This function collects the tree height and characters 
// to use in future functions, turns the tree height and 
// characters used into objects and 
// calls the growTree function?
function buildObj (cv, hv) {
  var treeObj = {
    C: cv,
    H: hv
  }
  growTree(treeObj)
} 

// function determineTreeHeight (clickEvent){
//   var treeHeight = getElementById('treeheight').value
// }

// Here is the actual function that tells the computer to build the tree: the formula expressed 
// tells the computer that we subtract 1 space from the line height value selected by the user (H) 
// the computer is told to do this with a for loop until the line height value is met - then console log that
function growTree (obj) {
  var h = obj.H; 
  for (var i = 0; i < h; i++) {
    var spaces = (h - 1) -i; 
    var numChar = 2*i+1;
    console.log(" ".repeat(spaces) + obj.C.repeat(numChar));
    }
}

button.addEventListener("click", getValue); 

// need to do an eventLister for an enter key - this is unfinished!
// this is the right track!!
// example trying to adapt: http://blogs.microsoft.co.il/gilf/2012/09/11/back-to-basics-using-keyboard-events-in-javascript/
// window.addEventLister('keyup', function (e) {
//   if (e.keycode === 13) {
//     container.textContent = charsjoin()
//   }
// }); 

