/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author KingMario
*/
var csstree = require('css-tree')
module.exports = function(source) {
  this.value = source;

  var pd = require('pretty-data').pd;
  var str = pd.xmlmin(source);
  let m = str.replace(/\n/g, '').match(/<style>(.*)<\/style>/)
  if (m) {
    var style = m[1]
    var ast = csstree.parse(style)
    var styleNew = csstree.generate(ast)
    str = str.replace(/\n/g, '').replace(/<style>.*<\/style>/, styleNew)
  }

  return "module.exports = " + JSON.stringify(str)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
