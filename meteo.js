async function actualiserMeteo() {
  try {
    // Je commmence par récupérer le fichier conf.json via la méthode fetch //
    const responseConfig = await fetch("./conf.json");

    // Je stocke la response dans la variable config en format json //
    const config = await responseConfig.json();

    //J'introduit mes variables json dans l'url de api openweathermap //
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&appid=${config.apiKey}&units=${config.units}&lang=${config.lang}`;

    // Envoie de la requete API et attend la reponse //
    const responseAPI = await fetch(url);

    // Je convertis les données reçus de l'API en un objet data  //
    const data = await responseAPI.json();

    // Inject des données dans mon HTML //
    // Récupération des éléments HTML via la méthode getElementById  par l' iD et j'y insère le nom de la ville //
    const ville = (document.getElementById("ville").textContent = data.name);

    // Je recupère la temperature et je l'arrondis via la méthode Math.round meilleur experience utilisateur //
    const temperature = (document.getElementById("temperature").textContent =
      Math.round(data.main.temp));

    // Même chose pour l'humidité et le vent //
    const humidite = (document.getElementById("humidite").textContent =
      data.main.humidity);
    const vent = (document.getElementById("vitesse-vent").textContent =
      data.wind.speed);

    // Je concatene avec la methode toLocaleTimeString pour afficher l'heure en français dans dans la console  //
    console.log(
      "Données mises à jour à " + new Date().toLocaleTimeString("fr-FR"),
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
  }
}

// J'invoque ma focntion au chargement de la page //
actualiserMeteo();

// J'utilise la méthode setInterval pour la mise a jour avec un réglage a 1H //
setInterval(actualiserMeteo, 3600000);
