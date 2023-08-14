//mode buttons
let mode = localStorage.getItem("mode");

function lm(){
    localStorage.setItem("mode", "lightMode");
    modeCheck();
}

function dm(){
    localStorage.setItem("mode", "darkMode");
    modeCheck();
}

function cm(){
    localStorage.setItem("mode", "communistMode");
    modeCheck();
}

if(mode === "lightMode"){
    lm();
} else if(mode === "darkMode"){
    dm();
} else if(mode === "communistMode"){
    cm();
}

function modeCheck(){
    mode = localStorage.getItem("mode");
    if(mode == "lightMode"){
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("footer").style.backgroundColor = "white";
        document.body.style.color = "black";
        colorLinks("black");
    } else if(mode == "darkMode"){
        document.getElementById("header").style.backgroundColor = "black";
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("footer").style.backgroundColor = "black";
        document.body.style.color = "white";
        colorLinks("white");
    } else if(mode == "communistMode"){
        document.getElementById("header").style.backgroundColor = "red";
        document.getElementById("main").style.backgroundColor = "red";
        document.getElementById("footer").style.backgroundColor = "red";
        document.body.style.color = "gold";
        colorLinks("gold");
    }
}

function colorLinks(hex){
    var links = document.getElementsByTagName("a");
    for(var l=0; l<links.length; l++){
        if(links[l].href)
        {
            links[l].style.color = hex;  
        }
    }  
}

//pagination
let currentPage = 0;
let rows = 5;
let pagination = [];
let articles = [];
let items = document.getElementById("items").children.length;


function next(){
    currentPage++;
    activePage();
    changePage();
    shiftPages();
}

function prev(){
    currentPage--;
    activePage();
    changePage();
    shiftPages();
}

function activePage(){
    if(pagination.length == 0){
        addToPagination();
    }
    for(var i=0; i<pagination.length; i++){
        document.getElementById('page' + i).classList.remove('active');
    }
    document.getElementById('page' + currentPage).classList.add("active");
}

function addToPagination(){
    for(var n=0; n<5; n++){
        pagination.push(document.getElementById("page" + n));
    }
}

function changePage(){
    let artStart = currentPage * rows;
    for(var a=0; a<items; a++){
        let articles = document.getElementById("article" + a);
        articles.style.display = "none";
    }
    for(var d=0; d<rows; d++){
        let firstArticle = artStart + d;
        console.log(artStart);
        let displayArticles = document.getElementById("article" + firstArticle);
        displayArticles.style.display = "block";
    }
}

/*function shiftPages(){
    if(currentPage > 1){
        let active = currentPage + 1;
        console.log(active)
        document.getElementById("page0").innerHTML = active - 2;
        document.getElementById("page1").innerHTML = active - 1;
        document.getElementById("page2").innerText = active;
        document.getElementById("page3").innerText = active + 1;
        document.getElementById("page4").innerText = active + 2;
    }
}*/