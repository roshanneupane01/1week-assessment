///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0
// using for loop to add the values of each indexes of all 3 types of acres since they all have the same length
for(let i = 0; i<fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(`The totalAcres picked for the entire week: ${totalAcres}`)





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// calculating the average acres picked daily by dividing the total number of days i.e. 7 by the total Acres picked within in the 7 days
let averageDailyAcres = totalAcres/(fujiAcres.length)
console.log(`The average acres picked daily: ${averageDailyAcres}`)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
// adding days by 1 to get the total number of days, and subtracting average daily acres by acres left i.e. 74 until the condition is met
while(acresLeft > 0){
    days++
    acresLeft = acresLeft - averageDailyAcres
}
console.log(`Days: ${days}`)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// creating 3 empty arrays
let fujiTons = []
let galaTons = []
let pinkTons = []

// using for loop to loop throughout the length of all the acres that have the same length i.e. 7 and multiplying values from each indexes with 6.5 tons to calculate the total tons of each types of apples picked daily
for(let i = 0; i<fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(`fujiTons: ${fujiTons}`)
console.log(`galaTons: ${galaTons}`)
console.log(`pinkTons: ${pinkTons}`)





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// using for loop to loop throughout the length of all 3 different tons of apples that have the same length i.e. 7 and multiplying values from each indexes with 2000 to convert the values in tons into pounds
for(let i = 0; i<fujiTons.length; i++){
    fujiPounds += fujiTons[i] * 2000
    galaPounds += galaTons[i] * 2000
    pinkPounds += pinkTons[i] * 2000
}

console.log(`fujiPounds: ${fujiPounds}`)
console.log(`galaPounds: ${galaPounds}`)
console.log(`pinkPounds: ${pinkPounds}`)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// multiplying all 3 types of apples in pounds with its corresponding prices
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(`fujiProfit: ${fujiProfit}`)
console.log(`galaProfit: ${galaProfit}`)
console.log(`pinkProfit: ${pinkProfit}`)








// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// adding profits from all 3 types of apples sold
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`totalProfit: ${totalProfit}`)
