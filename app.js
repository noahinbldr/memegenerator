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
  fetch("http://localhost:3000/memes")
    .then((res) => res.json())
    .then((memesArr) => {
      memesArr.forEach((meme) => {
        renderMemes(meme);
        console.log(memesArr);
      });
      showMeme(memesArr[0]);
    });
  likeBtn.addEventListener("click", addMeme);
}

app();
