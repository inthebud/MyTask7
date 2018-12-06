var objroles = JSON.parse(sessionStorage.roles);


$(document).ready(function(){
	for (var i = 0; i < objroles.length; i++) {
		var div = "<div class=\"headPortrait\">\n"+
					"<div class=\"a\">\n"+
					"<div class=\"identity\">"+objroles[i]+"</div>\n"+
					"<div class=\"number\">"+ (i+1) + "号</div>\n"+
				"</div>\n"+
				"<div class=\"hover\">\n"+
					"<div class=\"hover1\"></div>\n"+
					"<div class=\"hover2\"></div>\n"+
					"<div class=\"hover3\"></div>\n"+
					"<div class=\"hover4\"></div>\n"+
				"</div>\n"+
			"</div>";
			$(".main").append(div);
	}
	
});