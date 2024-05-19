// JavaScript Document

    browser_version= parseInt(navigator.appVersion);
	browser_type = navigator.appName;
	
	if (browser_type == "Microsoft Internet Explorer" && (browser_version >= 4)) {
	document.write("<link rel='stylesheet' href='../css/ie.css' type='text/css'>");
	}
	
	else if (browser_type == "Netscape" && (browser_version >= 4)) {
	document.write("<link rel='stylesheet' href='../css/style.css' type='text/css'>");
	}

