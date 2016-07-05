define(['app'], function(app) {
    app.directive('datepicker',function(){
        var format='MM/DD/YYYY hh:mm A';
        return {
            restrict:'A',
            //require: 'ngModel',
            link:function(scope,element,attributes,ctrl){
                //var picker = element.data("DateTimePicker");
                element.datetimepicker({
                    language:  'fr',
                    weekStart: 1,
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0
                    //format: format
                });
            }
        }
    })

})