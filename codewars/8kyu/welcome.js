//OBJECTIVE
// Welcome!

//LINK
// https://www.codewars.com/kata/577ff15ad648a14b780000e7

// INSTRUCTIONS
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

// MY SOLUTION
function greet(language) {
  let languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return languages[`${language}`] || languages.english;
}

// BEST PRACTICE
// function greet(lang) {
//   return langs[lang]||langs['english'];
// }

// var langs = {
// 'english': 'Welcome',
// 'czech': 'Vitejte',
// 'danish': 'Velkomst',
// 'dutch': 'Welkom',
// 'estonian': 'Tere tulemast',
// 'finnish': 'Tervetuloa',
// 'flemish': 'Welgekomen',
// 'french': 'Bienvenue',
// 'german': 'Willkommen',
// 'irish': 'Failte',
// 'italian': 'Benvenuto',
// 'latvian': 'Gaidits',
// 'lithuanian': 'Laukiamas',
// 'polish': 'Witamy',
// 'spanish': 'Bienvenido',
// 'swedish': 'Valkommen',
// 'welsh': 'Croeso'
// };
