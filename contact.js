var button = document.getElementById("nav");
var navpanel = document.getElementById("navpanel");
var closebutton = document.getElementById("closebutton");
var formDiv = document.getElementById("formDiv");
//var check = screen.height * 0.75 + "px";
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
        navpanel.style.paddingBottom = "0px";

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
        formDiv.removeAttribute("style");
        formDiv.style.paddingTop = "5px"
    } else if (x_axis <= 798 && !SafariDetector) {

        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        button.style.display = "none";
        closebutton.style.display = "none";
        formDiv.style.paddingTop = "5px";
    }
    //for safari and his brothers
    var x_axisS = document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (x_axisS >= 799 && SafariDetector) {
        button.removeAttribute("style");
        navpanel.removeAttribute("style");
        formDiv.removeAttribute("style");
        navpanel.style.paddingBottom = "0px"
        button.style.display = "block";
        navpanel.style.position = "absolute";
        navpanel.style.padding = "0px";
        navpanel.style.top = "100px";
        navpanel.style.width = "600px";
        formDiv.style.paddingTop = "5px"

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
        formDiv.style.paddingTop = "5px"
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
        formDiv.style.paddingTop = "70px"
    } else if (x_axis <= 798 && y_axis <= navOffset && !SafariDetector) {
        navpanel.style.position = "relative";
        formDiv.style.paddingTop = "5px"
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
        formDiv.style.paddingTop = "70px"
    } else if (x_axisS <= 798 && y_axis <= navOffset && SafariDetector) {
        navpanel.style.position = "relative";
        formDiv.style.paddingTop = "5px"
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

var fullName = document.getElementById("full_name");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone_number");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var fullNameer = document.getElementById("full_nameer");
var emailer = document.getElementById("emailer");
var phoneNumberer = document.getElementById("phone_numberer");
var subjecter = document.getElementById("subjecter");
var messageer = document.getElementById("messageer");
fullName.addEventListener("keyup", function() {
    fullNameCheck();
})
email.addEventListener("keyup", function() {
    emailCheck();
})
phoneNumber.addEventListener("keyup", function() {
    phoneNumberCheck();
})
subject.addEventListener("keyup", function() {
    subjectCheck();
})
message.addEventListener("keyup", function() {
    messageCheck();
})
var submitbtn = document.getElementById("submit");
submitbtn.disabled = true;

function fullNameCheck() {
    var err = fullName.value;
    var test = /[^a-z\s]/i.test(err)
    if (test) {

        fullNameer.innerHTML = "Only alphabets are allowed";
        fullName.style.marginBottom = "0px";
    } else {
        fullNameer.innerHTML = "";
        fullName.style.marginBottom = "15px";
    }
    formButtonEnabler()

}

function emailCheck() {
    var err = email.value;
    var test = /[@]/i.test(err) && /[a-z]/i.test(err) && /[.]/i.test(err) && !/[\s]/i.test(err)

    if (test) {
        emailer.innerHTML = "";
        email.style.marginBottom = "15px";
    } else if (!test) {
        emailer.innerHTML = "Invalid email";
        email.style.marginBottom = "0px";
    }

    if (err.length == 0) {
        emailer.innerHTML = "";
        email.style.marginBottom = "15px";
    }
    formButtonEnabler()

}

function phoneNumberCheck() {
    var err = phoneNumber.value;
    var test = /[^0-9+]/i.test(err)
    if (test || err.length < 11) {
        phoneNumberer.innerHTML = "Invalid phone number";
        phoneNumber.style.marginBottom = "0px";
    } else {
        phoneNumberer.innerHTML = "";
        phoneNumber.style.marginBottom = "15px";
    }
    if (err.length == 0) {
        phoneNumberer.innerHTML = "";
        phoneNumber.style.marginBottom = "15px";
    }
    formButtonEnabler()

}

function messageCheck() {
    var err = message.value;
    var test = /[^a-z\s.,;':)(0-9"#_-]/i.test(err)
    if (test) {
        messageer.innerHTML = "Character not allowed";

    } else {
        messageer.innerHTML = "";

    }
    formButtonEnabler()

}

function subjectCheck() {
    var err = subject.value;
    var test = /[^a-z\s.,;':)(0-9"#_-]/i.test(err)
    if (test) {
        subjecter.innerHTML = "Character not allowed";
        subject.style.marginBottom = "0px";
    } else {
        subjecter.innerHTML = "";
        subject.style.marginBottom = "15px";
    }
    formButtonEnabler()

}


function formButtonEnabler() {
    var formValues = fullName.value.length > 0 && email.value.length > 0 &&
        phoneNumber.value.length > 0 && subject.value.length > 0 && message.value.length > 0
    var formValueserr = fullNameer.innerHTML.length == 0 && emailer.innerHTML.length == 0 &&
        phoneNumberer.innerHTML.length == 0 && subjecter.innerHTML.length == 0 && messageer.innerHTML.length == 0
    if (formValues && formValueserr) {
        submitbtn.disabled = false;
    } else { submitbtn.disabled = true; }
    if (submitbtn.disabled == true) {
        submitbtn.style.backgroundColor = "grey";
    } else {
        submitbtn.style.backgroundColor = "#09794a";
    }
}
formButtonEnabler();