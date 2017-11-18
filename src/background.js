
import TabsService from './services/tabs';


const TRACK_SITES_ALARM = 'track-sites';


async function trackSites() {
  const hostnames = await TabsService.getDistinctHostnames();
  console.log(hostnames);
}


chrome.alarms.create(TRACK_SITES_ALARM, {
  periodInMinutes: 1,
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if(alarm.name === TRACK_SITES_ALARM) {
    trackSites();
  }
});


trackSites();
