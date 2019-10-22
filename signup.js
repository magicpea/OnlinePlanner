 // When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    document.getElementById("letter").classList.remove("invalid");
        document.getElementById("letter").classList.add("valid");
      } else {
         document.getElementById("letter").classList.remove("valid");
            document.getElementById("letter").classList.add("invalid");
      }


  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    document.getElementById("capital").classList.remove("invalid");
    document.getElementById("capital").classList.add("valid");
  } else {
     document.getElementById("capital").classList.remove("valid");
        document.getElementById("capital").classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
       document.getElementById("number").classList.remove("invalid");
           document.getElementById("number").classList.add("valid");
         } else {
            document.getElementById("number").classList.remove("valid");
               document.getElementById("number").classList.add("invalid");
         }

  // Validate length
  if(myInput.value.length >= 8) {
    document.getElementById("length").classList.remove("invalid");
        document.getElementById("length").classList.add("valid");
      } else {
         document.getElementById("length").classList.remove("valid");
            document.getElementById("length").classList.add("invalid");
      }
  }
}
