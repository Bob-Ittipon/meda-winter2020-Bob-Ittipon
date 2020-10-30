// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //define product parameter as a let type variable to only use in the block scope that contained the result of the formula option multiply by option2 
    let product = option * option2;

    //Write the product value to the console.
    console.log(product);

    //Writet the value in the option variable with the describtion string to the console
    console.log("The value of the option parameter is " + option);

    // check if statement that the value in option variable is 0 or not if it is true means option value is 0 it will do the action under the bracket
    // === means values which we are comparing must have the same type (Strict equality)
    if (option === 0) {
        
        // then it will return string Everything is good!
        return "Everything is good!";
    //when the if condition above is not hit then it move to this condition. in this condition its statement check value in option variable is it 1 or not if it  is true means option value is 1 it will do the action under its bracket
    } else if (option === 1) {
        
        //this will re turn the string "An error happened!"
        return "An error happened!";
    //when the if condition above is not hit then it move to this condition. in this condition its statement check value in option variable is it 1 or not if it is true means option value is -1 it will do the action under its bracket
    } else if (option === -1) {
        
        //this will re turn the string "Everything is bad!"
        return "Everything is bad!";
    }

}

//define result variable as a let type to contain the return result fromm myFunction where you call it and put the arguments that myFunction required. option contained 1 and option2 contained 11
let result = myFunction(1, 11);
//define result2 variable as a let to contain the return result from myFunction where you call it and put the arguments that myFunction required. option contained 2 and option2 contained 200
let result2 = myFunction(2, 200);

//check the statment with the condition that what result and result2 contained if both of them contained the same string "An error happened" it will get into the bracket
if ( result === "An error happened" && result2 === "An error happened") {

    //Write Catastrophic failure. to the console
    console.log("Catastrophic failure.");

}