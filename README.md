hide or show columns of a table
===============================

demo is located at http://hgsweb.de/hideShowCols


Logic
=====

JavaScript as a call back for the onclick event of a table.
Whenever a click inside a <TH> element happens , all cells 
below and including the <TH> will be hidden.

This is done by turning the innerHTML of ever cell below into
a comment using.

If you click again in a hidden cell, the content will be displayed
again by uncommetning the content. 
