var prohibited = ['porn'];
var sfw = 'https://www.youtube.com/embed/gCk4YAA-6PM?start=5&autoplay=1'

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    var found = false;
    prohibited.forEach(function (x) {
        if (details.url.includes(x)) {
            found = true;
        }
    });
    if (found) {
        return {
            redirectUrl: sfw
        };
    }
  },
  {
    urls: ["<all_urls>"]
  },
  ['blocking']
);
