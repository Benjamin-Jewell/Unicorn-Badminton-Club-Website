function changeCSS(){
    var cssSheet = document.getElementById("cssSheet")
    var href = cssSheet.getAttribute("href")

    if(href == "light.css"){
        cssSheet.setAttribute("href", "dark.css")
        localStorage.setItem("mode", "dark")
        document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Light Mode"
    } else{
        cssSheet.setAttribute("href", "light.css")
        localStorage.setItem("mode", "light")
        document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Dark Mode"
    }
}

var savedMode = localStorage.getItem("mode")

if(savedMode == "dark"){
    document.getElementById("cssSheet").setAttribute("href", "dark.css")
    document.getElementById("darkmode-accessibility-button").innerHTML = "Switch To Light Mode"
}