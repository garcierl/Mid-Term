function showContent(pageID){
    console.log(pageID);
}

function menu() {
    console.log("working");
    $(".menu-bars").on("click", () => {
      $(".menu-bars").css("display", "none");
      $(".menu-cross").css("display", "block");
      $(".menu-dropdown").css("display", "flex");
      $(".menu-cross").on("click", () => {
        $(".menu-cross").css("display", "none");
        $(".menu-bars").css("display", "block");
        $(".menu-dropdown").css("display", "none");
      });
    });
  }

function initListeners(){
    $(window).on("hashchange", function(e){
        let navID = e.currentTarget.id;
        menu();
        MODEL.route(navID, showContent);
    })
}


$(document).ready(function(){
    initListeners();
    menu();
    MODEL.route("home", showContent);
    // MODEL.route("home", showContent);
})