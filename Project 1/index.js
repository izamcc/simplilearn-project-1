function employeecheck() {
    var pass = document.getElementById('postpassword').value;
    console.log(pass);
    if (pass == "123"){
        console.log("Correct!!!")
        document.getElementById('employeeName').disabled = false;
        document.getElementById('employeeJT').disabled = false;
        document.getElementById('gender').disabled = false;
        document.getElementById('postTitle').disabled = false;
        document.getElementById('postSubtitle').disabled = false;
        document.getElementById('blogtext').disabled = false;
        document.getElementById('postsubmit').disabled = false;
    }else{
        console.log("NO!!!")
    }
}

function post() {

    //card creation
    document.getElementById('blogbody').insertAdjacentHTML('beforeend','<div class="postcard"></div>')
    var card = document.getElementById('blogbody').lastElementChild 

    //blog post information section :: Start
    card.insertAdjacentHTML('beforeend','<div class="row text-center"></div>')
    var row = document.getElementById('blogbody').lastElementChild.firstElementChild

    //employee informatin section :: Start
    row.insertAdjacentHTML('beforeend','<div class="col-2"></div>')
    var col1 = document.getElementById('blogbody').lastElementChild.firstElementChild.firstElementChild
    //picture 
    var g = document.getElementById('gender').value;
    if (g == "male"){
        col1.insertAdjacentHTML('beforeend','<img src="./img/MProfile.png" alt="profile picture" class="img-fluid">')
    }else{
        col1.insertAdjacentHTML('beforeend','<img src="./img/FProfile.png" alt="profile picture" class="img-fluid">')
    }
    //employee name 
    col1.insertAdjacentHTML('beforeend', '<h4></h4>')
    var name = document.getElementById('blogbody').lastElementChild.firstElementChild.firstElementChild.lastElementChild
    name.innerHTML = document.getElementById('employeeName').value
    //employee jop title 
    col1.insertAdjacentHTML('beforeend', '<h6></h6>')
    var jt = document.getElementById('blogbody').lastElementChild.firstElementChild.firstElementChild.lastElementChild
    jt.innerHTML = document.getElementById('employeeJT').value
    //employee information section :: End


    //blog post titles section :: Start
    row.insertAdjacentHTML('beforeend','<div class="col-10 text-center" style="padding-top:5%;">')
    var col2 = document.getElementById('blogbody').lastElementChild.firstElementChild.lastElementChild
    //post Title
    col2.insertAdjacentHTML('beforeend','<div class="row"><h1></h1></div>')
    var posttitle = document.getElementById('blogbody').lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild
    posttitle.innerHTML = document.getElementById('postTitle').value
    //post subtitle
    col2.insertAdjacentHTML('beforeend','<div class="row"><h3></h3></div>')
    var postsubtitle = document.getElementById('blogbody').lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild
    postsubtitle.innerHTML = document.getElementById('postSubtitle').value
    //blog post titles section  :: End
    //blog post information section :: End


    //blog text
    card.insertAdjacentHTML('beforeend','<div style="padding: 2%;"></div>')
    var blogtext = document.getElementById('blogbody').lastElementChild.lastElementChild
    blogtext.innerHTML = document.getElementById('blogtext').value

}