/**
 * Created by rohitbegani on 3/11/16.
 */
(function() {
    "use strict";
    angular
        .module("codingTutorial")
        .controller("TutorialController", TutorialController);

    TutorialController.$inject = ['$mdDialog', 'HackerRankService', 'TutorialService', '$rootScope'];

    function TutorialController($mdDialog, HackerRankService, TutorialService, $rootScope){

        var vm = this;

        //instances for methods
        vm.run = run;
        vm.showloader = showloader;
        vm.openOffscreen = openOffscreen;
        vm.nextLesson = nextLesson;
        vm.onEditorLoad = onEditorLoad;
        vm.onEditorChange = onEditorChange;
        vm.langMode = langMode;
        vm.link = 'https://www.youtube.com/watch?v=UHwVyplU3Pg';
        //vm.link = currentLesson.multimedia;

        var count = 0;

        function init(){

        }

        function initTutorial(){
            var tutorialId = $rootScope.tutorial._id;
            TutorialService.findTutorialById(tutorialId)
                .then(
                    function(response){
                        if(response){
                            vm.tutorial = response.data;
                            vm.currentLesson = response.data.lessons[count];
                            //vm.link = vm.currentLesson.multimedia;
                            console.log(vm.currentLesson);
                            console.log($rootScope.link);
                        }
                    }
                )
        }

        function lessonCounter(tutorial){
            var lessons = tutorial.lessons;
            var len = lessons.length;
            if(count<len){
                count++;
                vm.currentLesson = tutorial.lessons[count];
            }
        }

        function nextLesson(userCode){
            var code = [userCode.data];
            var language = vm.tutorial.language;
            var testcases = ["1\n"];
            HackerRankService.sendCode(code, language, testcases)
                .then(
                    function(response){
                        if(response){
                            vm.output = response.data;
                            vm.isLoading = false;
                            testcases = JSON.stringify(testcases);
                            var output = JSON.stringify(response.data);
                            console.log(testcases);
                            console.log(output);
                            if(testcases == output){
                                lessonCounter(vm.tutorial);
                                console.log(count);
                                console.log(vm.currentLesson);
                                vm.userCode.data = '';
                                vm.output = '';
                            }
                            else{
                                console.log('wrong output');
                            }
                        }
                    }
                )
        }

        function openOffscreen() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Hint')
                    .textContent(vm.currentLesson.hints)
                    .ariaLabel('Offscreen Demo')
                    .ok('Close')
                    // Or you can specify the rect to do the transition from
                    .openFrom({
                        top: -50,
                        width: 30,
                        height: 80
                    })
                    .closeTo({
                        left: 1500
                    })
            );
        };

        function showloader() {
            vm.isLoading = true;
        }

        function run(userCode) {
            var language = vm.tutorial.language;
            var testcases = "1";
            console.log(userCode.data);
            var code = [userCode.data];
            HackerRankService.sendCode(code, language)
                .then(
                    function(response) {
                        if (response.data) {
                            vm.isLoading = false;
                            vm.output = response.data;
                        }
                        else{
                            vm.isLoading = false;
                            console.log("no response");
                        }
                    }

                );
        }

        function langMode(){
            var lang = vm.tutorial.language;
            lang = lang.toLowerCase();
            console.log(lang);
            return lang;
        }

        function onEditorLoad(_editor){
            _editor.setReadOnly(true);
            console.log($rootScope.tutorialLang);
        }

        function onEditorChange(e){
            console.log(e);
        }

        initTutorial();
        init();
    }
})();