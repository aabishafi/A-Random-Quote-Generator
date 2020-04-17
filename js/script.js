/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
var quotes = [{
        quote: "Every post is honorable in which a man can serve his country",
        source: 'George Washington',
        citation: "Letter to Benedict Arnold",
        year: 1775,
        tags: "post"
    },
    {
        quote: "If one loves, one need not have an ideology of love.",
        source: "Bruce Lee",
        citation: "The Warrior Within : The Philosophies of Bruce Lee",
        year: 1996,
        tags: "one"
    },
    {
        quote: "If you can't fly, then run. If you can't run, then walk. If you can't walk, then crawl. but whatever you do, you have to keep moving forward.",
        source: "Martin Luther King Jr",
        citation: "Keep Moving from this Mountain",
        year: "1960"
    },
    {
        quote: "you're gonna need a bigger boat",
        source: "Martin Brody",
        citation: "in jaws",
        year: 1975
    },
    {
        quote: "The art of leadership is saying no, not yes. it is very easy to say yes",
        source: "Tony Blair",
        citation: "Mail on Sunday",
        year: 1994
    },
    {
        quote: "kindness is a mark of faith, and whoever has not kindness has not faith.",
        source: "Muhammad",
        citation: "as quoted in Al-Islam by khwajah kamal al-dini",
        year: 1926,
        tags: "faith"
    },
    {
        quote: "i cannot live without books.",
        source: "Thomas Jefferson",
        citation: "Letter to John Adams",
        year: 1815
    },
    {
        quote: "There is no blue without yellow and without orange",
        source: "Vincent Van Gogh",
        citation: "Letter to Emile Bernard",
        year: 1888
    },
    {
        quote: "Even castles made from sand fall to ocean",
        source: "Jimi Hendrix",
        citation: "Castles Made of Sand",
        year: 1967
    },
    {
        quote: "To climb steep hills requires slow pace at first",
        source: "William Shakespear",
        citation: "William Shakespeare, Henry VIII",
        year: 1613,
        tags: "success"
    }
]

//log  for debugging reasons

console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` 
    let randomNum = Math.floor(Math.random() * quotes.length);

    // 2. Use the random number variable and bracket notation 
    // to grab a random object from the `quotes` array, and 
    // store it in a variable
    let currentRandomNum = quotes[randomNum];
    // 3. Return the variable storing the random quote object
    return currentRandomNum;
}
getRandomQuote();
//testing function above
console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/
function printQuote() {
    //variable to store getRandomQuote() function
    let randomQuote = getRandomQuote();
    // variable to store html string to be added
    let par = `<p class="quote"> ${randomQuote.quote}</p>`
    par += `<p class="source">${randomQuote.source}</p>`;

    //if statement to check some quote properties
    if (randomQuote.citation) {
        par += `<span class="citation"> ${randomQuote.citation} </span>`;
    }
    if (randomQuote.year) {
        par += `<span class="year"> ${randomQuote.year} </span>`;
    }
    // for tags condition for extra credit
    if (randomQuote.tags) {
        par += `<span class="tags"> ${randomQuote.tags} </span>`;
    }
    //concatenating closing </p> tag
    par += '</p>';
    document.getElementById('quote-box').innerHTML = par;

}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);