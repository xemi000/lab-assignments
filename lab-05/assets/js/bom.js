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
var ports = window.location.port;
var hostNames = window.location.hostname;
var hrefs = window.location.href;
var hosts = window.location.host;
var protocols = window.location.protocol;

//screen info
var colorDepth = screen.colorDepth;
var height = screen.height;
var width = screen.width;
var pixelDepth = screen.pixelDepth;

//browser info
var platform = window.navigator.platform;
var language = window.navigator.language;
var appName = window.navigator.appName;


spanesItems[0].innerHTML = ports;
spanesItems[1].innerHTML = hostNames;
spanesItems[2].innerHTML = hrefs;
spanesItems[3].innerHTML = hosts;
spanesItems[4].innerHTML = protocols;
spanesItems[5].innerHTML = colorDepth;
spanesItems[6].innerHTML = height;
spanesItems[7].innerHTML = width;
spanesItems[8].innerHTML = pixelDepth;
spanesItems[9].innerHTML = platform;
spanesItems[10].innerHTML = language;
spanesItems[11].innerHTML = appName;











// Display the BOM Information on the innerHTML of the elements