window.addEventListener("load", funQuoteRotator);

function funQuoteRotator() {
  var quote = [
    "Well, there’s the usual things: flowers, chocolates, promises you don’t intend to keep.",
    "You keep using that word. I do not think it means what you think it means…",
    "Death cannot stop true love. All it can do is delay it for a while.",
    "Waste no more time arguing about what a good man (person) should be. Be one.",
    "The best revenge is to be unlike him who caused the injury.",
    "The soul is dyed by the color of its thoughts.",
    "The objective in life is not to be on the side of the majority, but to escape finding yourself among the insane.",
    "Empty your mind, be formless, shapeless - like water.",
    "Before you speak, let your words pass through three gates:" +
      "<br />" +
      "-Is it true?" +
      "<br /> " +
      "-Is it necessary?" +
      "<br />" +
      "-Is it kind?",
    "Pay a man enough he'll walk straight into hell.",
    "But she warned him not to be deceived by appearances, for beauty is found within…",
    "The world is cruel, the world is ugly, but there are times and there are people when the world is not. And at its cruelest, it’s still the only world we’ve got. Light and dark, foul and fair…",
    "Oh, Pooh! You messed up my moose!",
    "They can’t order me to stop dreaming!",
  ];
  var author = [
    "Cogsworth",
    "Inigo Montoya",
    "Westley",
    "Marcus Aurelius",
    "Marcus Aurelius",
    "Marcus Aurelius",
    "Marcus Aurelius",
    "Bruce Lee",
    "Rumi",
    "Will Riker",
    "Beauty and the Best",
    "Hunchback of Notre Dame",
    "Rabbit",
    "Cinderella",
  ];
  var i = Math.floor(Math.random() * quote.length);

  let quoteSelect = document.getElementById("quoteFun");
  quoteSelect.innerHTML =
    '<p> "' + quote[i] + '" <br/> <em>~ ' + author[i] + "</em>";
  console.log(quote.length);
}
console.log("Quotes collected from friends, please enjoy <3!");

