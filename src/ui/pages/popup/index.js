
import React from 'react';

import SetupPage from './setup';

function arrest() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "arrest"
    });
  });
}


function foo() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0];
    const url = new URL(tab.url);
    const hostname = url.hostname;

    chrome.tabs.sendMessage(tab.id, {
      type: "alert",
      content: {
        message: hostname,
      }
    });
  });
}


const PopupPage = ()=> {
  return (
    <SetupPage minutes={60} />
  );
};

export default PopupPage;
