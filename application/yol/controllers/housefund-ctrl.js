/**
 * Created by  on 2016/3/11.
 */
define(['app','momentjs', 'directives/housefund-view', 'directives/datepicker'], function (app,moment) {
    'use strict';
    app.controller('housefundCtrl', ['$scope',function ($scope) {


        $scope.setGender = function(ml){
            $scope.gender=ml;
            if(ml=="male"){
                $scope.year=60;
            }else{
                $scope.year=55;
            }
        }
        $scope.$watchGroup(['gender','birthDay'],function(){
            if($scope.birthDay && $scope.gender){
                $scope.brith=$("#date").data("datetimepicker").getDate();
                $scope.retire=moment($scope.brith).add($scope.year,'years').format();
                $scope.rangeYears=moment($scope.retire).diff(moment(),'years');
            }
        })
    }]);
});