// 图片预览
$("#pic").change(function(){  
  // this.files代表的是选择的文件总资源（不止一个文件）
  var files = this.files;
  var jd = $(".picIpt img");
  var objUrl = getObjectURL(files[0]);
  // $(files).each(function(i,v){
    // getObjectURL是自定义的函数,this.files[i]代表的是选择的文件资源的第（i+1）个
    // var objUrl = getObjectURL(files[i]);
    // if (objUrl) {  
      // jd.append("<div class='col-sm-4'><img class='img-responsive' src='"+objUrl+"'></div>");
    // }
  // });  
  jd.attr("src",objUrl);
}) ;  
//建立一个可存取到该file的url  
function getObjectURL(file) {  
  var url = null ;   
  // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已  
  if (window.createObjectURL!=undefined) { // basic  
    url = window.createObjectURL(file) ;  
  } else if (window.URL!=undefined) { // mozilla(firefox)  
    url = window.URL.createObjectURL(file) ;  
  } else if (window.webkitURL!=undefined) { // webkit or chrome  
    url = window.webkitURL.createObjectURL(file) ;  
  }  
  return url ;  
}
// 当前页面标记
var parameter = window.location.pathname;
nowPage = (parameter=="/")?".home":(parameter.replace("/","."));
$(nowPage).addClass("active");
// 离开编辑区
var obj = $("#cancel-modal .check-ok");
obj.click(function(){
  $(".main-modal").modal("hide");
});