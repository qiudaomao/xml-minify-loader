/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author KingMario
*/
var cheerio = require('cheerio')
var CleanCSS = require('clean-css')
module.exports = function(source) {
  this.value = source;

  var pd = require('pretty-data').pd;
  var str = pd.xmlmin(source);
  var $ = cheerio.load(str, {xmlMode: true})
  let style = $("document head style").html()
  if (style) {
    // console.log(style)
        //format: "keep-breaks"
    let styleNew = new CleanCSS({
        format: 'beautify'
    }).minify(style).styles
    // console.log(styleNew)
    str = str.replace(/\n/g, '').replace(/<style>.*<\/style>/, `<style>${styleNew}</style>`)
  }

  return "module.exports = " + JSON.stringify(str)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
