var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    


        


    // Variable globale pour stocker le projet actuellement affiché
    var currentProject = '';

    // Fonction pour afficher la description du projet
    function showProjectDescription(project) {
        var presentationDiv = document.querySelector('.presentation');

        // Vérifie si le projet actuel correspond au projet sélectionné
        if (currentProject === project) {
            // Si c'est le cas, rétablir le contenu initial de la présentation
            presentationDiv.innerHTML = `<h1>Welcome.</h1><p>My name is Franck Zhang, I'm a full stack developer based in Paris, France. I am looking for an alternation in web development, data or cybersecurity for 2024-2025 (pace: 3 weeks in business / 1 week in school).<br><br> I am passionate about exploring the mysteries of the web, dissecting programming languages and experimenting with new ideas on my computer.p>`;
            currentProject = ''; // Réinitialiser le projet actuel
        } else {
            // Si ce n'est pas le cas, afficher la description du projet sélectionné
            var description = getProjectDescription(project);
            if (presentationDiv) {
                presentationDiv.innerHTML = `<h1>${project}</h1><p>${description}</p>`;
                currentProject = project; // Mettre à jour le projet actuel
            }
        }
    }

    // Fonction pour récupérer la description du projet
    function getProjectDescription(project) {
        // Simulation de descriptions pour chaque projet
        var descriptions = {
            achaka: "Description d'Achaka Conseils...",
            conquest: "Description de Conquest of Kingdoms...",
            mongoo: "Description de Mongoo...",
            homepod: "Description de HomePod mini..."
        };

        // Récupérer la description du projet en fonction de son nom
        return descriptions[project] || "Aucune description disponible.";
    }


    
