memeNav = document.getElementById("meme-nav");
memeNavBottom = document.getElementById("meme-nav-bottom");
memeName = document.getElementById("meme-display-name");
memeDispImg = document.getElementById("meme-display-image");
likeBtn = document.getElementById("like");

function renderMemes(meme) {
  let memeImg = document.createElement("img");
  memeImg.src = meme.url;
  memeImg.addEventListener("click", () => showMeme(meme));
  memeNav.append(memeImg);
}

function showMeme(meme) {
  memeName.textContent = meme.name;
  memeDispImg.src = meme.url;
}

function addMeme(e) {
  e.preventDefault();
  let bottomMemeImg = document.createElement("img");
  bottomMemeImg.src = memeDispImg;
  memeNavBottom.append(memeDispImg);
  showMeme(meme);
}

function app() {
  fetch("https://meme-api.herokuapp.com/gimme/50")
    .then((res) => res.json())
    .then((memesArr) => {
      memesArr.memes.forEach((meme) => {
        renderMemes(meme);
      });
      showMeme(memesArr.memes[0]);
    });
  likeBtn.addEventListener("click", addMeme);
}

app();
