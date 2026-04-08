//creates the function "changeCSS()" which is ran on the accessibility page when the "switch to _ mode" button is pressed
function changeCSS(){
    //finds the element in the document with the id of cssSheet, and checks what href value it has
    var cssSheet = document.getElementById("cssSheet")
    var href = cssSheet.getAttribute("href")

    //if the href value is light, it is changed to dark, which is also stored in local storage, and the button text is changed
    if(href == "light.css"){
        cssSheet.setAttribute("href", "dark.css")
        localStorage.setItem("mode", "dark")
        document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Light Mode"
    } 
    //if the href value is dark, it is changed to light, which is also stored in local storage, and the button text is changed
    else{
        cssSheet.setAttribute("href", "light.css")
        localStorage.setItem("mode", "light")
        document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Dark Mode"
    }
}

//sets the value of the variable "savedMode" to the value of whatever is in localStorage
var savedMode = localStorage.getItem("mode")

//if the savedMode is dark, the cssSheet href value is changed to dark, and the button text is changed
if(savedMode == "dark"){
    document.getElementById("cssSheet").setAttribute("href", "dark.css")
    document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Light Mode"
}