var express = require("express");
var app = express()
var PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku
const path = require("path");
const e = require("express");
let bool = true;
var bodyParser = require("body-parser");
const { on } = require("process");
const { table } = require("console");
app.use(bodyParser.urlencoded({ extended: true }));
let help = 3;
var logged = 0;
var tab = [
    { id: 0, login: "aaa", password: "aaa", student: undefined, age: 11, sex: "k" },
    { id: 1, login: "kasia", password: "kasia", student: "on", age: 33, sex: "m" },
    { id: 2, login: "xd", password: "xd", student: undefined, age: 22, sex: "k" }
]
app.use(express.static('static'))
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/main.html"))
})
app.get("/main", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/main.html"))
})

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))

})
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/login.html"))
})
app.get("/admin", function (req, res) {
    if (logged == 0) {
        res.sendFile(path.join(__dirname + "/static/admin1.html"))
    }
    else
        res.sendFile(path.join(__dirname + "/static/admin2.html"))
})

app.get("/sort", function (req, res) {
    res.redirect("admin")
})

app.get("/gender", function (req, res) {
    res.redirect("admin")
})

app.get("/show", function (req, res) {
    res.redirect("admin")
})

app.post("/logout", function (req, res) {
    logged = 0;
    res.redirect("/main")
    console.log(logged)
})
app.post("/reg", function (req, res) {
    for (let i = 0; i < tab.length; i++) {
        if (req.body.login == tab[i].login) {
            bool = false;
            console.log("Rejestracja się nie powiodła")
            res.redirect("/register")
        }
    }
    if (bool) {
        let user = { id: help, login: req.body.login, password: req.body.password, student: req.body.student, age: req.body.age, sex: req.body.sex }
        tab.push(user)
        help++;
        console.log("Rejestracja się powiodła.")
        res.redirect("/main")
        console.log(user)
    }
})
app.post("/log", function (req, res) {
    for (let i = 0; i < tab.length; i++) {
        if (req.body.login == tab[i].login) {
            if (req.body.password == tab[i].password) {
                logged = 1;
                console.log(tab[i].login)
                res.redirect("/admin")
                i = tab.length
            }
            else {
                console.log("Błędne hasło.")
                i = tab.length
            }
        }
        else {
            console.log("Nie ma takiego loginu.")
        }
    }
    if (logged == 0) {
        res.redirect("/login")
    }
})
app.post("/show", function (req, res) {
    if (logged == 1) {
        var page = '<body style="margin: 0px; padding 0px; color: white; background-color: rgb(31, 31, 31); width= 100vw; height= 100vh"><div style="display: flex;flex-direction: row;"><form action="/sort" method="POST"><a style="color: white; font-size: 30px;" href="#" onclick="this.parentNode.submit()">Sort</a></form>'
        page += '<form action="/gender" method="POST"><a style="font-size: 30px; color: white; padding-left: 10px; padding-right: 10px" href="#" onclick="this.parentNode.submit()">Gender</a></form>'
        page += '<form action="/show" method="POST"><a style=" font-size: 30px; color: white;" href="#" onclick="this.parentNode.submit()">Show</a></form></div>'
        tab.sort(function (a, b) {
            return a.id - b.id
        })
        page += '<table>'
        for (var i = 0; i < tab.length; i++) {
            page += '<tr>'
            page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px;  width: 10vw">' + "id: " + tab[i].id + "</td>"
            page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 35vw">' + "user: " + tab[i].login + " - " + tab[i].password + "</td>"
            if (tab[i].student == "on") {
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 15vw">' + "uczeń: <input type='checkbox' checked disabled>" + "</td>"
            }
            else {
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw">' + "uczeń: <input type='checkbox' disabled>" + "</td>"
            }
            page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw">' + "wiek: " + tab[i].age + "</td>"
            if (tab[i].sex == "k")
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw;">' + "płeć: kobieta" + "</td>"
            else
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw;">' + "płeć: mężczyzna" + "</td>"
            page += "</tr>"
        }
        page += "</table></body>"
        res.send(page)
    }
    else {
        res.redirect("admin")
    }
})
app.post("/gender", function (req, res) {
    if (logged == 1) {
        var page = '<body style="margin: 0px; padding 0px; color: white; background-color: rgb(31, 31, 31); width= 100vw; height= 100vh"><div style="display: flex;flex-direction: row;"><form action="/sort" method="POST"><a style="color: white; font-size: 30px;" href="#" onclick="this.parentNode.submit()">Sort</a></form>'
        page += '<form action="/gender" method="POST"><a style="font-size: 30px; color: white; padding-left: 10px; padding-right: 10px" href="#" onclick="this.parentNode.submit()">Gender</a></form>'
        page += '<form action="/show" method="POST"><a style="color: white; font-size: 30px;" href="#" onclick="this.parentNode.submit()">Show</a></form></div>'
        woman = '<table>'
        man = '<table>'
        for (var i = 0; i < tab.length; i++) {
            if (tab[i].sex == "k") {
                woman += '<tr><td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 40vw">' + "id: " + tab[i].id + '</td> '
                woman += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 60vw">' + "płeć: k" + "</td></tr>"
            }
            else {
                man += '<tr><td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 40vw">' + "id: " + tab[i].id + '</td>'
                man += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 60vw">' + "płeć: m" + "</td></tr>"
            }
        }
        woman += "</table><br><br>"
        man += "</table></body>"
        page += woman + man
        res.send(page)
    }
    else {
        res.redirect("admin")
    }
})

var helpme = 0;
app.post("/sort", function (req, res) {
    if (logged == 1) {
        var page = '<body style="margin: 0px; padding 0px; color: white; background-color: rgb(31, 31, 31); width= 100vw; height= 100vh"><div style="display: flex;flex-direction: row;"><form action="/sort" method="POST"><a style="color: white; font-size: 30px;" href="#" onclick="this.parentNode.submit()">Sort</a></form>'
        page += '<form action="/gender" method="POST"><a style="font-size: 30px; padding-left: 10px; color: white; padding-right: 10px" href="#" onclick="this.parentNode.submit()">Gender</a></form>'
        page += '<form action="/show" method="POST"><a style="color: white; font-size: 30px;" href="#" onclick="this.parentNode.submit()">Show</a></form></div>'
        if (req.body.sort == 1)
            helpme = 1
        else
            helpme = 0
        if (helpme == 0) {
            page += '<form onchange="this.submit()" method="POST"><input type="radio" value="0" id="option1" name="sort" checked="checked"><label style="color: white; font-size: 30px;" for="up">rosnąco</label><input type="radio" value="1" id="option2" name="sort"><label style="color: white; font-size: 30px;" for="down">malejąco</label></form>'
            tab.sort(function (a, b) {
                return a.age - b.age
            })
            page += '<table>'
            for (var i = 0; i < tab.length; i++) {
                page += '<tr>'
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw">' + "id: " + tab[i].id + "</td>"
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 50vw">' + "user: " + tab[i].login + " - " + tab[i].password + "</td>"
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 30vw">' + "wiek: " + tab[i].age + "</td></tr>"
            }
            page += "</table></body>"
        }
        else {
            page += '<form onchange="this.submit()" method="POST"><input type="radio" value="0" id="option1" name="sort" required=""><label style="color: white; font-size: 30px;" for="up">rosnąco</label><input type="radio" value="1" id="option2" name="sort" checked="checked"><label style="color: white; font-size: 30px;" for="down">malejąco</label></form>'
            tab.sort(function (a, b) {
                return b.age - a.age
            })
            page += '<table>'
            for (var i = 0; i < tab.length; i++) {
                page += '<tr>'
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 20vw">' + "id: " + tab[i].id + "</td>"
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 50vw">' + "user: " + tab[i].login + " - " + tab[i].password + "</td>"
                page += '<td style="border: 2px yellow solid; color: white; font-size: 30px; padding: 16px; width: 30vw">' + "wiek: " + tab[i].age + "</td></tr>"
            }
            page += "</table></body>"
        }
        res.send(page)
    }
    else {
        res.redirect("admin")
    }
})
