var blues = ["#3767ad", "#3e6ac1", "#3c82c3", "#329bbc"];
var greens = ["#2abc50", "#20a056", "#209c29", "#35b92a"];

const getBlue = () => blues[Math.floor(Math.random() * blues.length)];
const getGreen = () => greens[Math.floor(Math.random() * greens.length)];
var blue = "#329bbc";
var green = "#20a056";
var red = "#a03423";
var yellow = "#bab43e";

var quotes = [
  {
    quote: "Many of the truths that we cling to depend on our point of view.",
    author: "- Obi-Wan Kenobi",
    color: getBlue()
  },
  {
    quote: "Feelings don't come with right or wrong labels - you feel how you feel. You are only responsible for how you act.",
    author: "- Barriss Offee",
    color: getBlue()
  },
  {
    quote: "Those who have power should restrain themselves from using it.",
    author: "- Kit Fisto",
    color: getGreen()
  },
  {
    quote: "Who's the more foolish? The fool, or the fool who follows him?",
    author: "- Obi-Wan Kenobi",
    color: getBlue()
  },
  {
    quote: "Your focus determines your reality.",
    author: "- Qui-Gon Jinn",
    color: getGreen()
  },
  {
    quote: "Let go of your hate.",
    author: "- Luke Skywalker",
    color: getGreen()
  },
  {
    quote: "Wars not make one great.",
    author: "- Yoda",
    color: getGreen()
  },
  {
    quote: "Do, or do not. There is no try.",
    author: "- Yoda",
    color: getGreen()
  },
  {
    quote: "There’s always a bigger fish.",
    author: "- Qui-Gon Jinn",
    color: getGreen()
  },
  {
    quote: "The ability to speak does not make you intelligent.",
    author: "- Qui-Gon Jinn",
    color: getGreen()
  },
  {
    quote: "In a dark place we find ourselves, and a little more knowledge lights our way.",
    author: "- Yoda",
    color: getGreen()
  },
  {
    quote: "Truly wonderful the mind of a child is.",
    author: "- Yoda",
    color: getGreen()
  },
  {
    quote: "Honor is a fool's prize. Glory is of no use to the dead.",
    author: "- Darth Bane",
    color: red
  },
  {
    quote: "No One's Ever Really Gone.",
    author: "- Luke Skywalker",
    color: getBlue()
  },
  {
    quote: "Your overconfidence is your weakness.",
    author: "- Luke Skywalker",
    color: getGreen()
  },
  {
    quote: "Running away from your responsibilities won't solve anything.",
    author: "- Luke Skywalker",
    color: getBlue()
  },
  {
    quote: "An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself.",
    author: "- Bendu",
    color: "#b9683a"
  },
  {
    quote: "If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing.",
    author: "- Obi-Wan Kenobi",
    color: getBlue()
  },
  {
    quote: "Soon I’ll be dead, and you with me.",
    author: "- Luke Skywalker",
    color: getGreen()
  },
  {
    quote: "Your path, you must decide.",
    author: "- Yoda",
    color: getGreen()
  },
  {
    quote: "Let the past die. Kill it, if you have to.",
    author: "- Kylo Ren",
    color: red
  },
  {
    quote: "Sometimes to heal, you must first hurt.",
    author: "- Cilghal",
    color: yellow
  },
  {
    quote: "It's every citizen's duty to challenge their leaders, to keep them honest, and hold them accountable if they're not.",
    author: "- Ahsoka Tano",
    color: getGreen()
  },
  {
    quote: "To be united by hatred is a fragile alliance at best.",
    author: "- Kreia",
    color: "#43c393"
  },
  {
    quote: "We fight for justice because justice is the fundamental bedrock of civilization: an unjust civilization is built upon sand. It does not long survive a storm.",
    author: "- Mace Windu",
    color: "#8b35ce"
  },
  {
    quote: "Inevitably, love is going to lead to as much sorrow and regret as it does joy. How you deal with the bad part of love determines your character.",
    author: "- Jolee Bindo",
    color: getBlue()
  },
  {
    quote: "Lesson one from this experience: Realize how much you don’t know. Lesson two: Make sure to learn from lesson one.",
    author: "- Jacen Solo",
    color: getGreen()
  },
  {
    quote: "You feel empty. You feel alone. Lonely. Almost frightened, but also strong, yes? The name for what you are feeling is freedom. How did you expect it to feel?",
    author: "- Vergere",
    color: getBlue()
  },
  {
    quote: "Following direct orders isn't always the best way to solve a problem.",
    author: "- Ahsoka Tano",
    color: getBlue()
  },
  {
    quote: "The politics of war are not as black and white as I once thought they were.",
    author: "- Ahsoka Tano",
    color: getBlue()
  },
  {
    quote: "This is a new day. A new beginning.",
    author: "- Ahsoka Tano",
    color: getBlue()
  }
];

var currentQuote = '';
var currentAuthor = '';
var color = '';

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getQuote() {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  color = randomQuote.color;
  
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  
  $('#quote-text').animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(currentQuote);
  });
  
  $('#quote-author').animate({ opacity: 0 }, 500, function() {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').text(currentAuthor);
  });
  
  $('html body').animate({
    backgroundColor: color,
    color: color
  }, 1000);
  
  $('.button').animate({
    backgroundColor: color
  }, 1000);
}

$(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
});