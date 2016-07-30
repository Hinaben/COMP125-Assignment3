/* Main JavaScript file */

/*
        FileName      ::  app.js
        @author       ::  Hina Patel 
        @date         ::  June 10, 2016
        StuentID      ::  821021425        
        website       ::  http://comp125-a2.azurewebsites.net
        @description  ::  Java Script file for COMP 125- Assignment 2 web application. 
             
*/

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";    
 
  //define an array of HTML elements
  
  var documentElements = [];
  
    
  
  documentElements[0]= document.getElementById("statement");  //<p> </p>
  documentElements[1]= document.getElementById("paragraphTwo");  
  documentElements[2]= document.getElementById("paragraphThree");    
  documentElements[3]= document.getElementById("work_address");
  documentElements[4]= document.getElementById("pro_1_title");  
  documentElements[5]= document.getElementById("pro_2_title");
  documentElements[6]= document.getElementById("pro_3_title");
  documentElements[7]= document.getElementById("bio_heading");
  documentElements[8]= document.getElementById("name");
  
  //define documentElementContent array
  var documentElementContent = [];
    
  documentElementContent[0] = "<strong>To become a skilled and experienced software solution professional with extensive \
                    knowledge of all the areas of SDLC including requirements gathering, design, development \
                    and testing.<strong>";
  documentElementContent[1] = "This is my project page and project details will be added later."
  documentElementContent[2] = "My name is Hina Patel and my student number is 821021425."
  documentElementContent[3] = "<strong> CIBC </strong> - 750 - Lawerence Avenue W., Toronto"
  documentElementContent[4] = "Administrative Assistant"
  documentElementContent[5] = "Workforce Analyst"
  documentElementContent[6] = "Accounting Officer"
  documentElementContent[7] = "Mission Statement"
  documentElementContent[8] = "Hina Patel"
  
  // check to see if elment exists
  for (var index = 0; index < documentElements.length; index++){
    if(documentElements[index]){
      documentElements[index].innerHTML = documentElementContent[index];
	  
    }
  }

  /* ----------------Assignment 2------------------------------- */

  // get reference to form input fields
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var inputEmail = document.getElementById("inputEmail");
  var contactNumber = document.getElementById("contactNumber");
  var message = document.getElementById("message");
  
  firstName.value = "Amit";
  lastName.value = "Patel";
  inputEmail.value = "amit.jackman@gmail.com";
  contactNumber.value = "416416416";
  message.value = " Hey there";
  //form reference 
  var contactForm = document.getElementById("contactForm");
  
  // Form submit event listener
  contactForm.addEventListener("submit", function(event){
      event.preventDefault(); 
      showFromInput(); //our method 
      contactForm.reset();
  });

  /* Display form details on console */
  function showFromInput(){
    console.log("------------------------------------------");
    console.log(" First Name:  " + firstName.value);
    console.log(" Last Name:   " + lastName.value);
    console.log(" Email:       " + inputEmail.value);
    console.log(" Contact No:  " + contactNumber.value);
    console.log(" Message:     " + message.value);
    console.log("------------------------------------------");
  }
  
})();