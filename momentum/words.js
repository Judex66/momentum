var quotes = [
    ["Если маклауд, целься в голову, если нет, выцеливай разгруз",
    "неизвестный страйкболист"],

    ["Порой надо остановиться, и спросить, а это их мертвяк?",
    "типичный страйкбольный снайпер"],

    ["Если к тебе вторгся фантом, превратись в кустик в кустике",
    "кустик"]];
document.querySelector('.quote').innerHTML = quotes[0];
 function change() {
    var random = quotes[ Math.floor( Math.random() * quotes.length ) ];

    document.querySelector('.quote').innerHTML = random[0];
    document.querySelector('.author').innerHTML = random[1];
}