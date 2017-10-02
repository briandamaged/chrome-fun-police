
const TabsService = {
  /*async*/ query(q = {active: true}) {
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


  async getHostnames(q) {
    const tabs = await this.query(q);

    const hostnames = tabs.map(function(t) {
      const url = new URL(t.url);
      return url.hostname;
    });

    return hostnames;
  },

  async getDistinctHostnames(q) {
    const hostnames = await this.getHostnames(q);
    return Array.from(new Set(hostnames));
  },
}

export default TabsService;
