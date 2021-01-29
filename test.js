var minify = require('./index')

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
        .text {
          tv-position: header;
        }
        .ul {
          background-color: rgba(255, 255, 255, 0.4);
          tv-highlight-color: rgba(255, 255, 255, 0.9);
          width: 1700;
          height: 100;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.4);
          tv-highlight-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          width: 420;
          height: 220;
          padding: 4px;
        }
        .cardText {
          tv-text-style: none;
          font-size: 36;
          tv-text-max-lines: 3;
          tv-position: top;
        }
        .cardBottomKey {
          color: rgba(81, 81, 81, 1);
          margin-left: 8px;
          tv-text-style: body;
        }
        .decoration {
          margin-left: 4px;
          tv-text-style: body;
        }
    </style>
  </head>
  <stackTemplate>
  </stackTemplate>
</document>`

console.log(minify(xml))
