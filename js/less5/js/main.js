let allArticles = [];

function saveArticle() {
    let articleObj ={};
    let title = document.getElementById('title').value;
    let imgUrl = document.getElementById('imgsrc').value;
    let article = document.getElementById('text').value;

    if(title === "" && imgUrl === "" && article === ""){
        alert("Input should be not empty");
     } else {
        articleObj.title = title;
        articleObj.img = imgUrl;
        articleObj.article = article;
        articleObj.sentencesArr = article.split(".");
        articleObj.sentencesNum = articleObj.sentencesArr.length;
        allArticles.push(articleObj);
        let info = document.getElementById('info');
        info.innerText = "Article has been saved";

        emptyFields();
        console.dir(allArticles);
    }
    // this logic can be change later
}

function emptyFields() {
    document.getElementById('title').value = "";
    document.getElementById('imgsrc').value = "";
    document.getElementById('text').value = "";
    setTimeout(function(){
        info.innerText = "";
        }, 2000);
}

function showArticles() {
    for (var i = 0; i < allArticles.length; i++){
        let obj = allArticles[i];

        let objTitle = document.createElement("h3");
        let textTitle = document.createTextNode(obj.title);
        objTitle.appendChild(textTitle);

        let objArticle = document.createElement("article");
        let textArticle = document.createTextNode(obj.article);
        objArticle.appendChild(textArticle);

        let wrapperObj = document.createElement("div");
        wrapperObj.appendChild(objTitle);
        wrapperObj.appendChild(objArticle);
        wrapperObj.className = 'articleWrapper';

        document.getElementById('articleContainer').appendChild(wrapperObj);
    }
}

// http://regexlib.com/(X(1)A(_K4msBNhveBGp-WE3E-VQWkZcCaAuL7D2i-eZ_O9SDzsIbo6Dqpa0zW3K2ERlwtfuxmcFZSOu1ms1t2WkhjOiOMzjNhmGd0okQ1GBRrzPaRONqGvCNtubk1HJvmEFKOMuv5OM22BfT-XEpe5lK82O_ObioWUQ7Rd34RP1BUG8fOjYmCBpBK-97q4TF-8qVvx0))/Search.aspx?k=&c=1&m=-1&ps=20













