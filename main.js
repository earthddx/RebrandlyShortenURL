const API_KEY = "YOUR_API_KEY";
const url = "https://api.rebrandly.com/v1/links";

const inputField = document.querySelector(".input");
const shortenButton = document.querySelector(".shorten");
const responseField = document.querySelector(".response");

const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    xhr.readyState === XMLHttpRequest.DONE
      ? renderResponse(xhr.response)
      : null;
  };
  xhr.open("POST", url);

  //access to the Rebrandly API
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("apikey", API_KEY);

  xhr.send(data);
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
