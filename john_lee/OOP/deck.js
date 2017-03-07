function DeckConstructor(){
}
function PlayerConstructor(name){
  hand = []
  this.name = name;
}

DeckConstructor.prototype.create_deck = function(){
  cards = ['JD','QD','KD','AD','JH','QH','HK','AH','JS','QS','KS','AS','JC','QC','KC','AC']
  for(var i = 2; i < 11; i++){
    cards.push(i+'D');
    cards.push(i+'H');
    cards.push(i+'S');
    cards.push(i+'C');
  }
  return cards
}

DeckConstructor.prototype.shuffle = function() {
  for(var i = 20; i < 1000; i++){
    random1 = Math.floor(Math.random()*52);
    random2 = Math.floor(Math.random()*52);
    temp = cards[random1];
    cards[random1] = cards[random2];
    cards[random2] = temp;
  }
  return cards
}

DeckConstructor.prototype.reset = function(){
  cards = ['JD','QD','KD','AD','JH','QH','HK','AH','JS','QS','KS','AS','JC','QC','KC','AC']
  for(var i = 2; i < 11; i++){
    cards.push(i+'D');
    cards.push(i+'H');
    cards.push(i+'S');
    cards.push(i+'C');
  }
  return cards
}

DeckConstructor.prototype.deal = function(){
  console.log(cards[cards.length-1]);
  cards.pop(cards[cards.length-1]);
  return cards;
}

PlayerConstructor.prototype.draw = function(){
  hand.push(cards[Math.floor(Math.random()*52)]);
  return hand;
}
PlayerConstructor.prototype.discard = function(){
  hand.pop();
  return hand;
}


var newdeck = new DeckConstructor();
var Bill = new PlayerConstructor("Bill")
newdeck.create_deck();
newdeck.shuffle();
console.log(newdeck.deal())
console.log(cards.length)
console.log(Bill.draw())
console.log(Bill.discard())
