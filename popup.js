// common
function changeStatus(string) {
    var status = document.getElementById('status');
    status.textContent = string;
    setTimeout(function() {
          status.textContent = '';
        }, 1000);
}



//=======================display===========================================================

chrome.storage.sync.get('control_button', function(data) {
	let ibool = data.control_button;
	document.getElementById('state').textContent = "ctl " + ibool;
});

//==========button
document.getElementById('fiveMin').onclick = function(element) {
	chrome.storage.sync.set({control_button: false}, function() {
	
	    changeStatus('five Min!');
	    
		var alarmName = 'remindme';
		chrome.alarms.create(alarmName, {delayInMinutes: 5});
		
		chrome.notifications.create('fiveMin', {
        type: 'basic',
        iconUrl: 'images/get_started16.png',
        title: 'five Min',
        message: 'five Min!'
        }, function(notificationId) {});
    });
};


document.getElementById('tMin').onclick = function(element) {
	chrome.storage.sync.set({control_button: false}, function() {
	    console.log("tMin");
	    
		changeStatus('30 Min!');
	    
		var alarmName = 'remindme';
		chrome.alarms.create(alarmName, {delayInMinutes: 30});
		
	});	
};


document.getElementById('test').onclick = function(element) {

		chrome.notifications.create('ddfsed', {
        type: 'basic',
        iconUrl: 'images/get_started16.png',
        title: 'ddfedd',
        message: 'ddfdedd!'
        }, function(notificationId) {});

};

  
