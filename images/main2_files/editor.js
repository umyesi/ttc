function selectframe() {
	alert ("Select editable frame! PLEASE");
}


function FormatText(command, option, nframe) {

	if (nframe) {
	var jcode = "frames.bframe"+nframe+".document.execCommand(command, false, option);frames.bframe"+nframe+".focus();";
	eval (jcode);
	}
	else {
	selectframe ();	
	}
}

function Paste(command, nframe) {

	var jcode = "frames.bframe"+nframe+".document.execCommand(command, false);frames.bframe"+nframe+".focus();";
	eval (jcode);
}

function Preview(nframe, pstyle){
	
	var jcode = "content=frames.bframe"+nframe+".document.body.innerHTML;";
	eval (jcode);
	var board=window.open("","Preview"); 
	board.document.open(); 
	board.document.write("<html>");
	board.document.write("<link href=\""+pstyle+"\" rel=\"stylesheet\" type=\"text/css\">");
	board.document.write("<head><title>Preview</title></head>"); 
	board.document.write(content); 
	board.document.write("</body>"); 
	board.document.write("</html>"); 
	board.document.close();

	return board;
}

function Save(nframe, pstyle){
	board = Preview(nframe, pstyle);
  	board.document.execCommand('SaveAs');
	board.window.close();
}

function PrintPage(nframe, pstyle){
	
	board = Preview(nframe, pstyle);
  	board.document.execCommand('Print');
	board.window.close();
}

function AddImage(atributes, nframe) {

	var jcode = "frames.bframe"+nframe+".focus();";
	eval (jcode);
	
	var imagesize = document.all.img_width.value;
	var hspace = document.all.hspace.value;
	var vspace = document.all.vspace.value;
	var align = document.all.img_align.value;
	var border = document.all.border.value;
	
	if (border=='') border = 0;

	var AnCode = "<img src=\""+atributes+imagesize+"\" align=\""+align+"\" border=\""+border+"\" hspace=\""+hspace+"\" vspace=\""+vspace+"\" width=\""+imagesize+"\">";
	var jcode = "range=window.frames.bframe"+nframe+".document.selection.createRange()";
	eval (jcode);
	range.pasteHTML(AnCode);
	range.select();
	range.execCommand();
	Hide('imgblock');
}

function AddTbl(nframe) {

	var jcode = "frames.bframe"+nframe+".focus();";
	eval (jcode);
	TD = document.all.Stolbov.value;
	CTD = '';
	for (i=0; i<TD; i++) {
		CTD = CTD+'<td> </td>';
	}
	TR = document.all.Strok.value;
	CTR = '';
	for (i=0;i<TR;i++) {
		CTR = CTR+'<tr>'+CTD+'</tr>';
	}
	AnCode = '<table width='+document.all.Shirina.value+' cellpadding='+document.all.Cellpadding.value+' cellspacing='+document.all.Cellspacing.value+' border='+document.all.Border.value+' bgcolor='+document.all.Color.value+'>'+CTR+'</table>';
	var jcode = "range=window.frames.bframe"+nframe+".document.selection.createRange()";
	eval (jcode);
	range.pasteHTML(AnCode);
	range.select();
	range.execCommand();
	Hide('tblblock');
		
}

function doHead(hType, nframe){
	if (nframe != '') {
	if(hType != ''){
		var jcode = "frames.bframe"+nframe+".document.execCommand('formatblock', false, hType);frames.bframe"+nframe+".focus();";
		eval (jcode);
    }
	}
	else {
		selectframe ();
	}
}

function AddClass(className, nframe) {
	var jcode="seltext=window.frames.bframe"+nframe+".document.selection.createRange().htmlText";
	eval (jcode);

	AnCode = seltext.replace(/<span+\s?([^>]*)>/ig, "");
	AnCode = AnCode.replace(/<\/span>/ig, "");

	
	if (className == 'none') {
	var jcode2 = "range=window.frames.bframe"+nframe+".document.selection.createRange()";
	eval (jcode2);
	range.pasteHTML(AnCode);
	range.select();
	range.execCommand();
	}
	else {
	
	AnCode = '<span class="'+className+'"> '+AnCode+' </span>';
	var jcode2 = "range=window.frames.bframe"+nframe+".document.selection.createRange()";
	eval (jcode2);
	range.pasteHTML(AnCode);
	range.select();
	range.execCommand();
	}

}

function AddHTML(AnCode, nframe) {

	//var jcode="range=window.frames.bframe'+nframe+'.document.selection.createRange()";
	var jcode = "range=window.frames.bframe"+nframe+".document.selection.createRange()";
	eval (jcode);
	//alert (range);
	range.pasteHTML(AnCode);
	range.select();
	range.execCommand();
}

function cleanHTMLContent(nframe, pstyle) {

	var jcode = "tmp=window.frames.bframe"+nframe+".document.body.innerHTML";	
	eval (jcode);
	
	//var tmp = frames.message.document.body.innerHTML;
		
	tmp = tmp.replace(/<\?xml:.*?>/ig, "");

	tmp = tmp.replace(/<H[3-9]+\s?([^>]*)>/ig, "<P $1>");
	tmp = tmp.replace(/<\/H[3-9]+>/ig, "</P>");

	tmp = tmp.replace(/<TT([^>]*)>/ig, "<P $1>");
	tmp = tmp.replace(/<\/TT>/ig, "</P>");
	
	tmp = tmp.replace(/<span+\s?([^>]*)>/ig, "");
	tmp = tmp.replace(/<\/span>/ig, "");

	tmp = tmp.replace(/<font+\s?([^>]*)>/ig, "");
	tmp = tmp.replace(/<\/font>/ig, "");

	tmp = tmp.replace(/(<[^>]+)lang=[a-z]*([^>]*>)/ig, "$1$2");
	tmp = tmp.replace(/("|\s)MARGIN:.*?(;|")/ig, "$1$2");
	tmp = tmp.replace(/("|\s)TEXT-INDENT:.*?(;|")/ig, "$1$2");
	tmp = tmp.replace(/("|\s)FONT-WEIGHT:.*?(;|")/ig, "$1$2");
	tmp = tmp.replace(/("|\s)tab-stops:.*?(;|")/ig, "$1$2");

	tmp = tmp.replace(/("|\s)mso-.*?:.*?(;|")/ig, "$1$2");
	tmp = tmp.replace(/\sclass=Mso.*?\s/ig, " ");
	tmp = tmp.replace(/<\/?o:p>/ig, "");
	tmp = tmp.replace(/(style="[^"]*)TEXT-ALIGN:\s?([a-z]*)([^"]*")/ig, "align=$2 $1$3");
	//tmp = tmp.replace(/(style="[^"]*)BACKGROUND:\s?([a-z0-9#]*)([^"]*")/ig, "bgcolor=$2 $1$3");
	//tmp = tmp.replace(/<SPAN style="FONT-FAMILY: Symbol">\s*<FONT\s+size=[0-9]*>\с▐рорм<\/FONT>/ig, "<li>");
	//tmp = tmp.replace(/<span \w>/ig, "");
	tmp = tmp.replace(/<span[^>]*><\/span>/ig, '');
	tmp = tmp.replace(/(<font[^>]*)>\s*<font/ig, "$1");
	tmp = tmp.replace(/<dir>/ig, "<BLOCKQUOTE>");
	tmp = tmp.replace(/<\/dir>/ig, "</BLOCKQUOTE>");

	tmp = tmp.replace(/\sstyle="[^"]*"/ig, " ");
	tmp = tmp.replace(/\sclass=[A-Z0-9_]+/ig, " ");
	tmp = tmp.replace(/\sclass="[^"]*"/ig, " ");
	//tmp = tmp.replace(/(<td[^>]*)(width|height)=["'a-z0-9_%]*([^>]*>)/ig, '$1$3');
	//tmp = tmp.replace(/(<table[^>]*)(width|height)=["'a-z0-9_%]*([^>]*>)/ig, '$1$3');
	tmp = tmp.replace(/<font[^>]*><\/font>/ig, '');
	tmp = tmp.replace(/<p[^>]*><\/p>/ig, '');
	
	var jcode2 = "window.frames.bframe"+nframe+".document.close()";	
	eval (jcode2);
	
	//frames.message.document.close();
	
	//frames.message.document.write("<html><body>"+tmp+"</body></html>");
	
	var adcss = "<style type=\"text/css\">BODY {SCROLLBAR-FACE-COLOR: #f5f4f2;SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;SCROLLBAR-SHADOW-COLOR: #ffffff;SCROLLBAR-3DLIGHT-COLOR: #e0e0e0;SCROLLBAR-ARROW-COLOR: #bfbfbf;SCROLLBAR-TRACK-COLOR: #ffffff;SCROLLBAR-DARKSHADOW-COLOR: #e0e0e0;}.anchor_img {background-image: url(adm_includes/editor/img/anchor_im.gif);height: 15px;width: 13px;}</style>";
	
	var pcon = "<html><link href=\""+pstyle+"\" rel=\"stylesheet\" type=\"text/css\">"+adcss+"<body>"+tmp+"</body></html>";
	var jcode3 = "window.frames.bframe"+nframe+".document.write(pcon)";	
	eval (jcode3);

}

function Show(blockid){
	var imgnblock="";
	imgnblock = document.getElementById(blockid).style;
	imgnblock.visibility = "visible";
}

function Hide(blockid){
		var imgnblock="";
		imgnblock = document.getElementById(blockid).style;
		imgnblock.visibility = "hidden";
}

function NormalMode (nframe) {
	var toeval = "CHTML = REPLIER.content"+nframe+".value";
	eval (toeval);
	var toeval2 = "REPLIER.content"+nframe+".style.display = 'none';";
	eval (toeval2);
	var toeval3 = "frames.bframe"+nframe+".document.body.innerHTML = CHTML;";
	eval (toeval3);
	var toeval4 = "document.all.block"+nframe+".style.display = 'block';";
	eval (toeval4);
}

function HtmlMode (nframe) {
	var toeval = "CHTML = frames.bframe"+nframe+".document.body.innerHTML";
	eval (toeval);
	var toeval2 = "REPLIER.content"+nframe+".value = CHTML;";
	eval (toeval2);
	var toeval3 = "document.all.block"+nframe+".style.display = 'none';";
	eval (toeval3);
	var toeval4 = "REPLIER.content"+nframe+".style.display = 'block';";
	eval (toeval4);
	return ("html");
}