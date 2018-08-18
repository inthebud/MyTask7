var sum = document.getElementById("inputid").value;
var keeler,civilian;
function setting(event){
	sum =document.getElementById("inputid").value;
	if (sum>3 && sum<19) {
		keeler = Math.ceil(sum*0.25);
		civilian = sum-keeler;
		document.getElementById("keelertext").innerHTML="杀手"+ keeler + "人";
		document.getElementById("civiliantext").innerHTML="平民"+ civilian + "人";

		var role = new Array(sum);
		for (var i =0 ; i < sum; i++) {
			role[i] = "平民";
		}

		var roleIndex = new Array(sum);
		for (var i = 0; i<sum; i++) {
			roleIndex[i]= i;
		}
		for (var i = roleIndex.length; i--;) {
			var random = Math.floor(Math.random()*(i+1));
			var temp = roleIndex[i];
			roleIndex[i] = roleIndex[random];
			roleIndex[random] = temp;
		}
		for (var i = 0; i < keeler; i++) {
			role[roleIndex[i]] = "杀手";
		}
		console.log(role);
	}else{
		document.getElementById("keelertext").innerHTML="杀手"+ "&emsp;" + "人";
		document.getElementById("civiliantext").innerHTML="平民"+ "&emsp;" + "人";
		document.getElementById('hiddenalert').style.display='block';
	}
}
function jump(){
	window.location.href="task02-flop1.html"
}