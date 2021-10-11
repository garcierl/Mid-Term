function showContent(pageID){
    console.log(pageID);
}


function initListeners(){
    $(window).on("hashchange", function(e){
        let navID = e.currentTarget.id;

        MODEL.route(navID, showContent);
    })
}


$(document).ready(function(){
    initListeners();
    MODEL.route("home", showContent);
    // MODEL.route("home", showContent);
})