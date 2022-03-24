let userHasInterracted = false;

const fartSounds = [
  new Audio('https://cdn.ramseysolutions.net/media/fs-plugin/mixkit-cartoon-fart-triple-3055.wav'),
  new Audio('https://cdn.ramseysolutions.net/media/fs-plugin/mixkit-cartoon-quick-splat-2890.wav'),
  new Audio('https://cdn.ramseysolutions.net/media/fs-plugin/mixkit-funny-cartoon-fast-splat-2889.wav'),
  new Audio('https://cdn.ramseysolutions.net/media/fs-plugin/mixkit-wet-accident-fart-3041.wav'),
]

const playAudio = () => {
  if (userHasInterracted) {
    const fartIndex = getRandomFartIndex();
    fartSounds[fartIndex].play();
  }
}

const getRandomFartIndex = (numofFarts=4) => {
  return Math.floor(Math.random() * numofFarts)
}

window.addEventListener('scroll', () => {
  if (scrollY % 50 === 0) {
    playAudio();
  }
})

window.addEventListener('click', () => {
  userHasInterracted = true;
})