exports.defineTags = function(dictionary) {
    dictionary.defineTag('hook', {
        isNamespace: true,
        onTagged: function(doclet, tag) {
            doclet.addTag( 'kind', tag.title );
        }
    });
};
