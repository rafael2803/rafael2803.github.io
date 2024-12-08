var habilidades = [
    "Desarrollo Web Front-End",
    "HTML 5",
    "CSS 3",
    "Flexbox",
    "Grid",
    "Bootstrap 5",
    "Javascript ES6",
    "Manipulación DOM",
    "jQuery",
    "Línea de comandos Bash",
    "Git, GitHub y control de versiones",
    "Desarrollo web backend",
    "Node.js",
    "NPM",
    "Express.js",
    "EJS",
    "REST",
    "APIs",
    "Bases de datos",
    "SQL",
    "PostgreSQL",
    "Autenticación",
    "Firebase",
    "React.js",
    "React Hooks",
    "Diseño web",
    "Despliegue con GitHub Pages",
    "Desarrollo Web3 en el Ordenador de Internet",
    "Tecnología Blockchain",
    "Desarrollo de contratos Token",
    "Lógica de minería, compra y venta de NFT",
]
var skills = [
    "Front-End Web Development",
    "HTML 5",
    "CSS 3",
    "Flexbox",
    "Grid",
    "Bootstrap 5",
    "Javascript ES6",
    "DOM Manipulation",
    "jQuery",
    "Bash Command Line",
    "Git, GitHub and Version Control",
    "Backend Web Development",
    "Node.js",
    "NPM",
    "Express.js",
    "EJS",
    "REST",
    "APIs",
    "Databases",
    "SQL",
    "PostgreSQL",
    "Authentication",
    "Firebase",
    "React.js",
    "React Hooks",
    "Web Design",
    "Deployment with GitHub Pages",
    "Web3 Development on the Internet Computer",
    "Blockchain technology",
    "Token contract development",
    "NFT minting, buying and selling logic",
]

function crearLista(language){
    // Make the list
    let ul = document.createElement('ul');

    // Make the list item if it is in spanish
    let li = document.createElement('li');
    if (language==="esp"){
        document.querySelector('#mySkillsList').appendChild(ul);
        habilidades.forEach((habilidad) => {
            // Add the item text
            li.innerHTML += habilidad;
            // Add li to the ul
            ul.appendChild(li);
            // Reset the list item
            li = document.createElement('li');
        });
    }
    //else, make it in english
    else {
        document.querySelector('#mySkillsList1').appendChild(ul);
        skills.forEach((skill) => {
            // Add the item text
            li.innerHTML += skill;
            // Add li to the ul
            ul.appendChild(li);
            // Reset the list item
            li = document.createElement('li');
        });
    }
}

//Hide modals
function unseen(){
    $('#modalTech').hide();
    $('#pythonLibraries').hide();
}
//Show modals
function seen(){
    $('#modalTech').show();
}
function seenPy(){
    $('#pythonLibraries').show();
}
  
