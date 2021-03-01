//This function accepts as input a hand of cards from the game of Poker 
//(an array of {value, suit} objects), 
//analyzes it and returns a string with the name of the result.
function evaluateCardsHand(cards) {
    let cardValue = getCardsValues(cards);
    console.log("Numero ripetizioni " + checkEqualCards(cardValue));
    console.log("Colore? " + areFlush(getCardsSuit(cards)));
    console.log("Scala? " + areStraigth(cardValue));
    console.log("Scala A? " + areAceStraigth(cardValue));
    if (areNoSelectedCards(cardValue)) {
        return "Choose 5 cards";
    } else if (areFiveIdenticalCards(cardValue)) {
        return "5 identical cards...";
    } else if (areFlush(getCardsSuit(cards))) {
        if (areAceStraigth(cardValue)) {
            return "Royal Straigth";
        } else if (areStraigth(cardValue)) {
            return "Straigth Flush";
        } else return "Flush";
    } else if (areAceStraigth(cardValue)) {
        return "Straight, Ace High";
    } else if (areStraigth(cardValue)) {
        return "Straight";
    }
    switch (checkEqualCards(cardValue)) {
        case 6:
            return "Four of a Kind";
        case 4:
            return "Full House";
        case 3:
            return "Three of a Kind";
        case 2:
            return "Two Pair";
        case 1:
            return "Pair";
        case 0:
            return highCardScore(cardValue);
    }
}

//This function checks if all cards of the hand cards have been selected 
function areNoSelectedCards(cards) {
    return cards.some(card => card === "");
}

//This function checks if 5 identical cards have been chosen
function areFiveIdenticalCards(cards) {
    var number = cards[0];
    return cards.every(card => card === number)
}

//This function checks for the presence of a Flush
function areFlush(cards) {
    var suit = cards[0];
    return cards.every(card => card === suit);
}

//This function checks for the presence of a straigth, Ace
function areAceStraigth(cards) {
    var aceStraigth = [1, 10, 11, 12, 13]
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] != aceStraigth[i]) {
            return false;
        }
    } return true;
}

//This function checks for the presence of a straigth
function areStraigth(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i + 1] - cards[i] != 1) {
            return false
        }
    } 
    return true;
}

//This function checks the presence and value of the high card
function highCardScore(cards) {
    return "highCard, " + evaluateHighCardScore(cards);
}

function evaluateHighCardScore(cards) {
    let maxValue = (Math.max(...cards));
    if (Math.min(...cards) == 1) {
        return "Ace";
    } else switch (maxValue) {
        case 13:
            return "K";
        case 12:
            return "Q";
        case 11:
            return "J";
        case 10:
            return "10";
        case 9:
            return "9";
        case 8:
            return "8";
        case 7:
            return "7";
    }
}

//This function returns a variable containing
//the number of times the cards are repeated
function checkEqualCards(cards) {

    var doubleCardsHands = 0;

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i] == cards[j]) {
                doubleCardsHands++;
            }
        }
    }
    return doubleCardsHands;
}

//This function returns an array with the card values
function getCardsValues(cards) {
    var valueCard = [];
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].value === "1") {
            valueCard.push(1)
        } else if (cards[i].value === "2") {
            valueCard.push(2)
        } else if (cards[i].value === "3") {
            valueCard.push(3)
        } else if (cards[i].value === "4") {
            valueCard.push(4)
        } else if (cards[i].value === "5") {
            valueCard.push(5)
        } else if (cards[i].value === "6") {
            valueCard.push(6)
        } else if (cards[i].value === "7") {
            valueCard.push(7)
        } else if (cards[i].value === "8") {
            valueCard.push(8)
        } else if (cards[i].value === "9") {
            valueCard.push(9)
        } else if (cards[i].value === "10") {
            valueCard.push(10)
        } else if (cards[i].value === "J") {
            valueCard.push(11)
        } else if (cards[i].value === "Q") {
            valueCard.push(12)
        } else if (cards[i].value === "K") {
            valueCard.push(13)
        } else valueCard.push(cards[i].value);
    }
    return valueCard.sort((a, b) => a - b);
}

//This function returns an array with the card suit
function getCardsSuit(cards) {
    return cards.map(card => card = card.suit)
}
