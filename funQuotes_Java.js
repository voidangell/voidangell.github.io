window.addEventListener("load", funQuoteRotator);

function funQuoteRotator() {
  var quote = ["quote 0", "quote 1", "quote 2", "quote 3"];
  var author = ["author 0", "author 1", "author 2", "author 3"];
  var i = Math.floor(Math.random() * quote.length);

  let quoteSelect = document.getElementById("quoteFun");
  quoteSelect.innerHTML =
    '<p> "' + quote[i] + '" <br/> <em>~ ' + author[i] + "</em>";
}
