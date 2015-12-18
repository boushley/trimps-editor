(function() {
    var dataHolder = document.getElementById('save-data-interface');

    var editor = ace.edit('save-json-interface');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/json');

    var importButton = document.getElementById('parse-save-data');
    var exportButton = document.getElementById('export-save-json');

    importButton.addEventListener('click', function() {
        var result = LZString.decompressFromBase64(dataHolder.value);
        result = JSON.stringify(JSON.parse(result), null, 4);
        editor.setValue(result);
        dataHolder.value = '';
    });

    exportButton.addEventListener('click', function() {
        var result = LZString.compressToBase64(editor.getValue());
        dataHolder.value = result;
    });
})();