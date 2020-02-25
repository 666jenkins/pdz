// Translations
const language = {
    cir: {
        pdz_large: "ПРИЈАТЕЉИ ДЕЦЕ ЗЕМУНА",
        pdz_short: "ПДЗ"
    },
    lat: {
        pdz_large: "PRIJATELJI DECE ZEMUNA",
        pdz_short: "PDZ"
    }
}

// Reload
const dataReload = document.querySelectorAll("[data-reload]");
console.log(dataReload);

dataReload.forEach((elem) => {
    elem.onclick = () => {
        console.log(`clicked ${elem}`);
        // location.reload(true);
    }
})

// Define
pdzl = document.getElementById("pdz-large");
pdzs = document.getElementById("pdz-short");

if (window.location.hash) {
    if (window.location.hash === "#lt") {
        pdzl.textContent = language.lat.pdz_large;
        pdzs.textContent = language.lat.pdz_short;
    }
}