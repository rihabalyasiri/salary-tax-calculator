
// Tipp checking at first if one person or two persons and then the years in this way i will write less code

var radio_2 = document.getElementById("two");
var incomeTwo = document.getElementById("income-2");


function showing() {
    incomeTwo.style.opacity = "1";
}

radio_2.addEventListener("click", function() {
    showing();
});


function work() {

    // when i declare the variables outside the function i can not get the value of the input

    // declaring variables with the values of the input fields year, income one person, income two person
    var year = document.getElementById("year").value;

    // changing string coming from input to number to use it 
    year = Number(year);
    var income_1 = document.getElementById("income-1").value;
    income_1 = Number(income_1);
    var income_2 = document.getElementById("income-2").value;
    income_2 = Number(income_2);
    var radio_1 = document.getElementById("one");
    var radio_2 = document.getElementById("two");
    var result = document.getElementById("result");
    var tax;
   
   
    // checking if it take value for one person or two persons
    if(!radio_2.checked) {
        var zvE = income_1;
        console.log("just income fom one person " +zvE)
    }else {
        var zvE = (income_1 + income_2)/2;
        console.log(" income fom two person " +zvE)
    }

     // checking if year = 2020
    if(year === 2020) {
       console.log("we are in 2020")

      

           if(zvE <= 9408) {
               Est =0;
               result.innerHTML = Est + ' Euro';

           } else if(zvE >= 9409 && zvE<= 14532) {
               y = (zvE - 9408)/10000;
               Est = (972.87*y +1400)* y;
               Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           } else if(zvE>= 14533 && zvE<= 57051) {
               z =(zvE - 14532)/10000;
               Est = (212.02 *z  + 2397) * z + 972.79;
               Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           } else if(zvE>= 57052 && zvE<= 270500 ) {
            Est = 0.42 * zvE - 8963.74;
            Est = tax.toFixed(2);
                result.innerHTML = Est + ' Euro';
           } else {
            Est = 0.45 * zvE - 17078.74;
            Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           }


       
       
   } 
   
   // second situation when year = 2019
   else if(year === 2019) {
    console.log("we are in 2019");

        if(zvE <= 9168) {
            Est =0;
            result.innerHTML = Est + ' Euro';

        } else if(zvE >= 9169 && zvE<= 14254) {
            y = (zvE - 9168)/10000;
            Est = (980.14*Est +1400)* Est;
            Est = tax.toFixed(2);
            result.innerHTML = tax + ' Euro';
        } else if(zvE>= 14255 && zvE<= 55960) {
            tax =(zvE - 14532)/10000;
            tax = (212.02 *tax  + 2397) * tax + 972.79;
            tax = tax.toFixed(2);
            result.innerHTML = tax + ' Euro';
        } else if(zvE>= 57052 && zvE<= 270500 ) {
             tax = 0.42 * zvE - 8963.74;
             tax = tax.toFixed(2);
             result.innerHTML = tax + ' Euro';
        } else {
            tax = 0.45 * zvE - 17078.74;
            tax = tax.toFixed(2);
            result.innerHTML = tax + ' Euro';
        }


      
   }
   // third Situation when year = 2018 
   else {
    console.log("we are in 2018");

    if(zvE <= 9168) {
        tax =0;
        result.innerHTML = tax + ' Euro';

    } else if(zvE >= 9169 && zvE<= 14254) {
        tax = (zvE - 9168)/10000;
        tax = (980.14*tax +1400)* tax;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    } else if(zvE>= 14255 && zvE<= 55960) {
        tax =(zvE - 14532)/10000;
        tax = (212.02 *tax  + 2397) * tax + 972.79;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    } else if(zvE>= 57052 && zvE<= 270500 ) {
         tax = 0.42 * zvE - 8963.74;
         tax = tax.toFixed(2);
         result.innerHTML = tax + ' Euro';
    } else {
        tax = 0.45 * zvE - 17078.74;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    }
       
   }
    
}
