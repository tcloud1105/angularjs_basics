// DIRECTIVES
weatherApp.directive('weatherReport', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReports.html',
		replace: true,
		scope:{
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	}
});