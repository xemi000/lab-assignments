/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const spanes = document.querySelectorAll('span');
const reload = document.querySelector('.fa');
var spanesItems = document.getElementsByClassName('badge');

//location
var hrefs = window.location.href;
var hosts = window.location.host;
var protocols = window.location.protocol;
var ports = window.location.port;
var hostNames = window.location.hostname;

//browser information
var appName = window.navigator.appName;
var appVersion = window.navigator.appVersion;
var platform = window.navigator.platform;
var language = window.navigator.language;
var cookieEnabled = window.navigator.cookieEnabled;


//screen info
var height = screen.height;
var width = screen.width;
var pixelDepth = screen.pixelDepth;


//history
var length = window.history.length;
var state = window.history.state;


spanesItems[0].innerHTML = hrefs;
spanesItems[1].innerHTML = hosts;
spanesItems[2].innerHTML = protocols;
spanesItems[3].innerHTML = ports;
spanesItems[4].innerHTML = hostNames;
spanesItems[5].innerHTML = appName;
spanesItems[6].innerHTML = appVersion;
spanesItems[7].innerHTML = platform;
spanesItems[8].innerHTML = language;
spanesItems[9].innerHTML = cookieEnabled;
spanesItems[10].innerHTML = height;
spanesItems[11].innerHTML = width;
spanesItems[12].innerHTML = pixelDepth;
spanesItems[13].innerHTML = length;
spanesItems[14].innerHTML = state;











// Display the BOM Information on the innerHTML of the elements