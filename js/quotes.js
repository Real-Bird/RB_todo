const quote = document.querySelector(".quote-text");
const author = document.querySelector(".quote-author");
const quoteDiv = document.querySelector("#quote");
const btnDiv = document.querySelector(".btn-area");
const QUOTES_URL =
  "https://raw.githubusercontent.com/Real-Bird/save2day/master/src/asset/quotes.json";

fetch(QUOTES_URL)
  .then((response) => response.json())
  .then((quoteArr) => {
    const randomIndex = Math.floor(
      Math.random() * Object.values(quoteArr.k_name).length
    );
    const engChangeBtn = document.createElement("button");
    const korChangeBtn = document.createElement("button");
    const LANG_ENG = "ENG";
    engChangeBtn.innerText = "TO ENG";
    korChangeBtn.innerText = "TO KOR";
    btnDiv.appendChild(engChangeBtn);
    btnDiv.appendChild(korChangeBtn);
    engChangeBtn.onclick = () => {
      quoteDiv.classList.add(LANG_ENG);
      author.innerText = Object.values(quoteArr.e_name)[randomIndex];
      quote.innerText = Object.values(quoteArr.e_quote)[randomIndex];
    };
    korChangeBtn.onclick = () => {
      quoteDiv.classList.remove(LANG_ENG);
      author.innerText = Object.values(quoteArr.k_name)[randomIndex];
      quote.innerText = Object.values(quoteArr.k_quote)[randomIndex];
    };
    author.innerText = Object.values(quoteArr.k_name)[randomIndex];
    quote.innerText = Object.values(quoteArr.k_quote)[randomIndex];
  });
