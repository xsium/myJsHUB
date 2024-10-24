async function getMeme() {
  let meme = document.getElementById("meme");
  let title = document.getElementById("title");
  let url = " https://meme-api.com/gimme";

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  title.innerText = data.title;
  meme.src = data.url;
}

function prepareMemeBtn() {
  let getMemeBTN = document.getElementById("memeBTN");
  getMemeBTN.addEventListener("click", getMeme);
}
prepareMemeBtn();
getMeme();
