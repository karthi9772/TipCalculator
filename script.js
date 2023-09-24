/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const foodAmount=document.getElementById('billTotalInput')

const tipAmount=document.getElementById('tipInput')


let numberOfPeople=document.getElementById('numberOfPeople')

let perPersonTotal=document.getElementById('perPersonTotal')


// Get number of people from number of people div
let numOfPeople=Number(numberOfPeople.innerHTML)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  let food=Number(foodAmount.value)

  // get the tip from user & convert it into a percentage (divide by 100)
let tipcalc=Number(tipAmount.value)
let  tip=tipcalc/100*food
  // get the total tip amount
totalamount=Number(tip)+Number(food)
  // calculate the total (tip amount + bill)
  // calculate the per person total (total divided by number of people)
totalamount=totalamount/numOfPeople

  // update the perPersonTotal on DOM & show it to user
perPersonTotal.innerHTML=`$${totalamount.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numOfPeople+=Number(1)

  // update the DOM with the new number of people
numberOfPeople.innerHTML=Number(numOfPeople)

  // calculate the bill based on the new number of people
calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
if(numOfPeople<=1){
  return
}

  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  numOfPeople-=1
  // decrement the amount of people


  // update the DOM with the new number of people
numberOfPeople.innerHTML=Number(numOfPeople)

  // calculate the bill based on the new number of people
calculateBill()
}