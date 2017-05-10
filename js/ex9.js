/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-10 22:11:11
 * @version $Id$
 */

//part one
var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.15,30.25);
map.centerAndZoom(point, 15);    
map.centerAndZoom(new BMap.Point(120.15,30.25), 11);       
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());  
map.centerAndZoom(new BMap.Point(120.141,30.257), 11);
var local = new BMap.LocalSearch(map, {
    renderOptions: {
    map: map,
    autoViewport: true
  }
});
local.searchNearby("宾馆", "西湖");


var map = new BMap.Map("Map");
map.centerAndZoom(new BMap.Point(120.015,30.295), 15); 
var point = new BMap.Point(120.15,30.25);
map.centerAndZoom(point, 15);    
map.centerAndZoom(new BMap.Point(120.15,30.25), 11);       
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());  
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result",
    autoViewport: true
  }
});
transit.search("杭州师范大学仓前校区", "宾馆");
//part three
// var map = new BMap.Map("schoolMap");
// map.centerAndZoom(new BMap.Point(120.01837,30.295953), 17); 
// var point = new BMap.Point(120.020202,30.293895);
// var marker = new BMap.Marker(point);// 创建标注    
// map.addOverlay(marker);
// var opts = document.getElementById('message');
// var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象  
// marker.addEventListener("click", function(){    
// 	map.openInfoWindow(infoWindow, point); 
// });
var map = new BMap.Map("schoolMap");
map.centerAndZoom(new BMap.Point(120.015,30.295), 15); 
var point = new BMap.Point(120.15,30.25);
map.centerAndZoom(point, 15);    
map.centerAndZoom(new BMap.Point(120.15,30.25), 11);       
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());  
$(init) 
function init() {
  $("#shuyuan1").hide();
  $("#shuyuan2").hide();
  $("#shuyuan3").hide();
  $("#shuyuan5").hide();
  $("#shuyuan7").hide();
  $("#shuyuan9").hide();
  $("#shuyuan10").hide();
  $("#shuyuan11").hide();
  $("#shuyuan12").hide();
  $("#shuyuan13").hide();
  $("#shuyuan14").hide();
  $("#shuyuan15").hide();
  $("#shuyuan16").hide();
  $("#shuyuan17").hide();
  $("#shuyuan19").hide();
  $("#shuyuan20").hide();
  $("#shuyuan21").hide();
  $("#shuyuan24").hide();
  $("#shuyuan27").hide();
  $("#shuyuan28").hide();
  $("#shuyuan29").hide();
  $("#shuyuan30").hide();
  $("#shuyuan35").hide();
  $("#bo2").hide();
  $("#bo3").hide();
  $("#bo4").hide();
  $("#bo5").hide();
  $("#bo6").hide();
  $("#bo7").hide();
  $("#bo8").hide();
  $("#bo9").hide();
  $("#bo10").hide();
  $("#lan").hide();
  $("#ximen").hide();
  $("#cao").hide();
  $("#shi").hide();
  $("#shitang").hide();
  $("#tu").hide();
  $("#zu").hide();
  $("#shuyuan13").hide();

var point1 = new BMap.Point(120.020455,30.295071);
 map.centerAndZoom(point1, 17); 
var marker1= new BMap.Marker(point1);   
map.addOverlay(marker1);
var opts1=document.getElementById('shuyuan1');
var infoWindow1= new BMap.InfoWindow(opts1);    
marker1.addEventListener("click", function(){ 
	$("#shuyuan1").show();
    map.openInfoWindow(infoWindow1, point1); 
});

 var point2 = new BMap.Point(120.020419,30.295741);
 map.centerAndZoom(point2, 17); 
var marker2 = new BMap.Marker(point2);   
map.addOverlay(marker2);
var opts2=document.getElementById('shuyuan2');
var infoWindow2= new BMap.InfoWindow(opts2);    
marker2.addEventListener("click", function(){ 
	$("#shuyuan2").show();
    map.openInfoWindow(infoWindow2, point2); 
});

var point3= new BMap.Point(120.018605,30.29433);
 map.centerAndZoom(point3, 17); 
var marker3 = new BMap.Marker(point3);   
map.addOverlay(marker3);
var opts3=document.getElementById('shuyuan3');
var infoWindow3 = new BMap.InfoWindow(opts3);    
marker3.addEventListener("click", function(){ 
	$("#shuyuan3").show();
    map.openInfoWindow(infoWindow3, point3); 
});

var point5= new BMap.Point(120.017401,30.294032);
 map.centerAndZoom(point5, 17); 
var marker5 = new BMap.Marker(point5);   
map.addOverlay(marker5);
var opts5=document.getElementById('shuyuan5');
var infoWindow5 = new BMap.InfoWindow(opts5);    
marker5.addEventListener("click", function(){ 
	$("#shuyuan5").show();
    map.openInfoWindow(infoWindow5, point5); 
});

var point7= new BMap.Point(120.019031,30.295268);
 map.centerAndZoom(point7, 17); 
var marker7 = new BMap.Marker(point7);   
map.addOverlay(marker7);
var opts7=document.getElementById('shuyuan7');
var infoWindow7 = new BMap.InfoWindow(opts7);    
marker7.addEventListener("click", function(){ 
	$("#shuyuan7").show();
    map.openInfoWindow(infoWindow7, point7); 
});

var point9 = new BMap.Point(120.02059,30.296799);
 map.centerAndZoom(point9, 17); 
var marker9= new BMap.Marker(point9);   
map.addOverlay(marker9);
var opts9=document.getElementById('shuyuan9');
var infoWindow9= new BMap.InfoWindow(opts9);    
marker9.addEventListener("click", function(){ 
	$("#shuyuan9").show();
    map.openInfoWindow(infoWindow9, point9); 
});

 var point10 = new BMap.Point(120.020433,30.296975);
 map.centerAndZoom(point10, 17); 
var marker10= new BMap.Marker(point10);   
map.addOverlay(marker10);
var opts10=document.getElementById('shuyuan10');
var infoWindow10= new BMap.InfoWindow(opts10);    
marker10.addEventListener("click", function(){ 
	$("#shuyuan10").show();
    map.openInfoWindow(infoWindow10, point10); 
});

var point11= new BMap.Point(120.019804,30.296417);
 map.centerAndZoom(point11, 17); 
var marker11 = new BMap.Marker(point11);   
map.addOverlay(marker11);
var opts11=document.getElementById('shuyuan11');
var infoWindow11 = new BMap.InfoWindow(opts11);    
marker11.addEventListener("click", function(){ 
	$("#shuyuan11").show();
    map.openInfoWindow(infoWindow11, point11); 
});

var point12= new BMap.Point(120.01984,30.296811);
 map.centerAndZoom(point12, 17); 
var marker12 = new BMap.Marker(point12);   
map.addOverlay(marker12);
var opts12=document.getElementById('shuyuan12');
var infoWindow12 = new BMap.InfoWindow(opts12);    
marker12.addEventListener("click", function(){ 
	$("#shuyuan12").show();
    map.openInfoWindow(infoWindow12, point12); 
});

var point13= new BMap.Point(120.019027,30.296468);
 map.centerAndZoom(point13, 17); 
var marker13 = new BMap.Marker(point13);   
map.addOverlay(marker13);
var opts13=document.getElementById('shuyuan13');
var infoWindow13 = new BMap.InfoWindow(opts13);    
marker13.addEventListener("click", function(){ 
	$("#shuyuan13").show();
    map.openInfoWindow(infoWindow13, point13); 
});
var point14 = new BMap.Point(120.019337,30.296673);
 map.centerAndZoom(point14, 17); 
var marker14= new BMap.Marker(point14);   
map.addOverlay(marker14);
var opts14=document.getElementById('shuyuan14');
var infoWindow14= new BMap.InfoWindow(opts14);    
marker14.addEventListener("click", function(){ 
	$("#shuyuan14").show();
    map.openInfoWindow(infoWindow14, point14); 
});

 var point15 = new BMap.Point(120.020837,30.297176);
 map.centerAndZoom(point15, 17); 
var marker15 = new BMap.Marker(point15);   
map.addOverlay(marker15);
var opts15=document.getElementById('shuyuan15');
var infoWindow15= new BMap.InfoWindow(opts15);    
marker15.addEventListener("click", function(){ 
	$("#shuyuan15").show();
    map.openInfoWindow(infoWindow15, point15); 
});

var point16= new BMap.Point(120.020657,30.297363);
 map.centerAndZoom(point16, 17); 
var marker16 = new BMap.Marker(point16);   
map.addOverlay(marker16);
var opts16=document.getElementById('shuyuan16');
var infoWindow16 = new BMap.InfoWindow(opts16);    
marker16.addEventListener("click", function(){ 
	$("#shuyuan16").show();
    map.openInfoWindow(infoWindow16, point16); 
});

var point17= new BMap.Point(120.01971,30.297098);
 map.centerAndZoom(point17, 17); 
var marker17 = new BMap.Marker(point17);   
map.addOverlay(marker17);
var opts17=document.getElementById('shuyuan17');
var infoWindow17 = new BMap.InfoWindow(opts17);    
marker17.addEventListener("click", function(){ 
	$("#shuyuan17").show();
    map.openInfoWindow(infoWindow17, point17); 
});

var point19= new BMap.Point(120.017805,30.296665);
 map.centerAndZoom(point19, 17); 
var marker19 = new BMap.Marker(point19);   
map.addOverlay(marker19);
var opts19=document.getElementById('shuyuan19');
var infoWindow19 = new BMap.InfoWindow(opts19);    
marker19.addEventListener("click", function(){ 
	$("#shuyuan19").show();
    map.openInfoWindow(infoWindow19, point19); 
});

var point20 = new BMap.Point(120.020114,30.297745);
 map.centerAndZoom(point20, 17); 
var marker20= new BMap.Marker(point20);   
map.addOverlay(marker20);
var opts20=document.getElementById('shuyuan20');
var infoWindow20= new BMap.InfoWindow(opts20);    
marker20.addEventListener("click", function(){ 
	$("#shuyuan20").show();
    map.openInfoWindow(infoWindow20, point20); 
});

 var point21 = new BMap.Point(120.019548,30.297394);
 map.centerAndZoom(point21, 17); 
var marker21= new BMap.Marker(point21);   
map.addOverlay(marker21);
var opts21=document.getElementById('shuyuan21');
var infoWindow21= new BMap.InfoWindow(opts21);    
marker21.addEventListener("click", function(){ 
	$("#shuyuan21").show();
    map.openInfoWindow(infoWindow21, point21); 
});

var point24= new BMap.Point(120.017495,30.296895);
 map.centerAndZoom(point24, 17); 
var marker24 = new BMap.Marker(point24);   
map.addOverlay(marker24);
var opts24=document.getElementById('shuyuan24');
var infoWindow24 = new BMap.InfoWindow(opts24);    
marker24.addEventListener("click", function(){ 
	$("#shuyuan24").show();
    map.openInfoWindow(infoWindow24, point24); 
});

var point27= new BMap.Point(120.02037,30.297963);
 map.centerAndZoom(point27, 17); 
var marker27 = new BMap.Marker(point27);   
map.addOverlay(marker27);
var opts27=document.getElementById('shuyuan27');
var infoWindow27 = new BMap.InfoWindow(opts27);    
marker27.addEventListener("click", function(){ 
	$("#shuyuan27").show();
    map.openInfoWindow(infoWindow27, point27); 
});

var point28= new BMap.Point(120.019768,30.298019);
 map.centerAndZoom(point28, 17); 
var marker28 = new BMap.Marker(point28);   
map.addOverlay(marker28);
var opts28=document.getElementById('shuyuan28');
var infoWindow28 = new BMap.InfoWindow(opts28);    
marker28.addEventListener("click", function(){ 
	$("#shuyuan28").show();
    map.openInfoWindow(infoWindow28, point28); 
});

var point29= new BMap.Point(120.019305,30.297928);
 map.centerAndZoom(point29, 17); 
var marker29 = new BMap.Marker(point29);   
map.addOverlay(marker29);
var opts29=document.getElementById('shuyuan29');
var infoWindow29 = new BMap.InfoWindow(opts29);    
marker29.addEventListener("click", function(){ 
	$("#shuyuan29").show();
    map.openInfoWindow(infoWindow29, point29); 
});

var point30= new BMap.Point(120.018389,30.297967);
 map.centerAndZoom(point30, 17); 
var marker30 = new BMap.Marker(point30);   
map.addOverlay(marker30);
var opts30=document.getElementById('shuyuan30');
var infoWindow30 = new BMap.InfoWindow(opts30);    
marker30.addEventListener("click", function(){ 
	$("#shuyuan30").show();
    map.openInfoWindow(infoWindow30, point30); 
});

var point35= new BMap.Point(120.017486,30.297982);
 map.centerAndZoom(point35, 17); 
var marker35 = new BMap.Marker(point35);   
map.addOverlay(marker35);
var opts35=document.getElementById('shuyuan35');
var infoWindow35 = new BMap.InfoWindow(opts35);    
marker35.addEventListener("click", function(){ 
	$("#shuyuan35").show();
    map.openInfoWindow(infoWindow35, point35); 
});


var point42 = new BMap.Point(120.016916,30.295367);
 map.centerAndZoom(point42, 17); 
var marker42= new BMap.Marker(point42);   
map.addOverlay(marker42);
var opts42=document.getElementById('bo2');
var infoWindow42= new BMap.InfoWindow(opts42);    
marker42.addEventListener("click", function(){ 
	$("#bo2").show();
    map.openInfoWindow(infoWindow42, point42); 
});

 var point43 = new BMap.Point(120.016247,30.294774);
 map.centerAndZoom(point43, 17); 
var marker43 = new BMap.Marker(point43);   
map.addOverlay(marker43);
var opts43=document.getElementById('bo3');
var infoWindow43= new BMap.InfoWindow(opts43);    
marker43.addEventListener("click", function(){ 
	$("#bo3").show();
    map.openInfoWindow(infoWindow43, point43); 
});

var point44= new BMap.Point(120.016175,30.29504);
 map.centerAndZoom(point44, 17); 
var marker44 = new BMap.Marker(point44);   
map.addOverlay(marker44);
var opts44=document.getElementById('bo4');
var infoWindow44 = new BMap.InfoWindow(opts44);    
marker44.addEventListener("click", function(){ 
	$("#bo4").show();
    map.openInfoWindow(infoWindow44, point44); 
});

var point45= new BMap.Point(120.016471,30.295726);
 map.centerAndZoom(point45, 17); 
var marker45 = new BMap.Marker(point45);   
map.addOverlay(marker45);
var opts45=document.getElementById('bo5');
var infoWindow45 = new BMap.InfoWindow(opts45);    
marker45.addEventListener("click", function(){ 
	$("#bo5").show();
    map.openInfoWindow(infoWindow45, point45); 
});

var point46= new BMap.Point(120.016238,30.295874);
 map.centerAndZoom(point46, 17); 
var marker46 = new BMap.Marker(point46);   
map.addOverlay(marker46);
var opts46=document.getElementById('bo6');
var infoWindow46 = new BMap.InfoWindow(opts46);    
marker46.addEventListener("click", function(){ 
	$("#bo6").show();
    map.openInfoWindow(infoWindow46, point46); 
});

var point47 = new BMap.Point(120.015245,30.296273);
 map.centerAndZoom(point47, 17); 
var marker47= new BMap.Marker(point47);   
map.addOverlay(marker47);
var opts47=document.getElementById('bo7');
var infoWindow47= new BMap.InfoWindow(opts47);    
marker47.addEventListener("click", function(){ 
	$("#bo7").show();
    map.openInfoWindow(infoWindow47, point47); 
});

 var point48 = new BMap.Point(120.015178,30.2964);
 map.centerAndZoom(point48, 17); 
var marker48= new BMap.Marker(point48);   
map.addOverlay(marker48);
var opts48=document.getElementById('bo8');
var infoWindow48= new BMap.InfoWindow(opts48);    
marker48.addEventListener("click", function(){ 
	$("#bo8").show();
    map.openInfoWindow(infoWindow48, point48); 
});

var point49= new BMap.Point(120.015762,30.296525);
 map.centerAndZoom(point49, 17); 
var marker49 = new BMap.Marker(point49);   
map.addOverlay(marker49);
var opts49=document.getElementById('bo9');
var infoWindow49 = new BMap.InfoWindow(opts49);    
marker49.addEventListener("click", function(){ 
	$("#bo9").show();
    map.openInfoWindow(infoWindow49, point49); 
});

var point50= new BMap.Point(120.015717,30.296626);
 map.centerAndZoom(point50, 17); 
var marker50 = new BMap.Marker(point50);   
map.addOverlay(marker50);
var opts50=document.getElementById('bo10');
var infoWindow50 = new BMap.InfoWindow(opts50);    
marker50.addEventListener("click", function(){ 
	$("#bo10").show();
    map.openInfoWindow(infoWindow50, point50); 
});

var point60= new BMap.Point(120.012299,30.296283);
 map.centerAndZoom(point60, 17); 
var marker60 = new BMap.Marker(point60);   
map.addOverlay(marker60);
var opts60=document.getElementById('lan');
var infoWindow60 = new BMap.InfoWindow(opts60);    
marker60.addEventListener("click", function(){ 
	$("#lan").show();
    map.openInfoWindow(infoWindow60, point60); 
});
 var point61 = new BMap.Point(120.011445,30.295628);
 map.centerAndZoom(point61, 17); 
var marker61 = new BMap.Marker(point61);   
map.addOverlay(marker61);
var opts61=document.getElementById('ximen');
var infoWindow61= new BMap.InfoWindow(opts61);    
marker61.addEventListener("click", function(){ 
	$("#ximen").show();
    map.openInfoWindow(infoWindow61, point61); 
});

var point62= new BMap.Point(120.013049,30.295242);
 map.centerAndZoom(point62, 17); 
var marker62 = new BMap.Marker(point62);   
map.addOverlay(marker62);
var opts62=document.getElementById('cao');
var infoWindow62 = new BMap.InfoWindow(opts62);    
marker62.addEventListener("click", function(){ 
	$("#cao").show();
    map.openInfoWindow(infoWindow62, point62); 
});

var point63= new BMap.Point(120.022202,30.298758);
 map.centerAndZoom(point63, 17); 
var marker63 = new BMap.Marker(point63);   
map.addOverlay(marker63);
var opts63=document.getElementById('tu');
var infoWindow63 = new BMap.InfoWindow(opts63);    
marker63.addEventListener("click", function(){ 
	$("#tu").show();
    map.openInfoWindow(infoWindow63, point63); 
});

var point64= new BMap.Point(120.023217,30.298906);
 map.centerAndZoom(point64, 17); 
var marker64 = new BMap.Marker(point64);   
map.addOverlay(marker64);
var opts64=document.getElementById('shi');
var infoWindow64 = new BMap.InfoWindow(opts64);    
marker64.addEventListener("click", function(){ 
	$("#shi").show();
    map.openInfoWindow(infoWindow64, point64); 
});

var point65 = new BMap.Point(120.017922,30.295501);
 map.centerAndZoom(point65, 17); 
var marker65= new BMap.Marker(point65);   
map.addOverlay(marker65);
var opts65=document.getElementById('shitang');
var infoWindow65= new BMap.InfoWindow(opts65);    
marker65.addEventListener("click", function(){ 
	$("#shitang").show();
    map.openInfoWindow(infoWindow65, point65); 
});

 var point66 = new BMap.Point(120.015523,30.295735);
 map.centerAndZoom(point66, 17); 
var marker66= new BMap.Marker(point66);   
map.addOverlay(marker66);
var opts66=document.getElementById('zu');
var infoWindow66= new BMap.InfoWindow(opts66);    
marker66.addEventListener("click", function(){ 
	$("#zu").show();
    map.openInfoWindow(infoWindow66, point66); 
});

var point67= new BMap.Point(120.02002,30.294184);
 map.centerAndZoom(point67, 17); 
var marker67 = new BMap.Marker(point67);   
map.addOverlay(marker67);
var opts67=document.getElementById('nanmen');
var infoWindow67 = new BMap.InfoWindow(opts67);    
marker67.addEventListener("click", function(){ 
	$("#nanmen").show();
    map.openInfoWindow(infoWindow67, point67); 
});
var point68= new BMap.Point(120.015717,30.296626);
 map.centerAndZoom(point68, 17); 
var marker68 = new BMap.Marker(point68);   
map.addOverlay(marker68);
var opts68=document.getElementById('bo10');
var infoWindow68 = new BMap.InfoWindow(opts68);    
marker68.addEventListener("click", function(){ 
	$("#bo10").show();
    map.openInfoWindow(infoWindow68, point68); 
});
var point69= new BMap.Point(120.015717,30.296626);
 map.centerAndZoom(point69, 17); 
var marker69 = new BMap.Marker(point69);   
map.addOverlay(marker69);
var opts69=document.getElementById('bo10');
var infoWindow69 = new BMap.InfoWindow(opts69);    
marker69.addEventListener("click", function(){ 
	$("#bo10").show();
    map.openInfoWindow(infoWindow69, point69); 
});
}