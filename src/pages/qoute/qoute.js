import React, { useState, useEffect } from "react";
import './styles.css'
const url = "https://api.quotable.io/random";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (
    <div className="box1 p-2">
      <h3 style={{color:"#000"}} className="font-weight-bold">Quotes</h3>
      <div className="text p-2">
        <p>{content}</p>
      </div>
      <div className="author m-2">
        <h5>{author}</h5>
        <div className="button-container d-flex justify-content-center">
  
        
          <button className="p-1" onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Quote;