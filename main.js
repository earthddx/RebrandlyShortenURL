const API_KEY = "YOUR_API_KEY_HERE";
const url = "https://api.rebrandly.com/v1/links";

const inputField = document.querySelector(".input");
const shortenButton = document.querySelector(".shorten");
const responseField = document.querySelector(".response");

const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    //access to the Rebrandly API
    headers: {
      "Content-type": "application/json",
      'apikey': API_KEY
    },
    body: data
  })
    .then(
      (res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Request failed.");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      renderResponse(jsonResponse);
    });
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
