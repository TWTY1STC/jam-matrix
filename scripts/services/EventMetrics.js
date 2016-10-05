(function(){
    function EventMetrics($rootScope){
        $rootScope.songPlays = [];
        
        $rootScope.on('song_played', function(event, data){
            console.log(data);
        });
    //     return {
    //         //function that records a metric obj by pushingit to the $rootScope array
    //         registerSongPlay: function (songObj){
    //             //add time to event listener
    //             songObj['playedAt'] = moment(new Date()).format();
    //             $rootScope.songPlays.push(songObj);
    //         },
    //         listSongsPlayed: function () {
    //             var songs = [];
    //             angular.forEach($rootScope.songPlays, function(song){
    //                 songs.push(song.title);
                    
    //             });
    //             console.log(songs);
    //             return songs;
    //         }
    //     };
    }
    
    
    angular
        .module('blocJams')
        .factory('EventMatrics', EventMatrics);
})();