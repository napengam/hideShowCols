hide or show columns of a table
===============================

demo is located at http://hgsweb.de/hideShowCols

Here is a simple solution to hide or show columns of a table
with a click. 

There are no dependencies to any other libraries,
frameworks or CSS classes.  

Logic
=====

JavaScript as a call back for the onclick event of a table.
Usage: see source in index.html

Whenever a click inside a <TH> element happens , all cells 
below and above this <TH> will be hidden.

This is done by turning the innerHTML of every cell into
a comment, and using a zero-width space instead.

If you click again in a hidden TH cell, the content will be displayed
again by uncommenting the content. 
