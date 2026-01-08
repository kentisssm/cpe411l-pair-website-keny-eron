let balance = parseInt(localStorage.getItem('slotBalance')) || 1000;
const balanceDisplay = document.getElementById('balance');
balanceDisplay.textContent = balance;

const spinBtn = document.getElementById('spinBtn');
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');

let symbols = ["🍒", "🍋", "🔔", "🍉", "💎", "7️⃣"]; // fallback emojis

spinBtn.addEventListener('click', () => {
  if (balance < 10) {
    alert("Not enough balance to spin!");
    return;
  }

  balance -= 10;
  localStorage.setItem('slotBalance', balance);
  balanceDisplay.textContent = balance;

  // Choose random symbols
  const newSymbols = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  reel1.textContent = newSymbols[0];
  reel2.textContent = newSymbols[1];
  reel3.textContent = newSymbols[2];
});

// Handle image upload
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

imageUpload.addEventListener('change', function () {
  const files = Array.from(this.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name.split('.')[0];
      imagePreview.appendChild(img);

      // replace symbols with uploaded images
      symbols.push(img.outerHTML);
    };
    reader.readAsDataURL(file);
  });
});
