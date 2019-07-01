window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  /*select all divs inside pads*/
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(116, 197, 224)",
    "rgb(233, 106, 106)",
    "rgb(93, 233, 93)",
    "rgb(255, 124, 144)",
    "lightseagreen",
    "rgb(111, 158, 221)"
  ];

  //Lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  //create function that makes visual effect
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationed", function() {
      visual.removeChild(this);
    });
  };
});
