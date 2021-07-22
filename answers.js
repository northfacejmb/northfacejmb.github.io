var readyToCheck = false;

var onlycheckone=0;


function correct(){
    
    
        readyToCheck = true;
        checkAnswer();
        console.log(readyToCheck + "is the value of ready to check")

    }

    

    
    



function checkAnswer(){
    
        // capture the user entered password
        //var radio1= document.getElementById("radio1");
        
/*
        Array.from(document.querySelectorAll('input[type=radio]')).forEach(item => {
            item.addEventListener('click', e => {
              let correct = document.querySelectorAll('input[type=radio][value=correct]:checked').length
              console.log(correct)
            })
          })
        */
if (readyToCheck==true){
    var correct = 0,
      questions = [];
   var rows = 0;
   var userRowInded = 0;
    var inputs = document.getElementsByTagName("input");
  
    //Step 1: Loop through all the inputs in the form and extract the radio button questions names
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "radio" && questions.indexOf(inputs[i].name) < 0) {
        questions.push(inputs[i].name);
      }
    }
  
    //Step 2: loop through the questions extracted from step 1
    for (i = 0; i < questions.length; i++) {
      
      //Loop through all the options for this question
      var options = document.getElementsByName(questions[i]);
      for (j = 0; j < options.length; j++) {
        //reset the color of each option
       // options[j].parentElement.style.color = "";
            //rows = document.getElementById("mytable").getElementsByTagName('tr');
            //rows[j+1].style ="";
        
        if (options[j].checked) {
          if (options[j].value == "correct") { //correct option
            correct++;
          // options[j].parentElement.style.backgroundColor = "green";
            rows = document.getElementById("mytable").getElementsByTagName('tr');
            rows[i].className ="correct";
           // document.getElementById("textbox").value = "<p>You scored</p> "+ correct + "/" + questions.length + " correct!";

          } else { //wrong option
          //  options[j].parentElement.style.color = "red";
           rows = document.getElementById("mytable").getElementsByTagName('tr');
            rows[i].className ="incorrect";
            //document.getElementById("textbox").value = "You scored "+ correct + "/" + questions.length + " correct!";  
          }
        }
        
      }
    }
  
    //output the result
    
   if (onlycheckone==0){
     onlycheckone=1;
    alert("You scorred "+ correct + "/" + questions.length + " correct!");
    document.getElementById("textbox").value = "You scored  "+ correct + "/" + questions.length + " correct!";
   }
  }
  else{
      console.log("checkanswer() says that the value of readytocheck is " + readyToCheck + "so it won't do anything but log this. sorry..");
  }
}
  
  function ResetForms() {
    var labels = document.getElementsByTagName("label");
    //reset the label colors
    for (i = 0; i < labels.length; i++) {
      labels[i].style.color = "";
    }
  

/*this one oworks
var input = document.getElementsByTagName("input")
var correct =0
for (var i=0;i<input.length;i++) {
if (input[i].value=="correct") {
    if (input[i].checked==true){
        correct++
    }
}
console.log(correct);
if(i==input.length)correct = 0;
}

if(correct == 1){console.log("player got " + correct);}
*/
      //  document.getElementById("incorrect-password").innerHTML = "You have exceeded the maximum number of attempts";   

/*      var theInputs = document.getElementsByTagName('input');  
for (var i = 0; i < theInputs.length; i++) {
    var node = theInputs [i];

    if (node.get == 'text') {
        // using split
        //node.value = this.value.split(',').join('&#44;');
        // using regex
        node.value= node.value.replace(/,/g,'&#44;');
    }
} 
*/



}
    