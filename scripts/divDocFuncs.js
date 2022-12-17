function setMouseOverBntView(obj) {
    var btn = document.getElementById(obj);
    btn.className = "news_input_mouse_over";
}

function setNewsBtnView(obj) {
    var btn = document.getElementById(obj);
    btn.className = "news_input";
}

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

function getRandomIntagerArray(length = 10, min = -100, max = 100) {
    var arr = [];
    for(var i = 0; i < length; i++)
    {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }

    return arr;
}

function calculateSumOfArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return Math.round(sum);
}


function ConvertDivChildsToTreeView(divId)
{
    var div = document.getElementById(divId);
    var treeView = document.getElementById("treeDiv");
    var childs = div.childNodes;
    for(var i = 0; i < childs.length; i++)
    {
        var li = document.createElement("li");
        li.innerHTML = childs[i].innerHTML;
        treeView.appendChild(li);
        ConvertDivChildsToTreeView(childs[i].id);
    }
}