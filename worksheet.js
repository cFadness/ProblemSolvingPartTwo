"use strict"

function isHappyNumber(positiveInteger){
    let numString = positiveInteger.toString()
    let numArray = []
    let sqrNumArray
    let sum
    let x = true
    let numNumArray

    while(x){
        for(let i=0; i<numString.length; i++){
            numArray.push(numString[i])
        }
        numNumArray = numArray.map(function(element){
           return parseInt(element)
        })
        sqrNumArray = numNumArray.map(function(element){
            return element*element
        })
        sum = sqrNumArray.reduce(function(total, element){
            return total + element
        })
        if(sum == 1){
            x = false
            return true
        }
        else if(sum == 4 || sum == 16 || sum == 37 || sum == 58 || sum == 89 || sum == 145 || sum == 42 || sum ==20){
            x = false
            return false
        }
        else{
            numString = sum.toString()
            numArray = []
        }
    }
}

