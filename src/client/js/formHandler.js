function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit }

const formdata = new FormData();
formdata.append("key", "0bba2cb598ad236996dab260dbb69b61");
formdata.append("url", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...



const response = fetch("https://api.meaningcloud.com/sentiment-2.1?key={{YOUR_API_KEY}}&lang=en&url=https://www.udacity.com/blog/2023/05/getting-started-with-r-markdown.html")
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));