/**
 * Created by Xnew on 2016/8/26.
 */

function animate(box,target){
    clearInterval(box.timer);//清空定时器
    box.timer=setInterval(function(){
        //leader：当前的位置
        //  公式：leader = leader  +  ( target - leader )  / 10
        var step=(target-box.offsetLeft)/10; //
        // 如果 目标位置 大于当前的位置，向上取整，否则向下取整
        var  speed =target>box.offsetLeft?Math.ceil(step):Math.floor(step);
        box.style.left=box.offsetLeft+speed+"px";
        //  当前的等于目标的位置
        if(box.offsetLeft==target){
            clearInterval(box.timer); //清空定时器
        }
    },40)
}

//封装一个缓动画函数
// function animate(obj,target){
//     clearInterval(obj.timer);
//     //然后让定时器让他跑起来
//     obj.timer = setInterval(function(){
//         //公式 leader = leader + (target - leader)/10
//         var step =( target -obj.offsetLeft)/10;
//         var speed = target > obj.offsetLeft ? Math.ceil(step) : Math.floor(step);
//         obj.style.left = obj.offsetLeft + speed + "px";
//         if(obj.offsetLeft == target){
//             clearInterval(obj.timer);
//         }
//     },40);
//
// }
