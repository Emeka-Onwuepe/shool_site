var button = document.getElementById("nav");
var navpanel = document.getElementById("navpanel");
var closebutton = document.getElementById("closebutton");
var about = document.getElementById("about");
var x_axis = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
var x_axisS = document.documentElement.clientWidth ||
    document.body.clientWidth;
var y_axis = window.pageYOffset || document.documentElement.scrollTop ||
    document.body.scrollTop;
closebutton.style.display = "none";
var SafariDetector = !/function/.test(window.HTMLElement);
if (SafariDetector) {
    var logo = document.getElementById("img");
    logo.style.borderRadius = "50%"
}

function displayNav() {

    if (x_axis >= 799 && !SafariDetector) {

        button.style.display = "block";
    } else if (x_axis <= 798 && !SafariDetector) {
        button.style.display = "none";
    }
    if (x_axisS >= 799 && SafariDetector) {
        button.style.display = "block";
    } else if (x_axisS <= 798 && SafariDetector) {
        button.style.display = "none";
    }
}
displayNav();

function openButton() {
    var getBotton = button.style.display;
    if (getBotton === "none") {
        button.style.display = "block";
        closebutton.style.display = "block";
        navpanel.style.paddingBottom = "0px"

    } else {
        button.style.display = "none";
        closebutton.style.display = "none";
        navpanel.style.paddingBottom = "3px"
    }
}

function closeButton() {
    button.style.display = "none";
    closebutton.style.display = "none";
    navpanel.style.paddingBottom = "3px"
}

function copyRightDate(x) {
    var d = new Date;
    var year = d.getFullYear();
    var footerDate = document.getElementById("footerdate");
    if (year == x) {
        footerDate.innerHTML = year;
    } else {
        footerDate.innerHTML = x + "-" +
            year;

    }

}
copyRightDate(2018)
window.addEventListener('resize', function() { myResize() });

function myResize() {
    var x_axis = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (x_axis >= 799 && !SafariDetector) {
        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        about.removeAttribute("style");
        about.style.paddingTop = "0px";
    } else if (x_axis <= 798 && !SafariDetector) {

        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        button.style.display = "none";
        closebutton.style.display = "none";
        about.style.paddingTop = "0px";
    }
    //for safari and his brothers
    var x_axisS = document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (x_axisS >= 799 && SafariDetector) {
        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        about.removeAttribute("style");
        navpanel.style.paddingBottom = "0px"
        button.style.display = "block";
        navpanel.style.position = "absolute";
        navpanel.style.padding = "0px";
        navpanel.style.top = "100px";
        navpanel.style.width = "600px";
        about.style.paddingTop = "0px";

    } else if (x_axisS <= 798 && SafariDetector) {

        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        button.style.display = "none";
        closebutton.style.display = "none";
        navpanel.style.width = "100%";
        navpanel.style.position = "relative";
        navpanel.style.paddingTop = "5px";
        navpanel.style.top = "0px";
        navpanel.style.display = "block";
        about.style.paddingTop = "0px";
    }
}

function backToTop() {

    var y_axis = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop;
    var bTpB = document.getElementById("backToTop");
    if (y_axis >= 2000) {
        bTpB.style.display = "block";
    } else { bTpB.style.display = "none"; }
}
window.addEventListener('scroll', function() { stickSideBar(), backToTop() });

function stickSideBar() {
    var x_axis = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    var y_axis = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop;
    var tracker = document.getElementById("days");
    var nav = document.getElementById("nav");
    var navpanel = document.getElementById("navpanel");
    var h1 = document.getElementById("h1");
    var navOffset = tracker.offsetTop + tracker.offsetHeight;
    if (x_axis <= 798 && y_axis >= navOffset && !SafariDetector) {
        navpanel.style.position = "fixed";
        navpanel.style.top = "0px";
        navpanel.style.width = "100%";
        about.style.paddingTop = "40px";
    } else if (x_axis <= 798 && y_axis <= navOffset && !SafariDetector) {
        navpanel.style.position = "relative";
        about.style.paddingTop = "0px"
        navpanel.style.width = "100%";
    } else if (x_axis >= 799 && y_axis >= 100 && !SafariDetector) {
        navpanel.style.position = "fixed";
        navpanel.style.width = "100%";
        navpanel.style.top = "0px";
    } else if (x_axis >= 799 && y_axis <= 99 && !SafariDetector) {
        navpanel.style.position = "absolute";
        navpanel.style.width = "600px";
        navpanel.style.top = "100px";
        navpanel.style.padding = "0px";
        navpanel.style.margin = "0px";
    }

    //for Safari and his Brothers
    var x_axisS = document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (x_axisS <= 798 && y_axis >= navOffset && SafariDetector) {
        navpanel.style.position = "fixed";
        navpanel.style.top = "0px";
        navpanel.style.width = "100%";
        about.style.paddingTop = "40px"
    } else if (x_axisS <= 798 && y_axis <= navOffset && SafariDetector) {
        navpanel.style.position = "relative";
        about.style.paddingTop = "0px"
        navpanel.style.width = "100%";
    } else if (x_axisS >= 799 && y_axis >= 100 && SafariDetector) {
        navpanel.style.position = "fixed";
        navpanel.style.width = "100%";
        navpanel.style.top = "0px";
    } else if (x_axisS >= 799 && y_axis <= 99 && SafariDetector) {
        navpanel.style.position = "absolute";
        navpanel.style.width = "600px";
        navpanel.style.top = "100px";
        navpanel.style.padding = "0px";
    }


}