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
localStorage.getItem("currentPage", currentPage);
let rows = 3;
let pagination = [];
let articles = [];
let items = document.getElementById("items").children.length;
let page = localStorage.getItem("page");
let pagesAvailable = Math.ceil(items / rows) - 1;

changePage();

function next(){
    if(currentPage < pagesAvailable){
     currentPage++;
    localStorage.setItem("page", currentPage);
    activePage();
    changePage();
    shiftPages();   
    }else{
        alert("Can't go further!");
    }
}

function prev(){
        if(currentPage > 0){
        currentPage--;
        localStorage.setItem("page", currentPage);
        activePage();
        changePage();
        shiftPages();
    }else{
        alert("Can't go further!");
    }
}

function selectPage0(){
    let Page0 = document.getElementById("page0").innerText;
    let page0 = Page0 - 1;
    localStorage.setItem("page", page0);
    currentPage = page0;
    activePage();
    changePage();
    shiftPages();
}

function selectPage1(){
    let Page1 = document.getElementById("page1").innerText;
    let page1 = Page1 - 1;
    localStorage.setItem("page", page1);
    currentPage = page1;
    activePage();
    changePage();
    shiftPages();
}

function selectPage2(){
    if(currentPage < pagesAvailable){
        let Page2 = document.getElementById("page2").innerText;
        let page2 = Page2 - 1;
        localStorage.setItem("page", page2);
        currentPage = page2;
        activePage();
        changePage();
        shiftPages(); 
    }else{
        alert("Can't go to this page yet!");
    }
}

function selectPage3(){
    if(currentPage < pagesAvailable){
        let Page3 = document.getElementById("page3").innerText;
        let page3 = Page3 - 1;
        localStorage.setItem("page", page3);
        currentPage = page3;
        activePage();
        changePage();
        shiftPages();
    }else{
        alert("Can't go to this page yet!");
    }
}

function selectPage4(){
    if(currentPage < pagesAvailable){
        let Page4 = document.getElementById("page4").innerText;
        let page4 = Page4 - 1;
        localStorage.setItem("page", page4);
        currentPage = page4;
        activePage();
        changePage();
        shiftPages(); 
    }else{
        alert("Can't go to this page yet!");
    }
}

if(page === "0"){
    selectPage0();
}else if (page === "1"){
    selectPage1();
}else if (page === "2"){
    selectPage2();
}else if (page === "3"){
    selectPage3();
}else if (page === "4"){
    selectPage4();
}

function activePage(){
    if(pagination.length == 0){
        addToPagination();
    }
    if(currentPage < 3){
        for(var i=0; i<pagination.length; i++){
            document.getElementById('page' + i).classList.remove('active');
        }
        document.getElementById('page' + currentPage).classList.add("active");
    }
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
        let displayArticles = document.getElementById("article" + firstArticle);
        if(displayArticles !== null){
            displayArticles.style.display = "block";
        }
    }
}

function shiftPages(){
    if(currentPage > 1){
        let active = currentPage + 1;
        document.getElementById("page0").innerHTML = active - 2;
        document.getElementById("page1").innerHTML = active - 1;
        document.getElementById("page2").innerHTML = active;
        document.getElementById("page3").innerHTML = active + 1;
        document.getElementById("page4").innerHTML = active + 2;
    }
}

function search(){
    let searchItem = document.getElementById("search").value.toUpperCase();
    let art = document.querySelectorAll('.art');
    let name = [];

    art.forEach((aname) => {
        name.push(aname.innerText);
    });

    for(var v=0; v<name.length; v++){
        name[v] = name[v].toUpperCase();
        if(name[v].includes(searchItem) === true){
            let artic = document.getElementById("article" + v);
            artic.style.display = "block";
        }else{
            let ar = document.getElementById("article" + v);
            ar.style.display = "none";
        }
    }
}