var ProgressBar = require('./progress');
 var pb = new ProgressBar('下载进度', 25);
 

var num = 0, total = 100;
function downloading() {
 if (num <= total) {
  // 更新进度条
  pb.render({ completed: num, total: total });
 
  num++;
  setTimeout(function (){
   downloading();
  }, 500)
 }
}
downloading();