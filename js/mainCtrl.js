var app = angular.module('culturalHall');
app.controller('mainCtrl', function($scope, dataService){
	$scope.largeMode = false;
	$scope.roomImage = "assets/br1.jpg"
	//$scope.temples = [];
	//var getTempleData = function() {
		//parseService.getParseData().then(function(data){
			//$scope.temples = data.data.results;
		//});
	//}

	//getTempleData();
	//$scope.picturesOfChrist = [];
	//var getPOCData = function() {
		//parseService.getPicturesOfChristData().then(function(data){
			//$scope.picturesOfChrist = data.data.results;
		//});
	//}

	//getPOCData();
	//getTempleData();
	$scope.homeDecor = dataService.getHomeDecorData()
	$scope.temples = dataService.getTempleData()
	$scope.picturesOfChrist = dataService.getPicturesOfChristData()
	$scope.homeDecorMeta = dataService.getHomeDecorMetaData()
	$scope.templesMeta = dataService.getTempleMetaData()
	$scope.picturesOfChristMeta = dataService.getPOCMetaData()
	//var HomeDecorData = homeDecor;

	$scope.test = "Who cares?"

	$scope.showOnWall = function(obj, table){
		if ($scope.largeMode){
			$scope.movable = false;
			$scope.lonelyImage = true;

		} else {
			$scope.movable = true;
			$scope.lonelyImage = false;

		}
		$scope.framedDimension = "";
		$scope.selectedFrame = "";
		$scope.title = obj.Name
		$scope.Artist = obj.Artist
		//$scope.wallImg = img.replace("/product/large", "/original");
		//parseService.getVariantData(obj, table).then(function(data){
			$scope.variants = filter($scope.picturesOfChrist, {parentGroupedProductId: obj.Id, isDefault: 1});
			$scope.selectedVariant = $scope.variants[2];
		$scope.wallImg = $scope.selectedVariant.Image;
			$scope.getSize($scope.selectedVariant, table)
		//})
	};

	function filter(arr, criteria) {
	  return arr.filter(function(obj) {
    	return Object.keys(criteria).every(function(c) {
      		return obj[c] == criteria[c];
    	});
  	});
}

	$scope.getSize = function(obj, table){
		if ($scope.largeMode){
			$scope.movable = false;
			$scope.lonelyImage = true;

		} else {
			$scope.movable = true;
			$scope.lonelyImage = false;

		}
		$scope.framedDimension = "";
		$scope.selectedFrame = "";
		//parseService.getFramedData(obj, table).then(function(data){
		$scope.frames = $scope.variants
		$scope.Price = obj.price;
		$scope.itemNumber = obj.manufacturerPartNumber;
		$scope.Medium = obj.medium
		var dimArr = obj.dimensions.split(" X ");
		var width = parseFloat(dimArr[0]);
		var height = parseFloat(dimArr[1]);
		//window width * main body width / 7' * Room width
		var myImageWidth = (window.innerWidth *.9) * .5;
		var myImageHeight = 12;
		myImageHeight = myImageWidth / 1.295896328293737;
		//image is 5.51190 px per Inch
		//image is 600px X 463px
		if ($scope.roomImage === "assets/br2.jpg" || $scope.roomImage === "assets/lr2.jpg"){
			height = myImageHeight/84*height;
		} else if ($scope.roomImage === "assets/lr1.jpg"){
			height = myImageHeight/100*height;
		} else if ($scope.roomImage === "assets/lr2.jpg"){
			height = myImageHeight/94*height;
		} else {
			height = myImageHeight/130*height;
		}
		width = height * (parseFloat(dimArr[0])/parseFloat(dimArr[1]));
		var margintop = ((myImageHeight)/2) - (height/2);
		var marginleft = ((myImageWidth)/2) - (width/2);
		height = height / myImageHeight * 100;
		width = width / myImageWidth * 100;
		margintop = (margintop / myImageHeight) * 100;
		marginleft = (marginleft / myImageWidth) * 100;
		margintop = margintop - (margintop/2.5);
		marginleft = marginleft - (marginleft);
		console.log(dimArr[0], dimArr[1], width, height, margintop, marginleft)
		if (obj.isDefault === 1){
			$scope.wallImg = obj.Image.replace("/variant/large", "/original");

		} else if ("assets/" + obj.MPN + ".jpg"){
			$scope.wallImg = "assets/" + obj.MPN + ".jpg";
		} else {
			$scope.wallImg = obj.Image;
		}
		$scope.myStyle = "position: inherit; width: " + width + "%; left: " + marginleft + "%; top: " + margintop + "%;"
	}

	$scope.getFrame = function(obj, table){
		if ($scope.largeMode){
			$scope.movable = false;
			$scope.lonelyImage = true;

		} else {
			$scope.movable = true;
			$scope.lonelyImage = false;

		}
		selectedVariant = obj;
		$scope.selectedFrame = obj;
		$scope.Price = obj.Price;
		$scope.chosenFrame = obj.Frames;
		$scope.itemNumber = obj.MPN;
		$scope.framedDimension = obj.Dimensions
		var dimArr = obj.Dimensions.split(" X ");
		var width = parseFloat(dimArr[0]);
		var height = parseFloat(dimArr[1]);
		//window width * main body width / 7' * Room width
		var myImageWidth = (window.innerWidth *.9) * .5;
		var myImageHeight = 12;
		myImageHeight = myImageWidth / 1.295896328293737;
		//image is 5.51190 px per Inch
		//image is 849px X 655px  height = .771495 width
		if ($scope.roomImage === "assets/br2.jpg"){
			height = myImageHeight/84*height;
		} else if ($scope.roomImage === "assets/lr1.jpg"){
			height = myImageHeight/100*height;
		} else if ($scope.roomImage === "assets/lr2.jpg"){
			height = myImageHeight/94*height;
		} else {
			height = myImageHeight/130*height;
		}
		width = height * (parseFloat(dimArr[0])/parseFloat(dimArr[1]));
		var margintop = (myImageHeight-height)/2;
		var marginleft = (myImageWidth-width)/2;
		height = height / myImageHeight * 100;
		width = width / myImageWidth * 100;
		margintop = ((margintop / myImageHeight)) * 100;
		marginleft = marginleft / myImageWidth * 100;
		margintop = margintop - (margintop/2.25);
		marginleft = marginleft - (marginleft);
		console.log(dimArr[0], dimArr[1], width, height, margintop, marginleft, "Total Width: " + window.innerWidth + "px")
		$scope.myStyle = "position: inherit; width: " + width + "%; left: " + marginleft + "%; top: " + margintop + "%;"
		if (obj.isDefault === 1){
			$scope.wallImg = obj.Image.replace("/variant/large", "/original");

		} else if ("assets/" + obj.MPN + ".jpg"){
			$scope.wallImg = "assets/" + obj.MPN + ".jpg";
		} else {
			$scope.wallImg = obj.Image;
		}
	}


	$scope.showRoom = function(img, obj, table){
		$scope.largeMode = false;
		$scope.movable = true;
		$scope.lonelyImage = false;
		$scope.roomImage = img;
		if ($scope.selectedFrame){
			$scope.getFrame($scope.selectedFrame, table)
		} else {
			$scope.showOnWall($scope.selectedVariant. table)
		}
	}

	$scope.showImageOnly = function(img){
		$scope.largeMode = true;
		$scope.roomImage = img;
		$scope.movable = false;
		$scope.lonelyImage = true;
	}


});

//function getTempleData(){
//	parseService.getParseData().then(function(results){
//		debugger;
//		$scope.temples = results.map(function(temple){
//			return{
//				name: temple.attributes.Name,
//				img: temple.attributes.Image
//			}
//		})
//		debugger;
//		console.log($scope.temples)
//	})
//};


