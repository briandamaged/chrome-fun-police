
import styles from './arrest.scss';

function arrest() {
  document.body.className += ` ${ styles.arrest }`;
}


chrome.runtime.onMessage.addListener(function(request) {
  switch(request.type) {
    case "arrest":
      arrest();
      break;
    case "alert":
      alert(request.content.message);
      break;
  }
});
