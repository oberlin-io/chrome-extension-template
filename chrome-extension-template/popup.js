// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
   
   var output = "<h2>Inner texts of H2 and H3 elements</h2>\n<ul>";

   for (i = 0; i < message["Results"].length; i++) {
      output += "<li>" + message["Results"][i]["Headline"] + "</li>\n"
   }
   
   output += "</ul>";
   
	document.getElementById('output').innerHTML = output;
});