var intervalek = setInterval(0)
let tryb = ""
let rekordy = []
var obrazek = ""
if (!!document.cookie)
    rekordy = JSON.parse(document.cookie)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n == undefined) { n = ++slideIndex }
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("wybrany")
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("wybrany")
    var wybraniec = document.querySelector(".wybrany")

    var imag = wybraniec.getElementsByTagName('img')

    obrazek = imag[0].getAttribute('src')
}

class Gra {
    płytki = []
    pozycje = []
    czas = 0
    dzielenie = document.getElementById("dzielenie")
    whiteIndex = null
    klikable = []
    start = false
    ile = 250
    constructor(wymiar) {
        this.dzielenie.innerHTML = ""
        this.wymiar = wymiar
        tryb = wymiar + "x" + wymiar
        this.stworzplansze()
        this.updateplanszy()
        this.polowanie()
        this.randomizer()
    }
    stworzplansze() {
        for (var y = 0; y < this.wymiar; y++) {
            for (var z = 0; z < this.wymiar; z++) {
                var div = document.createElement("div")
                this.dzielenie.appendChild(div)
                this.płytki.push(div)
                if (z == this.wymiar - 1 && y == this.wymiar - 1) {
                    this.pozycje.push({ index: this.wymiar * y + z, background: "white" })
                } else { this.pozycje.push({ index: this.wymiar * y + z, background: "url('" + obrazek + "') -" + z * 600 / this.wymiar + "px -" + y * 600 / this.wymiar + "px " }) }
                div.style.height = 600 / this.wymiar + "px"
                div.style.width = 600 / this.wymiar + "px"
            }
        }
    }
    updateplanszy() {
        var win = true
        this.whiteIndex = null
        this.płytki.forEach((x, i) => {
            x.style.background = this.pozycje[i].background
            x.onclick = null
            if (this.pozycje[i].index != i) {
                win = false
            }
        })
        if (win && this.start) {
            clearInterval(intervalek)
            d = new Date()
            var milisek = d.getTime() - this.czas
            var sek = Math.floor(milisek / 1000)
            var min = Math.floor(sek / 60)
            var godz = Math.floor(min / 60)

            godz = godz.toString()
            min = min.toString()
            sek = sek.toString()
            milisek = milisek.toString()

            if (godz.length < 2) godz = "0" + godz
            if (min.length < 2) min = "0" + min
            if (sek.length < 2) sek = "0" + sek
            if (milisek.length < 2) milisek = "0" + milisek
            if (milisek.length < 3) milisek = "0" + milisek

            godz = godz.substring(godz.length - 2, godz.length)
            min = min.substring(min.length - 2, min.length)
            sek = sek.substring(sek.length - 2, sek.length)
            milisek = milisek.substring(milisek.length - 3, milisek.length)

            sek = sek % 60

            var nick = ""

            nick = prompt("Twój czas: \n" + godz + " : " + min + " : " + sek + " . " + milisek + "\nproszę wpisać swój nick:")
            console.log(nick)

            var odwrotny_wynik = godz + min + sek + milisek;


            /////////

            if (!!document.cookie)
                rekordy = JSON.parse(document.cookie)


            var do_tablicy = { miejsce: 1, nick: nick, czas: godz + ":" + min + ":" + sek + ":" + milisek, odwrotny_wynik: odwrotny_wynik, tryb: tryb }

            rekordy.push(do_tablicy)

            console.log(rekordy)

            rekordy.sort(function (a, b) {
                return a.odwrotny_wynik - b.odwrotny_wynik
            })

            var do_ciastek = JSON.stringify(rekordy)

            document.cookie = do_ciastek

            /////////

        }
        else {
            this.polowanie()
        }

    }
    polowanie() {
        var i = 0
        while (this.whiteIndex == null) {
            if (this.pozycje[i].background == "white") {
                this.whiteIndex = i
            }
            i++
        }
        this.tiles()
    }
    tiles() {
        this.klikable = []
        var y = Math.floor(this.whiteIndex / this.wymiar)
        var range = [-1, 1, -1 * this.wymiar, this.wymiar]
        range.forEach(b => {
            var newIndex = this.whiteIndex + b
            if (newIndex < this.płytki.length && newIndex > -1) {
                if ((b == 1 || b == -1) && y == Math.floor(newIndex / this.wymiar)) {
                    this.klikable.push(newIndex)
                    if (this.start) {
                        this.płytki[newIndex].onclick = function () {
                            this.swap(newIndex)
                        }.bind(this)
                    }
                }
                else if ((b == -1 * this.wymiar || b == this.wymiar)) {
                    this.klikable.push(newIndex)
                    if (this.start) {
                        this.płytki[newIndex].onclick = function () {
                            this.swap(newIndex)
                        }.bind(this)
                    }
                }
            }
        })
    }
    swap(x) {
        var tempwhite = this.pozycje[this.whiteIndex]
        this.pozycje[this.whiteIndex] = this.pozycje[x]
        this.pozycje[x] = tempwhite
        this.updateplanszy()
    }
    randomizer() {
        if (this.ile != 0) {
            setTimeout(function () { this.randomizer() }.bind(this), 1)
        }
        else {
            this.start = true
            starter = false
            intervalek = setInterval(function () { this.timer() }.bind(this), 1)
            d = new Date()
            this.czas = d.getTime()
        }
        var rand = Math.floor(Math.random() * this.klikable.length)
        this.swap(this.klikable[rand])
        this.ile--
    }
    ////////////////////////////////////////////////////////////////////////
    timer() {
        var arr = []
        d = new Date()
        var milisek = d.getTime() - this.czas
        var sek = Math.floor(milisek / 1000)
        var min = Math.floor(sek / 60)
        var godz = Math.floor(min / 60)

        godz = godz.toString()
        min = min.toString()
        sek = sek.toString()
        milisek = milisek.toString()

        godz = godz.substring(godz.length - 2, godz.length)
        min = min.substring(min.length - 2, min.length)
        sek = sek.substring(sek.length - 2, sek.length)
        milisek = milisek.substring(milisek.length - 3, milisek.length)

        sek = sek % 60

        //console.log("czas: " + godz + " : " + min + " : " + sek + " : " + milisek)

        // timer to array zawierający divy odpowaiadające cyfrom wyświetlacza (h1 to pierwsza cyfra godziny itd)
        var timer = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("m1"),
        document.getElementById("m2"), document.getElementById("s1"), document.getElementById("s2"),
        document.getElementById("ms1"), document.getElementById("ms2"), document.getElementById("ms3")]
        //funkcja display przyjmuje jako argumenty (h,m,s,ms) liczby które liczaliśmy przy naszym poprzednim wyświetlaczu są to kolejno godziny, minuty, sekundy i milisekudny
        function display(h, m, s, ms) {
            // liczba = liczba.toString() zamienia nam liczbę w stringa co pozwala na dostanie się do poszczególnych cyfr liczby np liczba = "123" wtedy liczba[0] to 1 itd. a kiedt liczba = 123 liczba[0] to undefined
            var h = h.toString()
            // ten if to zabezpieczenie przed liczbami jednocyfrowymi nasz wyświetlacz 9 ma wyświetlić jako 09
            if (h.length < 2) h = "0" + h
            var m = m.toString()
            if (m.length < 2) m = "0" + m
            var s = s.toString()
            if (s.length < 2) s = "0" + s
            var ms = ms.toString()
            if (ms.length < 2) ms = "0" + ms
            if (ms.length < 3) ms = "0" + ms
            h = h.substring(h.length - 2, h.length)
            m = m.substring(m.length - 2, m.length)
            s = s.substring(s.length - 2, s.length)
            ms = ms.substring(ms.length - 3, ms.length)
            //tworzymy array który zwiera wszystkie cyfry czsu
            arr = [h[0], h[1], m[0], m[1], s[0], s[1], ms[0], ms[1], ms[2]]

            for (var i = 0; i < arr.length; i++) {
                timer[i].style.backgroundImage = "url('./" + arr[i] + ".png')"
            }
        }
        display(godz, min, sek, milisek)
    }

}
var gra = null
var d = new Date()
var starter = false
function start(x) {
    if (!starter) {
        clearInterval(intervalek)
        starter = true
        x = new Gra(x)
    }
}

function score_board() {

    var e = document.getElementById("opcja")
    var wybrany = e.value
    var reward = 1

    document.body.innerHTML = "<button id='back' onclick='location.reload()'></button><h1 style='text-align: center' class='glitch0' data-text='REKORDY W " + wybrany + "'>REKORDY W " + wybrany + "</h1><table style='margin-left:auto; margin-right:auto;'></table>"
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let td = document.createElement("td");
            let text = document.createTextNode(key);
            td.classList.add("glitch")
            td.setAttribute("data-text", key)
            td.appendChild(text);
            row.appendChild(td);
        }
    }
    function generateTable(table) {
        if (wybrany == "3x3") {

            for (let i = 0; i < rekordy.length; i++) {
                if (rekordy[i].tryb == "3x3") {
                    let row = table.insertRow();
                    let cell = row.insertCell();
                    let text = document.createTextNode(reward)
                    cell.classList.add("glitch")
                    cell.setAttribute("data-text", reward)
                    cell.appendChild(text);
                    let cell2 = row.insertCell();
                    let text2 = document.createTextNode(rekordy[i].nick)
                    cell2.classList.add("glitch")
                    cell2.setAttribute("data-text", rekordy[i].nick)
                    cell2.appendChild(text2);
                    let cell3 = row.insertCell();
                    let text3 = document.createTextNode(rekordy[i].czas)
                    cell3.classList.add("glitch")
                    cell3.setAttribute("data-text", rekordy[i].czas)
                    cell3.appendChild(text3)
                    reward++
                }
            }

        } else if (wybrany == "4x4") {

            for (let i = 0; i < rekordy.length; i++) {
                if (rekordy[i].tryb == "4x4") {
                    let row = table.insertRow();
                    let cell = row.insertCell();
                    let text = document.createTextNode(reward)
                    cell.classList.add("glitch")
                    cell.setAttribute("data-text", reward)
                    cell.appendChild(text);
                    let cell2 = row.insertCell();
                    let text2 = document.createTextNode(rekordy[i].nick)
                    cell2.classList.add("glitch")
                    cell2.setAttribute("data-text", rekordy[i].nick)
                    cell2.appendChild(text2);
                    let cell3 = row.insertCell();
                    let text3 = document.createTextNode(rekordy[i].czas)
                    cell3.classList.add("glitch")
                    cell3.setAttribute("data-text", rekordy[i].czas)
                    cell3.appendChild(text3)
                    reward++
                }
            }

        } else if (wybrany == "5x5") {

            for (let i = 0; i < rekordy.length; i++) {
                if (rekordy[i].tryb == "5x5") {
                    let row = table.insertRow();
                    let cell = row.insertCell();
                    let text = document.createTextNode(reward)
                    cell.classList.add("glitch")
                    cell.setAttribute("data-text", reward)
                    cell.appendChild(text);
                    let cell2 = row.insertCell();
                    let text2 = document.createTextNode(rekordy[i].nick)
                    cell2.classList.add("glitch")
                    cell2.setAttribute("data-text", rekordy[i].nick)
                    cell2.appendChild(text2);
                    let cell3 = row.insertCell();
                    let text3 = document.createTextNode(rekordy[i].czas)
                    cell3.classList.add("glitch")
                    cell3.setAttribute("data-text", rekordy[i].czas)
                    cell3.appendChild(text3)
                    reward++
                }
            }

        } else if (wybrany == "6x6") {

            for (let i = 0; i < rekordy.length; i++) {
                if (rekordy[i].tryb == "6x6") {
                    let row = table.insertRow();
                    let cell = row.insertCell();
                    let text = document.createTextNode(reward)
                    cell.classList.add("glitch")
                    cell.setAttribute("data-text", reward)
                    cell.appendChild(text);
                    let cell2 = row.insertCell();
                    let text2 = document.createTextNode(rekordy[i].nick)
                    cell2.classList.add("glitch")
                    cell2.setAttribute("data-text", rekordy[i].nick)
                    cell2.appendChild(text2);
                    let cell3 = row.insertCell();
                    let text3 = document.createTextNode(rekordy[i].czas)
                    cell3.classList.add("glitch")
                    cell3.setAttribute("data-text", rekordy[i].czas)
                    cell3.appendChild(text3)
                    reward++
                }
            }

        }
    }

    let table = document.querySelector("table");
    let data = Object.keys(rekordy[0]);
    data = data.slice(0, 3)
    generateTableHead(table, data);
    generateTable(table);
}
