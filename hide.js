function hideShowCols(tabId) {
    'use  strict';
    var tab, i, j, th, func = {}, cell, ri;

    th = (window.event.target) ? window.event.target : window.event.srcElement;
    if (th.tagName !== 'TH') {
        return;
    }
    tab = document.getElementById(tabId);
    ri = th.parentNode.rowIndex;

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
    if (th.hide) {
        func = show;
    } else {
        func = hide;
    }
    for (i = 0; i < tab.rows.length; i++) {
        for (j = 0; j < tab.rows[i].cells.length; j++) {
            cell = tab.rows[i].cells[j];
            if ((th.offsetLeft <= cell.offsetLeft && cell.offsetLeft <= th.offsetLeft + th.clientWidth)
                    && (th.colSpan >= cell.colSpan)) {
                func(cell);
            } else if (cell.offsetLeft > th.offsetLeft + th.clientWidth) {
                break;
            }
        }
    }
}