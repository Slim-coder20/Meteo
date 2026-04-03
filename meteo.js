// Inportation du fichier config.json // 
const config = require('./conf.json');

// Récupération de la ville dans le fichier conf.json et je stock la valeur dans la variable config // 
const city = config.city;

// Récupération de l'unité de mesure dans le fichier conf.json // 
const units = config.units;

// Récupération de la langue dans le fichier conf.json // 
const lang = config.lang; 

// Récuopération de l'api key dans le fichier conf.json // 
const apiKey = config.apiKey; 

// URL de l'API OPENWEATHERMAP // 
const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
