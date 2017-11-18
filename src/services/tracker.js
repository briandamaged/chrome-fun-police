
const TRACKER_REGEX = /^t\|(.*)$/;

const TrackerService = {
  getAll() {
    return new Promise(function(resolve, reject) {
      try {
        chrome.storage.sync.get(null, function(items) {
          const trackers = [];

          for(const key of items) {
            const m = TRACKER_REGEX.exec(key);
            if(m) {
              const hostname = m[1];
              trackers.push(Object.assign({}, items[key], {
                hostname: hostname
              }));
            }
          }

          return trackers;
        });
      } catch(err) {
        reject(err);
      }
    })
  }
}

export default TrackerService;
