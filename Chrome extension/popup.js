const quotes = [
  "First, solve the problem. Then, write the code. - John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Clean code always looks like it was written by someone who cares. - Robert C. Martin",
  "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde"
];

document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = `"${quotes[randomIndex]}"`;
});
