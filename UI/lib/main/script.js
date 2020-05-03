$(".head-right i").hide();
$("#logo").on("click",function(){
    if(window.innerWidth < 768 )
    {
        $("#logo").hide();   
        $("#close").show();
        $("#topMenu ul").fadeIn(1000);
    }
});
function hideMenu(){
    if(window.innerWidth < 768 )
    {
        $("#close").hide();   
        $("#logo").show();
        $("#topMenu ul").fadeOut(1000);
    }
};
window.onresize = function(){
    $("#close").hide();   
    $("#logo").show();
    if(window.innerWidth > 768 )
        $("#topMenu ul").show();
    else
        $("#topMenu ul").hide();
}
let slid=2;
function slide(num){
    if(slid != num)
    {
        $("#sl-"+num).addClass("active");
        $("#sl-"+slid).removeClass("active");
        $("#dot-"+num).addClass("dot-active");
        $("#dot-"+slid).removeClass("dot-active");
        slid=num;
    }
}
