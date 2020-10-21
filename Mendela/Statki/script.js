function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

var tab = createArray(12, 12);
var x;
var y;
var direction;
var size_tab = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

function checkShip(x, y, direction, i) {
    if (direction == 0) {
        for (var j = y - 1; j <= y + 1; j++) {
            for (var k = x - 1; k <= x + size_tab[i]; k++) {
                if (tab[j][k] == 1) {
                    return false;
                }
            }
        }
    }
    else {
        for (var j = x - 1; j <= x + 1; j++) {
            for (var k = y - 1; k <= y + size_tab[i]; k++) {
                if (tab[k][j] == 1) {
                    return false;
                }
            }
        }
    }

    return true;
}

for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
        tab[i][j] = 0
    }
}


for (var i = 0; i < size_tab.length; i++) {

    direction = randomInt(0, 2);
    if (direction == 0) {
        x = randomInt(1, 11 - size_tab[i]);
        y = randomInt(1, 11);
    }
    else {
        x = randomInt(1, 11);
        y = randomInt(1, 11 - size_tab[i]);
    }

    console.log("x = " + parseInt(x))
    console.log("y = " + parseInt(y))
    console.log(direction)
    console.log("dlugosc = " + size_tab[i])

    if (checkShip(x, y, direction, i) == true) {
        if (direction == 0) {
            for (var j = 0; j < size_tab[i]; j++) {
                tab[y][x + j] = 1
            }
        }
        else {
            for (var j = 0; j < size_tab[i]; j++) {
                tab[y + j][x] = 1
            }
        }
        console.log("kladzie")
    }
    else {
        i--;
        console.log("nie kladzie")
    }
}

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        if (tab[i][j] == 1) {
            var div_pelny = document.createElement("DIV")
            div_pelny.dataset.y = i
            div_pelny.dataset.x = j
            div_pelny.onmousedown = gra
            document.getElementById("komputer").append(div_pelny)
            div_pelny.classList.add("pelny", "pc")
        }
        else {
            var div_pusty = document.createElement("DIV")
            div_pusty.dataset.y = i
            div_pusty.dataset.x = j
            div_pusty.onmousedown = gra
            document.getElementById("komputer").append(div_pusty)
            div_pusty.classList.add("pusty", "pc")
        }
    }
}

var player_tab = createArray(12, 12);

for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
        player_tab[i][j] = 0
    }
}

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        var div_pusty = document.createElement("DIV")
        div_pusty.dataset.y = i
        div_pusty.dataset.x = j
        div_pusty.onmouseover = glow
        document.getElementById("gracz").append(div_pusty)
        div_pusty.classList.add("pusty", "empty")
    }
}

var prawy = 0;

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

var dlugosc = 4;
var okret = document.getElementsByClassName("okret")

var cztery = document.getElementById('cztery');

cztery.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 4;
    console.log("wybrana dlugosc = " + dlugosc)
};

var trzy1 = document.getElementById('trzy1');

trzy1.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 3;
    console.log("wybrana dlugosc = " + dlugosc)
};

var trzy2 = document.getElementById('trzy2');

trzy2.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 3;
    console.log("wybrana dlugosc = " + dlugosc)
};

var dwa1 = document.getElementById('dwa1');

dwa1.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 2;
    console.log("wybrana dlugosc = " + dlugosc)
};

var dwa2 = document.getElementById('dwa2');

dwa2.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 2;
    console.log("wybrana dlugosc = " + dlugosc)
};

var dwa3 = document.getElementById('dwa3');

dwa3.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 2;
    console.log("wybrana dlugosc = " + dlugosc)
};

var jeden1 = document.getElementById('jeden1');

jeden1.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 1;
    console.log("wybrana dlugosc = " + dlugosc)
};

var jeden2 = document.getElementById('jeden2');

jeden2.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 1;
    console.log("wybrana dlugosc = " + dlugosc)
};

var jeden3 = document.getElementById('jeden3');

jeden3.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 1;
    console.log("wybrana dlugosc = " + dlugosc)
};

var jeden4 = document.getElementById('jeden4');

jeden4.onclick = function () {
    for (var i = 0; i < okret.length; i++) {
        okret[i].classList.remove("chosen")
        okret[i].classList.add("not_chosen")
    }
    this.classList.add('chosen');
    this.classList.remove('not_chosen');
    dlugosc = 1;
    console.log("wybrana dlugosc = " + dlugosc)
};

var zmienna = 0;
var liczba_postawionych = 0;
var poczatek = 0;

function postaw(e) {

    e = e || window.event;
    switch (e.which) {
        case 1:
            console.log('left');

            var gracz_x = e.currentTarget.dataset.x
            var gracz_y = e.currentTarget.dataset.y

            if (prawy % 2 == 0) {
                if (11 - gracz_x > dlugosc) {
                    for (var i = 0; i < dlugosc; i++) {
                        if (player_tab[gracz_y][parseInt(gracz_x) + i] == 2 || player_tab[gracz_y][parseInt(gracz_x) + i] == 3 || player_tab[gracz_y][parseInt(gracz_x) + i] == 4) {
                            zmienna++;
                        }
                    }
                    if (zmienna == 0) {
                        var element = document.getElementsByClassName("chosen")
                        element[0].remove(this);

                        for (var j = parseInt(gracz_y) - 1; j <= parseInt(gracz_y) + 1; j++) {
                            for (var k = parseInt(gracz_x) - 1; k <= parseInt(gracz_x) + dlugosc; k++) {
                                player_tab[j][k] = 3
                            }
                        }
                        for (var j = 0; j < dlugosc; j++) {
                            player_tab[gracz_y][parseInt(gracz_x) + j] = 2
                        }
                        dlugosc = 0;
                    }
                    zmienna = 0;
                }
                else {
                    gracz_x = 11 - dlugosc;
                    for (var i = 0; i < dlugosc; i++) {
                        if (player_tab[gracz_y][parseInt(gracz_x) + i] == 2 || player_tab[gracz_y][parseInt(gracz_x) + i] == 3 || player_tab[gracz_y][parseInt(gracz_x) + i] == 4) {
                            zmienna++;
                        }
                    }
                    if (zmienna == 0) {
                        var element = document.getElementsByClassName("chosen")
                        element[0].remove(this);

                        for (var j = parseInt(gracz_y) - 1; j <= parseInt(gracz_y) + 1; j++) {
                            for (var k = parseInt(gracz_x) - 1; k <= parseInt(gracz_x) + dlugosc; k++) {
                                player_tab[j][k] = 3
                            }
                        }
                        for (var j = 0; j < dlugosc; j++) {
                            player_tab[gracz_y][parseInt(gracz_x) + j] = 2
                        }
                        dlugosc = 0;
                    }
                    zmienna = 0;
                }
            }
            else {
                if (11 - gracz_y > dlugosc) {
                    for (var i = 0; i < dlugosc; i++) {
                        if (player_tab[parseInt(gracz_y) + i][gracz_x] == 2 || player_tab[parseInt(gracz_y) + i][gracz_x] == 3 || player_tab[parseInt(gracz_y) + i][gracz_x] == 4) {
                            zmienna++
                        }
                    }
                    if (zmienna == 0) {
                        var element = document.getElementsByClassName("chosen")
                        element[0].remove(this);

                        for (var j = parseInt(gracz_x) - 1; j <= parseInt(gracz_x) + 1; j++) {
                            for (var k = parseInt(gracz_y) - 1; k <= parseInt(gracz_y) + dlugosc; k++) {
                                player_tab[k][j] = 3
                            }
                        }
                        for (var j = 0; j < dlugosc; j++) {
                            player_tab[parseInt(gracz_y) + j][gracz_x] = 2
                        }

                        dlugosc = 0;
                    }
                    zmienna = 0
                }
                else {
                    gracz_y = 11 - dlugosc;
                    for (var i = 0; i < dlugosc; i++) {
                        if (player_tab[parseInt(gracz_y) + i][gracz_x] == 2 || player_tab[parseInt(gracz_y) + i][gracz_x] == 3 || player_tab[parseInt(gracz_y) + i][gracz_x] == 4) {
                            zmienna++
                        }
                    }
                    if (zmienna == 0) {
                        var element = document.getElementsByClassName("chosen")
                        element[0].remove(this);

                        for (var j = parseInt(gracz_x) - 1; j <= parseInt(gracz_x) + 1; j++) {
                            for (var k = parseInt(gracz_y) - 1; k <= parseInt(gracz_y) + dlugosc; k++) {
                                player_tab[k][j] = 3
                            }
                        }
                        for (var j = 0; j < dlugosc; j++) {
                            player_tab[parseInt(gracz_y) + j][gracz_x] = 2
                        }

                        dlugosc = 0;
                    }
                    zmienna = 0
                }
            }

            liczba_postawionych++

            if (liczba_postawionych == 10) {
                var button = document.createElement("button")
                document.getElementById("guzior").append(button)
                button.classList.add("naciskacz")
                button.innerHTML = "Rozpocznij rozgrywkę"
                button.onclick = guzik
                liczba_postawionych++;

                document.getElementById("gracz").innerHTML = "Gracz <br/>"

                for (var i = 1; i < 11; i++) {
                    for (var j = 1; j < 11; j++) {
                        if (player_tab[i][j] == 0) { //biały - pusty
                            var div_pusty = document.createElement("DIV")
                            div_pusty.dataset.y = i
                            div_pusty.dataset.x = j
                            div_pusty.onmouseover = glow
                            div_pusty.onmousedown = postaw
                            div_pusty.onmousedown = tura
                            document.getElementById("gracz").append(div_pusty)
                            div_pusty.classList.add("pusty", "empty")
                        }
                        else if (player_tab[i][j] == 3) { //biały - nie postawisz
                            var div_wrong = document.createElement("DIV")
                            div_wrong.dataset.y = i
                            div_wrong.dataset.x = j
                            div_wrong.onmouseover = glow
                            div_wrong.onmousedown = tura
                            document.getElementById("gracz").append(div_wrong)
                            div_wrong.classList.add("zle", "empty")
                        }
                        else if (player_tab[i][j] == 1) { //zielony - hover
                            var div_temp = document.createElement("DIV")
                            div_temp.dataset.y = i
                            div_temp.dataset.x = j
                            div_temp.onmouseover = glow
                            div_temp.onmousedown = postaw
                            div_temp.onmousedown = tura
                            document.getElementById("gracz").append(div_temp)
                            div_temp.classList.add("stawia", "empty")
                        }
                        else if (player_tab[i][j] == 4) { //czerwony - hover zły
                            var div_czerwone = document.createElement("DIV")
                            div_czerwone.dataset.y = i
                            div_czerwone.dataset.x = j
                            div_czerwone.onmouseover = glow
                            div_czerwone.onmousedown = tura
                            document.getElementById("gracz").append(div_czerwone)
                            div_czerwone.classList.add("podswietl", "empty")
                        }
                        else if (player_tab[i][j] == 2) { //niebieski - postawiony
                            var div_pelny = document.createElement("DIV")
                            div_pelny.dataset.y = i
                            div_pelny.dataset.x = j
                            div_pelny.onmouseover = glow
                            div_pelny.onmousedown = tura
                            document.getElementById("gracz").append(div_pelny)
                            div_pelny.classList.add("stoi", "empty")
                        }
                    }
                }

            }

            break;
        case 2:
            console.log('middle');
            break;
        case 3:
            console.log('right');
            prawy++;
            break;
    }
}

function glow(e) {

    if (liczba_postawionych < 10) {
        var gracz_x = e.currentTarget.dataset.x
        var gracz_y = e.currentTarget.dataset.y
        // console.log("x elementu = " + gracz_x)
        // console.log("y elementu = " + gracz_y)

        if (prawy % 2 == 0) {
            if (11 - gracz_x > dlugosc) {
                for (var j = 0; j < dlugosc; j++) {
                    if (player_tab[gracz_y][parseInt(gracz_x) + j] == 0)
                        player_tab[gracz_y][parseInt(gracz_x) + j] = 1
                    else if (player_tab[gracz_y][parseInt(gracz_x) + j] == 3)
                        player_tab[gracz_y][parseInt(gracz_x) + j] = 4
                }
            }
            else {
                gracz_x = 11 - dlugosc;
                for (var j = 0; j < dlugosc; j++) {
                    if (player_tab[gracz_y][parseInt(gracz_x) + j] == 0)
                        player_tab[gracz_y][parseInt(gracz_x) + j] = 1
                    else if (player_tab[gracz_y][parseInt(gracz_x) + j] == 3)
                        player_tab[gracz_y][parseInt(gracz_x) + j] = 4
                }
            }
        }
        else {
            if (11 - gracz_y > dlugosc) {
                for (var j = 0; j < dlugosc; j++) {
                    if (player_tab[parseInt(gracz_y) + j][gracz_x] == 0)
                        player_tab[parseInt(gracz_y) + j][gracz_x] = 1
                    else if (player_tab[parseInt(gracz_y) + j][gracz_x] == 3)
                        player_tab[parseInt(gracz_y) + j][gracz_x] = 4
                }
            }
            else {
                gracz_y = 11 - dlugosc;
                for (var j = 0; j < dlugosc; j++) {
                    if (player_tab[parseInt(gracz_y) + j][gracz_x] == 0)
                        player_tab[parseInt(gracz_y) + j][gracz_x] = 1
                    else if (player_tab[parseInt(gracz_y) + j][gracz_x] == 3)
                        player_tab[parseInt(gracz_y) + j][gracz_x] = 4
                }
            }
        }

        document.getElementById("gracz").innerHTML = "Gracz<br/>"

        for (var i = 1; i < 11; i++) {
            for (var j = 1; j < 11; j++) {
                if (player_tab[i][j] == 0) { //biały - pusty
                    var div_pusty = document.createElement("DIV")
                    div_pusty.dataset.y = i
                    div_pusty.dataset.x = j
                    div_pusty.onmouseover = glow
                    div_pusty.onmousedown = postaw
                    document.getElementById("gracz").append(div_pusty)
                    div_pusty.classList.add("pusty", "empty")
                }
                else if (player_tab[i][j] == 3) { //biały - nie postawisz
                    var div_wrong = document.createElement("DIV")
                    div_wrong.dataset.y = i
                    div_wrong.dataset.x = j
                    div_wrong.onmouseover = glow
                    document.getElementById("gracz").append(div_wrong)
                    div_wrong.classList.add("zle", "empty")
                }
                else if (player_tab[i][j] == 1) { //zielony - hover
                    var div_temp = document.createElement("DIV")
                    div_temp.dataset.y = i
                    div_temp.dataset.x = j
                    div_temp.onmouseover = glow
                    div_temp.onmousedown = postaw
                    document.getElementById("gracz").append(div_temp)
                    div_temp.classList.add("stawia", "empty")
                }
                else if (player_tab[i][j] == 4) { //czerwony - hover zły
                    var div_czerwone = document.createElement("DIV")
                    div_czerwone.dataset.y = i
                    div_czerwone.dataset.x = j
                    div_czerwone.onmouseover = glow
                    document.getElementById("gracz").append(div_czerwone)
                    div_czerwone.classList.add("podswietl", "empty")
                }
                else if (player_tab[i][j] == 2) { //niebieski - postawiony
                    var div_pelny = document.createElement("DIV")
                    div_pelny.dataset.y = i
                    div_pelny.dataset.x = j
                    div_pelny.onmouseover = glow
                    document.getElementById("gracz").append(div_pelny)
                    div_pelny.classList.add("stoi", "empty")
                }
            }
        }

        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 12; j++) {
                if (player_tab[i][j] == 1)
                    player_tab[i][j] = 0
                else if (player_tab[i][j] == 4)
                    player_tab[i][j] = 3
            }
        }
    }
}

function guzik() {
    var butt = document.getElementsByClassName("naciskacz")
    butt[0].remove(this)
    poczatek++;
}

var score = 0;
var score_pc = 0;

function gra(e) {
    if (poczatek == 1) {

        e = e || window.event;
        switch (e.which) {
            case 1:

                var game_x = e.currentTarget.dataset.x
                var game_y = e.currentTarget.dataset.y

                x_shot = randomInt(1, 11);
                y_shot = randomInt(1, 11);

                var numer = ((parseInt(game_y) * 10) - 10) + parseInt(game_x)
                var numer_shot = ((y_shot * 10) - 10) + x_shot

                var pole_pc = document.getElementsByClassName("pc")
                var pole_shot = document.getElementsByClassName("empty")

                if (pole_pc[numer - 1].classList.contains("pelny") && pole_pc[numer - 1].classList.contains("nie") == false) {
                    if (score < 19) {
                        pole_pc[numer - 1].innerHTML = ""
                        var img = document.createElement('img')
                        img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                        pole_pc[numer - 1].append(img)
                        img.classList.add("iks")
                        score++;
                        pole_pc[numer - 1].classList.add("nie")

                        setTimeout(function losuj() {
                            var niewiadoma = 0;
                            while (niewiadoma == 0) {
                                if (pole_shot[numer_shot - 1].classList.contains("stoi") && pole_shot[numer_shot - 1].classList.contains("nie") == false) {
                                    if (score_pc < 19) {
                                        pole_shot[numer_shot - 1].innerHTML = ""
                                        var img = document.createElement('img')
                                        img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                                        pole_shot[numer_shot - 1].append(img)
                                        img.classList.add("iks")
                                        pole_shot[numer_shot - 1].classList.add("nie")
                                        score_pc++;
                                        niewiadoma++;
                                    }
                                    else {
                                        var img = document.createElement('img')
                                        img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                                        pole_shot[numer_shot - 1].append(img)
                                        img.classList.add("iks")

                                        var button = document.createElement("button")
                                        document.getElementById("guzior").append(button)
                                        button.classList.add("restart")
                                        button.innerHTML = "Reset"
                                        button.onclick = reset
                                        alert("przegrałeś")
                                        niewiadoma++;
                                    }
                                }
                                else if (pole_shot[numer_shot - 1].classList.contains("nie") == false) {
                                    pole_shot[numer_shot - 1].innerHTML = ""
                                    var img = document.createElement('img')
                                    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/600px-Location_dot_black.svg.png"
                                    pole_shot[numer_shot - 1].append(img)
                                    img.classList.add("kolo")
                                    pole_shot[numer_shot - 1].classList.add("nie")
                                    niewiadoma++;
                                }
                            }
                        }, 500)
                    }
                    else {
                        var img = document.createElement('img')
                        img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                        pole_pc[numer - 1].append(img)
                        img.classList.add("iks")

                        var button = document.createElement("button")
                        document.getElementById("guzior").append(button)
                        button.classList.add("restart")
                        button.innerHTML = "Reset"
                        button.onclick = reset
                        alert("wygrałeś")
                    }
                }
                else if (pole_pc[numer - 1].classList.contains("pusty") && pole_pc[numer - 1].classList.contains("nie") == false) {

                    var img = document.createElement('img')
                    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/600px-Location_dot_black.svg.png"
                    pole_pc[numer - 1].append(img)
                    img.classList.add("kolo")
                    setTimeout(function () {
                        if (pole_shot[numer_shot - 1].classList.contains("stoi") && pole_shot[numer_shot - 1].classList.contains("nie") == false) {
                            if (score_pc < 19) {
                                pole_shot[numer_shot - 1].innerHTML = ""
                                var img = document.createElement('img')
                                img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                                pole_shot[numer_shot - 1].append(img)
                                img.classList.add("iks")
                                score_pc++;
                                pole_shot[numer_shot - 1].classList.add("nie")

                            }
                            else {
                                var img = document.createElement('img')
                                img.src = "https://lh3.googleusercontent.com/proxy/0WwEhWrc3shehjOyLaUW5j1zJLj_Rmkn8LnbXMsY3MhPJvM6WvAPnkzPewFH2STf2dRnem6XwWb8c1AXwe0y-acSAYQtRrSMEXzXODRQidhJ2vrn0VOw7SIj9LnfjMZdzlWWKjPriu5QXfigB9LU"
                                pole_shot[numer_shot - 1].append(img)
                                img.classList.add("iks")

                                var button = document.createElement("button")
                                document.getElementById("guzior").append(button)
                                button.classList.add("restart")
                                button.innerHTML = "Reset"
                                button.onclick = reset
                                alert("przegrałeś")
                            }
                        }
                        else if (pole_shot[numer_shot - 1].classList.contains("nie") == false) {

                            var img = document.createElement('img')
                            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/600px-Location_dot_black.svg.png"
                            pole_shot[numer_shot - 1].append(img)
                            img.classList.add("kolo")
                        }
                    }, 500)
                }

                break;
            case 2:
                console.log('middle');
                break;
            case 3:
                console.log('right');
                break;
        }
    }
}

function reset() {
    window.location.href = window.location.href
}

function tura(e) {
    if (poczatek == 1) {

        e = e || window.event;
        switch (e.which) {
            case 1:

                alert("tura komputra")

                break;
            case 2:
                console.log('middle');
                break;
            case 3:
                console.log('right');
                break;
        }
    }
}