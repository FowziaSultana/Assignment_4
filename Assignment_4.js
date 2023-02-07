// Problem 1: Let’s play a mind game


// তোমাকে একটা function দেওয়া হবে called “mindGame()” যা ইনপুট হিসেবে একটা positive number নিবে। 
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 



// Sample Input & Output:-
// Input: 5// Output: 7.5
// Input: 50// Output: 75
// Input: 33 Output: 49.5

// the mindGame function takes a positive number as input and after a simple simplification it returns the result.
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
//console.log(mindGame());




// Problem 2: Finding even or odd


// তোমাকে একটা function দেওয়া হবে called “evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
// Sample Input & Output:-
// Input: ‘Phero’// Output: Odd
// Input: ‘Batch7’// Output: Even
// Input: ‘chatgpt’// Output: Odd

// the evenOdd Function takes a string as input. Then it checks the length of it, if the length is even it returns even and it the lrngth is odd it returns odd.
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
 
//console.log(evenOdd(90));



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
// console.log("ans of 3rd prob");
 //console.log(isLGSeven(-9));


// Problem 4: Finding Bad data


// তোমাকে একটা function দেওয়া হবে called “findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
// Sample Input & Output:-
// Input: [ 1,2,5 ]// Output: 0
// Input: [ 2, -5, -7, -13 ]// Output: 3
// Input: [ -4, -9, -5, -33, -55 ]// Output: 5

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

//console.log(findingBadData([ -2,7,8,9,0,-5,-7,-9 ,-1,-93]));







// Problem 5: Convert your gems into diamond


// তোমাকে একটা function দেওয়া হবে called “gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে। 
// Sample Input & Output:-
// Input: 1, 1, 1// Output: 96
// Input: 20, 200, 50// Output: 6970
// Input: 100, 5, 1// Output: 303

// the function gemsToDiamond() takes 3 input which all must be numbers. It converts the numbers into diamonds as given instruction. Then it add all off them. If the sum off all converted number is greater than 2000 then the function will return the sum after deducting 2000 from it. Else it will return the original sum.

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
//console.log(gemsToDiamond(4,-9,5));
