function showpic(whichpic){
	var source =whichpic.getAttribute("href");
	var placeholder =document.getElementById("overwatchbg");
	placeholder.setAttribute("src",source);
	//var doc =whichpic.getaAttribute("title");
	//var descoription =document.getElementById("descoriptions");
	//descoription.childNodes[0].nodeValue=doc;
}