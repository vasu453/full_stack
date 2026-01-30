const canvas = document.getElementById('canvas');
const undoBtn = document.getElementById('undoBtn');
const countEl = document.getElementById('count');

let history = [];

function updateCount(){
  countEl.textContent = history.length;
  undoBtn.disabled = history.length === 0;
}

function createDot(x, y){
  const dot = document.createElement('div');
  dot.className = 'dot';
  // position relative to container top-left
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  // append then trigger show animation
  canvas.appendChild(dot);
  // allow layout then add class so CSS transitions run
  requestAnimationFrame(()=> requestAnimationFrame(()=> dot.classList.add('show')));

  history.push(dot);
  updateCount();
}

// Add dot on click
canvas.addEventListener('click', (e)=>{
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  createDot(x, y);
});

// Undo with button
undoBtn.addEventListener('click', ()=>{
  const last = history.pop();
  if (!last) return;

  // reverse animation then remove
  last.classList.remove('show');
  last.style.transition = 'transform .12s ease, opacity .12s ease';
  last.style.transform = 'translate(-50%,-50%) scale(.6)';
  last.style.opacity = '0';

  setTimeout(()=>{ if (last.parentNode) last.remove(); }, 140);
  updateCount();
});

// Keyboard shortcut: Ctrl/Cmd + Z to undo
window.addEventListener('keydown', (e)=>{
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z'){
    e.preventDefault();
    undoBtn.click();
  }
});

// Accessibility: focus the canvas when tabbing and show focus outline handled by CSS
canvas.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter'){
    // create a dot in the center when pressing Enter for keyboard users
    const rect = canvas.getBoundingClientRect();
    createDot(rect.width/2, rect.height/2);
  }
});

// initialize
updateCount();