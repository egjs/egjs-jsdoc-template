module.exports = {
	getDescriptionByLang : function(description) {
		var enDesc = description.replace(/<ko>(.|\n)*?<\/ko>/, "");
		var koMatch = description.match(/<ko>((.|\n)*?)<\/ko>/, "");
		var koDesc = koMatch && "<p>" + koMatch[1] + "</p>";

		return [enDesc, koDesc];
	}
}