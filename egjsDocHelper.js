var helper = require('jsdoc/util/templateHelper');

module.exports = {
	getDescriptionByLang : function(description) {
		var enDesc = description.replace(/<ko>(.|\n)*?<\/ko>/, "");
		var koMatch = description.match(/<ko>((.|\n)*?)<\/ko>/, "");
		var koDesc = koMatch && "<p>" + koMatch[1] + "</p>";

		return [enDesc, koDesc];
	},
	getSignatureReturns: function(d, ignores) {
		var returnTypes = [];

		if (d.returns) {
			d.returns.forEach(function(r) {
				if (r && r.type && r.type.names) {
					if (!returnTypes.length) {
						returnTypes = r.type.names;
					}
				}
			});
		}

		if (returnTypes && returnTypes.length) {
			returnTypes = returnTypes.map(function(r) {
				if (ignores.indexOf(r) > -1) {
					return helper.htmlsafe(r);
				} else {
					return helper.linkto(r, helper.htmlsafe(r));
				}
			});
		}

		return returnTypes;
	}
};
