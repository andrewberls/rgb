$(document).ready(function () { 
	$("#rgbConvert").click(evaluate_rgb);	
	$("#clone").click(function () {
		$("#in_G, #in_B").attr("value", $("#in_R").val());
		evaluate_rgb();		
	});
	
	$("#hexConvert").click(evaluate_hex);
}); 

function evaluate_rgb() {
	var i_r = document.getElementById("in_R"); 
	var i_g = document.getElementById("in_G"); 
	var i_b = document.getElementById("in_B"); 
	
	var o_h = document.getElementById("out_hex"); 
	o_h.value = "#" + rgbToHex(i_r.value, i_g.value, i_b.value); 
	
	$("#rgbPreview").css("background-color", o_h.value); 
	$("#rgbText").css("color", o_h.value); 	
}

function evaluate_hex() {
	var form_h = document.getElementById("in_hex");
	var in_h = form_h.value;
			
	var o_r = hexToVal(in_h, 0, 2);
	var o_g = hexToVal(in_h, 2, 4);
	var o_b = hexToVal(in_h, 4, 6);				
			
	var form_r = document.getElementById("out_R");
	var form_g = document.getElementById("out_G");
	var form_b = document.getElementById("out_B");
	
	form_r.value = o_r;		
	form_g.value = o_g;
	form_b.value = o_b;
	
	$("#hexPreview").css("background-color", "#" + in_h); 
	$("#hexText").css("color", "#" + in_h); 	
}

function rgbToHex(a,b,c) { 
	return toHex(a) + toHex(b) + toHex(c) 
} 

function toHex(a) { 
	if (a == null) { 
		return "00"; 
	} 
	a = parseInt(a); 
	if (a == 0 || isNaN(a)) { 
		return "00"; 
	} 
	a = Math.max(0, a); 
	a = Math.min(a, 255); 
	a = Math.round(a); 
	return "0123456789ABCDEF".charAt((a - a % 16) / 16) + "0123456789ABCDEF".charAt(a % 16) 
};

function hexToVal(h, start, end) { 
	return parseInt(h.substring(start, end), 16);
}