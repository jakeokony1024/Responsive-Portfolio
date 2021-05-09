//////////Portfoo Objects/////////////
$(document).ready(function(){

    const projectArray = [
        {
            image: "./assets copy/images/workoutplaceholder1.jpeg",
            title: "Corey's Active Fitness",
            description: "A Personal Trainer's Website that allows users to store their personal data, schedule classes leave comments / feedback for the trainer.",
            links: {
                website: "https://coreysactivefitness.herokuapp.com/",
                github: "https://github.com/jakeokony1024/Coreys-Active-Fitness",
            },
            software: {
                javaScript: "",
                JQuery: "",
                CSS : "",
                HTML: "", 
                Express: "", 
                Handlebars: "",
                NodeJS: "",
                MySQL: "", 
                Sequelize: "",
            },
        },
    
            {
                image: "./assets copy/images/workoutplaceholder1.jpeg",
                title: "Mikes Movie Search",
                description: "This site is designed to help the client search for a movie or tv show and directs them to the streaming service that is offering that show or movie.",
                links : {
                    website: "https://jakeokony1024.github.io/Mikes-Movie-Search/",
                    github: "https://github.com/jakeokony1024/Mikes-Movie-Search",
                },
                software: {
                    javaScript: "",
                    JQuery: "",
                    CSS : "",
                    HTML: "", 
                    AJAX: ""
                },
            },
    
            {
                image: "./assets copy/images/workoutplaceholder1.jpeg",
                title: "Image Click Game",
                description: "This site gives the user a table of images and directions to try and click on each different image no more than once. Once an image is clicked, the entire table is rearranged in a random order, and if the same image is clicked twice, the score is set back to zero. ",
                links : {
                    website: "https://jakeokony1024.github.io/clickgame-2/",
                    github: "https://github.com/jakeokony1024/clickgame-2",
                },
                software: {
                    javaScript: "",
                    JQuery: "",
                    CSS : "",
                    HTML: "", 
                    React: ""
                },
    
            },
    
            {
                image: "./assets copy/images/workoutplaceholder1.jpeg",
                title: "Friend Finder App",
                description: "This site has the user go through a list of questions, and based on the answers gives them a 'friend' they are most compatible with.",
                links : {
                    website: "https://dry-temple-36787.herokuapp.com/",
                    github: "https://github.com/jakeokony1024/FriendFinder",
                },
                software: {
                    JavaScript: "",
                    Express: "",
                    Path: "",
                    CSS: "", 
                    HTML: "",
                    NodeJs: ""
                },
    
            },
    
            {
                image: "./assets copy/images/workoutplaceholder1.jpeg",
                title: "Giphy Image Search",
                description: "This site allows users to search for a list of GIF images populated from the Giphy API. Images can be clicked to show the animation, and clicked again to stop animation.",
                links : {
                    website: "https://jakeokony1024.github.io/Giphy-App/",
                    github: "https://github.com/jakeokony1024/Giphy-App",
                },
                software: {
                    javaScript: "",
                    JQuery: "",
                    CSS : "",
                    HTML: "", 
                    AJAX: ""
                },
    
        },
];
    let projectTitle;
    let projectDescription;
    let projectImage ;
    let projectLinks = [];
    ////Modal Button Function////
    jQuery(':button').click(function () {
        if (this.id == 'aboutButton') {
            console.log(aboutModal);
            aboutModal.style.display = "block";
            portfolioModal.style.display = "none";
        }
        else if (this.id == 'portfolioButton') {
            portfolioModal.style.display = "block";
            aboutModal.style.display = "none";
            let projectDiv = $("#projectButtons");
            if ($('#projectButtons').is(':empty')){
                projectButtons();
            }else{
                return;
            }
        }
        else if (this.id == 'aboutClose') {
            aboutModal.style.display = "none";
        }
        else if (this.id == 'portClose') {
            portfolioModal.style.display = "none";
        }
        else if(this.id == 'projectButton') {
            projectModal.style.display = "block";
        }
        else if(this.id =='projectClose') {
            projectModal.style.display = "none";
        }
    }); 

    let projectButtons = () => {
        //iterate through projectArray object, grab out titles, descriptions, images, links, software list//
        projectArray.forEach((element, index, array) => {
            a = $("<button class='btn btn-primary'>");
            console.log(element.title);
            a.text(element.title);
            $("#projectButtons").append(a);
        })
    }
    
});





