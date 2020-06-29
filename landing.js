certi_data = document.getElementById("pills-tabContent"); 
console.log("hi")
certi_data.style.display = "none";

function showcert(){
    certi_data.style.display = "block";
    pills_tab = document.getElementById("pills-tab");
    pills_tab.className+=" mb-4"
    console.log("clicked");
}