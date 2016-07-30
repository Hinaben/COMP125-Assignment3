/* Main JavaScript file */

/*
        FileName      ::  app.js
        @author       ::  Hina Patel 
        @date         ::  July 30, 2016
        StuentID      ::  821021425        
        website       ::  http://comp125-a2.azurewebsites.net
        @description  ::  Java Script file for COMP 125- Assignment 3 web application. 
             
*/

// IIFE - Immediately Invoked Function Expression
(function () {
  "use strict";
  // define the paragraph object for handling AJAX call (Assignment 3)
  var xhrParagraphContents;
  //define an array of HTML elements

  var documentElements = [];

  documentElements[0] = document.getElementById("statement");
  documentElements[1] = document.getElementById("paragraphTwo");
  documentElements[2] = document.getElementById("paragraphThree");
  documentElements[3] = document.getElementById("work_address");
  documentElements[4] = document.getElementById("pro_1_title");
  documentElements[5] = document.getElementById("pro_2_title");
  documentElements[6] = document.getElementById("pro_3_title");
  documentElements[7] = document.getElementById("bio_heading");
  documentElements[8] = document.getElementById("name");

  /* ----------------Assignment 2------------------------------- */


  // get reference to form input fields
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var inputEmail = document.getElementById("inputEmail");
  var contactNumber = document.getElementById("contactNumber");
  var message = document.getElementById("message");

  if (firstName) {
    firstName.value = "Amit";
    lastName.value = "Patel";
    inputEmail.value = "amit.jackman@gmail.com";
    contactNumber.value = "416416416";
    message.value = " Hey there";

    //form reference 
    var contactForm = document.getElementById("contactForm");

    // Form submit event listener
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      showFromInput(); //our method 
      contactForm.reset();
    });
  }
  // Display form details on console 
  function showFromInput() {
    console.log("------------------------------------------");
    console.log(" First Name:  " + firstName.value);
    console.log(" Last Name:   " + lastName.value);
    console.log(" Email:       " + inputEmail.value);
    console.log(" Contact No:  " + contactNumber.value);
    console.log(" Message:     " + message.value);
    console.log("------------------------------------------");
  }


  /* ----------------Assignment 3------------------------------- 
      Get Paragraph details from paragraph.json using AJAX
  *--------------------------------------------------------------*/
  /*   
  * This function is to process the AJAX request reponse to process paragraph contents.
  * 
  * @function readParagraphData
  * @returns {void}
  */
  function readParagraphData() {
    // data loaded                everything is ok
    if ((xhrParagraphContents.readyState === 4) && (xhrParagraphContents.status === 200)) {

      var paragraphContents = JSON.parse(xhrParagraphContents.responseText);
      var contents = paragraphContents.paragraphs;

      contents.forEach(function (pContents) {
        var index = pContents["id"];
        var parContent = pContents["content"];
        console.log(index + " ==> " + parContent);
        if (documentElements[index]) {
          documentElements[index].innerHTML = parContent;
        }
      }, this);

    }
  }
  /*   
   * This function is to handle the windows load event on which the
   * paragraph details will be requested from json file using AJAX call and then process
   * the resoponse to use paragraph details.
   * 
   * @function init
   * @returns {void}
   */
  function init() {

    xhrParagraphContents = new XMLHttpRequest(); // step 1 - create xhr object
    xhrParagraphContents.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request
    xhrParagraphContents.send(null); // step 3 - send request
    xhrParagraphContents.addEventListener("readystatechange", readParagraphData); // step 4
    
  }

  // add windows load event handler
  window.addEventListener("load", init);

})();