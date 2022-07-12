memeNav = document.getElementById("meme-nav");
memeNavBottom = document.getElementById("meme-nav-bottom");
memeName = document.getElementById("meme-display-name");
memeDispImg = document.getElementById("meme-display-image");
likeBtn = document.getElementById("like");
nextBtn = document.getElementById("next");
previousBtn = document.getElementById("previous");
let id = 1;

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

function previousMeme() {
  if (id > 1) {
    id -= 1;
    fetchSingleMeme(id);
  } else {
    alert("No more memes!");
  }
}

function nextMeme() {
  if (id < 20) {
    id += 1;
    fetchSingleMeme(id);
  } else {
    alert("No more memes!");
  }
}

function app() {
  fetch("http://localhost:3000/memes/")
    .then((res) => res.json())
    .then((memesArr) => {
      memesArr.forEach((meme) => {
        renderMemes(meme);
      });
      showMeme(memesArr[0]);
    });
  likeBtn.addEventListener("click", addMeme);
  nextBtn.addEventListener("click", nextMeme);
  previousBtn.addEventListener("click", previousMeme);
}

app();

function fetchSingleMeme(id) {
  fetch(`http://localhost:3000/memes/${id}`)
    .then((res) => res.json())
    .then((meme) => showMeme(meme));
}
