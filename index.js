document.getElementById("c1").style.cursor = "pointer";
document.getElementById("c2").style.cursor = "pointer";
document.getElementById("c3").style.cursor = "pointer";
var tablinks=document.getElementsByClassName("tablinks");
var contents=document.getElementsByClassName("contents");

function opentab(tabname)
{
    for(tablink of tablinks)
        {
            tablink.classList.remove("activelink");
        }
    for(content of contents)
        {
            content.classList.remove("activecontent");
        }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activecontent");
}

var sidemenu=document.getElementById("sidemenu")