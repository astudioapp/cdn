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
    let newHostname = "https://" + currentHostname + "/" + name;
    window.location.href = newHostname;
}

function pageLoad() {
    updateTheme();
}

function toggleDarkMode() {
    if (localStorage.theme == "dark") {
        localStorage.theme = "light";
        updateTheme();
    } else {
        localStorage.theme = "dark";
        updateTheme();
    }
}

function updateTheme() {
    if (localStorage.theme == "dark") {
        // Dark
        $('head').append(`
            <link rel="apple-touch-icon" sizes="180x180" href="https://astudioapp.github.io/cdn/icons/dark/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="https://astudioapp.github.io/cdn/icons/dark/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="https://astudioapp.github.io/cdn/icons/dark/favicon-16x16.png">
            <link rel="manifest" href="https://astudioapp.github.io/cdn/icons/dark/site.webmanifest">
            <link rel="mask-icon" href="https://astudioapp.github.io/cdn/icons/dark/safari-pinned-tab.svg" color="#000000">
            <link rel="shortcut icon" href="https://astudioapp.github.io/cdn/icons/dark/favicon.ico">
            <meta name="msapplication-TileColor" content="#000000">
            <meta name="msapplication-TileImage" content="https://astudioapp.github.io/cdn/icons/dark/mstile-144x144.png">
            <meta name="msapplication-config" content="https://astudioapp.github.io/cdn/icons/dark/browserconfig.xml">
            <meta name="theme-color" content="#000000">
        `);
        $('.darkToggle').removeClass('la-moon').addClass('la-sun');
        $('header').css('background-color', '#1f1f1f');
        $('html').css('background-color', '#1f1f1f');
        $('body').css('background-color', '#1f1f1f');
        $('.subjectBox').css('background-color', '#2b2b2b');
        $('.infoBox').css('background-color', '#2b2b2b');
        $('body').css('background-color', '#1f1f1f');
        $('.headerTitle').css('color', '#ffffff');
        $('.subjectItemLink').css('background-color', '#3d3d3d');
        $('.infoIconLink.selected').css('background-color', '2b2b2b');
        $('.subjectListSubject').css('background-color', '#2b2b2b');
        $('.infoIconLink').addClass('dark');
        $('.infoIconLinkDark').addClass('dark');
        $('span').css('color', '#ffffff');
        $('i').css('color', '#ffffff');
        $('a').css('color', '#ffffff');
        $('h1').css('color', '#ffffff');
        $('h2').css('color', '#ffffff');
        $('strong').css('color', '#ffffff');
    } else {
        // Light
        $('head').append(`
            <link rel="apple-touch-icon" sizes="180x180" href="https://astudioapp.github.io/cdn/icons/light/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="https://astudioapp.github.io/cdn/icons/light/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="192x192" href="https://astudioapp.github.io/cdn/icons/light/android-chrome-192x192.png">
            <link rel="icon" type="image/png" sizes="16x16" href="https://astudioapp.github.io/cdn/icons/light/favicon-16x16.png">
            <link rel="manifest" href="https://astudioapp.github.io/cdn/icons/light/site.webmanifest">
            <link rel="mask-icon" href="https://astudioapp.github.io/cdn/icons/light/safari-pinned-tab.svg" color="#4a86e8">
            <link rel="shortcut icon" href="https://astudioapp.github.io/cdn/icons/light/favicon.ico">
            <meta name="msapplication-TileColor" content="#ffffff">
            <meta name="msapplication-TileImage" content="https://astudioapp.github.io/cdn/icons/light/mstile-144x144.png">
            <meta name="msapplication-config" content="https://astudioapp.github.io/cdn/icons/light/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
        `);
        $('.darkToggle').removeClass('la-sun').addClass('la-moon');
        $('header').css('background-color', '#ffffff');
        $('html').css('background-color', '#ffffff');
        $('body').css('background-color', '#ffffff');
        $('.headerTitle').css('color', '#000000');
        $('span').css('color', '#000000');
        $('i').css('color', '#000000');
        $('a').css('color', '#000000');
        $('h1').css('color', '#000000');
        $('h2').css('color', '#000000');
        $('strong').css('color', '#000000');
        $('.infoIconLink').removeClass('dark');
        $('.infoIconLinkDark').removeClass('dark');
        $('.subjectListSubject').css('background-color', '#fcfcfc');
        $('.subjectBox').css('background-color', '#f5f5f5');
        $('.infoBox').css('background-color', '#f5f5f5');
        $('.subjectItemLink').css('background-color', '#eeeeee');
        $('.infoIconLink.selected').css('background-color', 'f5f5f5');
    }
}