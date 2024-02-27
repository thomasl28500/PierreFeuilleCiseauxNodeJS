//Méthode avec Express
const express = require("express");
const app = express();
const modulePFC = require("./modulePFC.js");


app.get("/resultat", (req, res) => {
    var choixUser = req.query.jeu;
modulePFC.game(choixUser);
    let structure =
    `<div>
    <p>Vous avez joué : ${req.query.jeu}</p>
    <p>L'ordinateur à joué : ${modulePFC.getChoixOrdi()}</p>
    <p>${modulePFC.getResult()}</p>
    <a href="./">Rejouer</a>
    </div>`;
  res.send(structure);
});

app.get("/", (req, res) => {
  let structure =
    `<form action="./resultat">
    <div>
    <input type="radio" value="pierre" name="jeu"><label for="pierre">Pierre</label>
    <input type="radio" value="feuille" name="jeu"><label for="feuille">Feuille</label>
    <input type="radio" value="ciseaux" name="jeu"><label for="ciseaux">Ciseaux</label>
    </div>
    <button type="submit">Valider</button>
    </form>`;
  res.send(structure);
});

app.listen(3000, () => {
  console.log("Serveur démarré");
});