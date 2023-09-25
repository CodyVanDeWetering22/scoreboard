let away = 0
let home = 0


function away1() {
    away += 1
    console.log(away, 'away')
    const awayelement = document.getElementById('awayscore')
    awayelement.innerText = away
}

function away3() {
    away += 3
    console.log(away, 'away');
    const awayelement = document.getElementById('awayscore')
    awayelement.innerText = away
}

function home1() {
    home += 1
    console.log(home, 'home');
    const homeelement = document.getElementById('homescore')
    homeelement.innerText = home
}

function home3() {
    home += 3
    console.log(home, 'home');
    const homeelement = document.getElementById('homescore')
    homeelement.innerText = home

}

function reset() {

    away = 0
    console.log(away, 'away')
    const awayelement = document.getElementById('reset')

    home = 0
    console.log(home, 'home');
    const homeelement = document.getElementById('reset')



}