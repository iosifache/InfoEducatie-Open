var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseObject) {
	var ref = new Firebase("https://infocuza-open.firebaseio.com");
	var syncObject = $firebaseObject(ref);
	syncObject.$bindTo($scope, "data");
});