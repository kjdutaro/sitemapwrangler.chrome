chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "https://sitemapwrangler.com/welcome.html",
    });
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    console.log("Extension updated");
  } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
    console.log("Chrome browser updated");
  } else if (details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE) {
    console.log("Shared module updated");
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("pop.html"),
    active: true
  });
});
