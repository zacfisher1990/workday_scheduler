


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    
    m = checkTime(m);
   
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    
    var formatted = h + ":" + m + " " + ampm;
    $("#clock").text(formatted);
    setTimeout(startTime, 1000);
    
//if else statements for each timeblock color past/present/future

if (h > 9 || ampm == 'PM') {
  document.getElementById('nineAM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 9 && ampm == 'AM') {
    document.getElementById('nineAM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 10 || ampm == 'PM') {
  document.getElementById('tenAM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 10 && ampm == 'AM') {
    document.getElementById('tenPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 11 || ampm == 'PM') {
  document.getElementById('elevenAM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 11 && ampm == 'AM') {
    document.getElementById('elevenAM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h < 12 && ampm == 'PM') {
    document.getElementById('twelvePM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 12 && ampm == 'PM') {
    document.getElementById('twelvePM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 1 && ampm == 'PM') {
    document.getElementById('onePM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 1 && ampm == 'PM') {
    document.getElementById('onePM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 2 && ampm == 'PM') {
    document.getElementById('twoPM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 2 && ampm == 'PM') {
    document.getElementById('twoPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 3 && ampm == 'PM') {
  document.getElementById('threePM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 3 && ampm == 'PM') {
    document.getElementById('threePM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };  
if (h > 4 && ampm == 'PM') {
    document.getElementById('fourPM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 4 && ampm == 'PM') {
    document.getElementById('fourPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };  
if (h > 5 && ampm == 'PM') {
    document.getElementById('fivePM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 5 && ampm == 'PM') {
    document.getElementById('fivePM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };  
if (h > 6 && ampm == 'PM') {
    document.getElementById('sixPM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 6 && ampm == 'PM') {
    document.getElementById('sixPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 7 && ampm == 'PM') {
    document.getElementById('sevenPM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 7 && ampm == 'PM') {
    document.getElementById('sevenPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 8 && ampm == 'PM') {
    document.getElementById('eightPM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 8 && ampm == 'PM') {
    document.getElementById('eightPM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };
if (h > 9 && ampm == 'PM') {
    document.getElementById('ninePM').setAttribute('class', 'd-block p-2 text-white bg-dark border');
  } else if (h === 9 && ampm == 'PM') {
    document.getElementById('ninePM').setAttribute('class', 'd-block p-2 text-white bg-danger border');
  };   


  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime();

//todo get the local storage to work!!!! :( 


renderLastRegistered();

  var saveButton = document.getElementById("btn1");
  var activityInput = document.getElementById("input-1");

  function renderLastRegistered() {
    var activity = localStorage.getItem("activity");
    
    //activityInput.textContent = activity.value;
    //$("#input-1").text(activity);
    console.log(activity);
  };
  
  saveButton.on("click", function(event) {
    event.preventDefault();
  
    var activity = document.getElementById("input-1").value;
    localStorage.setItem("activity", activity);

    
    renderLastRegistered();
    });
  
  