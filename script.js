function togglePodcast() {
  document.getElementById("podcast").classList.toggle("hidden");
}

// RANDOM BALLET QUOTES
const quotes = [
  {
    text: "I do not try to dance better than anyone else. I only try to dance better than myself.",
    author: "Mikhail Baryshnikov"
  },
  {
    text: "Be strong, be fearless, be beautiful.",
    author: "Misty Copeland"
  },
  {
    text: "Don’t think, dear. Just do.",
    author: "George Balanchine"
  },
  {
    text: "No one can arrive from being talented alone.",
    author: "Anna Pavlova"
  },
  {
    text: "The truest expression of a people is in its dance.",
    author: "Agnes de Mille"
  }
];

function showQuote() {
  const quoteEl = document.getElementById("quote");

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  quoteEl.innerHTML = `"${random.text}"<br><i>- ${random.author}</i>`;
  quoteEl.classList.remove("hidden");
}
