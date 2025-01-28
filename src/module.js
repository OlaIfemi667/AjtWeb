export const accueilContentCode = `
<h2>Bienvenue dans l'espace utilisateur</h2>
            <div id="userLabel">
                <div id="name" class="userInfo">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle cx="24" cy="11" r="7" fill="#0C7025"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><path fill="#0C7025" d="M31 42L41 32L37 28L27 38V42H31Z"/></g></svg>
                        <b><p>Nom:</p></b>
                    </div>
                    <p>John Doe</p>
                    
                </div>
                <div id="identifiant" class="userInfo">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="#0C7025" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="M7 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8-2h2m-2 4h2M7 16h10"/></g></svg>
                        <b><p>id:</p></b>
                    </div>
                    <p>XXXXXXXXX</p>
                    
                </div>
                <div id="poste" class="userInfo">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="#0C7025" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8h18v4c0 2.357 0 3.536-.732 4.268C19.535 17 18.357 17 16 17H8c-2.357 0-3.536 0-4.268-.732S3 14.357 3 12zm4-2c0-1.886 0-2.828.586-3.414S9.114 2 11 2h2c1.886 0 2.828 0 3.414.586S17 4.114 17 6v2H7zM5 17v5m14-5v5M8 17v3m8-3v3M2 8h1.818m16.364 0H22" color="#0C7025"/></svg>
                        <b><p>Poste:</p></b>
                    </div>
                <p>Agent AJT</p>
                </div>
            </div>
            <div id="informations">
                <p>
                    AjtWeb est une plateforme de suivi de courriers conçue pour optimiser la gestion, le traitement et le suivi des correspondances administratives et professionnelles. Elle permet aux utilisateurs de centraliser les informations liées aux courriers, de suivre leur progression en temps réel, et d'assurer une traçabilité complète, de l'envoi à la réception. Grâce à une interface intuitive et des fonctionnalités telles que la gestion des dossiers, l'affectation des tâches, et les notifications, AjtWeb améliore la collaboration et garantit une organisation efficace des flux de communication.
                </p>
            </div>
            `

export const dossiersContentCode = `
<h2>Informations du dossiers</h2>

<div id="docInfo" class="form-section">
    <form action="/submit" method="post">
        <div>
        <label for="numero_dossier">Numéro Dossier :</label>
        <input type="text" id="numero_dossier" name="numero_dossier" required>
        </div>
        <div>
        <label for="nature">Nature :</label>
        <select id="nature" name="nature" required>
            <option value="civil">Civil</option>
            <option value="penal">Pénal</option>
            <option value="commercial">Commercial</option>
        </select>
        </div>

        <div>
        <label for="juridiction">Juridiction :</label>
        <input type="text" id="juridiction" name="juridiction" required>
        </div>
        <div>
        <label for="parties">Les Parties :</label>
        <select id="parties" name="parties" required>
            <option value="demandeur">Demandeur</option>
            <option value="defendeur">Défendeur</option>
            <option value="autre">Autre</option>
        </select>
        </div>

        
        <div>
        <label for="date_audience">Date d'Audience :</label>
        <input type="date" id="date_audience" name="date_audience" required>
        </div>

        <div>
        <label for="assignation">Assignation :</label>
        <input type="text" id="assignation" name="assignation" required>
        </div>
        <div>
        <label for="avocats">Avocats :</label>
        <select id="avocats" name="avocats" required>
            <option value="avocat_1">Avocat 1</option>
            <option value="avocat_2">Avocat 2</option>
            <option value="autre">Autre</option>
        </select>
        </div>

        <div>
        <label for="nombre_pieces">Nombre de Pièces :</label>
        <input type="number" id="nombre_pieces" name="nombre_pieces" required>
        </div>
        <div>
        <label for="bureaux">Bureaux :</label>
        <input type="text" id="bureaux" name="bureaux" required>
        </div>

        <div>
        <label for="divisions">Divisions :</label>
        <input type="text" id="divisions" name="divisions" required>
        </div>
        <div>
        <label for="objet">Objet :</label>
        <textarea id="objet" name="objet" rows="4" required></textarea>
        </div>
    </form>
    <button type="submit">Envoyer</button>
</div>
`

export const avocatContentCode = `
<h2>Informations de l'avocat </h2>

<div id="docInfo" class="form-section">
    <form>

        <div class="form-group">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>
        </div>

        <div class="form-group">
            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" required>
        </div>

        <div class="form-group">
            <label for="sexe">Sexe :</label>
            <select id="sexe" name="sexe" required>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
            </select>
        </div>

        <div class="form-group">
            <label for="telephone">Numéro de téléphone :</label>
            <input type="tel" id="telephone" name="telephone" required>
        </div>

        <!-- Vous pouvez ajouter un bouton pour soumettre le formulaire -->
        
    </form>
    <button type="submit">Envoyer</button>
</div>
`