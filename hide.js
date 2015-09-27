
function hideShowCols(tabId) {
    'use  strict';
    var tab, i, j, t, func = {}, cell, ri;

    t = (window.event.target) ? window.event.target : window.event.srcElement;
    if (t.tagName !== 'TH') {
        return;
    }
    tab = document.getElementById(tabId);
    ri = t.parentNode.rowIndex;
    
    function show(cell) {
        if (cell.hide) {
            cell.innerHTML = cell.innerHTML.slice(10, -3);
            cell.hide = !cell.hide;
        }
    }
    ;
    function hide(cell) {
        if (!cell.hide) {
            cell.innerHTML = '&nbsp;<!--' + cell.innerHTML + '-->';
            cell.hide = !cell.hide;
        }
    }
    ;
    if (t.hide) {
        func = show;
    } else {
        func = hide;
    }
    for (i = 0; i < tab.rows.length; i++) {
        for (j = 0; j < tab.rows[i].cells.length; j++) {
            cell = tab.rows[i].cells[j];
            if (cell.offsetLeft < t.offsetLeft || cell.offsetLeft > t.offsetLeft + t.clientWidth
                    || (cell.colSpan > 1 && ri > i && cell.colSpan > t.colSpan)) {
                continue;
            }
            func(cell);
        }
    }
}