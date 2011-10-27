function toHex(a) { 
	if (a === null) { 
		return "00"; 
	} 
	a = parseInt(a, 10); 
	if (a === 0 || isNaN(a)) { 
		return "00"; 
	} 
	a = Math.max(0, a); 
	a = Math.min(a, 255); 
	a = Math.round(a); 
	return "0123456789ABCDEF".charAt((a - a % 16) / 16) + "0123456789ABCDEF".charAt(a % 16);
}

function rgbToHex(a, b, c) { 
	return toHex(a) + toHex(b) + toHex(c);
} 

function hexToVal(h, start, end) { 
	return parseInt(h.substring(start, end), 16);
}

function evaluate_rgb() {
	var i_r = $("#in_R"), 
		i_g = $("#in_G"), 
		i_b = $("#in_B"),
		o_h = $("#out_hex");
		  
	o_h.val("#" + rgbToHex(i_r.val(), i_g.val(), i_b.val()));
	
	$("#rgbPreview").css("background-color", o_h.val()); 
	$("#rgbText").css("color", o_h.val());	
}

function evaluate_hex() {
	var form_h = document.getElementById("in_hex"),
		in_h = form_h.value;			
		
	
	$("#out_R").val(hexToVal(in_h, 0, 2));
	$("#out_G").val(hexToVal(in_h, 2, 4));
	$("#out_B").val(hexToVal(in_h, 4, 6));
	
	
	$("#hexPreview").css("background-color", "#" + in_h); 
	$("#hexText").css("color", "#" + in_h);	
}

$(function () { 
	$("#rgbConvert").click(evaluate_rgb);
		
	$("#clone").click(function () {
		$("#in_G, #in_B").attr("value", $("#in_R").val());
		evaluate_rgb();		
	});
	
	$("#hexConvert").click(evaluate_hex);
}); 