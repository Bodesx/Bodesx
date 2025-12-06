// --- AUDIO FILES ---
const slideSound = new Audio("https://cdn.freesound.org/previews/367/367997_6512973-lq.mp3");
const acceptSound = new Audio("https://cdn.freesound.org/previews/220/220166_4100837-lq.mp3");
const rejectSound = new Audio("https://cdn.freesound.org/previews/657/657950_6142149-lq.mp3");

// mute flag (optional)
let muted = false;

// helpers
function play(sound) {
  if (!muted) {
    sound.currentTime = 0;
    sound.play();
  }
}

// --- CONNECT TO YOUR HTML ---

// open modal button (Upgrade)
const upgradeBtn = document.querySelector('[aria-label="Upgrade"]');

// modal itself
const popover = document.querySelector("#upgrade");

// buttons inside modal
const cancelBtn = document.querySelector('[data-action="Cancel"]');
const proceedBtn = document.querySelector('[data-action="Proceed"]');


// When upgrade is clicked → modal opens → play slide sound
upgradeBtn.addEventListener("click", () => {
  play(slideSound);
});


// When Cancel is clicked → reject sound
cancelBtn.addEventListener("click", () => {
  play(rejectSound);
});


// When Proceed is clicked → accept sound
proceedBtn.addEventListener("click", () => {
  play(acceptSound);
});










document.querySelector('[data-action="Proceed"]').addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "./doucument/LawansonOlubodeResume C.pdf"; // your file
    link.download = "LawansonOlubodeResume.pdf"; // name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });