app.controller("myctrl",($scope,myfactory)=>{
    $scope.subtract1=()=>{
        var result2 = myfactory.subtract($scope.firstno,$scope.secondno);
        $scope.result = result2;
    }
    $scope.add1=()=>{
        console.log("add call");
    var result1 = myfactory.add($scope.firstno,$scope.secondno);
        $scope.result = result1;
    }
    $scope.multiply1=()=>{
        var result3  = myfactory.multiply($scope.firstno,$scope.secondno);
        $scope.result = result3;
    }
     $scope.divide1=()=>{
        var result4  = myfactory.divide($scope.firstno,$scope.secondno);
        $scope.result = result4;
    }
   
});