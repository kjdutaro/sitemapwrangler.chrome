document.getElementById('generateSitemap').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const messageElement = document.getElementById('message');
    messageElement.innerText = ''; 
    if (tabs.length > 0) {
      let url = new URL(tabs[0].url);
      let domain = url.hostname;

      if (url.protocol === 'chrome:' || url.protocol === 'chrome-extension:' || domain === '') {
        messageElement.innerHTML = 'Please open a real website and then try again.'; 
        messageElement.style.color = 'red'; 
      } else {
        let newTabUrl = `https://sitemapwrangler.com/?site=${domain}`;
        chrome.tabs.create({ url: newTabUrl });
        console.log('Generating sitemap for:', newTabUrl); 
      }
    } else {
      console.log('Nothing to generate');
    }
  });
});
