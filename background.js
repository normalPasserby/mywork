// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("open.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
    
    chrome.storage.sync.set({
		control_button: true
	}, function() {
		console.log("control_button: true");
	});
    
    
    
});



// onupdated
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
	function removeTabs() {
		chrome.storage.sync.get({
			option : [ "zhihu.com/", "twitter.com/", "youtube.com/",
					"reddit.com/", "pinterest.com/", "vimeo.com/",
					"plus.google", "tumblr.com/", "instagram.com/", "", "", "",
					"", "", "", "", "", "", "", "" ]
		}, function(items) {
			var x;
			for (x = 1; x <= 20; x++) {
				if (items.option[x - 1] === "") {
					continue;
				}
				if (tab.url.toLowerCase().indexOf(items.option[x - 1]) !== -1) {
					chrome.tabs.remove(tab.id);
				}
			}
		});
	}

	if (false) {
		chrome.tabs.remove(tab.id);
	}
	
	chrome.storage.sync.get({
		control_button: true
	}, function(items) {
		if(items.control_button === true)
			removeTabs(tab.id)
	});
});




chrome.alarms.onAlarm.addListener(function() {
  chrome.storage.sync.set({control_button: true}, function() {});
      chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'images/get_started16.png',
        title: 'control on',
        message: 'You have not visit some web now!'
    }, function(notificationId) {});
});









