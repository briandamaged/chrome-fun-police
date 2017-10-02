
const TabsService = {
  query(q = {active: true}) {
    return new Promise(function(resolve, reject) {
      try {
        chrome.tabs.query(q, function(tabs) {
          resolve(tabs);
        });        
      } catch(err) {
        reject(err);
      }
    });
  },


  getHostnames(q) {
    return this.query(q).then(function(tabs) {
      const hostnames = tabs.map(function(t) {
        const url = new URL(t.url);
        return url.hostname;
      });

      return hostnames;
    })
  },

  getDistinctHostnames(q) {
    return this.getHostnames(q).then(function(hostnames) {
      return Array.from(new Set(hostnames));
    });
  },
}

export default TabsService;
