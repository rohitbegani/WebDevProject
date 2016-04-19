/**
 * Created by sumeetdubey on 3/10/16.
 */
(function(){
    var app = angular.module('codingTutorial',
        ['ngRoute',
            'ngMaterial',
            'chart.js',
            'md.data.table',
            'flow',
            'ngYoutubeEmbed',
            //'angular-sanitize',
            'textAngular'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('pink')
                .warnPalette('red');
        });
    //angular.module('firstModule',['moduleA','moduleB']);
    //.module("codingTutorial", ["ngMaterial"]);
})();
