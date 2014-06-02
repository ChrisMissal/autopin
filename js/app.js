var forcePin = function(tab) {
	chrome.tabs.update(tab.id, { pinned: true });
};
chrome.tabs.onCreated.addListener(forcePin);
chrome.tabs.onUpdated.addListener(forcePin);
