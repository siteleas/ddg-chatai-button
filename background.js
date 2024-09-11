function openPage() {
  browser.tabs.create({
    url: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1&atb=v406-1",
  });
}

browser.browserAction.onClicked.addListener(openPage);
