(function() {
    function CollectionCtrl(Fixtures){
        
        this.albums = Fixtures.getCollection(12);
        
    }
    //how to link fixtures.js to this so albumPicasso means something? (services via dependency injection)
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();