  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
  
  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
  
  

//=======================display===========================================================

//chrome.storage.sync.get('control_button', function(data) {
//	let ibool = data.control_button;
//	document.getElementById('state').textContent = "control " + ibool;
//});

let fiveMin = document.getElementById('fiveMin');
fiveMin.onclick = function(element) {
	chrome.storage.sync.set({control_button: false}, function() {
	    console.log("fiveMin");
	    
		var alarmName = 'remindme';
		chrome.alarms.create(alarmName, {delayInMinutes: 5});
		
		chrome.notifications.create('fiveMin', {
        type: 'basic',
        iconUrl: 'images/get_started16.png',
        title: 'fiveMin',
        message: 'fiveMin!'
    }, function(notificationId) {});
		
		
		var status = document.getElementById('status');
	    status.textContent = 'fiveMin!';
	    setTimeout(function() {
		      status.textContent = '';
		    }, 1000);
	  });
};


let fiveMin = document.getElementById('tMin');
fiveMin.onclick = function(element) {
	chrome.storage.sync.set({control_button: false}, function() {
	    console.log("fiveMin");
	    
		var alarmName = 'remindme';
		chrome.alarms.create(alarmName, {delayInMinutes: 30});
		
		var status = document.getElementById('status');
	    status.textContent = '30 Min!';
	    setTimeout(function() {
		      status.textContent = '';
		    }, 1000);
	  });
};

  
