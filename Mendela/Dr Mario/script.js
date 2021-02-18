"use strict";

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function createArray(length) {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

let tab = createArray(17, 8);

for (let y = 0; y < 17; y++) {
    for (let x = 0; x < 8; x++) {
        tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' };
    }
}

console.log(tab);

for (let i = 1; i < 17; i++) {
    for (let j = 1; j < 9; j++) {
        let div_pusty = document.createElement("DIV");
        div_pusty.id = (i - 1) + "x" + (j - 1)
        div_pusty.style.top = (i * 16) + 'px';
        div_pusty.style.left = (j * 16) + 'px';
        document.getElementById("plansza").append(div_pusty);
        div_pusty.classList.add("pusty");
    }
}

let bezpiecznik = true;

function update() {
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 8; x++) {
            document.getElementById(y + "x" + x).style.background = tab[y + 1][x].value;
        }
    }

    for (let y = 0; y < 17; y++) {
        for (let x = 0; x < 8; x++) {
            if (tab[y][x].lp == 0 && tab[y][x].form.substring(0, 1) != "v")
                tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' };
        }
    }

    let maxRow = tab.map(x => x.map(y => y.lp)).map(function (row) { return Math.max.apply(Math, row); });
    let max = Math.max.apply(null, maxRow)
    let obj = ''

    for (let i = 0; i < 17; i++) {
        if (tab[i].find(o => o.lp === max))
            obj = tab[i].find(o => o.lp === max)
    }

    if (down != "down") {

        if (ang == 1 || ang == -1 || ang == 3 || ang == -3) {
            try {
                if (tab[obj.y][obj.x].lp == max && tab[obj.y][obj.x + 1].value == 'none' && tab[obj.y - 1][obj.x + 1].value == 'none' && right == "down") {
                    if (tab[obj.y][obj.x].y < 17) {
                        tab[obj.y - 1][obj.x + 1] = tab[obj.y - 1][obj.x]
                        tab[obj.y][obj.x + 1] = tab[obj.y][obj.x]
                        tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                        tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                        tab[obj.y - 1][obj.x + 1].x++
                        tab[obj.y][obj.x + 1].x++
                    }
                }
            } catch (err) {

            }

            try {
                if (tab[obj.y][obj.x].y < 17) {
                    if (tab[obj.y][obj.x].lp == max && tab[obj.y][obj.x - 1].value == 'none' && tab[obj.y - 1][obj.x - 1].value == 'none' && left == "down") {
                        tab[obj.y - 1][obj.x - 1] = tab[obj.y - 1][obj.x]
                        tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                        tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                        tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                        tab[obj.y - 1][obj.x - 1].x--
                        tab[obj.y][obj.x - 1].x--
                    }
                }
            } catch (err) {

            }
        }
        else {
            try {
                if (tab[obj.y][obj.x].lp == max && tab[obj.y][obj.x + 2].value == 'none' && right == "down") {
                    tab[obj.y][obj.x + 2] = tab[obj.y][obj.x + 1]
                    tab[obj.y][obj.x + 1] = tab[obj.y][obj.x]
                    tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x + 2].x++
                    tab[obj.y][obj.x + 1].x++
                }
            } catch (err) {

            }

            try {
                if (tab[obj.y][obj.x].lp == max && tab[obj.y][obj.x - 1].value == 'none' && left == "down") {
                    tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                    tab[obj.y][obj.x] = tab[obj.y][obj.x + 1]
                    tab[obj.y][obj.x + 1] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x - 1].x--
                    tab[obj.y][obj.x + 1].x++
                }
            } catch (err) {

            }
        }
    }

    let wirusy = 0;

    for (let y = 0; y < 17; y++) {
        for (let x = 0; x < 8; x++) {
            if (tab[y][x].form.substring(0, 1) == "v")
                wirusy++
        }
    }

    wirusy = wirusy.toString()

    if (wirusy.length < 2)
        wirusy = "0" + wirusy

    let counter1 = [wirusy[0], wirusy[1]]
    let counter2 = [document.getElementById("v1"), document.getElementById("v2")]

    let vol1 = document.getElementById("v1").src
    vol1 = vol1.substring(0, vol1.length - 5)

    for (let i = 0; i < counter1.length; i++) {
        counter2[i].src = vol1 + counter1[i] + ".png"
    }

    wynik = wynik.toString()

    if (wynik.length < 2)
        wynik = "0" + wynik
    if (wynik.length < 3)
        wynik = "0" + wynik
    if (wynik.length < 4)
        wynik = "0" + wynik
    if (wynik.length < 5)
        wynik = "0" + wynik
    if (wynik.length < 6)
        wynik = "0" + wynik
    if (wynik.length < 7)
        wynik = "0" + wynik

    let counter_wynik1 = [wynik[0], wynik[1], wynik[2], wynik[3], wynik[4], wynik[5], wynik[6]]
    let counter_wynik2 = [document.getElementById("s1"), document.getElementById("s2"), document.getElementById("s3"), document.getElementById("s4"), document.getElementById("s5"), document.getElementById("s6"), document.getElementById("s7")]

    for (let i = 0; i < counter_wynik1.length; i++) {
        counter_wynik2[i].src = vol1 + counter_wynik1[i] + ".png"
    }

    let counter_top1 = [topscore[0], topscore[1], topscore[2], topscore[3], topscore[4], topscore[5], topscore[6]]
    let counter_top2 = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4"), document.getElementById("t5"), document.getElementById("t6"), document.getElementById("t7")]

    for (let i = 0; i < counter_top1.length; i++) {
        counter_top2[i].src = vol1 + counter_top1[i] + ".png"
    }

    if (wirusy == 0) {
        setTimeout(() => {
            clearInterval(fall)
            clearInterval(refresh)

        }, 100);

        let div = document.createElement("DIV");
        div.id = "message"
        div.style.width = 423 + 'px';
        div.style.top = 120 + 'px';
        div.style.left = 130 + 'px';
        div.style.background = "url(./gfx/sc.png)"
        div.style.zIndex = 50
        document.body.append(div);
    }

    try {

        if (tab[obj.y][obj.x].lp == max && tab[obj.y + 1][obj.x].value != 'none' && tab[obj.y][obj.x].y == 1) {
            clearInterval(refresh)
            clearInterval(fall)

            setTimeout(() => {

                clearInterval(korba);
                clearInterval(dance);

                graf = 0;;

                setInterval(() => { laught() }, 300)

            }, 100);

            let div = document.createElement("DIV");
            div.id = "message"
            div.style.width = 334 + 'px';
            div.style.top = 120 + 'px';
            div.style.left = 160 + 'px';
            div.style.background = "url(./gfx/go.png)"
            div.style.zIndex = 50
            document.body.append(div);

            document.getElementById("doc").style.background = "url(./gfx/go_dr.png)"
            document.getElementById("doc").style.backgroundPosition = "center"
            document.getElementById("doc").style.backgroundSize = "cover"
            document.getElementById("doc").innerHTML = ""

            if (wynik > topscore)
                localStorage.setItem('topscore', wynik)

        }
    } catch (err) {

    }

}

function spadanie() {
    let maxRow = tab.map(x => x.map(y => y.lp)).map(function (row) { return Math.max.apply(Math, row); });
    let max = Math.max.apply(null, maxRow)
    let obj = ''

    for (let i = 0; i < 16; i++) {
        if (tab[i].find(o => o.lp === max))
            obj = tab[i].find(o => o.lp === max)
    }
    //console.log(obj);

    //console.log(max);

    if (ang == 1 || ang == -1 || ang == 3 || ang == -3) {
        try {
            if (tab[obj.y][obj.x].lp == max && tab[obj.y + 1][obj.x].value == 'none') {
                tab[obj.y + 1][obj.x] = tab[obj.y][obj.x]
                tab[obj.y][obj.x] = tab[obj.y - 1][obj.x]
                tab[obj.y][obj.x].y = obj.y
                tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y + 1][obj.x].y++
            } else {
                zbijanie();
                if (!grawitacja && bezpiecznik == true) {
                    rzut = setInterval(dr, speed)
                    bezpiecznik = false
                }
                clearInterval(fall)
                fall = setInterval(spadanie, 500)
                down = 'up'
            }
        } catch (err) {
        }
    } else if (wall) {
        try {
            if (tab[obj.y][obj.x].lp == max && tab[obj.y + 1][obj.x].value == 'none') {
                tab[obj.y + 1][obj.x] = tab[obj.y][obj.x]
                tab[obj.y][obj.x] = tab[obj.y - 1][obj.x]
                tab[obj.y][obj.x].y = obj.y
                tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y + 1][obj.x].y++
            } else {
                zbijanie();
                if (!grawitacja && bezpiecznik == true) {
                    rzut = setInterval(dr, speed)
                    bezpiecznik = false
                }
                clearInterval(fall)
                fall = setInterval(spadanie, 500)
                down = 'up'
            }
        } catch (err) {
        }
    } else {
        try {
            if (tab[obj.y][obj.x].lp == max && tab[obj.y + 1][obj.x].value == 'none' && tab[obj.y + 1][obj.x + 1].value == 'none') {
                tab[obj.y + 1][obj.x] = tab[obj.y][obj.x]
                tab[obj.y + 1][obj.x + 1] = tab[obj.y][obj.x + 1]
                tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y][obj.x + 1] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y + 1][obj.x].y = obj.y + 1
                tab[obj.y][obj.x + 1].y = tab[obj.y][obj.x].y
            } else {
                zbijanie();
                if (!grawitacja && bezpiecznik == true) {
                    rzut = setInterval(dr, speed)
                    bezpiecznik = false
                }
                clearInterval(fall)
                fall = setInterval(spadanie, 500)
                down = 'up'
            }
        } catch (err) {
        }
    }

}

let refresh = setInterval(update, 100)
let fall = setInterval(spadanie, 500)

function obrot() {
    let direction = ''


    let maxRow = tab.map(x => x.map(y => y.lp)).map(function (row) { return Math.max.apply(Math, row); });
    let max = Math.max.apply(null, maxRow)
    let obj = ''

    for (let i = 0; i < 16; i++) {
        if (tab[i].find(o => o.lp === max))
            obj = tab[i].find(o => o.lp === max)
    }

    ang = rot % 4

    if (tab[obj.y][obj.x].y > 0) {
        switch (ang) {
            case 0:
            case -0:
                if (tab[obj.y][obj.x].x == 7) {
                    tab[obj.y - 1][obj.x - 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y - 1][obj.x - 1].x--
                    tab[obj.y][obj.x - 1].x--
                }
                if (tab[obj.y][obj.x + 1].value == 'none') {
                    tab[obj.y][obj.x + 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    direction = tab[obj.y][obj.x].value
                    direction = direction.substring(0, 10)
                    tab[obj.y][obj.x].value = direction + c1 + "_left.png)"
                    tab[obj.y][obj.x + 1].value = direction + c2 + "_right.png)"
                    tab[obj.y][obj.x].form = "p-" + c1
                    tab[obj.y][obj.x + 1].form = "p-" + c2
                } else {
                    rot--;
                    wall = true
                }
                break;
            case 1:
            case -1:
                tab[obj.y - 1][obj.x] = tab[obj.y][obj.x + 1]
                tab[obj.y][obj.x + 1] = { x: obj.x + 1, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y - 1][obj.x].x = tab[obj.y - 1][obj.x].x - 1
                direction = tab[obj.y][obj.x].value
                direction = direction.substring(0, 10)
                tab[obj.y][obj.x].value = direction + c1 + "_down.png)"
                tab[obj.y - 1][obj.x].value = direction + c2 + "_up.png)"
                tab[obj.y][obj.x].form = "p-" + c1
                tab[obj.y - 1][obj.x].form = "p-" + c2
                break;
            case 2:
            case -2:
                if (tab[obj.y][obj.x].x == 7) {
                    tab[obj.y - 1][obj.x - 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y - 1][obj.x - 1].x--
                    tab[obj.y][obj.x - 1].x--
                }
                if (tab[obj.y][obj.x + 1].value == 'none') {
                    tab[obj.y][obj.x + 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    direction = tab[obj.y][obj.x].value
                    direction = direction.substring(0, 10)
                    tab[obj.y][obj.x].value = direction + c2 + "_left.png)"
                    tab[obj.y][obj.x + 1].value = direction + c1 + "_right.png)"
                    tab[obj.y][obj.x].form = "p-" + c2
                    tab[obj.y][obj.x + 1].form = "p-" + c1
                } else {
                    rot--;
                    wall = true
                }
                break;
            case 3:
            case -3:
                tab[obj.y - 1][obj.x] = tab[obj.y][obj.x + 1]
                tab[obj.y][obj.x + 1] = { x: obj.x + 1, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y - 1][obj.x].x = tab[obj.y - 1][obj.x].x - 1
                direction = tab[obj.y][obj.x].value
                direction = direction.substring(0, 10)
                tab[obj.y][obj.x].value = direction + c2 + "_down.png)"
                tab[obj.y - 1][obj.x].value = direction + c1 + "_up.png)"
                tab[obj.y][obj.x].form = "p-" + c2
                tab[obj.y - 1][obj.x].form = "p-" + c1
                break;
        }
    } else {
        rot = 0
    }


}

function obrot2() {
    let direction = ''


    let maxRow = tab.map(x => x.map(y => y.lp)).map(function (row) { return Math.max.apply(Math, row); });
    let max = Math.max.apply(null, maxRow)
    let obj = ''

    for (let i = 0; i < 16; i++) {
        if (tab[i].find(o => o.lp === max))
            obj = tab[i].find(o => o.lp === max)
    }

    ang = rot % 4

    if (tab[obj.y][obj.x].y > 0) {
        switch (ang) {
            case 0:
            case -0:
                if (tab[obj.y][obj.x].x == 7) {
                    tab[obj.y - 1][obj.x - 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y - 1][obj.x - 1].x--
                    tab[obj.y][obj.x - 1].x--
                }
                if (tab[obj.y][obj.x + 1].value == 'none') {
                    tab[obj.y][obj.x + 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    direction = tab[obj.y][obj.x].value
                    direction = direction.substring(0, 10)
                    tab[obj.y][obj.x].value = direction + c1 + "_left.png)"
                    tab[obj.y][obj.x + 1].value = direction + c2 + "_right.png)"
                    tab[obj.y][obj.x].form = "p-" + c1
                    tab[obj.y][obj.x + 1].form = "p-" + c2
                } else {
                    rot++;
                    wall = true
                }
                break;
            case 1:
            case -1:
                tab[obj.y - 1][obj.x] = tab[obj.y][obj.x + 1]
                tab[obj.y][obj.x + 1] = { x: obj.x + 1, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y - 1][obj.x].x = tab[obj.y - 1][obj.x].x - 1
                direction = tab[obj.y][obj.x].value
                direction = direction.substring(0, 10)
                tab[obj.y][obj.x].value = direction + c2 + "_down.png)"
                tab[obj.y - 1][obj.x].value = direction + c1 + "_up.png)"
                tab[obj.y][obj.x].form = "p-" + c2
                tab[obj.y - 1][obj.x].form = "p-" + c1
                break;
            case 2:
            case -2:
                if (tab[obj.y][obj.x].x == 7) {
                    tab[obj.y - 1][obj.x - 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y][obj.x - 1] = tab[obj.y][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y][obj.x] = { x: obj.x, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                    tab[obj.y - 1][obj.x - 1].x--
                    tab[obj.y][obj.x - 1].x--
                }
                if (tab[obj.y][obj.x + 1].value == 'none') {
                    tab[obj.y][obj.x + 1] = tab[obj.y - 1][obj.x]
                    tab[obj.y - 1][obj.x] = { x: obj.x, y: obj.y - 1, value: 'none', lp: 0, form: '', flag: '' }
                    direction = tab[obj.y][obj.x].value
                    direction = direction.substring(0, 10)
                    tab[obj.y][obj.x].value = direction + c2 + "_left.png)"
                    tab[obj.y][obj.x + 1].value = direction + c1 + "_right.png)"
                    tab[obj.y][obj.x].form = "p-" + c2
                    tab[obj.y][obj.x + 1].form = "p-" + c1
                } else {
                    rot++;
                    wall = true
                }
                break;
            case 3:
            case -3:
                tab[obj.y - 1][obj.x] = tab[obj.y][obj.x + 1]
                tab[obj.y][obj.x + 1] = { x: obj.x + 1, y: obj.y, value: 'none', lp: 0, form: '', flag: '' }
                tab[obj.y - 1][obj.x].x = tab[obj.y - 1][obj.x].x - 1
                direction = tab[obj.y][obj.x].value
                direction = direction.substring(0, 10)
                tab[obj.y][obj.x].value = direction + c1 + "_down.png)"
                tab[obj.y - 1][obj.x].value = direction + c2 + "_up.png)"
                tab[obj.y][obj.x].form = "p-" + c1
                tab[obj.y - 1][obj.x].form = "p-" + c2
                break;
        }
    } else {
        rot = 0
    }
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

let pill_lp = 1;
let prev_1 = randomInt(0, 3);
let prev_2 = randomInt(0, 3);

let pill_left = document.getElementById("pl")
let pill_right = document.getElementById("pr")


switch (prev_1) {
    case 0:
        pill_left.src = './gfx/br_left.png'
        break;
    case 1:
        pill_left.src = './gfx/yl_left.png'
        break;
    case 2:
        pill_left.src = './gfx/bl_left.png'
        break;
}

switch (prev_2) {
    case 0:
        pill_right.src = './gfx/br_right.png'
        break;
    case 1:
        pill_right.src = './gfx/yl_right.png'
        break;
    case 2:
        pill_right.src = './gfx/bl_right.png'
        break;
}


function new_pill() {

    ang = 0;
    rot = 0;

    let col_1 = prev_1
    let col_2 = prev_2

    prev_1 = randomInt(0, 3);
    prev_2 = randomInt(0, 3);


    switch (col_1) {
        case 0:
            tab[1][3].value = 'url(./gfx/br_left.png)'
            c1 = 'br'
            break;
        case 1:
            tab[1][3].value = 'url(./gfx/yl_left.png)'
            c1 = 'yl'
            break;
        case 2:
            tab[1][3].value = 'url(./gfx/bl_left.png)'
            c1 = 'bl'
            break;
    }

    switch (col_2) {
        case 0:
            tab[1][4].value = 'url(./gfx/br_right.png)'
            c2 = 'br'
            break;
        case 1:
            tab[1][4].value = 'url(./gfx/yl_right.png)'
            c2 = 'yl'
            break;
        case 2:
            tab[1][4].value = 'url(./gfx/bl_right.png)'
            c2 = 'bl'
            break;
    }

    let pill_left = document.getElementById("pl")
    let pill_right = document.getElementById("pr")

    switch (prev_1) {
        case 0:
            pill_left.src = './gfx/br_left.png'
            break;
        case 1:
            pill_left.src = './gfx/yl_left.png'
            break;
        case 2:
            pill_left.src = './gfx/bl_left.png'
            break;
    }

    switch (prev_2) {
        case 0:
            pill_right.src = './gfx/br_right.png'
            break;
        case 1:
            pill_right.src = './gfx/yl_right.png'
            break;
        case 2:
            pill_right.src = './gfx/bl_right.png'
            break;
    }


    tab[1][3].lp = pill_lp;
    tab[1][4].lp = pill_lp;

    tab[1][3].form = "p-" + c1;
    tab[1][4].form = "p-" + c2;


    pill_lp++;

}


let c1 = ''
let c2 = ''

let rot = 0;
let ang = 0;
let wall = false;

let left = "up";
let right = "up";
let up = "up";
let down = "up";
let shift = "up";

document.onkeydown = checkKey;

function checkKey(e) {

    if (bezpiecznik) {
        e = e || window.event;

        if (e.keyCode == '38' || e.keyCode == '87') {
            // up arrow + W
            up = "down"
            // console.log("up - " + up);
            if (down != "down") {
                wall = false
                rot++;
                obrot();
            }
            //console.log(ang);
        }
        else if (e.keyCode == '40' || e.keyCode == '83') {
            // down arrow + S
            down = "down"
            // console.log("down - " + down);
            clearInterval(fall)
            fall = setInterval(spadanie, 40)

        }
        else if (e.keyCode == '37' || e.keyCode == '65') {
            left = "down"
            // console.log("left - " + left);
        }
        else if (e.keyCode == '39' || e.keyCode == '68') {
            // right arrow + D
            right = "down"
            // console.log("right - " + right);
        }
        else if (e.keyCode == '16') {
            // shift
            shift = "down"
            // console.log("shift - " + shift);
            if (down != "down") {
                wall = false
                rot--;
                obrot2();
            }
        }
    }

}

document.onkeyup = checkKey2;

function checkKey2(e) {

    if (bezpiecznik) {

        e = e || window.event;

        if (e.keyCode == '38' || e.keyCode == '87') {
            // up arrow + W
            up = "up"
            // console.log("up - " + up);
        }
        else if (e.keyCode == '40' || e.keyCode == '83') {
            // down arrow + S
            // down = "up"
            // console.log("down - " + down);\
        }
        else if (e.keyCode == '37' || e.keyCode == '65') {
            left = "up"
            // console.log("left - " + left);
        }
        else if (e.keyCode == '39' || e.keyCode == '68') {
            // right arrow + D
            right = "up"
            // console.log("right - " + right);
        }
        else if (e.keyCode == '16') {
            // shift
            shift = "up"
            // console.log("shift - " + shift);
        }

    }

}

let grawitacja = false

let topscore = '0000000'

if (localStorage.getItem('topscore') == null)
    localStorage.setItem('topscore', "0000000")

topscore = localStorage.getItem('topscore')


let wynik = 0;
virus();

let speed = 100
let rzut = setInterval(dr, speed)


function zbijanie() {
    let val = '';
    let val2 = '';
    let licznik = 0;
    let val_vertical = '';
    let val2_vertical = '';
    let licznik_vertical = 0;
    let poof = false

    for (let y = 16; y >= 0; y--) {
        for (let x = 7; x >= 0; x--) {
            val2 = val
            val = tab[y][x].form
            val = val.substring(2, val.length)
            val = val + y

            if (val == val2 && val2 != y) {
                licznik++;
            } else {
                licznik = 0;
            }

            if (licznik >= 3) {
                for (let a = licznik; a >= 0; a--) {
                    tab[y][x + a].flag = "to_kill"
                }
            }
        }
    }

    for (let x = 7; x >= 0; x--) {
        for (let y = 16; y >= 0; y--) {
            val2_vertical = val_vertical
            val_vertical = tab[y][x].form
            val_vertical = val_vertical.substring(2, val_vertical.length)
            val_vertical = val_vertical + x

            if (val_vertical == val2_vertical && val2_vertical != x) {
                licznik_vertical++;
            } else {
                licznik_vertical = 0;
            }

            if (licznik_vertical >= 3) {
                for (let a = licznik_vertical; a >= 0; a--) {
                    tab[y + a][x].flag = "to_kill"
                }
            }
        }
    }

    for (let y = 16; y >= 0; y--) {
        for (let x = 7; x >= 0; x--) {
            if (tab[y][x].flag == "to_kill" && tab[y][x].form.substring(0, 1) == "v") {
                let color = tab[y][x].form.substring(2, 4)
                let path = tab[y][x].value
                path = path.substring(0, 10)
                tab[y][x].value = path + color + "_x.png)"
                poof = true
            }
            else if (tab[y][x].flag == "to_kill") {
                let color = tab[y][x].form.substring(2, 4)
                let path = tab[y][x].value
                path = path.substring(0, 10)
                tab[y][x].value = path + color + "_o.png)"
                poof = true
            }
        }
    }

    if (poof) {
        poof = false;
        grawitacja = setInterval(gravity, 200)
    }



}

function gravity() {

    for (let y = 16; y >= 0; y--) {
        for (let x = 7; x >= 0; x--) {
            if (tab[y][x].flag == "to_kill" && tab[y][x].form.substring(0, 1) == "v") {
                wynik = parseInt(wynik)
                wynik += 100
                tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' }
            }
            else if (tab[y][x].flag == "to_kill") {
                tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' }
            }
        }
    }

    let temp = false

    for (let y = 15; y >= 0; y--) {
        for (let x = 7; x >= 0; x--) {
            try {
                if (x == 0) {
                    if (tab[y][x].value != 'none' && tab[y + 1][x].value == 'none' && tab[y][x].form.substring(0, 1) != "v") {
                        tab[y + 1][x] = tab[y][x]
                        tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' }
                        temp = true
                    }
                } else {
                    if (tab[y][x].value != 'none' && tab[y + 1][x].value == 'none' && tab[y][x].lp != tab[y][x - 1].lp && tab[y][x].form.substring(0, 1) != "v") {
                        tab[y + 1][x] = tab[y][x]
                        tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' }
                        temp = true
                    } else if (tab[y][x].value != 'none' && tab[y + 1][x].value == 'none' && tab[y][x].lp == tab[y][x - 1].lp && tab[y + 1][x - 1] == 'none' && tab[y][x].form.substring(0, 1) != "v") {
                        tab[y + 1][x] = tab[y][x]
                        tab[y][x] = { x: x, y: y, value: 'none', lp: 0, form: '', flag: '' }
                        temp = true
                    }
                }
            } catch (err) {

            }
        }
    }

    let inside = '';
    let con1 = true;
    let con2 = true;
    let con3 = true;
    let con4 = true;

    for (let y = 16; y >= 0; y--) {
        for (let x = 7; x >= 0; x--) {
            try {
                try {
                    con1 = (tab[y][x].lp != tab[y][x - 1].lp)
                } catch { }

                try {
                    con2 = (tab[y][x].lp != tab[y - 1][x].lp)
                } catch { }

                try {
                    con3 = (tab[y][x].lp != tab[y][x + 1].lp)
                } catch { }

                try {
                    con4 = (tab[y][x].lp != tab[y + 1][x].lp)
                } catch { }

                if (tab[y][x].value != 'none' && con1 && con2 && con3 && con4) {
                    inside = tab[y][x].value
                    inside = inside.substring(0, 12)
                    tab[y][x].value = inside + "_dot.png)"
                }
            } catch (err) {

            }
        }
    }

    if (!temp) {
        clearInterval(grawitacja)
        grawitacja = false
        zbijanie()
        if (bezpiecznik == true) {
            rzut = setInterval(dr, speed)
            bezpiecznik = false
        }
    }

}

function virus() {

    let ilosc = 5;
    let modulo = ilosc % 3
    let ilosc_petla = (ilosc - modulo) / 3

    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    const virus_color = ["url(./gfx/bl_covid.png)", "url(./gfx/yl_covid.png)", "url(./gfx/br_covid.png)"]

    for (let j = 0; j < ilosc_petla; j++) {
        for (let i = 0; i < 3; i++) {
            let horizontal = randomInt(0, 8)
            let vertical = randomInt(7, 17)

            if (tab[vertical][horizontal].value == 'none') {
                tab[vertical][horizontal].value = virus_color[i]
                let col = tab[vertical][horizontal].value
                col = col.substring(10, 12)
                tab[vertical][horizontal].form = "v-" + col
            } else {
                i--
            }


        }
    }

    for (let i = 0; i < modulo; i++) {
        let horizontal = randomInt(0, 8)
        let vertical = randomInt(10, 17)

        tab[vertical][horizontal].value = virus_color[i]
        let col = tab[vertical][horizontal].value
        col = col.substring(10, 12)
        tab[vertical][horizontal].form = "v-" + col

    }

}

var obrot1 = Math.PI;
var obrot2 = Math.PI + 2;
var obrot3 = Math.PI + 4;

function krenci() {
    document.getElementById("blue").style.top = 265 + Math.sin(obrot1) * 50 + "px";
    document.getElementById("blue").style.left = 95 + Math.cos(obrot1) * 50 + "px";

    document.getElementById("yellow").style.top = 265 + Math.sin(obrot2) * 50 + "px";
    document.getElementById("yellow").style.left = 95 + Math.cos(obrot2) * 50 + "px";

    document.getElementById("brown").style.top = 265 + Math.sin(obrot3) * 50 + "px";
    document.getElementById("brown").style.left = 95 + Math.cos(obrot3) * 50 + "px";

    obrot1 -= 0.5;
    obrot2 -= 0.5;
    obrot3 -= 0.5;
};

let korba = setInterval(krenci, 1800);

let graf = 2;

function graf_swap() {
    graf++;

    let temp = (graf % 3) + 1



    let niebieski = document.getElementById("blue").src
    niebieski = niebieski.substring(0, niebieski.length - 5)
    document.getElementById("blue").src = niebieski + temp + ".png"



    let zolty = document.getElementById("yellow").src
    zolty = zolty.substring(0, zolty.length - 5)
    document.getElementById("yellow").src = zolty + temp + ".png"



    let brown = document.getElementById("brown").src
    brown = brown.substring(0, brown.length - 5)
    document.getElementById("brown").src = brown + temp + ".png"

}

let dance = setInterval(graf_swap, 600);

function laught() {

    graf += 2

    let temp = (graf % 4) + 2

    if (temp == 0)
        temp = 2

    let niebieski = document.getElementById("blue").src
    niebieski = niebieski.substring(0, niebieski.length - 5)
    document.getElementById("blue").src = niebieski + temp + ".png"



    let zolty = document.getElementById("yellow").src
    zolty = zolty.substring(0, zolty.length - 5)
    document.getElementById("yellow").src = zolty + temp + ".png"



    let brown = document.getElementById("brown").src
    brown = brown.substring(0, brown.length - 5)
    document.getElementById("brown").src = brown + temp + ".png"

}

let klatka = 0;

function dr() {

    let animacja = [
        { rotacja: "rotate(0deg)", top: "10px", left: "0px", h1: "./gfx/up_1.png", h2: "./gfx/up_2.png", h3: "./gfx/up_3.png", h4: "./gfx/up_3.png", h1_top: '27px', h2_top: "42px", h3_top: "57px", h4_top: "57px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-90deg)", top: "0px", left: "0px", h1: "./gfx/up_1.png", h2: "./gfx/up_2.png", h3: "./gfx/up_3.png", h4: "./gfx/up_3.png", h1_top: '27px', h2_top: "42px", h3_top: "57px", h4_top: "57px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-180deg)", top: "-9px", left: "-5px", h1: "./gfx/up_1.png", h2: "./gfx/up_2.png", h3: "./gfx/up_3.png", h4: "./gfx/up_3.png", h1_top: '27px', h2_top: "42px", h3_top: "57px", h4_top: "57px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-270deg)", top: "-18px", left: "-14px", h1: "./gfx/up_1.png", h2: "./gfx/up_2.png", h3: "./gfx/up_3.png", h4: "./gfx/up_3.png", h1_top: '27px', h2_top: "42px", h3_top: "57px", h4_top: "57px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "-25px", left: "-23px", h1: "./gfx/mid_1.png", h2: "./gfx/mid_2.png", h3: "./gfx/mid_3.png", h4: "./gfx/mid_4.png", h1_top: '42px', h2_top: "42px", h3_top: "60px", h4_top: "60px", h1_left: "4px", h2_left: "22px", h3_left: "4px", h4_left: "22px" },
        { rotacja: "rotate(-90deg)", top: "-32px", left: "-32px", h1: "./gfx/mid_1.png", h2: "./gfx/mid_2.png", h3: "./gfx/mid_3.png", h4: "./gfx/mid_4.png", h1_top: '42px', h2_top: "42px", h3_top: "60px", h4_top: "60px", h1_left: "4px", h2_left: "22px", h3_left: "4px", h4_left: "22px" },
        { rotacja: "rotate(-180deg)", top: "-25px", left: "-40px", h1: "./gfx/mid_1.png", h2: "./gfx/mid_2.png", h3: "./gfx/mid_3.png", h4: "./gfx/mid_4.png", h1_top: '42px', h2_top: "42px", h3_top: "60px", h4_top: "60px", h1_left: "4px", h2_left: "22px", h3_left: "4px", h4_left: "22px" },
        { rotacja: "rotate(-270deg)", top: "-32px", left: "-50px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "-25px", left: "-55px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-90deg)", top: "-32px", left: "-66px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-180deg)", top: "-25px", left: "-72px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-270deg)", top: "-32px", left: "-84px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "-25px", left: "-88px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-90deg)", top: "-32px", left: "-96px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-180deg)", top: "-25px", left: "-100px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-270deg)", top: "-32px", left: "-112px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "-25px", left: "-122px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-90deg)", top: "-32px", left: "-132px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-180deg)", top: "-9px", left: "-134px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(-270deg)", top: "-18px", left: "-154px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "9px", left: "-154px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "27px", left: "-154px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "36px", left: "-154px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "54px", left: "-154px", h1: "./gfx/down_1.png", h2: "./gfx/down_1.png", h3: "./gfx/down_2.png", h4: "./gfx/down_2.png", h1_top: '58px', h2_top: "58px", h3_top: "75px", h4_top: "75px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" },
        { rotacja: "rotate(0deg)", top: "10px", left: "0px", h1: "./gfx/up_1.png", h2: "./gfx/up_2.png", h3: "./gfx/up_3.png", h4: "./gfx/up_3.png", h1_top: '27px', h2_top: "42px", h3_top: "57px", h4_top: "57px", h1_left: "22px", h2_left: "22px", h3_left: "22px", h4_left: "22px" }
    ]

    try {
        let pill = document.getElementById("pill")

        let hand1 = document.getElementById("h1")
        let hand2 = document.getElementById("h2")
        let hand3 = document.getElementById("h3")
        let hand4 = document.getElementById("h4")

        pill.style.transform = animacja[klatka].rotacja
        pill.style.top = animacja[klatka].top
        pill.style.left = animacja[klatka].left

        hand1.src = animacja[klatka].h1
        hand1.style.top = animacja[klatka].h1_top
        hand1.style.left = animacja[klatka].h1_left

        hand2.src = animacja[klatka].h2
        hand2.style.top = animacja[klatka].h2_top
        hand2.style.left = animacja[klatka].h2_left

        hand3.src = animacja[klatka].h3
        hand3.style.top = animacja[klatka].h3_top
        hand3.style.left = animacja[klatka].h3_left

        hand4.src = animacja[klatka].h4
        hand4.style.top = animacja[klatka].h4_top
        hand4.style.left = animacja[klatka].h4_left


        klatka++;

        if (klatka == 25) {
            clearInterval(rzut)
            new_pill()
            klatka = 0
            bezpiecznik = true;
        }
    } catch (err) {

    }

}