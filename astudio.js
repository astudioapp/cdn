function urlToDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

function toggleInfo() {
    if ($(".infoBox").css("display") == "none") {
        $(".infoBox").fadeIn(200);
        $(".infoIconLink").addClass("selected");
        $("#headerInfoIcon").removeClass("la-info-circle").addClass("la-times-circle");
    } else {
        $(".infoBox").fadeOut(200);
        $(".infoIconLink").removeClass("selected");
        $("#headerInfoIcon").removeClass("la-times-circle").addClass("la-info-circle");
    }
}

function toggleSubject() {
    if ($(".subjectBox").css("display") == "none") {
        $(".subjectBox").fadeIn(200);
        $(".subjects").addClass("selected");
    } else {
        $(".subjectBox").fadeOut(200);
        $(".subjects").removeClass("selected");
    }
}

function go(name) {
    let currentHostname = urlToDomain(window.location.href);
    let newHostname = "https://" + name + "." + currentHostname;
    window.location.href = newHostname;
}