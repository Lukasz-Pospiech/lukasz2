
let menuState = 'closed';
function menuShowOrHide() {
    let menuDiv = document.getElementById("menuDIV");
    let menuDiv2 = document.getElementById("menuDIV2");

    document.getElementById("navBar").style.backgroundColor = "black"; 

    if (menuState === 'closed') {
        menuShow();
    }
    else if (menuState === 'opened') {
        menuHide();
    }

    function menuShow() {
        // document.getElementById("hamburgerIcon").style.display = "none";
        // document.getElementById("crossIcon").style.display = "inline-block";
        menuDiv.className = "menuDivHidden menuDivHiddenEject";
        menuDiv2.className = "menuDivHidden2 menuDivHiddenEject2";
        menuState = 'opened';
    }
    function menuHide() {
        // document.getElementById("crossIcon").style.display = "none";
        // document.getElementById("hamburgerIcon").style.display = "inline-block";
        menuDiv.className = "menuDivShown";
        menuDiv2.className = "menuDivShown2";
        menuState = 'closed';
    }
}


