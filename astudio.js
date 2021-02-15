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

function pageLoad() {
    updateTheme();
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

function parseArticle(article) {
    articleLines = article.split("\n");
    $(".article").html('');
    articleLines.forEach(function(item, index) {
        lineParts = item.split("::");
        if (lineParts[0] == "about") {
            $(".article").append(`
            <div class="articleInfo">
                <span class="title">` + lineParts[1] + `</span>
                <span class="author"><i class="las la-tag" id="articleAboutIcon"></i> ` + lineParts[3] + `</span>
                <span class="date"><i class="las la-calendar" id="articleAboutIcon"></i> ` + lineParts[2] + `</span>
            </div>
            `);
        } else if (lineParts[0] == "img") {
            if (lineParts.length == 3) {
                $(".article").append(`
                <div class="image">
                    <img src="` + lineParts[1] + `" class="articleImage" alt="` + lineParts[2] + `"/>
                    <div class="articleImageSubtitleOuter">
                        <span class="articleImageSubtitle">` + lineParts[2] + `</span>
                    </div>
                </div>
                `);
            } else {
                $(".article").append(`
                <img src="` + lineParts[1] + `" class="articleImageNoSubtitle" alt="Article Image"/>
                `);
            }
        } else if (lineParts[0] == "text") {
            if (lineParts.length == 3) {
                $(".article").append(`
                <span class="text" style="color: ` + lineParts[2] + `">` + lineParts[1] + `</span>
                `)
            } else {
                $(".article").append(`
                <span class="text">` + lineParts[1] + `</span>
                `);
            }
        } else if (lineParts[0] == "bold") {
            console.log(lineParts.length);
            if (lineParts.length == 3) {
                $(".article").append(`
                <span class="bold" style="color: ` + lineParts[2] + `">` + lineParts[1] + `</span>
                `)
            } else {
                $(".article").append(`
                <span class="bold">` + lineParts[1] + `</span>
                `);
            }
        } else if (lineParts[0] == "italic") {
            if (lineParts.length == 3) {
                $(".article").append(`
                <span class="italic" style="color: ` + lineParts[2] + `">` + lineParts[1] + `</span>
                `)
            } else {
                $(".article").append(`
                <span class="italic">` + lineParts[1] + `</span>
                `);
            }
        } else if (lineParts[0] == "underline") {
            if (lineParts.length == 3) {
                $(".article").append(`
                <span class="underline" style="color: ` + lineParts[2] + `">` + lineParts[1] + `</span>
                `)
            } else {
                $(".article").append(`
                <span class="underline">` + lineParts[1] + `</span>
                `);
            }
        } else if (lineParts[0] == "yt") {
            if (lineParts.length == 2) {
                $(".article").append(`
                <iframe src="https://www.youtube.com/embed/` + lineParts[1] + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="ytNoSubtitle"></iframe>
                `)
            } else {
                $(".article").append(`
                <div class="ytOuter">
                <iframe src="https://www.youtube.com/embed/` + lineParts[1] + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="yt"></iframe>
                    <div class="articleImageSubtitleOuter">
                        <span class="articleImageSubtitle">` + lineParts[2] + `</span>
                    </div>
                </div>
                `);
            }
        } else if (lineParts[0] == "code") {
            $(".article").append(`
            <span class="code">` + lineParts[1] + `</span>
            `);
        } else if (lineParts[0] == "linebreak") {
            $(".article").append(`
            <br>
            `);
        }
    });
}

function articleLoad() {
    let article = $('ac').text();
    parseArticle(article);
}