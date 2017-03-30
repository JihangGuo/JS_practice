/**
 * Created by hang on 17-3-28.
 */


//按钮功能
var the_url = 1;//控制展示图片的位置，全局通用
var turn_id;
function turn_pic() {
    var pic_index = document.getElementsByClassName("thetrue_pic");
    var left_bar = document.getElementsByClassName("turn_last");
    left_bar[0].onclick = function () {
        var turn_id = 0;//设置turn_id值，用于判断点击的是向前还是向后按钮
        auto_play(turn_id,"");
    }
    var right_bar = document.getElementsByClassName("turn_next");
    right_bar[0].onclick = function () {
        var turn_id = 1;
        auto_play(turn_id,"");
    }
}

function auto_play(turn_id,url_index) {
    var pic_index = document.getElementsByClassName("thetrue_pic");
    var turn_idd;

    //判断按钮类型
    if (turn_id == 0)
    {
        the_url--;
    }
    else if (turn_id == 1)
    {
        the_url++;
    }
    else
    {
        the_url = url_index;
    }

    //根据当前图片进行图片展示选择
    if ( the_url <= 6 && the_url>0 )
    {
        pic_index[0].src = "./style/img/" + the_url + ".jpg";
    }
    else if ( the_url>6)
    {
        the_url = 1;
        pic_index[0].src = "./style/img/" + the_url + ".jpg";
    }
    else
    {
        the_url = 6 + the_url;
        pic_index[0].src = "./style/img/" + the_url + ".jpg";
    }

}

//启动函数
function the_main() {
    turn_pic();//启动切换按钮
    min_pic();//启动略缩图
    var turn_id = 1;            //兄弟，这里有一个bug　当把第一个参数设置为turn_id时，会出现undefine!!!
    var t = self.setInterval("auto_play(1,'')",6000);//设置定时器
}the_main();
//略缩图添加链接
function min_pic() {
    var  mini_pic = document.getElementsByClassName("min_ele");
    //闭包问题示例
    for ( var i=0; i<=5; i++)
    {
        mini_pic[i].onclick = function (a) {
            return function () {
                var turn_id = 2;
                var m = a+1;
                var url_index = m;
                auto_play(2,url_index);
            }
        }(i)
    }
}

/*所需要的类名有　the_map//包含轮播图全部内容 the_info//加载的动图 turn_last//向左按钮　the_pic//展示大图+theture_pic//图片类名 turn_next//向右按钮　the_min//略缩图　min_ele//略缩图元素　*/

/*这是自己兴起来的时候做的一个轮波图小代码　这只是一个最基本的代码示范　大概展示来一个最简单的轮波图所用的代码　深入下去的话还需要做很多改进：１）渐变效果，３ｄ效果　２）还可以换一种实现效果的方法，将改变图片的链接变为改变显示图像盒子的背景图片　３）可以将略缩图变为小圆点，鼠标放上时显示小图*/
