import React, { Component } from 'react';

let quotes = [
    {
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "Kevin Kruse"
    },
    {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
    },
    {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    }
];

let randomNum = Math.floor(Math.random() * quotes.length);
let randomAuthor = quotes[randomNum].author;
let randomQuote = quotes[randomNum].quote;

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quote: randomQuote,
            author: randomAuthor
        };
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    getRandomQuote() {
        let randomNum = Math.floor(Math.random() * quotes.length);
        let randomAuthor = quotes[randomNum].author;
        let randomQuote = quotes[randomNum].quote;

        this.setState({
            quote: randomQuote,
            author: randomAuthor
        });
    }

    render() {
        return (
            <div>
                <div id="quote-box">
                    <div id='text'>
                        <p>"{this.state.quote}"</p>
                    </div>
                    <div id="author">
                        <p>- {this.state.author}</p>
                    </div>
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=" target="_blank" rel="noopener noreferrer">
                        <button id="tweet-quote-btn"><i class="fab fa-twitter"></i></button>
                    </a>
                    <button onClick={this.getRandomQuote} id="new-quote">New Quote</button>
                </div>
                <div class="footer">
                    <p id="footer">by Ryan Albert</p>
                </div>
            </div>
        );
    }
}

export default QuoteMachine;