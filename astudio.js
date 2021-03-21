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

function urlToDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

function go(name) {
    if (name.includes("https://")) {
        window.location.href = name;
    } else if (name.includes("http://")) {
        window.location.href = name;
    } else {
        let currentHostname = urlToDomain(window.location.href);
        let newHostname = "https://" + currentHostname + "/" + name;
        window.location.href = newHostname;
    }
}

function updateResults() {
    let results = $(".articleSearch").val();
    $('.articleButton').each(function(i, object) {
        text = $(this).text();
        text = text.toLowerCase();
        results = results.toLowerCase();
        if (text.includes(results)) {
            $(this).show();
        } else if (results == "") {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}