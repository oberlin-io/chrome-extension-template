// Store data as JSON
data = {}

// Get elements to iterate
var results = document.querySelectorAll("h2, h3");

// Iterate and add to JSON data
dataArray = []
for (i = 0; i < results.length; i++) {
   
   h = results[i].innerText
   
   entry = {}
   entry["Headline"] = h
   
   dataArray.push(entry)
}

data["Results"] = dataArray;
 
//console.log(data)

// Send scraped data as a Chrome message
chrome.runtime.sendMessage(data);


