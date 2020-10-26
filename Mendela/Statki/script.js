function czyszczenie() {
    document.getElementById("calosc").innerHTML = ""
}

function strona() {

    if (document.getElementsByClassName("restart") == true) {
        document.getElementsByClassName("restart")[0].remove()
    }

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

    var div_menu = document.createElement("DIV")
    document.getElementById("calosc").append(div_menu)
    div_menu.id = "menu"

    var div_linia1 = document.createElement("DIV")
    div_linia1.classList.add("linia")

    var div_linia2 = document.createElement("DIV")
    div_linia2.classList.add("linia")

    var div_linia3 = document.createElement("DIV")
    div_linia3.classList.add("linia")

    var div_linia4 = document.createElement("DIV")
    div_linia4.classList.add("linia")

    var div_linia5 = document.createElement("DIV")
    div_linia5.classList.add("linia")

    var div_linia6 = document.createElement("DIV")
    div_linia6.classList.add("linia")

    var div_linia7 = document.createElement("DIV")
    div_linia7.classList.add("linia")

    var div_linia8 = document.createElement("DIV")
    div_linia8.classList.add("linia")

    var div_linia9 = document.createElement("DIV")
    div_linia9.classList.add("linia")

    var div_linia10 = document.createElement("DIV")
    div_linia10.classList.add("linia")


    var div_cztery = document.createElement("DIV")
    document.getElementById("menu").append(div_cztery)
    div_cztery.id = "cztery"
    div_cztery.classList.add("okret", "chosen")
    document.getElementById("cztery").append(div_linia1)
    document.getElementById("cztery").append(div_linia2)
    document.getElementById("cztery").append(div_linia3)

    var div_trzy1 = document.createElement("DIV")
    document.getElementById("menu").append(div_trzy1)
    div_trzy1.id = "trzy1"
    div_trzy1.classList.add("okret", "not_chosen")
    document.getElementById("trzy1").append(div_linia4)
    document.getElementById("trzy1").append(div_linia5)

    var div_trzy2 = document.createElement("DIV")
    document.getElementById("menu").append(div_trzy2)
    div_trzy2.id = "trzy2"
    div_trzy2.classList.add("okret", "not_chosen")
    document.getElementById("trzy2").append(div_linia6)
    document.getElementById("trzy2").append(div_linia7)

    var div_dwa1 = document.createElement("DIV")
    document.getElementById("menu").append(div_dwa1)
    div_dwa1.id = "dwa1"
    div_dwa1.classList.add("okret", "not_chosen")
    document.getElementById("dwa1").append(div_linia8)

    var div_dwa2 = document.createElement("DIV")
    document.getElementById("menu").append(div_dwa2)
    div_dwa2.id = "dwa2"
    div_dwa2.classList.add("okret", "not_chosen")
    document.getElementById("dwa2").append(div_linia9)

    var div_dwa3 = document.createElement("DIV")
    document.getElementById("menu").append(div_dwa3)
    div_dwa3.id = "dwa3"
    div_dwa3.classList.add("okret", "not_chosen")
    document.getElementById("dwa3").append(div_linia10)

    var div_jeden1 = document.createElement("DIV")
    document.getElementById("menu").append(div_jeden1)
    div_jeden1.id = "jeden1"
    div_jeden1.classList.add("okret", "not_chosen")

    var div_jeden2 = document.createElement("DIV")
    document.getElementById("menu").append(div_jeden2)
    div_jeden2.id = "jeden2"
    div_jeden2.classList.add("okret", "not_chosen")

    var div_jeden3 = document.createElement("DIV")
    document.getElementById("menu").append(div_jeden3)
    div_jeden3.id = "jeden3"
    div_jeden3.classList.add("okret", "not_chosen")

    var div_jeden4 = document.createElement("DIV")
    document.getElementById("menu").append(div_jeden4)
    div_jeden4.id = "jeden4"
    div_jeden4.classList.add("okret", "not_chosen")

    var div_gracz = document.createElement("DIV")
    document.getElementById("calosc").append(div_gracz)
    div_gracz.id = "gracz"
    document.getElementById("gracz").innerHTML = "Gracz <br/>"

    var div_komputer = document.createElement("DIV")
    document.getElementById("calosc").append(div_komputer)
    div_komputer.id = "komputer"
    document.getElementById("komputer").innerHTML = "Komputer <br/>"

    var div_guzior = document.createElement("DIV")
    document.getElementById("calosc").append(div_guzior)
    div_guzior.id = "guzior"

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
                            liczba_postawionych++

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
                            liczba_postawionych++

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
                            liczba_postawionych++

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
                            liczba_postawionych++

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

                    var x_shot = 0;
                    var y_shot = 0;

                    var numer = ((parseInt(game_y) * 10) - 10) + parseInt(game_x)
                    var numer_shot = 0;

                    var pole_pc = document.getElementsByClassName("pc")
                    var pole_shot = document.getElementsByClassName("empty")

                    if (pole_pc[numer - 1].innerHTML == "") {
                        if (pole_pc[numer - 1].classList.contains("pelny") && pole_pc[numer - 1].classList.contains("nie") == false) {
                            if (score < 19) {
                                pole_pc[numer - 1].innerHTML = ""
                                var img = document.createElement('img')
                                img.src = "iks.png"
                                pole_pc[numer - 1].append(img)
                                img.classList.add("iks")
                                score++;
                                console.log("moje pkt : " + score)
                                pole_pc[numer - 1].classList.add("nie")

                                setTimeout(function losuj() {
                                    var niewiadoma = 0;
                                    while (niewiadoma == 0) {

                                        x_shot = randomInt(1, 11);
                                        y_shot = randomInt(1, 11);
                                        numer_shot = ((y_shot * 10) - 10) + x_shot

                                        if (pole_shot[numer_shot - 1].classList.contains("stoi") && pole_shot[numer_shot - 1].classList.contains("nie") == false) {
                                            if (score_pc < 19) {
                                                pole_shot[numer_shot - 1].innerHTML = ""
                                                var img = document.createElement('img')
                                                img.src = "iks.png"
                                                pole_shot[numer_shot - 1].append(img)
                                                img.classList.add("iks")
                                                pole_shot[numer_shot - 1].classList.add("nie")
                                                score_pc++;
                                                niewiadoma++;
                                            }
                                            else {
                                                var img = document.createElement('img')
                                                img.src = "iks.png"
                                                pole_shot[numer_shot - 1].append(img)
                                                img.classList.add("iks")
                                                var button = document.createElement("button")
                                                document.getElementById("guzior").append(button)
                                                button.classList.add("restart")
                                                button.innerHTML = "Reset"
                                                button.onclick = czyszczenie
                                                button.onclick = strona
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
                                img.src = "iks.png"
                                pole_pc[numer - 1].append(img)
                                img.classList.add("iks")

                                var button = document.createElement("button")
                                document.getElementById("guzior").append(button)
                                button.classList.add("restart")
                                button.innerHTML = "Reset"
                                button.onclick = czyszczenie
                                button.onclick = strona
                                alert("wygrałeś")
                            }
                        }
                        else if (pole_pc[numer - 1].classList.contains("pusty") && pole_pc[numer - 1].classList.contains("nie") == false) {

                            var img = document.createElement('img')
                            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/600px-Location_dot_black.svg.png"
                            pole_pc[numer - 1].append(img)
                            img.classList.add("kolo")
                            setTimeout(function losuj() {
                                var niewiadoma = 0;
                                while (niewiadoma == 0) {

                                    x_shot = randomInt(1, 11);
                                    y_shot = randomInt(1, 11);
                                    numer_shot = ((y_shot * 10) - 10) + x_shot

                                    if (pole_shot[numer_shot - 1].classList.contains("stoi") && pole_shot[numer_shot - 1].classList.contains("nie") == false) {
                                        if (score_pc < 19) {
                                            pole_shot[numer_shot - 1].innerHTML = ""
                                            var img = document.createElement('img')
                                            img.src = "iks.png"
                                            pole_shot[numer_shot - 1].append(img)
                                            img.classList.add("iks")
                                            pole_shot[numer_shot - 1].classList.add("nie")
                                            score_pc++;
                                            niewiadoma++;
                                        }
                                        else {
                                            var img = document.createElement('img')
                                            img.src = "iks.png"
                                            pole_shot[numer_shot - 1].append(img)
                                            img.classList.add("iks")

                                            var button = document.createElement("button")
                                            document.getElementById("guzior").append(button)
                                            button.classList.add("restart")
                                            button.innerHTML = "Reset"
                                            button.onclick = czyszczenie
                                            button.onclick = strona
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
}



strona()