
// 5% tip

function myFunction1 (num) {
    const bill = document.getElementById("bill").value; 
    const people = document.getElementById("numberOfPeople").value;

    const tipTotal = bill* 0.05;

    function totalT() {
        if (people === '') {
            document.getElementById("tipAmount").innerHTML = '$0.00';
        } else {
            document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2); 
        }
    }
   
    totalT();
  
    const tipPerson = tipTotal/ people;
   
    // This function avoids infinity for tip/person
    function totalP()  {  
   
        if (people === ''){
         document.getElementById("totalPerson").innerHTML = '$0.00'; 
       }
        else {
         document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
      
    }
    totalP(); 
}

// 10% tip

function myFunction2 (num) {
    const bill = document.getElementById("bill").value; 
    const people = document.getElementById("numberOfPeople").value;

    const tipTotal = bill* 0.10;
   
    function totalT() {
        if (people === '') {
            document.getElementById("tipAmount").innerHTML = '$0.00';
        } else {
            document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2); 
        }
    }
   
    totalT();
  
    const tipPerson = tipTotal/ people;
   
    // This function avoids infinity for tip/person
    function totalP()  {  
   
        if (people === ''){
         document.getElementById("totalPerson").innerHTML = '$0.00'; 
       }
        else {
         document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
      
    }
    totalP(); 
}

// 15% tip
function myFunction3 (num) {
    const bill = document.getElementById("bill").value; 
    const people = document.getElementById("numberOfPeople").value;

    const tipTotal = bill* 0.15;
   
    function totalT() {
        if (people === '') {
            document.getElementById("tipAmount").innerHTML = '$0.00';
        } else {
            document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2); 
        }
    }
   
    totalT();
  
    const tipPerson = tipTotal/ people;
   
    function totalP()  {  
   
        if (people === ''){
         document.getElementById("totalPerson").innerHTML = '$0.00'; 
       }
        else {
         document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
      
    }
    totalP(); 
}

// 25% tip
function myFunction4 (num) {
    const bill = document.getElementById("bill").value; 
    const people = document.getElementById("numberOfPeople").value;

    const tipTotal = bill* 0.25;
   
    function totalT() {
        if (people === '') {
            document.getElementById("tipAmount").innerHTML = '$0.00';
        } else {
            document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2); 
        }
    }
   
    totalT(); 
  
    const tipPerson = tipTotal/ people;
   
    function totalP()  {  
   
        if (people === ''){
         document.getElementById("totalPerson").innerHTML = '$0.00'; 
       }
        else {
         document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
      
    }
    totalP(); 
}

// 50% tip
function myFunction5 (num) {
    const bill = document.getElementById("bill").value; 
    const people = document.getElementById("numberOfPeople").value;

    const tipTotal = bill* 0.50;
   
    function totalT() {
        if (people === '') {
            document.getElementById("tipAmount").innerHTML = '$0.00';
        } else {
            document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2); 
        }
    }
   
    totalT();
  
    const tipPerson = tipTotal/ people;
   
    function totalP()  {  
   
        if (people === ''){
         document.getElementById("totalPerson").innerHTML = '$0.00'; 
       }
        else {
         document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
      
    }
    totalP(); 
}

// calls and switches buttons

function getVal(button) {
    var x = button.id;
  switch (x) {
        case '1':
            myFunction1(x);
            break;
        case '2':
            myFunction2(x);
            break;
        case '3':
            myFunction3(x);
            break;
        case '4':
            myFunction4(x);
            break;
        case '5':
            myFunction5(x);
            break;
        default:
            return false;
    }
}


// display custom Input

function displayInput() {
    let input = document.getElementById("displayInput");
    
    if (input.style.display === "none" ) {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
}

// limits character length of custom input
function charLen() {
    let inputLen = document.getElementById("custInput")
    inputLen.value = inputLen.value.slice(0, 2) ; 
}

//  custom Value
function customVal(){
    const bill =  document.getElementById("bill").value;
    const people =  document.getElementById("numberOfPeople").value;
   const percent = document.getElementById("custInput").value;
   let CalcP = percent/100;
   
  const tipTotal = bill * CalcP;
   
   document.getElementById("tipAmount").innerHTML = '$' + tipTotal.toFixed(2);
  
  const tipPerson = tipTotal/ people;
 
  function totalP()  {
    
      if (people === ''){
       document.getElementById("totalPerson").innerHTML = '$0.00'; 
     }
        else {
            document.getElementById("totalPerson").innerHTML = '$' + tipPerson.toFixed(2) ;
        }
    
     }
    totalP(); 
  
 }

//remove disabled state 
function toggleReset () {
    if (document.getElementById("bill").value === '' && document.getElementById("numberOfPeople").value === '') {
        document.getElementById("resetBtn").disabled = true; 
    }
    
    else{
        document.getElementById("resetBtn").disabled = false; 
    }
}
toggleReset () ;

// Reset Button
function clearResult(){
    document.getElementById("tipForm").reset();
    document.getElementById("tipAmount").innerHTML= '$0.00'
    document.getElementById("totalPerson").innerHTML = '$0.00'
    document.getElementById("resetBtn").disabled = true; 

}
