//////////Portfolio Objects/////////////
$(document).ready(function(){
    let date = new Date();
    console.log(date.getFullYear());

    let copyYearText1 = document.getElementById('copy-yearcon');
    let copyYearText2 = document.getElementById('copy-yearind');
    let copyYearText3 = document.getElementById('copy-yearpor');
    console.log(copyYearText2, copyYearText3)
    if (copyYearText1) copyYearText1.textContent = date.getFullYear();
    if (copyYearText2) copyYearText2.textContent = date.getFullYear();
    if (copyYearText3) copyYearText3.textContent = date.getFullYear();
//     const projectArray = [
//         {
//             id: "proj0",
//             image: "assets_copy/images/jquerylogo.PNG",
//             title: "Corey's Active Fitness",
//             description: "A Personal Trainer's Website that allows users to store their personal data, schedule classes leave comments / feedback for the trainer.",
//             links: {
//                 website: "https://coreysactivefitness.herokuapp.com/",
//                 github: "https://github.com/jakeokony1024/Coreys-Active-Fitness",
//             },
//             software: {
//                 javaScript: "assets_copy/images/javascriptlogo.PNG",
//                 JQuery: "assets_copy/images/jquerylogo.PNG",
//                 CSS : "assets_copy/images/csslogo.PNG",
//                 HTML: "assets_copy/images/htmllogo.PNG", 
//                 Express: "assets_copy/images/expresslogo.PNG", 
//                 Handlebars: "assets_copy/images/handlebarslogo.PNG",
//                 NodeJS: "assets_copy/images/nodejslogo.PNG",
//                 MySQL: "assets_copy/images/mysqllogo.PNG", 
//                 Sequelize: "assets_copy/images/sequelizelogo.PNG",
//             },
//         },
//             {
//                 id: "proj1",
//                 image: "assets_copy/images/htmllogo.PNG",
//                 title: "Mikes Movie Search",
//                 description: "This site is designed to help the client search for a movie or tv show and directs them to the streaming service that is offering that show or movie.",
//                 links : {
//                     website: "https://jakeokony1024.github.io/Mikes-Movie-Search/",
//                     github: "https://github.com/jakeokony1024/Mikes-Movie-Search",
//                 },
//                 software: {
//                     javaScript: "assets_copy/images/javascriptlogo.PNG",
//                     JQuery: "assets_copy/images/jquerylogo.PNG",
//                     CSS : "assets_copy/images/csslogo.PNG",
//                     HTML: "assets_copy/images/htmllogo.PNG", 
//                 },
//             },  
//             {
//                 id: "proj2",
//                 image: "./assets_copy/images/csslogo.PNG",
//                 title: "Image Click Game",
//                 description: "This site gives the user a table of images and directions to try and click on each different image no more than once. Once an image is clicked, the entire table is rearranged in a random order, and if the same image is clicked twice, the score is set back to zero. ",
//                 links : {
//                     website: "https://jakeokony1024.github.io/clickgame-2/",
//                     github: "https://github.com/jakeokony1024/clickgame-2",
//                 },
//                 software: {
//                     javaScript: "assets_copy/images/javascriptlogo.PNG",
//                     JQuery: "assets_copy/images/jquerylogo.PNG",
//                     CSS : "assets_copy/images/csslogo.PNG",
//                     HTML: "assets_copy/images/htmllogo.PNG", 
//                     React: "assets_copy/images/reactlogo.PNG"
//                 },   
//             },  
//             {
//                 id: "proj3",
//                 image: "./assets_copy/images/reactlogo.PNG",
//                 title: "Friend Finder App",
//                 description: "This site has the user go through a list of questions, and based on the answers gives them a 'friend' they are most compatible with.",
//                 links : {
//                     website: "https://dry-temple-36787.herokuapp.com/",
//                     github: "https://github.com/jakeokony1024/FriendFinder",
//                 },
//                 software: {
//                     javaScript: "assets_copy/images/javascriptlogo.PNG",
//                     Express: "assets_copy/images/expresslogo.PNG",
//                     CSS : "assets_copy/images/csslogo.PNG",
//                     HTML: "assets_copy/images/htmllogo.PNG", 
//                     NodeJS: "assets_copy/images/nodejslogo.PNG",
//                 },
//             },
//             {
//                 id: "proj4",
//                 image: "./assets_copy/images/nodejslogo.PNG",
//                 title: "Giphy Image Search",
//                 description: "This site allows users to search for a list of GIF images populated from the Giphy API. Images can be clicked to show the animation, and clicked again to stop animation.",
//                 links : {
//                     website: "https://jakeokony1024.github.io/Giphy-App/",
//                     github: "https://github.com/jakeokony1024/Giphy-App",
//                 },
//                 software: {
//                     javaScript: "assets_copy/images/javascriptlogo.PNG",
//                     JQuery: "assets_copy/images/jquerylogo.PNG",
//                     CSS : "assets_copy/images/csslogo.PNG",
//                     HTML: "assets_copy/images/htmllogo.PNG", 
//                 },
//         },
// ];
//     let softWareImgArray = [];
//     let projectTitle;
//     let projectDescription;
//     let projectImage ;
//     let projectLinks = [];
//     ////Modal Button Function////
//     jQuery(':button').click(function () {
//         if (this.id == 'aboutButton') {
//             aboutModal.style.display = "block";
//             portfolioModal.style.display = "none";
//         }
//         else if (this.id == 'portfolioButton') {
//             console.log(projectModal);
//             portfolioModal.style.display = "block";
//             aboutModal.style.display = "none";
//             if ($('#projectButtons').is(':empty')){
//                 projectCards();
//             }else{
//                 return;
//             }
//         }
//         else if (this.id == 'aboutClose') {
//             aboutModal.style.display = "none";
            
//         }
//         else if (this.id == 'portClose') {
//             portfolioModal.style.display = "none";
//         }
//         else if(this.id =='projectClose') {
//             projectModal.style.display = "none";
//         }
//         else if(target = window) {
//             portfolioModal.style.display = "none";
//             projectModal.style.display = "none";
//             aboutModal.style.display = "none";
//         }
//     });
    
//     // //Software Image Slideshow function//
//     // let imageIndex = 0;
//     // let currentImage = $("#current-image");
//     // changeImage = () => {
//     //     currentImage.attr("src", softWareImgArray[imageIndex]);
//     //     imageIndex++;
//     //     if(imageIndex > 9){
//     //         imageIndex = 0;
//     //     }
//     // }

// //Project Details Display //
//     $('body').on('click', 'button.proj-buttons', function(){
//         if (this.id == 'proj0'){
//             projectModal.style.display = "block";
//             projectTitle = projectArray[0].title;
//             projectImage = projectArray[0].image;
//             projectLinkGH = projectArray[0].links.github;
//             projectLinkWS = projectArray[0].links.website;
//             softWareImgArray = projectArray[0].software;
//             console.log('line 125', softWareImgArray.CSS);
//             $("#logos-container").html(softWareImgArray);
//             $("#project-title").text(projectTitle);
//             $("#project-image").attr("src", projectImage);  
//             $("#website").attr("href", projectLinkWS);
//             $("#github").attr("href", projectLinkGH);
//             imageContainer = $("#image-container");
//             image = $("<img class ='software-image' src=''>");
//             image.attr('src', softWareImgArray.javaScript);
//             image1 = $("<img class ='software-image' src=''>");
//             image1.attr('src', softWareImgArray.JQuery);
//             image2 = $("<img class ='software-image' src=''>");
//             image2.attr('src', softWareImgArray.CSS);
//             image3 = $("<img class ='software-image' src=''>");
//             image3.attr('src', softWareImgArray.HTML);
//             image4 = $("<img class ='software-image' src=''>");
//             image4.attr('src', softWareImgArray.Express);
//             image5 = $("<img class ='software-image' src=''>");
//             image5.attr('src', softWareImgArray.Handlebars);
//             image6 = $("<img class ='software-image' src=''>");
//             image6.attr('src', softWareImgArray.NodeJS);
//             image7 = $("<img class ='software-image' src=''>");
//             image7.attr('src', softWareImgArray.MySQL);
//             image8 = $("<img class ='software-image' src=''>");
//             image8.attr('src', softWareImgArray.Sequelize);

//             imageContainer.append(image, image1, image2, image3, image4, image5, image6, image7, image8);

//         } else if (this.id == 'proj1') {
//             projectModal.style.display = "block";
//             projectTitle = projectArray[1].title;
//             projectImage = projectArray[1].image;
//             projectLinkGH = projectArray[1].links.github;
//             projectLinkWS = projectArray[1].links.website;
//             $("#project-title").text(projectTitle);
//             $("#project-image").attr("src", projectImage);  
//             $("#website").attr("href", projectLinkWS);
//             $("#github").attr("href", projectLinkGH);
//             imageContainer = $("#image-container");
//             imageContainer.empty();
//             image = $("<img class ='software-image' src=''>");
//             image.attr('src', softWareImgArray.javaScript);
//             image1 = $("<img class ='software-image' src=''>");
//             image1.attr('src', softWareImgArray.JQuery);
//             image2 = $("<img class ='software-image' src=''>");
//             image2.attr('src', softWareImgArray.CSS);
//             image3 = $("<img class ='software-image' src=''>");
//             image3.attr('src', softWareImgArray.HTML);
//             imageContainer.append(image, image1, image2, image3);


//         } else if (this.id == 'proj2') {
//             projectModal.style.display = "block";
//             projectTitle = projectArray[2].title;
//             projectImage = projectArray[2].image;
//             projectLinkGH = projectArray[2].links.github;
//             projectLinkWS = projectArray[2].links.website;
//             $("#project-title").text(projectTitle);
//             $("#project-image").attr("src", projectImage);
//             $("#website").attr("href", projectLinkWS);
//             $("#github").attr("href", projectLinkGH);
//             imageContainer = $("#image-container");
//             imageContainer.empty();
//             image = $("<img class ='software-image' src=''>");
//             image.attr('src', softWareImgArray.javaScript);
//             image1 = $("<img class ='software-image' src=''>");
//             image1.attr('src', softWareImgArray.JQuery);
//             image2 = $("<img class ='software-image' src=''>");
//             image2.attr('src', softWareImgArray.CSS);
//             image3 = $("<img class ='software-image' src=''>");
//             image3.attr('src', softWareImgArray.HTML);
//             image4 = $("<img class ='software-image' src=''>");
//             image4.attr('src', softWareImgArray.React);
        
//             imageContainer.append(image, image1, image2, image3, image4);


//         } else if (this.id == 'proj3') {
//             projectModal.style.display = "block";
//             projectTitle = projectArray[3].title;
//             projectImage = projectArray[3].image;
//             projectLinkGH = projectArray[3].links.github;
//             projectLinkWS = projectArray[3].links.website;
//             $("#project-title").text(projectTitle);
//             $("#project-image").attr("src", projectImage);
//             $("#website").attr("href", projectLinkWS);
//             $("#github").attr("href", projectLinkGH);
//             imageContainer = $("#image-container");
//             imageContainer.empty();
//             image = $("<img class ='software-image' src=''>");
//             image.attr('src', softWareImgArray.javaScript);
//             image1 = $("<img class ='software-image' src=''>");
//             image1.attr('src', softWareImgArray.Express);
//             image2 = $("<img class ='software-image' src=''>");
//             image2.attr('src', softWareImgArray.CSS);
//             image3 = $("<img class ='software-image' src=''>");
//             image3.attr('src', softWareImgArray.HTML);
//             image4 = $("<img class ='software-image' src=''>");
//             image4.attr('src', softWareImgArray.NodeJS);
//             imageContainer.append(image, image1, image2, image3, image4);

//         } else if (this.id == 'proj4') {
//             projectModal.style.display = "block";
//             projectTitle = projectArray[4].title;
//             projectImage = projectArray[4].image;
//             projectLinkGH = projectArray[4].links.github;
//             projectLinkWS = projectArray[4].links.website;
//             $("#project-title").text(projectTitle);
//             $("#project-image").attr("src", projectImage);
//             $("#website").attr("href", projectLinkWS);
//             $("#github").attr("href", projectLinkGH);
//             imageContainer = $("#image-container");
//             imageContainer.empty();
//             image = $("<img class ='software-image' src=''>");
//             image.attr('src', softWareImgArray.javaScript);
//             image1 = $("<img class ='software-image' src=''>");
//             image1.attr('src', softWareImgArray.JQuery);
//             image2 = $("<img class ='software-image' src=''>");
//             image2.attr('src', softWareImgArray.CSS);
//             image3 = $("<img class ='software-image' src=''>");
//             image3.attr('src', softWareImgArray.HTML);

//             imageContainer.append(image, image1, image2, image3);

//         } 
//     });
    
//     const projectCards = () => {
//         // iterate through projectArray object, grab out titles, descriptions, images//
//         projectArray.forEach((element, index) => {
//             a = $("<button class='btn btn-primary proj-buttons' id='"+ element.id +"'>");
//             b = $("<p class='card-text'>");
//             c = $("<img alt='image' class='card-img-top'>").attr("src", element.image);
//             a.text(element.title);
//             b.text(element.description);
//             $("#image-target").append(c);
//             $("#projectButtons").append(c,a,b);
//         })
//     }


});






