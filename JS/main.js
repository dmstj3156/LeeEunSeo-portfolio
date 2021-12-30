//nav toggle
$(function(){
    $('#toggle').on('click', function(){
      $('#gnb').addClass('show');
  });
  
  // 메인메뉴 닫기
  $('.btn_close').on('click', function(){
      $('#gnb').removeClass('show');
  });
  
  // PC화면으로 넘어가면 모바일 메뉴 닫기
  $(window).on('resize', function(){
    var x = window.matchMedia("(min-width: 1025px)");
    if(x.matches) { $('#gnb').removeClass('show');}
  })
  })


//pie-chart
$(function(){
    option = {
      animate:{
          duration: 3000, // 애니메이션 시간
          enabled: true
      },
      barColor:'#1E5BB7',  // 바 색상
      scaleColor: false,
      lineWidth: 8,  // 선두께
      lineCap:'round',  //  선끝 모양
      size: 90  // 크기
  };
  
          
  $(function() {
  
  $('.chart1').easyPieChart(option); 
  $('.chart2').easyPieChart(option); 
  $('.chart3').easyPieChart(option); 
  $('.chart4').easyPieChart(option); 
  });
  
  })

//이미지 필터 
$(function(){
  // 초기 모드(전체 작품)
  $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
   filter: '*'
 });  


$('#all').click(function(){
 $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
   filter: '*'
 });        
}) 
   
$('#individual').click(function(){
 $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
   filter: '.individual'
 });        
})

$('#team').click(function(){
 $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
   filter: '.team'
 });        
})


})
