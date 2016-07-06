define(["app"], function(app) { return app.run(function($templateCache) {   'use strict';

  $templateCache.put('head',
    "<div class=\"headcontain\">\r" +
    "\n" +
    "    <div class=\"col-md-4\">\r" +
    "\n" +
    "        <canvas>\r" +
    "\n" +
    "            <rect width=\"10\" height=\"10\" fill=\"blue\"></rect>\r" +
    "\n" +
    "        </canvas>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-8\">\r" +
    "\n" +
    "        <nav class=\"collapse navbar-collapse\" id=\"myNavbar\" role=\"navigation\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li>11</li>\r" +
    "\n" +
    "                <li>222</li>\r" +
    "\n" +
    "                <li>333</li>\r" +
    "\n" +
    "                <li>444</li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </nav>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('housefund',
    "<div housefund class=\"housefund\" id=\"container\">\r" +
    "\n" +
    "    <canvas id=\"pixie\"></canvas>\r" +
    "\n" +
    "    <div id=\"mountains\"></div>\r" +
    "\n" +
    "    <div id=\"grass\"></div>\r" +
    "\n" +
    "    <div class=\"fund\">\r" +
    "\n" +
    "        <!--<div class=\"form-group\">-->\r" +
    "\n" +
    "            <!--<label class=\"col-md-2\">年龄</label>-->\r" +
    "\n" +
    "            <!--<input type=\"text\" class=\"form-control col-md-5\" placeholder=\"Age\" aria-describedby=\"basic-addon1\">-->\r" +
    "\n" +
    "        <!--</div>-->\r" +
    "\n" +
    "        <form class=\"form-horizontal\">\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label class=\"col-md-2 col-sm-2 col-xs-2 control-label\">出生日期</label>\r" +
    "\n" +
    "                <div datepicker id=\"date\" class=\"input-group date form_date col-md-5 col-sm-5 col-xs-5\" data-date=\"\" data-date-format=\"yyyy-mm-dd\" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">\r" +
    "\n" +
    "                    <input class=\"form-control\" ng-model=\"birthDay\" ng-change=\"setBirth()\"   ng-model=\"dateTime\" size=\"16\" type=\"text\" value=\"\" readonly=\"\">\r" +
    "\n" +
    "                    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\r" +
    "\n" +
    "                    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-calendar\"></span></span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label class=\"col-md-2 control-label\">性别</label>\r" +
    "\n" +
    "                <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Large button group\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"setGender('male')\">男</button>\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"setGender('female')\">女</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <!--<button type=\"button\" class=\"btn btn-default col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3\" ng-click=\"cal()\">Submit</button>-->\r" +
    "\n" +
    "                <span ng-show=\"rangeYears\">{{rangeYears}}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );
 }); });