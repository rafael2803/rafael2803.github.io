// Get all the language buttons by class name
var languageButtons = document.getElementsByClassName('languageButton');
var contentElements = document.getElementsByClassName('languageContent');
var englishButton = document.getElementById("englishButton");
var spanishButton = document.getElementById("spanishButton");
var webTitle = document.title;

// Spanish language by default
spanishButton.setAttribute("style", "background-color: orange");

// Loop through each language button
for (var i = 0; i < languageButtons.length; i++) {
  // Add click event listener to each button
  languageButtons[i].addEventListener('click', function() {
    // Get the language value from the data-lang attribute of the button
    var language = this.textContent.toLowerCase();
    if(language === "english"){
        spanishButton.setAttribute("style", "background-color: none");
        englishButton.setAttribute("style", "background-color: orange");
        }
    else{
        englishButton.setAttribute("style", "background-color: none");
        spanishButton.setAttribute("style", "background-color: orange");
    }
    // Loop through each content element
    for (var j = 0; j < contentElements.length; j++) {
      // Check if data-lang attribute matches the selected language
      if ((contentElements[j].getAttribute('data-lang') === language) ) {
        if (webTitle=="Sobre mí") {
          contentElements[j].setAttribute('style', 'display: block;');
        }
        else{
          contentElements[j].setAttribute('style', 'display: inline-block;');
        }
      }
      else {
        contentElements[j].setAttribute('style', 'display: none;');
      }
    }
  });
}

function cambiarIdioma(idioma) {
  document.documentElement.lang = idioma;  // Cambiar el atributo lang de la etiqueta html

  // Llamar a la función para cambiar el contenido según el idioma
  traducirContenido(idioma);
}

const traducciones = {
  'es': {
    'tituloPagina1': 'Portfolio de Rafa',
    'tituloPagina2': 'Sobre mí',
    'tituloPagina3': 'Estudios',
  },
  'en': {
    'tituloPagina1': "Rafa's portfolio",
    'tituloPagina2': 'About me',
    'tituloPagina3': 'Studies',
  }
};

function traducirContenido(idioma) {
  const elementos = document.querySelectorAll('[id]');

  elementos.forEach(elemento => {
      const id = elemento.id;
      if (traducciones[idioma][id]) {
          elemento.textContent = traducciones[idioma][id];
      }
  });
}
