//////////Portfoo Objects/////////////
const projectArray = [

    {
        image: "",
        title: "Corey's Active Fitness",
        description: "A Personal Trainer's Website that allows users to store their personal data, schedule classes leave comments / feedback for the trainer.",
        links: {
            website: "https://coreysactivefitness.herokuapp.com/",
            github: "https://github.com/jakeokony1024/Coreys-Active-Fitness",
        },
        // software: {
        //     javaScript: "",
        //     JQuery: "",
        //     CSS : "",
        //     HTML: "", 
        //     Express: "", 
        //     Handlebars: "",
        //     NodeJS: "",
        //     MySQL: "", 
        //     Sequelize: "",
        // },
    // },

    // {
    //     image: "",
    //     title: "",
    //     description: "",
    //     nks : {
    //         website: "",
    //         github: "",
    //     },
    //     software: [],
    // },

    // {
    //     image: "",
    //     title: "",
    //     description: "",
    //     nks : {
    //         website: "",
    //         github: "",
    //     },
    //     software: [],

    // },

    // {
    //     image: "",
    //     title: "",
    //     description: "",
    //     nks : {
    //         website: "",
    //         github: "",
    //     },
    //     software: [],

    // },

    // {
    //     image: "",
    //     title: "",
    //     description: "",
    //     nks : {
    //         website: "",
    //         github: "",
    //     },
    //     software: [],

    },
];


$("#clearbtn").on("cck", function(){
    $("#name").empty();
    $("#email").empty();
    $("#message").empty();
})


///////// ABOUT ME MODAL///////////
let aboutModal = document.getElementById("aboutModal");
let aboutButton = document.getElementById("aboutButton");
let aboutClose = document.getElementsByClassName("aboutClose")[0];
let portClose = document.getElementsByClassName("portClose")[0];
////////PORTFOO MODAL/////////////
let portfooModal = document.getElementById("portfooModal");
let portfooButton = document.getElementById("portfooButton");

aboutButton.oncck = () => {
    aboutModal.style.display = "block";
}

portfooButton.oncck = () => {
    portfooModal.style.display = "block";
    // $("port-title").
}

aboutClose.oncck = () => {
    aboutModal.style.display = "none";
};

portClose.oncck = () => {
    portfooModal.style.display = "none";
};

// window.oncck = e => {
//     e.preventDefault();
//     if(e.aboutButton, e.aboutClose) {
//         portfooModal.display.style = "none";
//     }elseif(e.portfooButton, e.portClose) {
//         aboutModal.display.style = "none";
//     }
    
// }

