const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const cardInfo = document.querySelector(".sottocard");

card1.addEventListener("click", function () {
  cardInfo.querySelector("h1").textContent =
    "Chi è la Governance di Studio Shift?";
  cardInfo.querySelector("p").textContent =
    "La Governance di Studio Shift è composta dal team di direzione e coordinamento che orienta le scelte strategiche, garantisce la trasparenza e promuove la coerenza tra obiettivi sociali ed economici. Attraverso processi decisionali responsabili, contribuisce allo sviluppo sostenibile dello studio. In questa sezione potrai valutare le pratiche di Governance tramite un breve questionario qualitativo e quantitativo.";
  cardInfo.querySelector("a").href = "https://form.jotform.com/252372243151347";
});
card2.addEventListener("click", function () {
  cardInfo.querySelector("h1").textContent =
    "Chi sono i Lavoratori di Studio Shift?";
  cardInfo.querySelector("p").textContent =
    "I Lavoratori di Studio Shift comprendono tutte le persone che contribuiscono quotidianamente alle attività dello studio, apportando competenze, professionalità e valore umano. Il loro benessere, la valorizzazione delle competenze e la qualità delle relazioni di lavoro sono elementi centrali per la crescita sostenibile dell’organizzazione. In questa sezione potrai contribuire alla valutazione delle pratiche rivolte ai Lavoratori attraverso un breve questionario qualitativo e quantitativo.";
  cardInfo.querySelector("a").href = "https://form.jotform.com/252372282885364";
});
card3.addEventListener("click", function () {
  cardInfo.querySelector("h1").textContent =
    "Chi sono gli Stakeholder di Studio Shift?";
  cardInfo.querySelector("p").textContent =
    "Gli Stakeholder di Studio Shift includono tutte le persone, organizzazioni e comunità che interagiscono con lo studio o ne sono influenzate, come clienti, partner, fornitori e il territorio di riferimento. Il dialogo e il coinvolgimento degli Stakeholder sono fondamentali per generare valore condiviso e orientare le scelte in modo responsabile. In questa sezione potrai contribuire alla valutazione delle pratiche di relazione e coinvolgimento degli Stakeholder attraverso un breve questionario qualitativo e quantitativo.";
  cardInfo.querySelector("a").href = "https://form.jotform.com/252372639607362";
});
