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


//Funzione che genera la card ricevendo oggetti dal quale prendere le informazioni
function createMemberCard (memberObj) {

  const card = `<div class="col-12 col-md-6 col-lg-4">
    <div class="team-card d-flex bg-dark text-white h-100 rounded overflow-hidden">

        <div class="team-img">
            <img src="img/${memberObj.img}" alt="${memberObj.name}">
        </div>

        <div class="team-text p-3 text-start">
            <h5 class="fw-bold mb-1">${memberObj.name}</h5>
            <p class="mb-0 text-info">${memberObj.email}</p>
        </div>

    </div>
</div>` ;
return card ; 
}


