const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const wrapper = document.querySelector(".input-wrapper");

const max = textarea.maxLength;
const circle = document.querySelector(".progress");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let rafId = null;

function updateUI() {
  const length = textarea.value.length;
  const progress = length / max;

  counter.textContent = `${length}/${max}`;

  const offset = circumference - progress * circumference;
  circle.style.strokeDashoffset = offset;

  wrapper.classList.remove("warn", "danger");

  if (progress >= 0.8 && progress < 1) wrapper.classList.add("warn");
  if (progress >= 1) wrapper.classList.add("danger");

  autoResize();
}

function autoResize() {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

textarea.addEventListener("input", () => {
  if (rafId) cancelAnimationFrame(rafId);

  rafId = requestAnimationFrame(updateUI);
});

updateUI();
