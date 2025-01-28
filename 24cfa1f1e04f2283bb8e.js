import "./styles.css";
import { accueilContentCode, dossiersContentCode, avocatContentCode } from "./module";
function SideLinkContentDisplay(code) {
  var content = document.querySelector("#content");
  content.innerHTML = code;
}
function loadActivePage() {
  // Récupérer l'ID de l'onglet actif depuis localStorage
  var activePageId = localStorage.getItem("activePageId");
  if (activePageId) {
    // Déclencher l'affichage du contenu correspondant
    switch (activePageId) {
      case "accueil":
        SideLinkContentDisplay(accueilContentCode);
        break;
      case "dossiers":
        SideLinkContentDisplay(dossiersContentCode);
        break;
      case "Avocats":
        SideLinkContentDisplay(avocatContentCode);
        break;
      case "Bureaux":
        SideLinkContentDisplay("Bureaux");
        break;
      case "Divisions":
        SideLinkContentDisplay("Divisions");
        break;
      case "Natures":
        SideLinkContentDisplay("Natures");
        break;
      default:
        SideLinkContentDisplay("Bienvenue"); // Contenu par défaut
        break;
    }

    // Ajouter la classe active sur le lien correspondant
    var activeLink = document.getElementById(activePageId);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  } else {
    // Par défaut, afficher l'accueil
    SideLinkContentDisplay(accueilContentCode);
  }
}
function main() {
  var sideLink = document.querySelectorAll(".sidebarLink");
  sideLink.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var evenement = event.target;
      console.log(evenement.id);

      // Sauvegarder l'ID de la page active dans localStorage
      localStorage.setItem("activePageId", evenement.id);

      // Supprimer la classe active de tous les liens
      sideLink.forEach(function (l) {
        return l.classList.remove("active");
      });

      // Ajouter la classe active au lien cliqué
      evenement.classList.add("active");

      // Afficher le contenu correspondant
      switch (evenement.id) {
        case "accueil":
          SideLinkContentDisplay(accueilContentCode);
          break;
        case "dossiers":
          SideLinkContentDisplay(dossiersContentCode);
          break;
        case "Avocats":
          SideLinkContentDisplay(avocatContentCode);
          break;
        case "Bureaux":
          SideLinkContentDisplay("Bureaux");
          break;
        case "Divisions":
          SideLinkContentDisplay("Divisions");
          break;
        case "Natures":
          SideLinkContentDisplay("Natures");
          break;
        default:
          break;
      }
    });
  });

  // Charger la page active au démarrage
  loadActivePage();
}
main();