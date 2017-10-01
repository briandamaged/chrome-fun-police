
import React from 'react';


function arrest() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
  });
}

const PopupPage = ()=> {
  return (
    <div>
      <button onClick={arrest} >ARREST!</button>
    </div>
  );
};

export default PopupPage;
