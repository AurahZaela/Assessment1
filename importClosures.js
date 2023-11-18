
//Closures Here//
function Duelist(name, address, type) {
    var AccName = name
    var location = address 
    var DeckType = type
    var UserID = name
    var YGO = "TCG"
    
    var funcGetDetails = function(userID){
        if (userID == name) {
            return{
                DuelistName : AccName, 
                DeckType, 
                YGO
            }
        } else {
            return {
                Alert : "You're a third rate duelist with a fourth rate deck"
            }
        }        
    } 
    return funcGetDetails
}

var closureObj = Duelist("Kaiba", "Battle City", "Blue Eyes Player")

console.log(closureObj("Kaiba"))
console.log(closureObj("Annie"))

