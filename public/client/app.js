/**
 * Created by sumeetdubey on 3/10/16.
 */
(function(){
        var app = angular.module('codingTutorial',
            ['ngRoute',
                    'ngMaterial',
                    //'chart.js',
                    'md.data.table',
                    'flow',
                    'ngYoutubeEmbed',
                    'textAngular',
                    'ng-mfb',
                    'textAngular',
                    'ui.ace',
                    'ngStorage',
                    'ngMessages'])

            .config(function($mdThemingProvider) {
                    $mdThemingProvider.theme('default')
                        .primaryPalette('red', {
                                'default': '800'
                        })
                        .accentPalette('pink')
                        .warnPalette('red')
                        .backgroundPalette('grey');
            });
})();
