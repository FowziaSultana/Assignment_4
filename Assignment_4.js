// The mindGame function takes a positive number as input and after a simple simplification it returns the result.
function mindGame(number)
{
    if(typeof number != "number" || number<0 )
    {
        return "Please give a positive number as input"
    }
    let resuilt1=number*3;
    let result2=resuilt1+10;
    let result3=result2/2;
    let result4=result3-5;
    return result4;

}


// The evenOdd Function takes a string as input. Then it checks the length of it, if the length is even it returns even and it the lrngth is odd it returns odd.
function evenOdd(my_string)
{
    if(typeof my_string!=='string'){
        return "please give a string an input" ;
    }
    let lengthOfString= my_string.length;
    if(lengthOfString%2 == 0)
    {
        return "even";
    }
    else{
        return "odd";
    }
}
 




// Problem 3: Is Less or Greater than seven



// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
// Input : 6// Output: -1
// Input: -15// Output: -22
// Input: 15// Output: 30


// the isLGSeven() function takes a number as input. It calculates the  difference between the number and 7. If this difference is greater than 7 the function returns double of the difference. else it returns the  difference between 7 and the input;


function isLGSeven(my_number)
{
    if(typeof my_number!= "number")
    {
        return "Please give a valid number";
    }
    let difference= my_number-7;

    if(difference<7)
    {
        return difference;
    }
    else
    {
        return my_number*2;
    }
}




// The function findingBadData() takes an array as input. Check the array. Counts all the negative numbers in the array. and returns it.

function findingBadData(arrayOfNumbers){
    if(Array.isArray(arrayOfNumbers)==false)
    {
        return "Please give an array";
    }

    let Bad_Data=0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        if (element<0) {
            Bad_Data++;
        }
    }
    return Bad_Data;
}





// The function gemsToDiamond() takes 3 input which all must be numbers. It converts the numbers into diamonds as given instruction. Then it add all off them. If the sum off all converted number is greater than 2000 then the function will return the sum after deducting 2000 from it. Else it will return the original sum.

function gemsToDiamond(friendOneGems,friendTwoGems, friendThreeGems )
{
    if (typeof(friendOneGems)=="number" && typeof(friendTwoGems)=="number" && typeof(friendThreeGems)=="number") {
    
    let diamondsOfFriendOne=(friendOneGems*21);
    let diamondsOfFriendTwo=(friendTwoGems*32);
    let diamondsOfFriendThree=(friendThreeGems*43);

    let totalDiamonds=diamondsOfFriendOne+diamondsOfFriendTwo+diamondsOfFriendThree;
    let finalTotalDiamonds=0;
    if (totalDiamonds>=2000) {
        return totalDiamonds-2000;
    } 
    else {
        return totalDiamonds;
    }
       
    }
    
    return "All three inputs must be  integer"

}

