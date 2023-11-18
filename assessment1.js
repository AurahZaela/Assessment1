//Q1. Create a file with name basics and show all the features that you know about javascript

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable                                              v/
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var unsafeCast;

unsafeCast = "Robert";
console.log(unsafeCast);

unsafeCast = .0266;
console.log(unsafeCast);

unsafeCast = false;
console.log(unsafeCast);

unsafeCast = {myname : "Test Me"};
console.log(unsafeCast);

unsafeCast = 25166665;
console.log(unsafeCast);

unsafeCast = undefined;
console.log(unsafeCast);

unsafeCast = true;
console.log(unsafeCast);

unsafeCast = "Robert Jr.";
console.log(unsafeCast);

unsafeCast = null;
console.log(unsafeCast);

unsafeCast = {};
console.log(unsafeCast);

unsafeCast = -32767;
console.log(unsafeCast);

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function                                                                                                                 v/
function showUserInfo(firstname,lastname,age){
    this.FirstName = firstname,
    this.Lastname = lastname,
    this.Age = age
    this.returnUserInfo = function(){
        return{
            FirstName :  this.FirstName,
            LastName : this.Lastname,
            Age : this.Age
        }
    }
   
}

var nUser = new showUserInfo("Joseph", "Tran", 23)

console.log(nUser.returnUserInfo());


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")                                                                v/
// analyse the outputs we got and try explaining the reasons behind

function doaddition(num1,num2,num3){
   
    function add(){
        return num1+num2+num3
    }
    return {add
    }
}
console.log(doaddition(2,3,4).add())
console.log(doaddition(2).add())
console.log(doaddition(2.3,3,0.4).add())
console.log(doaddition("first",2,"three").add())

console.log(typeof doaddition("first",2,"three").add())
console.log(typeof doaddition(2).add())
console.log(typeof doaddition(2.3,3).add())

//        READ ME           Explanations for Q4    //
/*
Since the function is allowed to take variables that have unrestricted value and are not locked into integers, they are thus able to append them accordingly by their type
for the first output, since all the variables num1,num2,num3 were integers, javascript thereby did integer addition. The second output and third output is interestingly NaN and even though typeof 
displays that 2 and 3 outputs their type as Number however they did not pass 3 parameters. It returns NaN due to the type restrictions, and since there was no third parameter when they are being passed, 
the third parameter ends up being NULL which thereby passes doaddition(2,NULL,NULL) and (2.3,3,NULL) for the second and third console.logs respectively.

The fourth output is interesting since it did pass 3 parameters, but 2 of which were strings thus when it goes through the console log, it printed the parameters as as string. This is due to 
javascript being a weakly typed language which allows for conversion of types when our function passes mismatched types.


*/




//Q5. Print the topics you have done so far exporting it from one file and printing in another             v/

var import1 = require("./importClosures")
var import2 = require("./importinheritObj")
var import3 = require ("./importMerged")
var import4 = require("./importOps")
var import5 = require("./importHoist")

//make an inherted object using  var ___ = object.create(object) 


//Q6. Give me an example of your choice on closure, objects, prototype, each.                                                                                   v/


//Closure example

function Card(type,attack,defense) {
    var monType = type
    var attackNumber = attack 
    var defenseNumber = defense
    var serialNumber = "SDSE-EN018" 
    var cardName = "Effect Veiler"
    var funcGetDetails = function(cardID, sNum){
        if (cardID == cardName && sNum == serialNumber) {
            return{
                monType : monType, 
                attackNumber, 
                cardName
            }
        } else {
            return {
                Alert : "Wrong Serial Number"
            }
        }        
    } 
    return funcGetDetails
}

var closedYGOCard = Card("Ash Blossom", 0, 1800)


//Object Example

var TradingCard = {
    Status : "Mint Condition",
    Format : "OCG", 
    getCardDetails : function () {
        return {
            Status: this.Status,
            Occupation : this.Format
        }
    }

}

var PSA10 = Object.create(TradingCard)
PSA10.Status = "Slightly Used"



//Prototype Example

var protoCard = Object.create(TradingCard)

console.log(protoCard._proto_)




//Q7. Create an object without prototype chain or i do not want it to be inherited further
var tcgCardGame = Object.create(null, {
    JackAtlas: { value: "Stardust Dragon" },
    YuSei : {value: "Red Dragon Archfiend"} 
});

function lookUpBoss(monster) {
    return tcgCardGame[monster];
}

console.log(lookUpBoss("JackAtlas"));
console.log(lookUpBoss("YuSei"));



//Q8. what will the following code output? why?

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

//  ANSWER TO Q8    //

//The output will be all at index 4 and undefined element 
//but it will be printed out 4 times as per the length of the array.