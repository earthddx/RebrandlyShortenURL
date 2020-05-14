import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.rebrandly.com/v1/links";
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [res, setRes] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const shortenUrl = async (e) => {
    e.preventDefault();
    const urlToShorten = text;
    setData(JSON.stringify({ destination: urlToShorten }));

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
        //access to the Rebrandly API
        headers: {
          "Content-type": "application/json",
          apikey: API_KEY,
        },
      });
      if (response.ok) {
        const jsonRes = await response.json();
        renderResponse(jsonRes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderResponse = (res) => {
     setRes(res.shortUrl);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Enter a URL</h1>
        <form className="form" onSubmit={shortenUrl}>
          <input
            type="text"
            className="input"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="shorten">
            Shorten
          </button>
        </form>
        <div className="response">{res}</div>
      </div>
    </div>
  );
}

export default App;
