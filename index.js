//Méthode avec Express
const express = require("express");
const app = express();

app.get("/resultat", (req, res) => {
    var choixUser = req.query.jeu;
    let structure =
    `<div>
    <p>Vous avez joué : ${req.query.jeu}</p><br>
    <p>L'ordinateur à joué : ${choixOrdi}</p><br>
    <p>${result}</p>
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

//Méthode en ligne de commande
const modulePFC = require("./modulePFC.js");
