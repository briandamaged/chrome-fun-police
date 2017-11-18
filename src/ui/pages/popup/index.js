
import React from 'react';

import SetupPage from './setup';
import MonitorPage from './monitor';

function arrest() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "arrest"
    });
  });
}


function requestAlert(message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {
      type: "alert",
      content: {
        message: message,
      }
    });
  });
}


function handleSubmit(values) {
  requestAlert(JSON.stringify(values));
}


const PopupPage = ()=> {
  return (
    <div>
      <MonitorPage minutes={15} visits={3} />
      <button onClick={arrest}>Arrest</button>
    </div>

    // <SetupPage onSubmit={handleSubmit} />
  );
};

export default PopupPage;
