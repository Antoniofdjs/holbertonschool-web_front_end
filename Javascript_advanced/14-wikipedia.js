function createElement(data) {
  const element = document.createElement("p");
  element.textContent = data;
  document.body.appendChild(element);
}
function queryWikipedia(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);

      // Extract the text from the API
      const page = response.query.pages;
      const pageId = Object.keys(page)[0];
      const extract = page[pageId].extract;

      // Call the callback function with the extracted text
      callback(extract);
    } else {
      console.error("Error:", xhr.statusText);
    }
  };

  // Send the request
  xhr.send();
}

function main() {
  queryWikipedia(createElement);
}

main();
