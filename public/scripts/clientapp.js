var WER=angular.module('WER', []);


WER.controller('homepage', ['$scope','$http', function($scope,$http){
console.log("Homepage Controller");
$scope.curtainStatus = "open";
$scope.name = "George";
$scope.variable= 0;


$scope.updatePage = function(){

  if ($scope.variable==0) {
    console.log('zero');
    $scope.variable = 1;
    $scope.name = "Gina";
    $scope.curtainStatus = "closed";
    console.log($scope.name, $scope.curtainStatus);
$scope.$apply();

  }else  {
    console.log('one');
    $scope.variable = 0;
    $scope.name = "George";
    $scope.curtainStatus = "open";
    console.log($scope.name, $scope.curtainStatus);
$scope.$apply();



  }
  console.log('update page');
  setTimeout($scope.updatePage, 3000);

  // $http({
  //   method: 'GET',
  //   url: '/requests/status'
  // });

};
setTimeout($scope.updatePage, 300);


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
