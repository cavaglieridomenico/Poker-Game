//This function creates a multidimensional array with the cards chosen by the user
function getUserCardsHand() {
    let userHand = [];
    userHand.push([document.getElementById("card_1").value,
    document.getElementById("card_suit_1").value]);
    userHand.push([document.getElementById("card_2").value,
    document.getElementById("card_suit_2").value]);
    userHand.push([document.getElementById("card_3").value,
    document.getElementById("card_suit_3").value]);
    userHand.push([document.getElementById("card_4").value,
    document.getElementById("card_suit_4").value]);
    userHand.push([document.getElementById("card_5").value,
    document.getElementById("card_suit_5").value]);
    return userHand;
}

//This function turns card values into integers
function cardValueIntoIntegers(cards) {
    for (var i = 0; i < cards.length; i++) {

        if (cards[i][0] == "1") {
            cards[i][0] = 1
        }
        else if (cards[i][0] == "2") {
            cards[i][0] = 2
        }
        else if (cards[i][0] == "3") {
            cards[i][0] = 3
        }
        else if (cards[i][0] == "4") {
            cards[i][0] = 4
        }
        else if (cards[i][0] == "5") {
            cards[i][0] = 5
        }
        else if (cards[i][0] == "6") {
            cards[i][0] = 6
        } 
        else if (cards[i][0] == "7") {
            cards[i][0] = 7
        }
        else if (cards[i][0] == "8") {
            cards[i][0] = 8
        }
        else if (cards[i][0] == "9") {
            cards[i][0] = 9
        }
        else if (cards[i][0] == "10") {
            cards[i][0] = 10
        }
        else if (cards[i][0] == "J") {
            cards[i][0] = 11
        }
        else if (cards[i][0] == "Q") {
            cards[i][0] = 12
        }
        else if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
    }
}
