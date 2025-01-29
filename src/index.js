import "./styles.css";
import { accueilContentCode, dossiersContentCode, avocatContentCode, bureauxContentCode, divisionsContentCode, natureContentCode } from "./module";

function SideLinkContentDisplay(code) {
    const content = document.querySelector("#content");
    content.innerHTML = code;
}

function loadActivePage() {
    // Récupérer l'ID de l'onglet actif depuis localStorage
    const activePageId = localStorage.getItem("activePageId");

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
                SideLinkContentDisplay(bureauxContentCode);
                break;
            case "Divisions":
                SideLinkContentDisplay(divisionsContentCode);
                break;
            case "Natures":
                SideLinkContentDisplay(natureContentCode);
                break;
            default:
                SideLinkContentDisplay(accueilContentCode); // Contenu par défaut
                break;
        }

        // Ajouter la classe active sur le lien correspondant
        const activeLink = document.getElementById(activePageId);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    } else {
        // Par défaut, afficher l'accueil
        SideLinkContentDisplay(accueilContentCode);
    }
}

function main() {
    const sideLink = document.querySelectorAll(".sidebarLink");
    sideLink.forEach(link => {
        link.addEventListener("click", (event) => {
            const evenement = event.target;
            console.log(evenement.id);

            // Sauvegarder l'ID de la page active dans localStorage
            localStorage.setItem("activePageId", evenement.id);

            // Supprimer la classe active de tous les liens
            sideLink.forEach(l => l.classList.remove("active"));

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
                    SideLinkContentDisplay(bureauxContentCode);
                    break;
                case "Divisions":
                    SideLinkContentDisplay(divisionsContentCode);
                    break;
                case "Natures":
                    SideLinkContentDisplay(natureContentCode);
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
