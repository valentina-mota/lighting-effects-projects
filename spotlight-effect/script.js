const overlay = document.querySelector(".overlay");

window.addEventListener("mousemove", (e) => {
  const {clientX, clientY} = e;
  const scrollY = window.scrollY;
  const x = Math.round((clientX / window.innerWidth)*100);
  const y = Math.round(((clientY + scrollY) / document.documentElement.scrollHeight) * 100);
  overlay.style.backgroundImage = "radial-gradient(circle at " + x + "px" + y + "px, transparent, #000 30%)";

  gsap.to(overlay, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: .6,
    ease: "sine-out"
  })
});
