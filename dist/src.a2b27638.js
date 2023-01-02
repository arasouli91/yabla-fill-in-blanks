// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
var CARDS = [{
  front: "\u5766\u627F<br>t\u01CEn ch\xE9ng",
  front_no_html: "\u5766\u627F   t\u01CEn ch\xE9ng",
  back: "to confess, to admit",
  spell: "t\u01CEn ch\xE9ng",
  pinyin: "t\u01CEn ch\xE9ng",
  hanzi: "\u5766\u627F",
  hanzi_trad: "\u5766\u627F",
  word: "\u5766\u627F",
  card_id: "90576",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/349221.mp3"
}, {
  front: "\u9752\u83DC<br>q\u012Bngc\xE0i",
  front_no_html: "\u9752\u83DC   q\u012Bngc\xE0i",
  back: "green vegetables, Chinese cabbage",
  spell: "q\u012Bngc\xE0i",
  pinyin: "q\u012Bngc\xE0i",
  hanzi: "\u9752\u83DC",
  hanzi_trad: "\u9752\u83DC",
  word: "\u9752\u83DC",
  card_id: "2650",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/46134.mp3"
}, {
  front: "\u8FB9\u754C <span class=\"trad_memo\">\u908A\u754C</span> <br>bi\u0101nji\xE8",
  front_no_html: "\u8FB9\u754C   bi\u0101nji\xE8",
  back: "boundary, border",
  spell: "bi\u0101nji\xE8",
  pinyin: "bi\u0101nji\xE8",
  hanzi: "\u8FB9\u754C",
  hanzi_trad: "\u908A\u754C",
  word: "\u8FB9\u754C",
  card_id: "18925",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/237794.mp3"
}, {
  front: "\u964D\u843D<br>ji\xE0nglu\xF2",
  front_no_html: "\u964D\u843D   ji\xE0nglu\xF2",
  back: "to descend, to land",
  spell: "ji\xE0nglu\xF2",
  pinyin: "ji\xE0nglu\xF2",
  hanzi: "\u964D\u843D",
  hanzi_trad: "\u964D\u843D",
  word: "\u964D\u843D",
  card_id: "9981",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/100021.mp3"
}, {
  front: "\u4EE4\u4EBA\u5403\u60CA <span class=\"trad_memo\">\u4EE4\u4EBA\u5403\u9A5A</span> <br>l\xECng r\xE9n ch\u012B j\u012Bng",
  front_no_html: "\u4EE4\u4EBA\u5403\u60CA   l\xECng r\xE9n ch\u012B j\u012Bng",
  back: "to shock, to amaze",
  spell: "l\xECng r\xE9n ch\u012B j\u012Bng",
  pinyin: "l\xECng r\xE9n ch\u012B j\u012Bng",
  hanzi: "\u4EE4\u4EBA\u5403\u60CA",
  hanzi_trad: "\u4EE4\u4EBA\u5403\u9A5A",
  word: "\u4EE4\u4EBA\u5403\u60CA",
  card_id: "91373",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/374138.mp3"
}, {
  front: "\u501F\u9152\u6D88\u6101<br>ji\xE8 ji\u01D4 xi\u0101o ch\xF3u",
  front_no_html: "\u501F\u9152\u6D88\u6101   ji\xE8 ji\u01D4 xi\u0101o ch\xF3u",
  back: "Take to drinking to forget one's sorrows",
  spell: "ji\xE8 ji\u01D4 xi\u0101o ch\xF3u",
  pinyin: "ji\xE8 ji\u01D4 xi\u0101o ch\xF3u",
  hanzi: "\u501F\u9152\u6D88\u6101",
  hanzi_trad: "\u501F\u9152\u6D88\u6101",
  word: "\u501F\u9152\u6D88\u6101",
  card_id: "88406",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/647477.mp3"
}, {
  front: "\u767B\u8BB0 <span class=\"trad_memo\">\u767B\u8A18</span> <br>d\u0113ngj\xEC",
  front_no_html: "\u767B\u8BB0   d\u0113ngj\xEC",
  back: "to register (one's name)",
  spell: "d\u0113ngj\xEC",
  pinyin: "d\u0113ngj\xEC",
  hanzi: "\u767B\u8BB0",
  hanzi_trad: "\u767B\u8A18",
  word: "\u767B\u8BB0",
  card_id: "11270",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/112939.mp3"
}, {
  front: "\u7231\u5C14\u5170 <span class=\"trad_memo\">\u611B\u723E\u862D</span> <br>\xC0i \u011Br l\xE1n",
  front_no_html: "\u7231\u5C14\u5170   \xC0i \u011Br l\xE1n",
  back: "Ireland",
  spell: "\xC0i \u011Br l\xE1n",
  pinyin: "\xC0i \u011Br l\xE1n",
  hanzi: "\u7231\u5C14\u5170",
  hanzi_trad: "\u611B\u723E\u862D",
  word: "\u7231\u5C14\u5170",
  card_id: "84872",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/361548.mp3"
}, {
  front: "\u817C\u8146 <span class=\"trad_memo\">\u9766\u8146</span> <br>mi\u01CEnti\u01CEn",
  front_no_html: "\u817C\u8146   mi\u01CEnti\u01CEn",
  back: "shy, bashful",
  spell: "mi\u01CEnti\u01CEn",
  pinyin: "mi\u01CEnti\u01CEn",
  hanzi: "\u817C\u8146",
  hanzi_trad: "\u9766\u8146",
  word: "\u817C\u8146",
  card_id: "3660",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/45710.mp3"
}, {
  front: "\u7B80\u4ECB <span class=\"trad_memo\">\u7C21\u4ECB</span> <br>ji\u01CEnji\xE8",
  front_no_html: "\u7B80\u4ECB   ji\u01CEnji\xE8",
  back: "summary, brief introduction",
  spell: "ji\u01CEnji\xE8",
  pinyin: "ji\u01CEnji\xE8",
  hanzi: "\u7B80\u4ECB",
  hanzi_trad: "\u7C21\u4ECB",
  word: "\u7B80\u4ECB",
  card_id: "16250",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/190764.mp3"
}, {
  front: "\u8EB2\u5F00 <span class=\"trad_memo\">\u8EB2\u958B</span> <br>du\u01D2k\u0101i",
  front_no_html: "\u8EB2\u5F00   du\u01D2k\u0101i",
  back: "to stay out of (hot water, trouble, awkward situation etc)",
  spell: "du\u01D2k\u0101i",
  pinyin: "du\u01D2k\u0101i",
  hanzi: "\u8EB2\u5F00",
  hanzi_trad: "\u8EB2\u958B",
  word: "\u8EB2\u5F00",
  card_id: "13462",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/127894.mp3"
}, {
  front: "\u5F53\u4E2D <span class=\"trad_memo\">\u7576\u4E2D</span> <br>d\u0101ngzh\u014Dng",
  front_no_html: "\u5F53\u4E2D   d\u0101ngzh\u014Dng",
  back: "among, in the middle",
  spell: "d\u0101ngzh\u014Dng",
  pinyin: "d\u0101ngzh\u014Dng",
  hanzi: "\u5F53\u4E2D",
  hanzi_trad: "\u7576\u4E2D",
  word: "\u5F53\u4E2D",
  card_id: "2265",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/46298.mp3"
}, {
  front: "\u9886\u57DF <span class=\"trad_memo\">\u9818\u57DF</span> <br>l\u01D0ngy\xF9",
  front_no_html: "\u9886\u57DF   l\u01D0ngy\xF9",
  back: "domain, sphere, field",
  spell: "l\u01D0ngy\xF9",
  pinyin: "l\u01D0ngy\xF9",
  hanzi: "\u9886\u57DF",
  hanzi_trad: "\u9818\u57DF",
  word: "\u9886\u57DF",
  card_id: "9434",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/98531.mp3"
}, {
  front: "\u4E71\u52A8 <span class=\"trad_memo\">\u4E82\u52D5</span> <br>lu\xE0nd\xF2ng",
  front_no_html: "\u4E71\u52A8   lu\xE0nd\xF2ng",
  back: "to fiddle with, to tamper with",
  spell: "lu\xE0nd\xF2ng",
  pinyin: "lu\xE0nd\xF2ng",
  hanzi: "\u4E71\u52A8",
  hanzi_trad: "\u4E82\u52D5",
  word: "\u4E71\u52A8",
  card_id: "538",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/42424.mp3"
}, {
  front: "\u7EA4\u7EF4 <span class=\"trad_memo\">\u7E96\u7DAD</span> <br>xi\u0101nw\xE9i",
  front_no_html: "\u7EA4\u7EF4   xi\u0101nw\xE9i",
  back: "fiber, CL:\u7A2E|\u79CD[zh\u01D2ng]",
  spell: "xi\u0101nw\xE9i",
  pinyin: "xi\u0101nw\xE9i",
  hanzi: "\u7EA4\u7EF4",
  hanzi_trad: "\u7E96\u7DAD",
  word: "\u7EA4\u7EF4",
  card_id: "7084",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/64532.mp3"
}, {
  front: "\u53E3\u7F69<br>k\u01D2uzh\xE0o",
  front_no_html: "\u53E3\u7F69   k\u01D2uzh\xE0o",
  back: "mask (surgical etc)",
  spell: "k\u01D2uzh\xE0o",
  pinyin: "k\u01D2uzh\xE0o",
  hanzi: "\u53E3\u7F69",
  hanzi_trad: "\u53E3\u7F69",
  word: "\u53E3\u7F69",
  card_id: "15437",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/153365.mp3"
}, {
  front: "\u79BB\u804C <span class=\"trad_memo\">\u96E2\u8077</span> <br>l\xEDzh\xED",
  front_no_html: "\u79BB\u804C   l\xEDzh\xED",
  back: "to retire, to leave office",
  spell: "l\xEDzh\xED",
  pinyin: "l\xEDzh\xED",
  hanzi: "\u79BB\u804C",
  hanzi_trad: "\u96E2\u8077",
  word: "\u79BB\u804C",
  card_id: "12303",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/117379.mp3"
}, {
  front: "\u4F18\u52BF <span class=\"trad_memo\">\u512A\u52E2</span> <br>y\u014Dush\xEC",
  front_no_html: "\u4F18\u52BF   y\u014Dush\xEC",
  back: "superiority, dominance",
  spell: "y\u014Dush\xEC",
  pinyin: "y\u014Dush\xEC",
  hanzi: "\u4F18\u52BF",
  hanzi_trad: "\u512A\u52E2",
  word: "\u4F18\u52BF",
  card_id: "3099",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/42572.mp3"
}, {
  front: "\u8282\u4FED <span class=\"trad_memo\">\u7BC0\u5109</span> <br>ji\xE9ji\u01CEn",
  front_no_html: "\u8282\u4FED   ji\xE9ji\u01CEn",
  back: "frugal, economical",
  spell: "ji\xE9ji\u01CEn",
  pinyin: "ji\xE9ji\u01CEn",
  hanzi: "\u8282\u4FED",
  hanzi_trad: "\u7BC0\u5109",
  word: "\u8282\u4FED",
  card_id: "17894",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/229515.mp3"
}, {
  front: "\u8DBE\u7532<br>zh\u01D0 ji\u01CE",
  front_no_html: "\u8DBE\u7532   zh\u01D0 ji\u01CE",
  back: "toenail",
  spell: "zh\u01D0 ji\u01CE",
  pinyin: "zh\u01D0 ji\u01CE",
  hanzi: "\u8DBE\u7532",
  hanzi_trad: "\u8DBE\u7532",
  word: "\u8DBE\u7532",
  card_id: "85305",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/399077.mp3"
}, {
  front: "\u9AD8\u7B49<br>g\u0101od\u011Bng",
  front_no_html: "\u9AD8\u7B49   g\u0101od\u011Bng",
  back: "higher, high level, advanced",
  spell: "g\u0101od\u011Bng",
  pinyin: "g\u0101od\u011Bng",
  hanzi: "\u9AD8\u7B49",
  hanzi_trad: "\u9AD8\u7B49",
  word: "\u9AD8\u7B49",
  card_id: "23020",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/259270.mp3"
}, {
  front: "\u4F20\u795E <span class=\"trad_memo\">\u50B3\u795E</span> <br>chu\xE1n sh\xE9n",
  front_no_html: "\u4F20\u795E   chu\xE1n sh\xE9n",
  back: "vivid, lifelike",
  spell: "chu\xE1n sh\xE9n",
  pinyin: "chu\xE1n sh\xE9n",
  hanzi: "\u4F20\u795E",
  hanzi_trad: "\u50B3\u795E",
  word: "\u4F20\u795E",
  card_id: "90577",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/240926.mp3"
}, {
  front: "\u8FF7\u7CCA<br>m\xED hu",
  front_no_html: "\u8FF7\u7CCA   m\xED hu",
  back: "muddle-headed, dazed",
  spell: "m\xED hu",
  pinyin: "m\xED hu",
  hanzi: "\u8FF7\u7CCA",
  hanzi_trad: "\u8FF7\u7CCA",
  word: "\u8FF7\u7CCA",
  card_id: "84995",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/242666.mp3"
}, {
  front: "\u597D\u81EA\u4E3A\u4E4B <span class=\"trad_memo\">\u597D\u81EA\u70BA\u4E4B</span> <br>h\u01CEoz\xECw\xE9izh\u012B",
  front_no_html: "\u597D\u81EA\u4E3A\u4E4B   h\u01CEoz\xECw\xE9izh\u012B",
  back: "to do one's best, to shape up",
  spell: "h\u01CEoz\xECw\xE9izh\u012B",
  pinyin: "h\u01CEoz\xECw\xE9izh\u012B",
  hanzi: "\u597D\u81EA\u4E3A\u4E4B",
  hanzi_trad: "\u597D\u81EA\u70BA\u4E4B",
  word: "\u597D\u81EA\u4E3A\u4E4B",
  card_id: "8847",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/97053.mp3"
}, {
  front: "\u6301\u4E45<br>ch\xEDji\u01D4",
  front_no_html: "\u6301\u4E45   ch\xEDji\u01D4",
  back: "lasting, enduring, persistent",
  spell: "ch\xEDji\u01D4",
  pinyin: "ch\xEDji\u01D4",
  hanzi: "\u6301\u4E45",
  hanzi_trad: "\u6301\u4E45",
  word: "\u6301\u4E45",
  card_id: "3333",
  front_audio_file: "//yabla.vo.llnwd.net/media.yabla.com/audio/46061.mp3"
}];
var startGame = function startGame() {
  console.log("START GAME");
  // hide init div, show game div
  var initDiv = document.querySelector(".fill-blanks-init");
  initDiv.classList.add("hidden");
  var gameDiv = document.querySelector(".fill-blanks-game");
  gameDiv.classList.remove("hidden");
  // receive text
  var textarea = document.querySelector(".fill-blanks-init-txt-input");
  var text = textarea.value;
  // process cards into hash
  var cards = {};
  CARDS.forEach(function (card) {
    cards[card.hanzi] = card;
  });
  var parsedText = [];
  var last = 0;
  // process text. elements are substrings of text or cards
  for (var i = 1; i < text.length - 2; ++i) {
    var substrLen2 = toUnicode(text.substring(i, i + 1));
    var substrLen3 = toUnicode(text.substring(i, i + 2));
    // if we find a valid word
    if (cards[substrLen3] !== undefined) {
      // we need to take everything before this as whole text
      parsedText.add(text.substring(last, i - 1));
      // save the card and move i past this
      parsedText.add(cards[substrLen3]);
      i += 2;
      last = i + 1;
    } else if (cards[substrLen2] !== undefined) {
      parsedText.add(text.substring(last, i - 1));
      parsedText.add(cards[substrLen2]);
      i += 1;
      last = i + 1;
    }
  }
  parsedText.add(text.substring(last, text.length - 1));
  /// HOW DO WE TAKE A CARD AND TURN IT INTO A FILL IN BLANK?
};

var startBtn = document.querySelector(".fill-blanks-start-btn");
startBtn.addEventListener("click", startGame);

/*
PROCESS TEXT
-process in groups of 2,3,4
--at index i, take substring i,i+1 etc...

HOW TO CONVERT HANZI FROM TEXT INTO URL ENCODED?
IT ISNT URL ENCODED, IT IS UNICODE

Cards is already processed
{
    "front": "\u5766\u627f<br>t\u01cen ch\u00e9ng",
    "front_no_html": "\u5766\u627f   t\u01cen ch\u00e9ng",
    "back": "to confess, to admit",
    "spell": "t\u01cen ch\u00e9ng",
    "pinyin": "t\u01cen ch\u00e9ng",
    "hanzi": "\u5766\u627f",
    "hanzi_trad": "\u5766\u627f",
    "word": "\u5766\u627f",
    "card_id": "90576",
    "front_audio_file": "\/\/yabla.vo.llnwd.net\/media.yabla.com\/audio\/349221.mp3"
},
Lets use hanzi trad and pinyin to show the text
-Ideally: on mouseover, any char will show simplified 
How do we extract the useful functionality 
Can we still get correct answers to count for correct resp in stats?
*/
function toUnicode(str) {
  return str.split("").map(function (value, index, array) {
    var temp = value.charCodeAt(0).toString(16).toUpperCase();
    if (temp.length > 2) {
      return "\\u" + temp;
    }
    return value;
  }).join("");
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43009" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map