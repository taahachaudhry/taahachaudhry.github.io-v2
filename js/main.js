var $ = require('jquery');
require('jquery.easing');

function displayQuote() {
  var quotes = [
    ["Sometimes life is like this dark tunnel- you can’t always see the light at the end of the tunnel. But if you just keep moving, you will come to a better place.", " – Uncle Iroh, Avatar the Last Airbender"],
    ["It is important to draw wisdom from different places. If you take it from only one place it will become rigid and stale.", " – Uncle Iroh, Avatar the Last Airbender"],
    ["In the darkest times, hope is something you give yourself. That is the meaning of inner strength.", " – Uncle Iroh, Avatar the Last Airbender"],
    ["Who knocks at the garden gate?", " – Iroh, Avatar the Last Airbender"],
    ["Sharing tea with a fascinating stranger is one of life’s true delights.", " – Iroh, Avatar the Last Airbender"],
    ["The best tea tastes delicious whether it comes in a porcelain pot or a tin cup.", " – Uncle Iroh, Avatar the Last Airbender"],
    ["Creativity, versatility, intelligence. These are the traits that define a great (swords)man.", " – Pian Dao, Avatar the Last Airbender"],
    ["It was bitter work, but the results...were worth it.", " –  Avatar Roku, Avatar the Last Airbender"],
    ["Learn restraint or risk destroying yourself and everything you love.", " –  Jeong Jeong, Avatar the Last Airbender"],
    ["I’m not a psychopath, Anderson. I’m a high-functioning sociopath. Do your research.", " –  Sherlock Holmes, Sherlock"],
    ["I'm inclined to give you a shot (at this job opening), but what if I decide to go another way? -- I'd say that's fair. Sometimes I like to hang out with people who aren't that bright, you know, just to see how the other half lives.", " –  Harvey Specter & Mike Ross, Suits"],
    ["Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", " – Malcolm X"],
    ["The future belongs to those who prepare for it today.", " – Malcolm X"],
    ["If you're not careful, the newspapers will have you hating the people who are being oppressed, and loving the people who are doing the oppressing.", " – Malcolm X"]
  ];

  var min = 0;
  var max = quotes.length - 1;
  var rand_num = Math.floor(Math.random() * (max - min + 1)) + min;
  var quote = quotes[rand_num][0];
  var author = quotes[rand_num][1];

  $('#quote').text(quote);
  $('#author').text(author);
}

$(document).ready(function() {
  displayQuote();
});
