// ==UserScript==
// @name        G2L custom
// @namespace   tsukaguitar <http://www.rakuin.com>
// @version     1.0
// @description Livedoor Readerをちょっぴりカスタマイズ
// @include     http://reader.livedoor.com/reader/*
// @grant       GM_addStyle
// @copyright    2013+, tsukaguitar
// @license      http://www.opensource.org/licenses/mit-license.html  MIT License
// ==/UserScript==

(function(){
  // LDR Style
  GM_addStyle("a { color: #2c2cd9; }\
  #functionHeader { display: none; }\
  #subs_container { background: transparent;}\
  #control { border-bottom: 2px solid #d7e4f1 !important; }\
  #myfeed_tab { border-top: 2px solid #95b2e6; border-bottom: 2px solid #f5f5f5; }\
  #headlineMode, .buttons .icon, .channel_toolbar { border-bottom: 2px solid #95b2e6; }\
  #headlineMode { left: 100px; width: 152px; }\
  .channel, .channel_toolbar { background: #f5f5f5; }\
  .channel .title { margin-top: 0px !important; }\
  .channel .title a { color: #003492; }\
  .buttons li { margin-right: 1px; }\
  .item_info, .item_footer { display: none; }\
  .padding { margin:0; padding:2px; border:0; min-height:20px; }\
  .item { border-bottom: 1px solid #ddd; }\
  .item_title { font-size:120%; padding: 0; }\
  #ads_bottom, .ads_unohnet { background: #e6ecf1;}");

  // compact list
  document.getElementById("right_body").className = "compact";

  // already-read keybind
  window.addEventListener("load", function() {
    with(unsafeWindow){
      Keybind.add('X', function(){
        touch_all(State.last_feed.subscribe_id)
      })
    }
  },false);
  
})();
