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
    const choixOrdi = this.choix[randomOrdi];
    console.log("Choix de l'ordinateur : " + choixOrdi);
    var ordi = ChoixOrdi;

    if (
      (choixUser == "pierre" && choixOrdi == "pierre") ||
      (choixUser == "feuille" && choixOrdi == "feuille") ||
      (choixUser == "ciseaux" && choixOrdi == "ciseaux")
    ) {
      console.log("Égalité !");
      var result = "Égalité !";
    } else if (
      (choixUser == "pierre" && choixOrdi == "feuille") ||
      (choixUser == "feuille" && choixOrdi == "ciseaux") ||
      (choixUser == "ciseaux" && choixOrdi == "pierre")
    ) {
      console.log("Vous avez perdu...");
      var result = "Vous avez perdu...";
    } else if (
      (choixUser == "pierre" && choixOrdi == "ciseaux") ||
      (choixUser == "feuille" && choixOrdi == "pierre") ||
      (choixUser == "ciseaux" && choixOrdi == "feuille")
    ) {
      console.log("Vous avez gagné !");
      var result = "Vous avez gagné !";
    }
  }
}

const game = new PFC();
game.start();
