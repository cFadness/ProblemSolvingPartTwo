"use strict"

function isHappyNumber(positiveInteger){
    let numString = positiveInteger.toString()
    let numArray = []
    let sqrNumArray
    let sum
    let x = true
    let numNumArray
    let i
    while(x){
        i=0
        for(i=0; i<numString.length; i++){
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
        else if(sum == positiveInteger){
            x = false
            return false
        }
        else{
            numString = sum.toString()
        }
    }
}

console.log(isHappyNumber(19))
