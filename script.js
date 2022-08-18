


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    
    var formatted = h + ":" + m + ":" + s + " " + ampm;
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


//9 AM save button and text
renderLastRegistered();
  var saveButton = document.getElementById("btn1");
  function renderLastRegistered() {
    var activity = localStorage.getItem("9activity");
    document.getElementById("9activity").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("9activity").value;
    localStorage.setItem("9activity", activity);
    renderLastRegistered();
  });
//10 AM save button
renderLastRegistered2();
  var saveButton = document.getElementById("btn2");
  function renderLastRegistered2() {
    var activity = localStorage.getItem("10activity");
    document.getElementById("10activity").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("10activity").value;
    localStorage.setItem("10activity", activity);
    renderLastRegistered2();
  });
  //11 AM save button and text
renderLastRegistered3();
var saveButton = document.getElementById("btn3");
function renderLastRegistered3() {
  var activity = localStorage.getItem("11activity");
  document.getElementById("11activity").setAttribute('placeholder', activity);
  console.log(activity);
};
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  var activity = document.getElementById("11activity").value;
  localStorage.setItem("11activity", activity);
  renderLastRegistered3();
});
//12 save button
renderLastRegistered4();
var saveButton = document.getElementById("btn4");
function renderLastRegistered4() {
  var activity = localStorage.getItem("12activity");
  document.getElementById("12activity").setAttribute('placeholder', activity);
  console.log(activity);
};
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  var activity = document.getElementById("12activity").value;
  localStorage.setItem("12activity", activity);
  renderLastRegistered4();
});
//1 PM save button and text
renderLastRegistered5();
  var saveButton = document.getElementById("btn5");
function renderLastRegistered5() {
  var activity = localStorage.getItem("1activity");
  document.getElementById("1activity").setAttribute('placeholder', activity);
  console.log(activity);
};
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  var activity = document.getElementById("1activity").value;
  localStorage.setItem("1activity", activity);
  renderLastRegistered5();
  });
//2 PM save button
  renderLastRegistered6();
  var saveButton = document.getElementById("btn6");
function renderLastRegistered6() {
    var activity = localStorage.getItem("2activity");
    document.getElementById("2activity").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("2activity").value;
    localStorage.setItem("2activity", activity);
    renderLastRegistered6();
  });
  //3 PM save button and text
  renderLastRegistered7();
  var saveButton = document.getElementById("btn7");
function renderLastRegistered7() {
    var activity = localStorage.getItem("3activity");
    document.getElementById("3activity").setAttribute('placeholder', activity);
    console.log(activity);
};
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("3activity").value;
    localStorage.setItem("3activity", activity);
    renderLastRegistered7();
});
//4 PM save button
renderLastRegistered8();
var saveButton = document.getElementById("btn8");
function renderLastRegistered8() {
  var activity = localStorage.getItem("4activity");
  document.getElementById("4activity").setAttribute('placeholder', activity);
  console.log(activity);
};
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  var activity = document.getElementById("4activity").value;
  localStorage.setItem("4activity", activity);
  renderLastRegistered8();
});
  //5 PM save button and text
  renderLastRegistered9();
  var saveButton = document.getElementById("btn9");
  function renderLastRegistered9() {
    var activity = localStorage.getItem("5activity");
    document.getElementById("5activity").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("5activity").value;
    localStorage.setItem("5activity", activity);
    renderLastRegistered9();
  });
  //6 PM save button
  renderLastRegistered10();
  var saveButton = document.getElementById("btn10");
  function renderLastRegistered10() {
    var activity = localStorage.getItem("6activity");
    document.getElementById("6activity").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("6activity").value;
    localStorage.setItem("6activity", activity);
    renderLastRegistered10();
  });
  //7 PM save button and text
  renderLastRegistered11();
    var saveButton = document.getElementById("btn11");
    function renderLastRegistered11() {
      var activity = localStorage.getItem("7activity");
      document.getElementById("7activity").setAttribute('placeholder', activity);
      console.log(activity);
    };
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();
      var activity = document.getElementById("7activity").value;
      localStorage.setItem("7activity", activity);
      renderLastRegistered11();
    });
  //8 AM save button
    renderLastRegistered12();
    var saveButton = document.getElementById("btn12");
    function renderLastRegistered12() {
      var activity = localStorage.getItem("8activity");
      document.getElementById("8activity").setAttribute('placeholder', activity);
      console.log(activity);
    };
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();
      var activity = document.getElementById("8activity").value;
      localStorage.setItem("8activity", activity);
      renderLastRegistered12();
    });
    //9 AM save button and text
  renderLastRegistered13();
  var saveButton = document.getElementById("btn13");
  function renderLastRegistered13() {
    var activity = localStorage.getItem("9activityPM");
    document.getElementById("9activityPM").setAttribute('placeholder', activity);
    console.log(activity);
  };
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var activity = document.getElementById("9activityPM").value;
    localStorage.setItem("9activityPM", activity);
    renderLastRegistered13();
  });
 