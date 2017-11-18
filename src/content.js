
import arrest from './arrest';


chrome.runtime.onMessage.addListener(function(request) {
  switch(request.type) {
    case "arrest":
      arrest(document.body);
      break;
    case "alert":
      alert(request.content.message);
      break;
  }
});
