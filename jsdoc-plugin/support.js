exports.defineTags = function(dictionary) {
    dictionary.defineTag("support", {
        onTagged: function(doclet, tag) {
	var tagVal = eval('tag.value');
	tagVal = eval("(" + tagVal + ")");
	var name;
    	for(var p in tagVal) {
    		switch (p) {
			case "ie" : name = "Desktop - Internet Explorer"; break;
    			case "ch" : name = "Desktop - Chrome"; break;
    			case "ff" : name = "Desktop - Firefox"; break;
    			case "sf" : name = "Desktop - Safari"; break;
    			case "ios" : name = "iOS"; break;
    			case "an" : name = "Andorid"; break;
    			case "n-ios" : name = "NAVER - iOS"; break;
    			case "n-an" : name = "NAVER - Android"; break;
    		}
    		tagVal[name] = tagVal[p];
    		delete tagVal[p];
    	}
            doclet.support = tagVal;
        }
    });
};