const renderResponse = (res) => {
  res.errors
    ? (responseField.innerHTML =
        "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>")
    : (responseField.innerHTML = `<p>Your shortened url is: </p><p class="resAnswer"> ${res.shortUrl} </p>`);
};
