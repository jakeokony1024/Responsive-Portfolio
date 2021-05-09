//////////Portfoo Objects/////////////
$(document).ready(function(){

    const projectArray = [
        {
            image: "assets copy/images/workoutplaceholder1.jpeg",
            title: "Corey's Active Fitness",
            description: "A Personal Trainer's Website that allows users to store their personal data, schedule classes leave comments / feedback for the trainer.",
            links: {
                website: "https://coreysactivefitness.herokuapp.com/",
                github: "https://github.com/jakeokony1024/Coreys-Active-Fitness",
            },
            software: {
                javaScript: "assets copy/images/javascriptlogo.PNG",
                JQuery: "assets copy/images/jquerylogo.PNG",
                CSS : "assets copy/images/csslogo.PNG",
                HTML: "assets copy/images/htmllogo.PNG", 
                Express: "assets copy/images/expresslogo.PNG", 
                Handlebars: "assets copy/images/handlebarslogo.PNG",
                NodeJS: "assets copy/images/nodejslogo.PNG",
                MySQL: "assets copy/images/mysqllogo.PNG", 
                Sequelize: "assets copy/images/sequelizelogo.PNG",
            },
        },
            {
                image: "assets copy/images/workoutplaceholder1.jpeg",
                title: "Mikes Movie Search",
                description: "This site is designed to help the client search for a movie or tv show and directs them to the streaming service that is offering that show or movie.",
                links : {
                    website: "https://jakeokony1024.github.io/Mikes-Movie-Search/",
                    github: "https://github.com/jakeokony1024/Mikes-Movie-Search",
                },
                software: {
                    javaScript: "assets copy/images/javascriptlogo.PNG",
                    JQuery: "assets copy/images/jquerylogo.PNG",
                    CSS : "assets copy/images/csslogo.PNG",
                    HTML: "assets copy/images/htmllogo.PNG", 
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
                    javaScript: "assets copy/images/javascriptlogo.PNG",
                    JQuery: "assets copy/images/jquerylogo.PNG",
                    CSS : "assets copy/images/csslogo.PNG",
                    HTML: "assets copy/images/htmllogo.PNG", 
                    React: "assets copy/images/reactlogo.PNG"
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
                    javaScript: "assets copy/images/javascriptlogo.PNG",
                    Express: "assets copy/images/expresslogo.PNG",
                    CSS : "assets copy/images/csslogo.PNG",
                    HTML: "assets copy/images/htmllogo.PNG", 
                    NodeJS: "assets copy/images/nodejslogo.PNG",
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
                    javaScript: "assets copy/images/javascriptlogo.PNG",
                    JQuery: "assets copy/images/jquerylogo.PNG",
                    CSS : "assets copy/images/csslogo.PNG",
                    HTML: "assets copy/images/htmllogo.PNG", 
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
        projectArray.forEach((element, index) => {
            a = $("<button class='btn btn-primary' id='"+ index +"'>");
            a.text(element.title);
            $("#projectButtons").append(a);
        })
    }
});





