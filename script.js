const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


//Parte di SETUP 
const teamContainer = document.getElementById("team-container");

// selezione di elementi form
const form = document.getElementById("member-form");
const nameField = document.getElementById("name");
const roleField = document.getElementById("role"); 
const emailField = document.getElementById("email"); 
const imageField = document.getElementById("image"); 

//chiamo la funzione per caricare la lista membri 
renderTeam(teamMembers,teamContainer); 

// chiamo la funzione per aggiungere un nuovo membro 
form.addEventListener("submit",addMember); 

// funzione che fa il rendering completo delle card dei membri del team
function renderTeam(arrayOgg, output) {

  //variabile che accumulerà gli elementi di ouput 
  let cards = ""; 

  //ciclo l'array di oggetti 
  for(let i = 0; i < arrayOgg.length; ++i) {
    
    //estrapolo ogni volta un oggetto del team diverso 
    const memberTeam = arrayOgg[i]; 

    //incremento ad ogni giro il contenuto dell'output 
    cards += createMemberCard(memberTeam);
  }

  //inseriamo la stringa che innerhtml trasformerà nell'elemento di output 
  output.innerHTML = cards ; 
}

//Funzione che genera la card ricevendo oggetti dal quale prendere le informazioni
function createMemberCard (memberObj) {

  const card = `<div class="col-12 col-md-6 col-lg-4">
    <div class="team-card d-flex bg-dark text-white h-100 rounded overflow-hidden">

        <div class="team-img">
            <img src="${memberObj.img}" alt="${memberObj.name}">
        </div>

        <div class="team-text p-3 text-start">
            <h5 class="fw-bold mb-1">${memberObj.name}</h5>
            <p class="mb-0">${memberObj.role}</p>
            <p class="mb-0 text-info">${memberObj.email}</p>
        </div>

    </div>
</div>` ;
return card ; 
}


// funzione di gestione della creazione nuovo membro (gestione invio form)
function addMember(event) {

  //prevengo comportamento base del form 
  event.preventDefault(); 

  //recupero i valori dei campi 
  const name = nameField.value;
  const role = roleField.value;
  const email = emailField.value;
  const image = imageField.value; 

  //creo il nuovo oggetto del membro del team 

  const newMember = {
    name,
    role,
    email,
    img: image
  }

  //aggiungo i dati nell'array teamMembers 
  teamMembers.push(newMember);

  //pulisco i campi del form 

  event.target.reset(); 

  // aggiorniamo la pagina
    // chiamo funzione per renderizzare la lista membri
    renderTeam(teamMembers,teamContainer); 
}