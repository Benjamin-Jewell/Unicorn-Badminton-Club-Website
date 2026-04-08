//gets the value of 'fontsize' from localstorage and stores it in the variable 'fontsize'
var fontsize = localStorage.getItem('fontsize')

//creates the function 'smalltext' which is run on the accessibility page when the small button is pressed
function smallText(){
    //sets the value of the fontsize of all items in the element which has the id of 'content' to small
    document.getElementById('content').style.fontSize = "small"
    //sets fontize in localstorage to small
    localStorage.setItem('fontsize', 'small')
}

//creates the function 'mediumtext' which is run on the accessibility page when the medium button is pressed
function mediumText(){
    //sets the value of the fontsize of all items in the element which has the id of 'content' to medium
    document.getElementById('content').style.fontSize = "medium"
    //sets fontize in localstorage to medium
    localStorage.setItem('fontsize', 'medium')
}

//creates the function 'largetext' which is run on the accessibility page when the large button is pressed
function largeText(){
    //sets the value of the fontsize of all items in the element which has the id of 'content' to large
    document.getElementById('content').style.fontSize = "large"
    //sets fontize in localstorage to large
    localStorage.setItem('fontsize', 'large')
}

//if fontsize is small
if (fontsize === 'small'){
    //sets the value of the fontsize of all items in the element which has the id of 'content' to small
    document.getElementById('content').style.fontSize = 'small'
}
//else if fontsize is medium
else if(fontsize === 'medium'){
    //sets the value of the fontsize of all items in the element which has the id of 'content' to medium
    document.getElementById('content').style.fontSize = 'medium'
}
//else (only remaning option being fontsize is large)
else{
    //sets the value of the fontsize of all items in the element which has the id of 'content' to large
    document.getElementById('content').style.fontSize = 'large'
}