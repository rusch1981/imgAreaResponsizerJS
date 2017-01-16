var resizeAreaCoords = (function(){
	var originalCoords, standardWidth, standardHeight;
	
	var calculateResizedAreaCoords = function(imgWidth, imgHeight){
	    var newArrayOfAreaElements = [];
	    var i;
	    for(i = 0; i < originalCoords.length; i++){
		    var coordsString = originalCoords[i];
		    var coordArrayOfStrings = coordsString.split(",");
		    var coordArrayOfNumbers = convertArrayToNumberArray(coordArrayOfStrings);	
		    var newCoordArrayOfNumbers = calculateAreaCoordinatesChanges(coordArrayOfNumbers, imgWidth, imgHeight);
		    var newCoordString = convertArrayToString(newCoordArrayOfNumbers);
		    newArrayOfAreaElements.push(newCoordString);
	    }
	    return newArrayOfAreaElements;
    }
    var convertArrayToNumberArray = function(arrayOfStrings){
	    var i;
	    var coordNumber;
	    var coordArrayOfNumbers = [];
	        for(i = 0; i < arrayOfStrings.length; i++){
		        coordNumber = Number(arrayOfStrings[i]);
		        coordArrayOfNumbers.push(coordNumber);
	        }
	    return coordArrayOfNumbers;
    }
	var calculateAreaCoordinatesChanges = function(coordArrayOfNumbers, imgWidth, imgHeight){
	    var x1, y1, x2, y2;
	    x1 = Math.floor(imgWidth * coordArrayOfNumbers[0] / standardWidth);
	    y1 = Math.floor(imgHeight * coordArrayOfNumbers[1] / standardHeight);
	    x2 = Math.floor(imgWidth * coordArrayOfNumbers[2] / standardWidth);
	    y2 = Math.floor(imgHeight * coordArrayOfNumbers[3] / standardHeight);
	
	    var newCoordArrayOfNumbers = [x1,y1,x2,y2];
	    return newCoordArrayOfNumbers;
    }
	var convertArrayToString = function(newCoordArrayOfNumbers){
	    var i;
	    var newCoordString = "";
	    for(i = 0; i < newCoordArrayOfNumbers.length; i++){
		    newCoordString += newCoordArrayOfNumbers[i].toString();
		    if(i < newCoordArrayOfNumbers.length - 1){
			    newCoordString += ", ";
		    }
	    }
	    return newCoordString;
    }
	var setAreaCoords = function(arrayOfAreaElements, resizedAreaCoords){
        var i;
	    for(i = 0;i < arrayOfAreaElements.length; i++){
	        arrayOfAreaElements[i].setAttribute("coords", resizedAreaCoords[i]);
	    }
    }
	return function(areaObject){
	    originalCoords = areaObject.originalCoords;
		standardWidth = areaObject.imageWidth;
	    standardHeight = areaObject.imageHeight;
	    var imgElement = document.getElementsByClassName(areaObject.imageName);
        var imgWidth = imgElement[0].clientWidth;
        var imgHeight = imgElement[0].clientHeight;
        var resizedAreaCoords = calculateResizedAreaCoords(imgWidth, imgHeight);
        setAreaCoords(document.getElementsByClassName(areaObject.areasClassName), resizedAreaCoords);
		//just for testing purposes
        document.getElementsByClassName("classTest")[0].innerHTML = resizedAreaCoords[0];
	};
})();
var responsiveAreaObject = {imageName:"collageImage", areasClassName:"areas", originalCoords:["71,67,325,196","466,71,614,182","85,288,299,404","725,280,997,403"], imageWidth:1280, imageHeight:720};

function myFunction(){
    resizeAreaCoords(responsiveAreaObject);
    };