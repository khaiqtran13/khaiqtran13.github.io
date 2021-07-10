function openInfo(event, tabName) {
    
    //get elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
        console.log("hid" + tabcontent[i]);
    }

    // get elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += "  active";
}