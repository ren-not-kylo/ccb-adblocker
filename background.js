const defaultFilters = [ 
    // anytime an ad pops up, add its URL here to include it in the list of blocked advertising servers
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.click2cart.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details){ return { cancel: true }},
    {urls: defaultFilters},
    ["blocking"]
)