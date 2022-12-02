function setMouseOverBntView(obj) {
    var btn = document.getElementById(obj);
    btn.className = "news_input_mouse_over";
}

function setNewsBtnView(obj) {
    var btn = document.getElementById(obj);
    btn.className = "news_input";
}

// function updateUsersCount() {
//     var usersData = document.getElementById("usersCount");
//     var startCount = parseInt(usersData.innerHTML);
//     while(startCount < 10000)
//     {
//         usersData.innerHTML = startCount;
//         ++startCount;
//     }

// }

function animateNumbersChanging(id, start, end, duration) {
    if (start === end) return;

    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;

    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);

    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function getLastNewYearDays() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var monthCountLeft = 12 - mm;
    if(monthCountLeft == 0)
    {
        return 31 - dd;
    }

    var days = Math.ceil((newYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return days;
}