//////////Portfolio Objects/////////////

let projectObject = {
    image: "",
    title: "Corey's Active Fitness",
    description: "A Personal Trainer's Website that allows users to store their personal data, schedule classes leave comments / feedback for the trainer.",
    links: {
        website: "https://coreysactivefitness.herokuapp.com/",
        github: "https://github.com/jakeokony1024/Coreys-Active-Fitness",
    }
};

// let projectObject = {
//     image:,
//     title: "",
//     description: "",
//     links: {
//         website:
//         github:
//     },
//     tech:
// };

// let projectObject = {
//     title: "",
//     description: "",
//     links: {
//         website:
//         github:
//     },
//     tech:
// };

$("#clearbtn").on("click", function(){
    $("#name").empty();
    $("#email").empty();
    $("#message").empty();
})


///////// ABOUT ME MODAL///////////
let aboutModal = document.getElementById("aboutModal");
let aboutButton = document.getElementById("aboutButton");
let aboutClose = document.getElementsByClassName("aboutClose")[0];
let portClose = document.getElementsByClassName("portClose")[0];
////////PORTFOLIO MODAL/////////////
let portfolioModal = document.getElementById("portfolioModal");
let portfolioButton = document.getElementById("portfolioButton");

aboutButton.onclick = () => {
    aboutModal.style.display = "block";
}

portfolioButton.onclick = () => {
    portfolioModal.style.display = "block";
    
}

aboutClose.onclick = () => {
    aboutModal.style.display = "none";
};

portClose.onclick = () => {
    portfolioModal.style.display = "none";
};

// window.onclick = e => {
//     e.preventDefault();
//     if(e.aboutButton, e.aboutClose) {
//         portfolioModal.display.style = "none";
//     }elseif(e.portfolioButton, e.portClose) {
//         aboutModal.display.style = "none";
//     }
    
// }

