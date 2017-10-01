
import styles from './arrest.scss';

function arrest() {
  document.body.className += ` ${ styles.arrest }`;
}


chrome.runtime.onMessage.addListener(function(request) {
  arrest();
});
