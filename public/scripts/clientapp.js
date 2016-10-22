var WER=angular.module('WER', []);


WER.controller('homepage', ['$scope','$http', function($scope,$http){
console.log("Homepage Controller");
  $scope.test = function(){
    console.log('we made it here');

    $http({
      method: 'GET',
      url: '/test'
    }).then(function(response){
      console.log(response.data);
    });
  };

}]);

WER.controller('addPerson', ['$scope','$http', function($scope,$http){
console.log("Add Person controller");

  $scope.submit = function() {
console.log('click');
var newPerson = {
  "name": $scope.name,
  "hierarchy": $scope.hierarchy,
  "temperature": $scope.temperature
};
$http({
  method: 'POST',
  url: '/addPerson/data',
  data: newPerson
}).then(function(){
  console.log('success');
});

  };
}]);
