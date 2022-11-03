var quotes = [
    ["Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
    "Стив Макконнелл"],

    ["Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
    "И. Берард"],

    ["Сложность программы растет до тех пор, пока не превысит способности программиста",
    "Артур Блох. Законы Мэрфи"]];
document.querySelector('.quote').innerHTML = quotes[0];
 function change() {
    var random = quotes[ Math.floor( Math.random() * quotes.length ) ];

    document.querySelector('.quote').innerHTML = random[0];
    document.querySelector('.author').innerHTML = random[1];
}
