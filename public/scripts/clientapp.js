var WER=angular.module('WER', []);


WER.controller('homepage', ['$scope','$http', function($scope,$http){
console.log("Homepage Controller");
$scope.curtainStatus = "open";
$scope.name = "George";
$scope.variable= 0;


$scope.updatePage = function(){






  console.log('update page');
  setTimeout($scope.updatePage, 1000);

  $http({
    method: 'GET',
    url: '/requests/status'
  }).then(function(response){
    console.log(response.data);
    $scope.name = response.data.name;
    if (response.data.strength == 80) {
      $scope.curtainStatus = 'closed';
    } else if (response.data.strength == 90) {
      $scope.curtainStatus = 'open';
    }

  });

};
setTimeout($scope.updatePage, 1000);


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
