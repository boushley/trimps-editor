save();
var gameState = JSON.parse(LZString.decompressFromBase64(localStorage.getItem('trimpSave1')));

Object.keys(gameState.resources).forEach(function (k) {
    var r = gameState.resources[k];
    if (r.max > 0) {
        r.owned = r.max;
    }

    var nonMaxed = ['gems', 'fragments', 'helium'];
    if (nonMaxed.indexOf(k) !== -1) {
        r.owned = r.owned * 2;
    }

});

localStorage.setItem('trimpSave1', LZString.compressToBase64(JSON.stringify(gameState)));
load();
