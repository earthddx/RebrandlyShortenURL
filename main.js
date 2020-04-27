const API_KEY = "YOUR_API_KEY";
const url = "https://api.rebrandly.com/v1/links";

const inputField = document.querySelector(".input");
const shortenButton = document.querySelector(".shorten");
const responseField = document.querySelector(".response");

const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

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
  }
  catch(error){
    console.log(error)
  }
};

// Clear page and call AJAX functions
const displayShortUrl = (e) => {
  e.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
