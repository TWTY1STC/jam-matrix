angular.module('blocJams')
    .directive('eventMetrics', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                //  mostly jquery in link function
                $(element).on('click', function(){
                    console.log('clicked');
                    scope.$emit('song_played', element); //sends a msg to rootScope
                });
            }
        };
    })