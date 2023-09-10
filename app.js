const $ = document;
let btn = $.querySelector("button");
let img = $.querySelector(".lightBulb");
let isOn = false;
btn.addEventListener("click", () => {
  if (!isOn) {
    img.setAttribute("src", "on.png");
    btn.innerHTML = "Turn Off";
    isOn = true;
  } else {
    img.setAttribute("src", "off.png");
    btn.innerHTML = "Turn On";
    isOn = false;
  }
});
