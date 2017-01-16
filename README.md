# imgAreaResponsizerJS
 
imgAreaResponsizer is simple .js file for creating responsive area tag coordinates for images displayed via HTML.  

Implementation:  
Define your area coords in an array variable.
example:  var originalCoords = ["71,67,325,196","466,71,614,182","85,288,299,404","725,280,997,403"];

Pass the resizeAreaCoords() function img class name, the area class name, array of area coords, the default image width, and the default image height.  Enclose the resizeAreaCoords() function in another function that will be invoked by onresize and onload.  
example:  
<body onresize = "myFunction()" onload = "myFunction()" >
...
function myFunction(){
    resizeAreaCoords("collageImage", "areas", originalCoords, 1280, 720);
    };
imgAreaResponsizerObject.js (included in this repo) is an additional implementation the resizeAreaCoords() function utilizing an object variable as the parameter.  This may prove easier to use with JSON and other more dynamic approaches to defining your HTML.  

Caution:  this function includes no type checking, NaN checking, or Null checking.  If there is possibility that variables will be passed with incorrect values or types you will need to include precautionary measures prior to the calling the resizeAreaCoords() function.  

