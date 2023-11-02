
const userInput=prompt("Please enter the Froyo flavors seperated by a comma","vanilla,vanilla,vanilla,strawberry,coffee,coffee");   //prompt the user for input
if(userInput.length>0){                                 //make sure that the user entered something
    const flavorArray=userInput.split(",");             //convert the user input into an array

    function flavorFunction(anArray){
        let flavorObj={};                               //an object to track the repetition of flavor
        for( i in anArray){
            if(anArray[i] in flavorObj){
                flavorObj[anArray[i]]+=1;               //increase the count of the flavor if it already exist
            }
            else{
                flavorObj[anArray[i]]=1;                //add the flavor in the object if not previously added
            }
        }
        return flavorObj;                               //return an object
    }

    console.table(flavorFunction(flavorArray));         //print the content of the object in a table format
}
else{
    console.log("You did not enter any flavor!");       //print this if the user input in not valid
}