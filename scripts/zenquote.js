export async function getQuote() {
  const api_url =
    "https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes/";
  let footer = document.querySelector(".footContent");

  let response = await fetch(api_url);
  let data = await response.json();
  console.log(data);

  let quoteData = JSON.parse(data.contents);

  let quote = quoteData[0].q; // Quote text
  let author = quoteData[0].a; // Author name

  let quoteParagraph = document.createElement("p");
  quoteParagraph.innerText = `"${quote}" - ${author}`;
  footer.classList.add("d-flex", "flex-row-reverse", "justify-content-between");

  footer.append(quoteParagraph);
}
