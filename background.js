var prohibited = ['porn'];
var sfw = 'https://www.youtube.com/embed/gCk4YAA-6PM?start=5&autoplay=1'

chrome.history.onVisited.addListener(function (result) {
    if (result.url == sfw || is_prohibited(result.url)) {
      chrome.history.deleteUrl({ url: result.url });
    }
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (is_prohibited(details.url)) {
      return { redirectUrl: sfw };
    }
  },
  { urls: ["<all_urls>"] },
  ['blocking']
);

function is_prohibited(url) {
  var found = false;
  prohibited.forEach(function (x) {
      if (url.includes(x)) {
        found = true;
      }
  });
  return found;
}
