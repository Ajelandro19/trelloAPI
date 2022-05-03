require('dotenv').config()
const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Holi de nuevo Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "LISTID",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });