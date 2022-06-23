let colors = ['red','orange','yellow','blue','green'];
for(let i=0;i<colors.length;i++){
  $(".color-options li").eq(i).css("backgroundColor",colors[i]);
}
$(".color-options li").click(function(){
  let currentBg = $(this).css("backgroundColor");
  $(".change").css("color",currentBg);
});
$(".color-box i").click(function(){
    let optionWidth =$(".color-options").outerWidth();
    if( $(".color-box").css("left")=="0px"){
      $(".color-box").animate({"left":-optionWidth},2000);
    }else{
      $(".color-box").animate({"left":0},2000);
    }
})