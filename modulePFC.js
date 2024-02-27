// Méthode en ligne de commande
const readline = require("readline");

class PFC {
  constructor() {
    this.choix = ["pierre", "feuille", "ciseaux"];
  }

  start() {
    let question = readline.createInterface(process.stdin, process.stdout);
    question.question("Pierre, Feuille ou Ciseaux ? ", (choixUser) => {
      console.log("Votre choix : " + choixUser.toLowerCase());

      if (
        choixUser == "pierre" ||
        choixUser == "feuille" ||
        choixUser == "ciseaux"
      ) {
        this.game(choixUser);
        question.close();
      } else {
        console.log("Vous ne pouvez pas jouer ce coup !!");
        question.close();
      }
    });
  }
  

  game(choixUser){
    const randomOrdi = Math.floor(Math.random() * this.choix.length);
    this.choixOrdi = this.choix[randomOrdi];
    console.log("Choix de l'ordinateur : " + this.choixOrdi);
    var ordi = this.ChoixOrdi;

    this.result = "";
    if (
      (choixUser == "pierre" && this.choixOrdi == "pierre") ||
      (choixUser == "feuille" && this.choixOrdi == "feuille") ||
      (choixUser == "ciseaux" && this.choixOrdi == "ciseaux")
    ) {
      console.log("Égalité !");
      this.result = "Égalité !";
    } else if (
      (choixUser == "pierre" && this.choixOrdi == "feuille") ||
      (choixUser == "feuille" && this.choixOrdi == "ciseaux") ||
      (choixUser == "ciseaux" && this.choixOrdi == "pierre")
    ) {
      console.log("Vous avez perdu...");
      this.result = "Vous avez perdu...";
    } else if (
      (choixUser == "pierre" && this.choixOrdi == "ciseaux") ||
      (choixUser == "feuille" && this.choixOrdi == "pierre") ||
      (choixUser == "ciseaux" && this.choixOrdi == "feuille")
    ) {
      console.log("Vous avez gagné !");
      this.result = "Vous avez gagné !";
    }
  }

  getChoixOrdi(){
    return this.choixOrdi;
  }

  getResult(){
    return this.result;
  }
}
module.exports = new PFC();
//const game = new PFC();
// game.start();
