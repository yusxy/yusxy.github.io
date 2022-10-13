
/*预加载处理*/
$(document).ready(function () {
    /*隐藏ul*/
    $('.subnav').hide();
    /*移入li时,让li里面的子菜单显示*/
    /*mouseenter事件,当鼠标移入时，显示*/
    $('.mainnav>nav>ul>li').mouseenter(function () {
        /*this代表本身*/
        $(this).find('.subnav').show();
        // mouseleave事件当鼠标移出时，隐藏
    }).mouseleave(function () {
        $(this).find('.subnav').hide();
    })
})

