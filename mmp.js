(function () {
  "use strict";
  function a() {
    var b = Ba(["<span class=", ">", "</span>"]);
    return (
      (a = function () {
        return b;
      }),
      b
    );
  }
  function b() {
    var a = Ba(["<span class=", ">", "</span>"]);
    return (
      (b = function () {
        return a;
      }),
      a
    );
  }
  function c() {
    var a = Ba([
      "\n          <div>\n            <div class='marquee'>\n              ",
      "\n            </div>\n          </div>",
    ]);
    return (
      (c = function () {
        return a;
      }),
      a
    );
  }
  function d() {
    var a = Ba([
      "\n      <div class='entity__info__media'\n        ?short=",
      "\n        ?short-scroll=",
      "\n        ?scroll=",
      "\n        style='animation-duration: ",
      "s;'>\n        ",
      "\n        ",
      "\n      </div>",
    ]);
    return (
      (d = function () {
        return a;
      }),
      a
    );
  }
  function e() {
    var a = Ba([
      "\n      <div class='entity__info__name'>\n        ",
      " ",
      "\n      </div>",
    ]);
    return (
      (e = function () {
        return a;
      }),
      a
    );
  }
  function f() {
    var a = Ba([
      "\n      <div class='entity__icon' ?color=",
      ">\n        <ha-icon .icon=",
      " ></ha-icon>\n      </div>",
    ]);
    return (
      (f = function () {
        return a;
      }),
      a
    );
  }
  function g() {
    var a = Ba([
      "\n        <div class='entity__artwork'\n          style='background-image: ",
      ";'\n          ?border=",
      "\n          state=",
      ">\n        </div>",
    ]);
    return (
      (g = function () {
        return a;
      }),
      a
    );
  }
  function h() {
    var a = Ba(["<div class='cover' style='background-image: ", ";'></div>"]);
    return (
      (h = function () {
        return a;
      }),
      a
    );
  }
  function i() {
    var a = Ba([
      "\n            <mmp-progress\n              .player=",
      "\n              .showTime=",
      ">\n            </mmp-progress>\n          ",
    ]);
    return (
      (i = function () {
        return a;
      }),
      a
    );
  }
  function j() {
    var a = Ba([
      "\n              <mmp-tts\n                .config=",
      "\n                .hass=",
      "\n                .player=",
      ">\n              </mmp-tts>\n            ",
    ]);
    return (
      (j = function () {
        return a;
      }),
      a
    );
  }
  function k() {
    var a = Ba([
      "\n              <mmp-media-controls\n                .player=",
      "\n                .config=",
      "\n                .break=",
      ">\n              </mmp-media-controls>\n            ",
    ]);
    return (
      (k = function () {
        return a;
      }),
      a
    );
  }
  function l() {
    var a = Ba([
      "\n      <ha-card\n        class=",
      "\n        style=",
      "\n        @click=",
      "\n        artwork=",
      "\n        content=",
      ">\n        <div class='mmp__bg'>\n          ",
      "\n        </div>\n        <div class='mmp-player'>\n          <div class='mmp-player__core flex' ?inactive=",
      ">\n            ",
      "\n            <div class='entity__info'>\n              ",
      "\n              ",
      "\n            </div>\n            <mmp-powerstrip\n              @toggleGroupList=",
      "\n              .hass=",
      "\n              .player=",
      "\n              .config=",
      "\n              .groupVisible=",
      "\n              .idle=",
      "\n              ?flow=",
      ">\n            </mmp-powerstrip>\n          </div>\n          <div class='mmp-player__adds'>\n            ",
      "\n            <mmp-shortcuts\n              .player=",
      "\n              .shortcuts=",
      ">\n            </mmp-shortcuts>\n            ",
      "\n            <mmp-group-list\n              .visible=",
      "\n              .entities=",
      "\n              .player=",
      ">\n            </mmp-group-list>\n          </div>\n        </div>\n        <div class='mmp__container'>\n          ",
      "\n        </div>\n      </ha-card>\n    ",
    ]);
    return (
      (l = function () {
        return a;
      }),
      a
    );
  }
  function m() {
    var a = Ba([
      "\n        :host {\n          display: flex;\n          line-height: var(--mmp-unit);\n          max-height: var(--mmp-unit);\n        }\n        :host([flow]) mmp-media-controls {\n          max-width: unset;\n        }\n        mmp-media-controls {\n          max-width: calc(var(--mmp-unit) * 5);\n          line-height: initial;\n          justify-content: flex-end;\n        }\n        .group-button {\n          --mdc-icon-size: calc(var(--mmp-unit) * 0.5);\n        }\n        ha-icon-button {\n          min-width: var(--mmp-unit);\n        }\n      ",
    ]);
    return (
      (m = function () {
        return a;
      }),
      a
    );
  }
  function n() {
    var a = Ba([
      "\n        <span class='label ellipsis'>\n          ",
      "\n        </span>\n      ",
    ]);
    return (
      (n = function () {
        return a;
      }),
      a
    );
  }
  function o() {
    var a = Ba([
      "\n        <ha-icon-button\n          .icon=",
      "\n          @click=",
      ">\n        </ha-icon-button>",
    ]);
    return (
      (o = function () {
        return a;
      }),
      a
    );
  }
  function p() {
    var a = Ba([
      "\n        <ha-icon-button class='power-button'\n          .icon=",
      "\n          @click=",
      "\n          ?color=",
      ">\n        </ha-icon-button>",
    ]);
    return (
      (p = function () {
        return a;
      }),
      a
    );
  }
  function q() {
    var a = Ba([
      "\n        <ha-icon-button class='group-button'\n          .icon=",
      "\n          ?inactive=",
      "\n          ?color=",
      "\n          @click=",
      ">\n        </ha-icon-button>",
    ]);
    return (
      (q = function () {
        return a;
      }),
      a
    );
  }
  function r() {
    var a = Ba([
      "\n        <mmp-sound-menu\n          .player=",
      "\n          .icon=",
      "\n          ?full=",
      ">\n        </mmp-sound-menu>",
    ]);
    return (
      (r = function () {
        return a;
      }),
      a
    );
  }
  function s() {
    var a = Ba([
      "\n        <mmp-source-menu\n          .player=",
      "\n          .icon=",
      "\n          ?full=",
      ">\n        </mmp-source-menu>",
    ]);
    return (
      (s = function () {
        return a;
      }),
      a
    );
  }
  function t() {
    var a = Ba([
      "\n        <mmp-media-controls\n          .player=",
      "\n          .config=",
      ">\n        </mmp-media-controls>\n      ",
    ]);
    return (
      (t = function () {
        return a;
      }),
      a
    );
  }
  function u() {
    var a = Ba([
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n    ",
    ]);
    return (
      (u = function () {
        return a;
      }),
      a
    );
  }
  function v() {
    var a = Ba([
      "\n        <span class='label ellipsis'>\n          ",
      "\n        </span>\n      ",
    ]);
    return (
      (v = function () {
        return a;
      }),
      a
    );
  }
  function w() {
    var a = Ba([
      "\n        :host {\n          display: flex;\n          width: 100%;\n          justify-content: space-between;\n        }\n        .flex {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n        }\n        ha-slider {\n          max-width: none;\n          min-width: 100px;\n          width: 100%;\n        }\n        ha-icon-button {\n          min-width: var(--mmp-unit);\n        }\n        .mmp-media-controls__volume {\n          flex: 100;\n          max-height: var(--mmp-unit);\n        }\n        .mmp-media-controls__volume.--buttons {\n          justify-content: left;\n        }\n        .mmp-media-controls__media {\n          margin-right: 0;\n          margin-left: auto;\n          justify-content: inherit;\n        }\n        .mmp-media-controls__media[flow] {\n          max-width: none;\n          justify-content: space-between;\n        }\n        .mmp-media-controls__shuffle {\n          flex: 3;\n          flex-shrink: 200;\n          justify-content: center;\n        }\n        .mmp-media-controls__shuffle ha-icon-button {\n          height: 36px;\n          width: 36px;\n          min-width: 36px;\n          margin: 2px;\n        }\n      ",
    ]);
    return (
      (w = function () {
        return a;
      }),
      a
    );
  }
  function x() {
    var a = Ba([""]);
    return (
      (x = function () {
        return a;
      }),
      a
    );
  }
  function y() {
    var a = Ba([
      "\n        <ha-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </ha-icon-button>\n      ",
    ]);
    return (
      (y = function () {
        return a;
      }),
      a
    );
  }
  function z() {
    var a = Ba([""]);
    return (
      (z = function () {
        return a;
      }),
      a
    );
  }
  function A() {
    var a = Ba([
      "\n        <ha-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </ha-icon-button>\n      ",
    ]);
    return (
      (A = function () {
        return a;
      }),
      a
    );
  }
  function B() {
    var a = Ba(["\n      ", "\n      ", "\n    "]);
    return (
      (B = function () {
        return a;
      }),
      a
    );
  }
  function C() {
    var a = Ba([
      "\n          <ha-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (C = function () {
        return a;
      }),
      a
    );
  }
  function D() {
    var a = Ba([
      "\n          <ha-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (D = function () {
        return a;
      }),
      a
    );
  }
  function E() {
    var a = Ba([
      "\n          <ha-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (E = function () {
        return a;
      }),
      a
    );
  }
  function F() {
    var a = Ba([
      "\n          <ha-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (F = function () {
        return a;
      }),
      a
    );
  }
  function G() {
    var a = Ba([
      "\n          <ha-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (G = function () {
        return a;
      }),
      a
    );
  }
  function H() {
    var a = Ba([
      "\n      <div class='mmp-media-controls__volume --buttons flex'>\n        ",
      "\n        <ha-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </ha-icon-button>\n        <ha-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </ha-icon-button>\n      </div>",
    ]);
    return (
      (H = function () {
        return a;
      }),
      a
    );
  }
  function I() {
    var a = Ba([
      "\n      <div class='mmp-media-controls__volume --slider flex'>\n        ",
      "\n        <ha-slider\n          @change=",
      "\n          @click=",
      "\n          ?disabled=",
      "\n          min=",
      " max=",
      "\n          value=",
      "\n          dir=",
      "\n          ignore-bar-touch pin>\n        </ha-slider>\n      </div>",
    ]);
    return (
      (I = function () {
        return a;
      }),
      a
    );
  }
  function J() {
    var a = Ba([""]);
    return (
      (J = function () {
        return a;
      }),
      a
    );
  }
  function K() {
    var a = Ba([
      "\n            <ha-icon-button\n              @click=",
      "\n              .icon=",
      ">\n            </ha-icon-button>",
    ]);
    return (
      (K = function () {
        return a;
      }),
      a
    );
  }
  function L() {
    var a = Ba([
      "\n            <ha-icon-button\n              @click=",
      "\n              .icon=",
      ">\n            </ha-icon-button>",
    ]);
    return (
      (L = function () {
        return a;
      }),
      a
    );
  }
  function M() {
    var a = Ba([
      "\n        <div class='flex mmp-media-controls__media' ?flow=",
      ">\n          ",
      "\n          ",
      "\n          ",
      "\n        </div>\n      ",
    ]);
    return (
      (M = function () {
        return a;
      }),
      a
    );
  }
  function N() {
    var a = Ba([""]);
    return (
      (N = function () {
        return a;
      }),
      a
    );
  }
  function O() {
    var a = Ba([
      "\n        <div class='flex mmp-media-controls__shuffle'>\n          <ha-icon-button\n            class='shuffle-button'\n            @click=",
      "\n            .icon=",
      "\n            ?color=",
      ">\n          </ha-icon-button>\n        </div>\n      ",
    ]);
    return (
      (O = function () {
        return a;
      }),
      a
    );
  }
  function P() {
    var a = Ba([""]);
    return (
      (P = function () {
        return a;
      }),
      a
    );
  }
  function Q() {
    var a = Ba(["\n      ", "\n      ", "\n      ", "\n    "]);
    return (
      (Q = function () {
        return a;
      }),
      a
    );
  }
  function R() {
    var a = Ba([
      "\n      :host {\n        max-width: 120px;\n        min-width: var(--mmp-unit);\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    ",
    ]);
    return (
      (R = function () {
        return a;
      }),
      a
    );
  }
  function S() {
    var a = Ba([
      "\n      <mmp-dropdown\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      "\n        .icon=",
      "\n      ></mmp-dropdown>\n    ",
    ]);
    return (
      (S = function () {
        return a;
      }),
      a
    );
  }
  function T() {
    var a = Ba([
      "\n      :host {\n        max-width: 120px;\n        min-width: var(--mmp-unit);\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    ",
    ]);
    return (
      (T = function () {
        return a;
      }),
      a
    );
  }
  function U() {
    var a = Ba([
      "\n      <mmp-dropdown\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      "\n        .icon=",
      "\n      ></mmp-dropdown>\n    ",
    ]);
    return (
      (U = function () {
        return a;
      }),
      a
    );
  }
  function V() {
    var a = Ba([
      "\n      .mmp-progress {\n        cursor: pointer;\n        left: 0; right: 0; bottom: 0;\n        position: absolute;\n        pointer-events: auto;\n        min-height: calc(var(--mmp-progress-height) + 10px);\n      }\n      .mmp-progress__duration {\n        left: calc(var(--ha-card-border-radius, 4px) / 2);\n        right: calc(var(--ha-card-border-radius, 4px) / 2);\n        bottom: calc(var(--mmp-progress-height) + 6px);\n        position: absolute;\n        display: flex;\n        justify-content: space-between;\n        font-size: .8em;\n        padding: 0 6px;\n        z-index: 2\n      }\n      paper-progress {\n        height: var(--mmp-progress-height);\n        --paper-progress-height: var(--mmp-progress-height);\n        bottom: 0;\n        position: absolute;\n        width: 100%;\n        transition: height 0;\n        z-index: 1;\n        --paper-progress-active-color: var(--mmp-accent-color);\n        --paper-progress-container-color: rgba(100,100,100,.15);\n        --paper-progress-transition-duration: 1s;\n        --paper-progress-transition-timing-function: linear;\n        --paper-progress-transition-delay: 0s;\n      }\n      paper-progress.seeking {\n        transition: height .15s ease-out;\n        height: calc(var(--mmp-progress-height) + 4px);\n        --paper-progress-height: calc(var(--mmp-progress-height) + 4px);\n      }\n      .mmp-progress[paused] paper-progress {\n        --paper-progress-active-color: var(--disabled-text-color, rgba(150,150,150,.5));\n      }\n    ",
    ]);
    return (
      (V = function () {
        return a;
      }),
      a
    );
  }
  function W() {
    var a = Ba([
      "\n          <div class='mmp-progress__duration'>\n            <span>",
      "</span>\n            <span>",
      "</span>\n          </div>\n        ",
    ]);
    return (
      (W = function () {
        return a;
      }),
      a
    );
  }
  function X() {
    var a = Ba([
      "\n      <div class='mmp-progress'\n        @touchstart=",
      "\n        @touchend=",
      "\n        @mousedown=",
      "\n        @mouseup=",
      "\n        @mouseleave=",
      "\n        @click=",
      "\n        ?paused=",
      ">\n        ",
      "\n        <paper-progress class=",
      "\n          value=",
      "\n          max=",
      ">\n        </paper-progress>\n      </div>\n    ",
    ]);
    return (
      (X = function () {
        return a;
      }),
      a
    );
  }
  function Y() {
    var a = Ba([
      "\n      :host {\n        align-items: center;\n        margin-left: 8px;\n        display: flex;\n      }\n      .mmp-tts__input {\n        cursor: text;\n        flex: 1;\n        margin-right: 8px;\n        --paper-input-container-input: {\n          font-size: 1em;\n        };\n      }\n      ha-card[rtl] .mmp-tts__input {\n        margin-right: auto;\n        margin-left: 8px;\n      }\n      .mmp-tts__button {\n        margin: 0;\n        height: 30px;\n        padding: 0 .4em;\n      }\n      paper-input {\n        opacity: .75;\n        --paper-input-container-color: var(--mmp-text-color);\n        --paper-input-container-input-color: var(--mmp-text-color);\n        --paper-input-container-focus-color: var(--mmp-text-color);\n        --paper-input-container: {\n          padding: 0;\n        };\n      }\n      paper-input[focused] {\n        opacity: 1;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-input {\n        --paper-input-container-color: #FFFFFF;\n        --paper-input-container-input-color: #FFFFFF;\n        --paper-input-container-focus-color: #FFFFFF;\n      }\n    ",
    ]);
    return (
      (Y = function () {
        return a;
      }),
      a
    );
  }
  function Z() {
    var a = Ba([
      "\n      <paper-input id=\"tts-input\" class='mmp-tts__input'\n        no-label-float\n        placeholder=",
      "...\n        @click=",
      ">\n      </paper-input>\n      <mmp-button class='mmp-tts__button' @click=",
      ">\n        <span>SEND</span>\n      </mmp-button>\n    ",
    ]);
    return (
      (Z = function () {
        return a;
      }),
      a
    );
  }
  function $() {
    var a = Ba([
      "\n        .mmp-shortcuts__buttons {\n          box-sizing: border-box;\n          display: flex;\n          flex-wrap: wrap;\n          margin-top: 8px;\n        }\n        .mmp-shortcuts__button {\n          min-width: calc(50% - 8px);\n          flex: 1;\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center center;\n        }\n        .mmp-shortcuts__button > div {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n          padding: .2em 0;\n        }\n        .mmp-shortcuts__button > div[align='left'] {\n          justify-content: flex-start;\n        }\n        .mmp-shortcuts__button > div[align='right'] {\n          justify-content: flex-end;\n        }\n        .mmp-shortcuts__button[columns='1'] {\n          min-width: calc(100% - 8px);\n        }\n        .mmp-shortcuts__button[columns='3'] {\n          min-width: calc(33.33% - 8px);\n        }\n        .mmp-shortcuts__button[columns='4'] {\n          min-width: calc(25% - 8px);\n        }\n        .mmp-shortcuts__button[columns='5'] {\n          min-width: calc(20% - 8px);\n        }\n        .mmp-shortcuts__button[columns='6'] {\n          min-width: calc(16.66% - 8px);\n        }\n        .mmp-shortcuts__button > div > span {\n          line-height: calc(var(--mmp-unit) * .6);\n          text-transform: initial;\n        }\n        .mmp-shortcuts__button > div > ha-icon {\n          width: calc(var(--mmp-unit) * .6);\n          height: calc(var(--mmp-unit) * .6);\n        }\n        .mmp-shortcuts__button > div > *:nth-child(2) {\n          margin-left: 4px;\n        }\n        .mmp-shortcuts__button > div > img {\n          height: 24px;\n        }\n      ",
    ]);
    return (
      ($ = function () {
        return a;
      }),
      a
    );
  }
  function _() {
    var a = Ba(["\n      ", "\n      ", "\n    "]);
    return (
      (_ = function () {
        return a;
      }),
      a
    );
  }
  function aa() {
    var a = Ba(['<span class="ellipsis">', "</span>"]);
    return (
      (aa = function () {
        return a;
      }),
      a
    );
  }
  function ba() {
    var a = Ba(["<img src=", ">"]);
    return (
      (ba = function () {
        return a;
      }),
      a
    );
  }
  function ca() {
    var a = Ba(["<ha-icon .icon=", "></ha-icon>"]);
    return (
      (ca = function () {
        return a;
      }),
      a
    );
  }
  function da() {
    var a = Ba([
      '\n          <mmp-button\n            style="',
      '"\n            raised\n            columns=',
      "\n            ?color=",
      "\n            class='mmp-shortcuts__button'\n            @click=",
      ">\n            <div align=",
      ">\n              ",
      "\n              ",
      "\n              ",
      "\n            </div>\n          </mmp-button>",
    ]);
    return (
      (da = function () {
        return a;
      }),
      a
    );
  }
  function ea() {
    var a = Ba([
      "\n      <div class='mmp-shortcuts__buttons'>\n        ",
      "\n      </div>\n    ",
    ]);
    return (
      (ea = function () {
        return a;
      }),
      a
    );
  }
  function fa() {
    var a = Ba([
      "\n      <mmp-dropdown class='mmp-shortcuts__dropdown'\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      ">\n      </mmp-dropdown>\n    ",
    ]);
    return (
      (fa = function () {
        return a;
      }),
      a
    );
  }
  function ga() {
    var a = Ba([""]);
    return (
      (ga = function () {
        return a;
      }),
      a
    );
  }
  function ha() {
    var a = Ba([
      "\n        :host {\n          display: block;\n        }\n        :host([faded]) {\n          opacity: .75;\n        }\n        :host[small] .mmp-dropdown__label {\n          max-width: 60px;\n          display: block;\n          position: relative;\n          width: auto;\n          text-transform: initial;\n        }\n        :host[full] .mmp-dropdown__label {\n          max-width: none;\n        }\n        .mmp-dropdown {\n          padding: 0;\n          display: block;\n        }\n        .mmp-dropdown__button {\n          display: flex;\n          font-size: 1em;\n          justify-content: space-between;\n          align-items: center;\n          height: calc(var(--mmp-unit) - 4px);\n          margin: 2px 0;\n        }\n        .mmp-dropdown__button.icon {\n          height: var(--mmp-unit);\n          margin: 0;\n        }\n        .mmp-dropdown__button > div {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n          align-items: center;\n          height: calc(var(--mmp-unit) - 4px);\n          max-width: 100%;\n        }\n        .mmp-dropdown__label {\n          text-align: left;\n          text-transform: none;\n        }\n        .mmp-dropdown__icon {\n          height: calc(var(--mmp-unit) * .6);\n          width: calc(var(--mmp-unit) * .6);\n          min-width: calc(var(--mmp-unit) * .6);\n        }\n        paper-item > *:nth-child(2) {\n          margin-left: 4px;\n        }\n        paper-menu-button[focused] mmp-button ha-icon {\n          color: var(--mmp-accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button[focused] ha-icon-button {\n          color: var(--mmp-accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button[focused] ha-icon-button[focused] {\n          color: var(--mmp-text-color);\n          transform: rotate(0deg);\n        }\n      ",
    ]);
    return (
      (ha = function () {
        return a;
      }),
      a
    );
  }
  function ia() {
    var a = Ba(["<span class='mmp-dropdown__item__label'>", "</span>"]);
    return (
      (ia = function () {
        return a;
      }),
      a
    );
  }
  function ja() {
    var a = Ba(["<ha-icon .icon=", "></ha-icon>"]);
    return (
      (ja = function () {
        return a;
      }),
      a
    );
  }
  function ka() {
    var a = Ba([
      "\n            <paper-item value=",
      ">\n              ",
      "\n              ",
      "\n            </paper-item>",
    ]);
    return (
      (ka = function () {
        return a;
      }),
      a
    );
  }
  function la() {
    var a = Ba([
      "\n          <mmp-button class='mmp-dropdown__button' slot='dropdown-trigger'>\n            <div>\n              <span class='mmp-dropdown__label ellipsis'>\n                ",
      "\n              </span>\n              <ha-icon class='mmp-dropdown__icon' .icon=",
      "></ha-icon>\n            </div>\n          </mmp-button>\n        ",
    ]);
    return (
      (la = function () {
        return a;
      }),
      a
    );
  }
  function ma() {
    var a = Ba([
      "\n          <ha-icon-button\n            class='mmp-dropdown__button icon'\n            slot='dropdown-trigger'\n            .icon=",
      ">\n          </ha-icon-button>\n        ",
    ]);
    return (
      (ma = function () {
        return a;
      }),
      a
    );
  }
  function na() {
    var a = Ba([
      "\n      <paper-menu-button\n        class='mmp-dropdown'\n        noink no-animations\n        .horizontalAlign=",
      "\n        .verticalAlign=",
      "\n        .verticalOffset=",
      "\n        .dynamicAlign=",
      "\n        @click=",
      ">\n        ",
      '\n        <paper-listbox slot="dropdown-content" .selected=',
      " @iron-select=",
      ">\n          ",
      "\n        </paper-listbox>\n      </paper-menu-button>\n    ",
    ]);
    return (
      (na = function () {
        return a;
      }),
      a
    );
  }
  function oa() {
    var a = Ba([
      "\n      .mmp-group-list {\n        display: flex;\n        flex-direction: column;\n        margin-left: 8px;\n        margin-bottom: 8px;\n      }\n      .mmp-group-list__title {\n        font-weight: 500;\n        letter-spacing: .1em;\n        margin: 8px 0 4px;\n        text-transform: uppercase;\n      }\n      .mmp-group-list__buttons {\n        display: flex;\n      }\n      mmp-button {\n        margin: 8px 8px 0 0;\n        min-width: 0;\n        text-transform: uppercase;\n        text-align: center;\n        width: 50%;\n        --mdc-theme-primary: transparent;\n      }\n    ",
    ]);
    return (
      (oa = function () {
        return a;
      }),
      a
    );
  }
  function pa() {
    var a = Ba([
      "\n      <mmp-group-item\n        @change=",
      "\n        .item=",
      "\n        .checked=",
      "\n        .disabled=",
      "\n        .master=",
      "\n      />",
    ]);
    return (
      (pa = function () {
        return a;
      }),
      a
    );
  }
  function qa() {
    var a = Ba([""]);
    return (
      (qa = function () {
        return a;
      }),
      a
    );
  }
  function ra() {
    var a = Ba([
      "\n            <mmp-button raised\n              @click=",
      ">\n              <span>Ungroup</span>\n            </mmp-button>\n          ",
    ]);
    return (
      (ra = function () {
        return a;
      }),
      a
    );
  }
  function sa() {
    var a = Ba([
      "\n      <div class='mmp-group-list'>\n        <span class='mmp-group-list__title'>Group speakers</span>\n        ",
      "\n        <div class='mmp-group-list__buttons'>\n          <mmp-button raised ?disabled=",
      "\n            @click=",
      ">\n            <span>Leave</span>\n          </mmp-button>\n          ",
      "\n          <mmp-button raised ?disabled=",
      "\n            @click=",
      ">\n            <span>Group all</span>\n          </mmp-button>\n        </div>\n      </div>\n    ",
    ]);
    return (
      (sa = function () {
        return a;
      }),
      a
    );
  }
  function ta() {
    var a = Ba([""]);
    return (
      (ta = function () {
        return a;
      }),
      a
    );
  }
  function ua() {
    var a = Ba([
      "\n      :host {\n        position: relative;\n        box-sizing: border-box;\n        margin: 4px;\n        min-width: 0;\n        overflow: hidden;\n        transition: background .5s;\n        border-radius: 4px;\n        font-weight: 500;\n      }\n      :host([raised]) {\n        background: var(--mmp-button-color);\n        min-height: calc(var(--mmp-unit) * .8);\n        box-shadow:\n          0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n          0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n          0px 1px 5px 0px rgba(0,0,0,.12);\n      }\n      :host([color]) {\n        background: var(--mmp-active-color);\n        transition: background .25s;\n        opacity: 1;\n      }\n      :host([faded]) {\n        opacity: .75;\n      }\n      :host([disabled]) {\n        opacity: .25;\n        pointer-events: none;\n      }\n      .container {\n        height: 100%;\n        width: 100%;\n      }\n      .slot-container {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 8px;\n        width: auto;\n      }\n      paper-ripple {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n      }\n    ",
    ]);
    return (
      (ua = function () {
        return a;
      }),
      a
    );
  }
  function va() {
    var a = Ba([
      '\n      <div class="container">\n        <div class="slot-container">\n          <slot></slot>\n        </div>\n        <paper-ripple></paper-ripple>\n      </div>\n    ',
    ]);
    return (
      (va = function () {
        return a;
      }),
      a
    );
  }
  function wa() {
    var a = Ba([
      "\n      paper-checkbox {\n        padding: 8px 0;\n      }\n      paper-checkbox > span {\n        font-weight: 600;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox[disabled] {\n        --paper-checkbox-checkmark-color: rgba(0,0,0,.5);\n      }\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox {\n        --paper-checkbox-unchecked-color: #FFFFFF;\n        --paper-checkbox-label-color: #FFFFFF;\n      }\n    ",
    ]);
    return (
      (wa = function () {
        return a;
      }),
      a
    );
  }
  function xa() {
    var a = Ba(["<span>(master)</span>"]);
    return (
      (xa = function () {
        return a;
      }),
      a
    );
  }
  function ya() {
    var a = Ba([
      "\n      <paper-checkbox\n        ?checked=",
      "\n        ?disabled=",
      "\n        @change='",
      "'\n        @click='",
      "'>\n        ",
      "\n        ",
      "\n      </paper-checkbox>\n    ",
    ]);
    return (
      (ya = function () {
        return a;
      }),
      a
    );
  }
  function za() {
    var a = Ba([
      "\n  .ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .label {\n    margin: 0 8px;\n  }\n  ha-icon {\n    width: calc(var(--mmp-unit) * .6);\n    height: calc(var(--mmp-unit) * .6);\n  }\n  ha-icon-button {\n    width: var(--mmp-unit);\n    height: var(--mmp-unit);\n    color: var(--mmp-text-color, var(--primary-text-color));\n    transition: color .25s;\n  }\n  ha-icon-button[color] {\n    color: var(--mmp-accent-color, var(--accent-color)) !important;\n    opacity: 1 !important;\n  }\n  ha-icon-button[inactive] {\n    opacity: .5;\n  }\n",
    ]);
    return (
      (za = function () {
        return a;
      }),
      a
    );
  }
  function Aa() {
    var a = Ba([
      "\n  :host {\n    overflow: visible !important;\n    display: block;\n    --mmp-scale: var(--mini-media-player-scale, 1);\n    --mmp-unit: calc(var(--mmp-scale) * 40px);\n    --mmp-name-font-weight: var(--mini-media-player-name-font-weight, 400);\n    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));\n    --mmp-base-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));\n    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0,0,0,0.5));\n    --mmp-overlay-color-stop: var(--mini-media-player-overlay-color-stop, 25%);\n    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);\n    --mmp-overlay-accent-color: var(--mini-media-player-overlay-accent-color, --mmp-accent-color);\n    --mmp-text-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));\n    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);\n    --mmp-text-color-inverted: var(--disabled-text-color);\n    --mmp-active-color: var(--mmp-accent-color);\n    --mmp-button-color: var(--mini-media-player-button-color, rgba(255,255,255,0.25));\n    --mmp-icon-color:\n      var(--mini-media-player-icon-color,\n        var(--mini-media-player-base-color,\n          var(--paper-item-icon-color, #44739e)));\n    --mmp-icon-active-color: var(--paper-item-icon-active-color, --mmp-active-color);\n    --mmp-info-opacity: 1;\n    --mmp-bg-opacity: var(--mini-media-player-background-opacity, 1);\n    --mmp-artwork-opacity: var(--mini-media-player-artwork-opacity, 1);\n    --mmp-progress-height: var(--mini-media-player-progress-height, 6px);\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card.--bg {\n    --mmp-info-opacity: .75;\n  }\n  ha-card.--has-artwork[artwork*='cover'] {\n    --mmp-accent-color: var(--mini-media-player-overlay-accent-color, var(--mini-media-player-accent-color, var(--accent-color, #f39c12)));\n    --mmp-text-color: var(--mmp-overlay-base-color);\n    --mmp-text-color-inverted: #000;\n    --mmp-active-color: rgba(255,255,255,.5);\n    --mmp-icon-color: var(--mmp-text-color);\n    --mmp-icon-active-color: var(--mmp-text-color);\n    --mmp-info-opacity: .75;\n    --paper-slider-container-color: var(--mini-media-player-overlay-color, rgba(255,255,255,.75));\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card {\n    cursor: default;\n    display: flex;\n    background: transparent;\n    overflow: visible;\n    padding: 0;\n    position: relative;\n    color: inherit;\n    font-size: calc(var(--mmp-unit) * 0.35);\n    --mdc-icon-button-size: calc(var(--mmp-unit));\n    --mdc-icon-size: calc(var(--mmp-unit) * 0.6);\n  }\n  ha-card.--group {\n    box-shadow: none;\n    --mmp-progress-height: var(--mini-media-player-progress-height, 4px);\n  }\n  ha-card.--more-info {\n    cursor: pointer;\n  }\n  .mmp__bg, .mmp-player, .mmp__container {\n    border-radius: var(--ha-card-border-radius, 0);\n  }\n  .mmp__container {\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    pointer-events: none;\n  }\n  ha-card:before {\n    content: '';\n    padding-top: 0px;\n    transition: padding-top .5s cubic-bezier(.21,.61,.35,1);\n    will-change: padding-top;\n  }\n  ha-card.--initial .entity__artwork,\n  ha-card.--initial .entity__icon {\n    animation-duration: .001s;\n  }\n  ha-card.--initial:before,\n  ha-card.--initial .mmp-player {\n    transition: none;\n  }\n  header {\n    display: none;\n  }\n  ha-card[artwork='full-cover'].--has-artwork:before {\n    padding-top: 56%;\n  }\n  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,\n  ha-card[artwork='full-cover-fit'].--has-artwork:before {\n    padding-top: 100%;\n  }\n  .mmp__bg {\n    background: var(--ha-card-background, var(--paper-card-background-color, white));\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    overflow: hidden;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    opacity: var(--mmp-bg-opacity);\n  }\n  ha-card[artwork*='cover'].--has-artwork .mmp__bg {\n    opacity: var(--mmp-artwork-opacity);\n    background: transparent;\n  }\n  ha-card.--group .mmp__bg {\n    background: transparent;\n  }\n  .cover,\n  .cover:before {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    transition: opacity .75s cubic-bezier(.21,.61,.35,1);\n    will-change: opacity;\n  }\n  .cover {\n    animation: fade-in .5s cubic-bezier(.21,.61,.35,1);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    border-radius: var(--ha-card-border-radius, 0);\n    overflow: hidden;\n  }\n  .cover:before {\n    background: var(--mmp-overlay-color);\n    content: '';\n  }\n  ha-card[artwork*='full-cover'].--has-artwork .mmp-player {\n    background: linear-gradient(to top, var(--mmp-overlay-color) var(--mmp-overlay-color-stop), transparent 100%);\n    border-bottom-left-radius: var(--ha-card-border-radius, 0);\n    border-bottom-right-radius: var(--ha-card-border-radius, 0);\n  }\n  ha-card.--has-artwork .cover,\n  ha-card.--has-artwork[artwork='cover'] .cover:before,\n  ha-card.--bg .cover {\n    opacity: .999;\n  }\n  ha-card[artwork='default'] .cover {\n    display: none;\n  }\n  ha-card.--bg .cover {\n    display: block;\n  }\n  ha-card[artwork='full-cover-fit'].--has-artwork .cover {\n    background-color: black;\n    background-size: contain;\n  }\n  .mmp-player {\n    align-self: flex-end;\n    box-sizing: border-box;\n    position: relative;\n    padding: 16px;\n    transition: padding .25s ease-out;\n    width: 100%;\n    will-change: padding;\n  }\n  ha-card.--group .mmp-player {\n    padding: 2px 0;\n  }\n  .flex {\n    display: flex;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    flex-direction: row;\n  }\n  .mmp-player__core {\n    position: relative;\n  }\n  .entity__info {\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    margin-left: 8px;\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n  }\n  ha-card.--rtl .entity__info {\n    margin-left: auto;\n    margin-right: calc(var(--mmp-unit) / 5);\n  }\n  ha-card[content='movie'] .attr__media_season,\n  ha-card[content='movie'] .attr__media_episode {\n    display: none;\n  }\n  .entity__icon {\n    color: var(--mmp-icon-color);\n  }\n  .entity__icon[color] {\n    color: var(--mmp-icon-active-color);\n  }\n  .entity__artwork, .entity__icon {\n    animation: fade-in .25s ease-out;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 100%;\n    height: var(--mmp-unit);\n    width: var(--mmp-unit);\n    min-width: var(--mmp-unit);\n    line-height: var(--mmp-unit);\n    margin-right: calc(var(--mmp-unit) / 5);\n    position: relative;\n    text-align: center;\n    will-change: border-color;\n    transition: border-color .25s ease-out;\n  }\n  ha-card.--rtl .entity__artwork,\n  ha-card.--rtl .entity__icon {\n    margin-right: auto;\n  }\n  .entity__artwork[border] {\n    border: 2px solid var(--primary-text-color);\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n  }\n  .entity__artwork[border][state='playing'] {\n    border-color: var(--mmp-accent-color);\n  }\n  .entity__info__name,\n  .entity__info__media[short] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .entity__info__name {\n    line-height: calc(var(--mmp-unit) / 2);\n    color: var(--mmp-text-color);\n    font-weight: var(--mmp-name-font-weight);\n  }\n  .entity__info__media {\n    color: var(--secondary-text-color);\n    max-height: 6em;\n    word-break: break-word;\n    opacity: var(--mmp-info-opacity);\n    transition: color .5s;\n  }\n  .entity__info__media[short] {\n    max-height: calc(var(--mmp-unit) / 2);\n    overflow: hidden;\n  }\n  .attr__app_name {\n    display: none;\n  }\n  .attr__app_name:first-child,\n  .attr__app_name:first-of-type {\n    display: inline;\n  }\n  .mmp-player__core[inactive] .entity__info__media {\n    color: var(--mmp-text-color);\n    max-width: 200px;\n    opacity: .5;\n  }\n  .entity__info__media[short-scroll] {\n    max-height: calc(var(--mmp-unit) / 2);\n    white-space: nowrap;\n  }\n  .entity__info__media[scroll] > span {\n    visibility: hidden;\n  }\n  .entity__info__media[scroll] > div {\n    animation: move linear infinite;\n  }\n  .entity__info__media[scroll] .marquee {\n    animation: slide linear infinite;\n  }\n  .entity__info__media[scroll] .marquee,\n  .entity__info__media[scroll] > div {\n    animation-duration: inherit;\n    visibility: visible;\n  }\n  .entity__info__media[scroll] {\n    animation-duration: 10s;\n    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n  }\n  .marquee {\n    visibility: hidden;\n    position: absolute;\n    white-space: nowrap;\n  }\n  ha-card[artwork*='cover'].--has-artwork .entity__info__media,\n  ha-card.--bg .entity__info__media {\n    color: var(--mmp-media-cover-info-color);\n  }\n  .entity__info__media span:before {\n    content: ' - ';\n  }\n  .entity__info__media span:first-of-type:before {\n    content: '';\n  }\n  .entity__info__media span:empty {\n    display: none;\n  }\n  .mmp-player__adds {\n    margin-left: calc(var(--mmp-unit) * 1.2);\n    position: relative;\n  }\n  ha-card.--rtl .mmp-player__adds {\n    margin-left: auto;\n    margin-right: calc(var(--mmp-unit) * 1.2);\n  }\n  .mmp-player__adds > *:nth-child(2) {\n    margin-top: 0px;\n  }\n  mmp-powerstrip {\n    flex: 1;\n    justify-content: flex-end;\n    margin-right: 0;\n    margin-left: auto;\n    width: auto;\n    max-width: 100%;\n  }\n  mmp-media-controls {\n    flex-wrap: wrap;\n  }\n  ha-card.--flow mmp-powerstrip {\n    justify-content: space-between;\n    margin-left: auto;\n  }\n  ha-card.--flow.--rtl mmp-powerstrip {\n    margin-right: auto;\n  }\n  ha-card.--flow .entity__info {\n    display: none;\n  }\n  ha-card.--responsive .mmp-player__adds {\n    margin-left: 0;\n  }\n  ha-card.--responsive.--rtl .mmp-player__adds {\n    margin-right: 0;\n  }\n  ha-card.--responsive .mmp-player__adds > mmp-media-controls {\n    padding: 0;\n  }\n  ha-card.--progress .mmp-player {\n    padding-bottom: calc(16px + calc(var(--mini-media-player-progress-height, 6px) - 6px));\n  }\n  ha-card.--progress.--group .mmp-player {\n    padding-bottom: calc(10px + calc(var(--mini-media-player-progress-height, 6px) - 6px));\n  }\n  ha-card.--runtime .mmp-player {\n    padding-bottom: calc(16px + 16px + var(--mini-media-player-progress-height, 0px));\n  }\n  ha-card.--runtime.--group .mmp-player {\n    padding-bottom: calc(16px + 12px + var(--mini-media-player-progress-height, 0px));\n  }\n  ha-card.--inactive .mmp-player {\n    padding: 16px;\n  }\n  ha-card.--inactive.--group .mmp-player {\n    padding: 2px 0;\n  }\n  .mmp-player div:empty {\n    display: none;\n  }\n  @keyframes slide {\n    100% { transform: translateX(-100%); }\n  }\n  @keyframes move {\n    from { transform: translateX(100%); }\n    to { transform: translateX(0); }\n  }\n  @keyframes fade-in {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n",
    ]);
    return (
      (Aa = function () {
        return a;
      }),
      a
    );
  }
  function Ba(a, b) {
    return (
      b || (b = a.slice(0)),
      Object.freeze(
        Object.defineProperties(a, { raw: { value: Object.freeze(b) } })
      )
    );
  }
  function Ca(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      b &&
        (d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        })),
        c.push.apply(c, d);
    }
    return c;
  }
  function Da(a) {
    for (var b, c = 1; c < arguments.length; c++)
      (b = null == arguments[c] ? {} : arguments[c]),
        c % 2
          ? Ca(Object(b), !0).forEach(function (c) {
              Ea(a, c, b[c]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
          : Ca(Object(b)).forEach(function (c) {
              Object.defineProperty(
                a,
                c,
                Object.getOwnPropertyDescriptor(b, c)
              );
            });
    return a;
  }
  function Ea(a, b, c) {
    return (
      b in a
        ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (a[b] = c),
      a
    );
  }
  function Fa(a, b, c, d, e, f, g) {
    try {
      var h = a[f](g),
        i = h.value;
    } catch (a) {
      return void c(a);
    }
    h.done ? b(i) : Promise.resolve(i).then(d, e);
  }
  function Ga(a) {
    return function () {
      var b = this,
        c = arguments;
      return new Promise(function (d, e) {
        function f(a) {
          Fa(h, d, e, f, g, "next", a);
        }
        function g(a) {
          Fa(h, d, e, f, g, "throw", a);
        }
        var h = a.apply(b, c);
        f(void 0);
      });
    };
  }
  (function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
      ? b()
      : "function" == typeof define && define.amd
      ? define(b)
      : b();
  })(this, function () {
    var Qa = Math.max,
      Ra = Math.min;
    function Ba(a, b) {
      for (
        var {
            element: { content: d },
            parts: c,
          } = a,
          e = document.createTreeWalker(d, 133, null, !1),
          f = db(c),
          g = c[f],
          h = -1,
          i = 0,
          j = [],
          k = null;
        e.nextNode();

      ) {
        h++;
        var l = e.currentNode;
        for (
          l.previousSibling === k && (k = null),
            b.has(l) && (j.push(l), null === k && (k = l)),
            null !== k && i++;
          g !== void 0 && g.index === h;

        )
          (g.index = null === k ? g.index - i : -1), (f = db(c, f)), (g = c[f]);
      }
      j.forEach((a) => a.parentNode.removeChild(a));
    }
    function Ca(a, b) {
      var c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
        {
          element: { content: e },
          parts: d,
        } = a;
      if (null === c || void 0 === c) return void e.appendChild(b);
      for (
        var f = document.createTreeWalker(e, 133, null, !1),
          g = db(d),
          h = 0,
          i = -1;
        f.nextNode();

      ) {
        i++;
        var j = f.currentNode;
        for (
          j === c && ((h = cb(b)), c.parentNode.insertBefore(b, c));
          -1 !== g && d[g].index === i;

        ) {
          if (0 < h) {
            for (; -1 !== g; ) (d[g].index += h), (g = db(d, g));
            return;
          }
          g = db(d, g);
        }
      }
    }
    function Ea(a) {
      var b = xb.get(a.type);
      void 0 === b &&
        ((b = { stringsArray: new WeakMap(), keyString: new Map() }),
        xb.set(a.type, b));
      var c = b.stringsArray.get(a.strings);
      if (void 0 !== c) return c;
      var d = a.strings.join(Ua);
      return (
        (c = b.keyString.get(d)),
        void 0 === c &&
          ((c = new Ya(a, a.getTemplateElement())), b.keyString.set(d, c)),
        b.stringsArray.set(a.strings, c),
        c
      );
    }
    function Fa(a, b) {
      function c() {
        f && ((f = !1), a()), g && e();
      }
      function d() {
        hc(c);
      }
      function e() {
        var a = Date.now();
        if (f) {
          if (a - h < 2) return;
          g = !0;
        } else (f = !0), (g = !1), setTimeout(d, b);
        h = a;
      }
      var f = !1,
        g = !1,
        h = 0;
      return e;
    }
    function Ha(a) {
      return parseFloat(a) || 0;
    }
    function Ia(a) {
      for (var b = [], c = 1; c < arguments.length; c++)
        b[c - 1] = arguments[c];
      return b.reduce(function (b, c) {
        var d = a["border-" + c + "-width"];
        return b + Ha(d);
      }, 0);
    }
    function Ja(a) {
      for (
        var b = ["top", "right", "bottom", "left"], c = {}, d = 0, e = b;
        d < e.length;
        d++
      ) {
        var f = e[d],
          g = a["padding-" + f];
        c[f] = Ha(g);
      }
      return c;
    }
    function Ka(a) {
      var b = a.getBBox();
      return Pa(0, 0, b.width, b.height);
    }
    function La(a) {
      var b = Math.abs,
        c = Math.round,
        d = a.clientWidth,
        e = a.clientHeight;
      if (!d && !e) return nc;
      var f = mc(a).getComputedStyle(a),
        g = Ja(f),
        h = g.left + g.right,
        i = g.top + g.bottom,
        j = Ha(f.width),
        k = Ha(f.height);
      if (
        ("border-box" === f.boxSizing &&
          (c(j + h) !== d && (j -= Ia(f, "left", "right") + h),
          c(k + i) !== e && (k -= Ia(f, "top", "bottom") + i)),
        !Ma(a))
      ) {
        var l = c(j + h) - d,
          m = c(k + i) - e;
        1 !== b(l) && (j -= l), 1 !== b(m) && (k -= m);
      }
      return Pa(g.left, g.top, j, k);
    }
    function Ma(a) {
      return a === mc(a).document.documentElement;
    }
    function Na(a) {
      return fc ? (oc(a) ? Ka(a) : La(a)) : nc;
    }
    function Oa(a) {
      var b = a.x,
        c = a.y,
        d = a.width,
        e = a.height,
        f = "undefined" == typeof DOMRectReadOnly ? Object : DOMRectReadOnly,
        g = Object.create(f.prototype);
      return (
        lc(g, {
          x: b,
          y: c,
          width: d,
          height: e,
          top: c,
          right: b + d,
          bottom: e + c,
          left: b,
        }),
        g
      );
    }
    function Pa(a, b, c, d) {
      return { x: a, y: b, width: c, height: d };
    }
    var Sa =
        "undefined" != typeof window &&
        null != window.customElements &&
        window.customElements.polyfillWrapFlushCallback !== void 0,
      Ta = function (a, b) {
        for (
          var c =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          b !== c;

        ) {
          var d = b.nextSibling;
          a.removeChild(b), (b = d);
        }
      },
      Ua = "{{lit-".concat((Math.random() + "").slice(2), "}}"),
      Va = "<!--".concat(Ua, "-->"),
      Wa = new RegExp("".concat(Ua, "|").concat(Va)),
      Xa = "$lit$";
    class Ya {
      constructor(a, b) {
        (this.parts = []), (this.element = b);
        for (
          var c,
            d = [],
            e = [],
            f = document.createTreeWalker(b.content, 133, null, !1),
            g = 0,
            h = -1,
            j = 0,
            {
              strings: k,
              values: { length: l },
            } = a;
          j < l;

        ) {
          if (((c = f.nextNode()), null === c)) {
            f.currentNode = e.pop();
            continue;
          }
          if ((h++, 1 === c.nodeType)) {
            if (c.hasAttributes()) {
              for (
                var m = c.attributes, { length: o } = m, p = 0, q = 0;
                q < o;
                q++
              )
                Za(m[q].name, Xa) && p++;
              for (; 0 < p--; ) {
                var r = k[j],
                  t = bb.exec(r)[2],
                  u = t.toLowerCase() + Xa,
                  v = c.getAttribute(u);
                c.removeAttribute(u);
                var C = v.split(Wa);
                this.parts.push({
                  type: "attribute",
                  index: h,
                  name: t,
                  strings: C,
                }),
                  (j += C.length - 1);
              }
            }
            "TEMPLATE" === c.tagName &&
              (e.push(c), (f.currentNode = c.content));
          } else if (3 === c.nodeType) {
            var D = c.data;
            if (0 <= D.indexOf(Ua)) {
              for (
                var w = c.parentNode, x = D.split(Wa), y = x.length - 1, z = 0;
                z < y;
                z++
              ) {
                var A = void 0,
                  B = x[z];
                if ("" === B) A = ab();
                else {
                  var E = bb.exec(B);
                  null !== E &&
                    Za(E[2], Xa) &&
                    (B =
                      B.slice(0, E.index) +
                      E[1] +
                      E[2].slice(0, -Xa.length) +
                      E[3]),
                    (A = document.createTextNode(B));
                }
                w.insertBefore(A, c),
                  this.parts.push({ type: "node", index: ++h });
              }
              "" === x[y]
                ? (w.insertBefore(ab(), c), d.push(c))
                : (c.data = x[y]),
                (j += y);
            }
          } else if (8 === c.nodeType)
            if (c.data === Ua) {
              var F = c.parentNode;
              (null === c.previousSibling || h === g) &&
                (h++, F.insertBefore(ab(), c)),
                (g = h),
                this.parts.push({ type: "node", index: h }),
                null === c.nextSibling ? (c.data = "") : (d.push(c), h--),
                j++;
            } else
              for (var G = -1; -1 !== (G = c.data.indexOf(Ua, G + 1)); )
                this.parts.push({ type: "node", index: -1 }), j++;
        }
        for (var H of d) H.parentNode.removeChild(H);
      }
    }
    var Za = (a, b) => {
        var c = a.length - b.length;
        return 0 <= c && a.slice(c) === b;
      },
      $a = (a) => -1 !== a.index,
      ab = () => document.createComment(""),
      bb = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,
      cb = (a) => {
        for (
          var b = 11 === a.nodeType ? 0 : 1,
            c = document.createTreeWalker(a, 133, null, !1);
          c.nextNode();

        )
          b++;
        return b;
      },
      db = function (a) {
        for (
          var b,
            c =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : -1,
            d = c + 1;
          d < a.length;
          d++
        )
          if (((b = a[d]), $a(b))) return d;
        return -1;
      },
      eb = new WeakMap(),
      fb = (a) =>
        function () {
          var b = a(...arguments);
          return eb.set(b, !0), b;
        },
      gb = (a) => "function" == typeof a && eb.has(a),
      hb = {},
      ib = {};
    class jb {
      constructor(a, b, c) {
        (this.__parts = []),
          (this.template = a),
          (this.processor = b),
          (this.options = c);
      }
      update(a) {
        var b = 0;
        for (var c of this.__parts) void 0 !== c && c.setValue(a[b]), b++;
        for (var d of this.__parts) void 0 !== d && d.commit();
      }
      _clone() {
        for (
          var a,
            b = Sa
              ? this.template.element.content.cloneNode(!0)
              : document.importNode(this.template.element.content, !0),
            c = [],
            d = this.template.parts,
            e = document.createTreeWalker(b, 133, null, !1),
            f = 0,
            g = 0,
            h = e.nextNode();
          f < d.length;

        ) {
          if (((a = d[f]), !$a(a))) {
            this.__parts.push(void 0), f++;
            continue;
          }
          for (; g < a.index; )
            g++,
              "TEMPLATE" === h.nodeName &&
                (c.push(h), (e.currentNode = h.content)),
              null === (h = e.nextNode()) &&
                ((e.currentNode = c.pop()), (h = e.nextNode()));
          if ("node" === a.type) {
            var i = this.processor.handleTextExpression(this.options);
            i.insertAfterNode(h.previousSibling), this.__parts.push(i);
          } else
            this.__parts.push(
              ...this.processor.handleAttributeExpressions(
                h,
                a.name,
                a.strings,
                this.options
              )
            );
          f++;
        }
        return Sa && (document.adoptNode(b), customElements.upgrade(b)), b;
      }
    }
    var kb = " ".concat(Ua, " ");
    class lb {
      constructor(a, b, c, d) {
        (this.strings = a),
          (this.values = b),
          (this.type = c),
          (this.processor = d);
      }
      getHTML() {
        for (
          var a = this.strings.length - 1, b = "", c = !1, d = 0;
          d < a;
          d++
        ) {
          var e = this.strings[d],
            f = e.lastIndexOf("<!--");
          c = (-1 < f || c) && -1 === e.indexOf("-->", f + 1);
          var g = bb.exec(e);
          b +=
            null === g
              ? e + (c ? kb : Va)
              : e.substr(0, g.index) + g[1] + g[2] + Xa + g[3] + Ua;
        }
        return (b += this.strings[a]), b;
      }
      getTemplateElement() {
        var a = document.createElement("template");
        return (a.innerHTML = this.getHTML()), a;
      }
    }
    var mb = (a) =>
        null === a || ("object" != typeof a && "function" != typeof a),
      nb = (a) => Array.isArray(a) || !!(a && a[Symbol.iterator]);
    class ob {
      constructor(a, b, c) {
        (this.dirty = !0),
          (this.element = a),
          (this.name = b),
          (this.strings = c),
          (this.parts = []);
        for (var d = 0; d < c.length - 1; d++)
          this.parts[d] = this._createPart();
      }
      _createPart() {
        return new pb(this);
      }
      _getValue() {
        for (
          var a = this.strings, b = a.length - 1, c = "", d = 0;
          d < b;
          d++
        ) {
          c += a[d];
          var e = this.parts[d];
          if (void 0 !== e) {
            var f = e.value;
            if (mb(f) || !nb(f)) c += "string" == typeof f ? f : f + "";
            else for (var g of f) c += "string" == typeof g ? g : g + "";
          }
        }
        return (c += a[b]), c;
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1),
          this.element.setAttribute(this.name, this._getValue()));
      }
    }
    class pb {
      constructor(a) {
        (this.value = void 0), (this.committer = a);
      }
      setValue(a) {
        a === hb ||
          (mb(a) && a === this.value) ||
          ((this.value = a), !gb(a) && (this.committer.dirty = !0));
      }
      commit() {
        for (; gb(this.value); ) {
          var a = this.value;
          (this.value = hb), a(this);
        }
        this.value === hb || this.committer.commit();
      }
    }
    class qb {
      constructor(a) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.options = a);
      }
      appendInto(a) {
        (this.startNode = a.appendChild(ab())),
          (this.endNode = a.appendChild(ab()));
      }
      insertAfterNode(a) {
        (this.startNode = a), (this.endNode = a.nextSibling);
      }
      appendIntoPart(a) {
        a.__insert((this.startNode = ab())), a.__insert((this.endNode = ab()));
      }
      insertAfterPart(a) {
        a.__insert((this.startNode = ab())),
          (this.endNode = a.endNode),
          (a.endNode = this.startNode);
      }
      setValue(a) {
        this.__pendingValue = a;
      }
      commit() {
        if (null !== this.startNode.parentNode) {
          for (; gb(this.__pendingValue); ) {
            var b = this.__pendingValue;
            (this.__pendingValue = hb), b(this);
          }
          var a = this.__pendingValue;
          a === hb ||
            (mb(a)
              ? a !== this.value && this.__commitText(a)
              : a instanceof lb
              ? this.__commitTemplateResult(a)
              : a instanceof Node
              ? this.__commitNode(a)
              : nb(a)
              ? this.__commitIterable(a)
              : a === ib
              ? ((this.value = ib), this.clear())
              : this.__commitText(a));
        }
      }
      __insert(a) {
        this.endNode.parentNode.insertBefore(a, this.endNode);
      }
      __commitNode(a) {
        this.value === a || (this.clear(), this.__insert(a), (this.value = a));
      }
      __commitText(a) {
        var b = this.startNode.nextSibling;
        a = null == a ? "" : a;
        var c = "string" == typeof a ? a : a + "";
        b === this.endNode.previousSibling && 3 === b.nodeType
          ? (b.data = c)
          : this.__commitNode(document.createTextNode(c)),
          (this.value = a);
      }
      __commitTemplateResult(a) {
        var b = this.options.templateFactory(a);
        if (this.value instanceof jb && this.value.template === b)
          this.value.update(a.values);
        else {
          var c = new jb(b, a.processor, this.options),
            d = c._clone();
          c.update(a.values), this.__commitNode(d), (this.value = c);
        }
      }
      __commitIterable(a) {
        Array.isArray(this.value) || ((this.value = []), this.clear());
        var b,
          c = this.value,
          d = 0;
        for (var e of a)
          (b = c[d]),
            void 0 === b &&
              ((b = new qb(this.options)),
              c.push(b),
              0 === d ? b.appendIntoPart(this) : b.insertAfterPart(c[d - 1])),
            b.setValue(e),
            b.commit(),
            d++;
        d < c.length && ((c.length = d), this.clear(b && b.endNode));
      }
      clear() {
        var a =
          0 < arguments.length && arguments[0] !== void 0
            ? arguments[0]
            : this.startNode;
        Ta(this.startNode.parentNode, a.nextSibling, this.endNode);
      }
    }
    class rb {
      constructor(a, b, c) {
        if (
          ((this.value = void 0),
          (this.__pendingValue = void 0),
          2 !== c.length || "" !== c[0] || "" !== c[1])
        )
          throw new Error(
            "Boolean attributes can only contain a single expression"
          );
        (this.element = a), (this.name = b), (this.strings = c);
      }
      setValue(a) {
        this.__pendingValue = a;
      }
      commit() {
        for (; gb(this.__pendingValue); ) {
          var b = this.__pendingValue;
          (this.__pendingValue = hb), b(this);
        }
        if (this.__pendingValue !== hb) {
          var a = !!this.__pendingValue;
          this.value !== a &&
            (a
              ? this.element.setAttribute(this.name, "")
              : this.element.removeAttribute(this.name),
            (this.value = a)),
            (this.__pendingValue = hb);
        }
      }
    }
    class sb extends ob {
      constructor(a, b, c) {
        super(a, b, c),
          (this.single = 2 === c.length && "" === c[0] && "" === c[1]);
      }
      _createPart() {
        return new tb(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1), (this.element[this.name] = this._getValue()));
      }
    }
    class tb extends pb {}
    var ub = !1;
    (() => {
      try {
        var a = {
          get capture() {
            return (ub = !0), !1;
          },
        };
        window.addEventListener("test", a, a),
          window.removeEventListener("test", a, a);
      } catch (a) {}
    })();
    class vb {
      constructor(a, b, c) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.element = a),
          (this.eventName = b),
          (this.eventContext = c),
          (this.__boundHandleEvent = (a) => this.handleEvent(a));
      }
      setValue(a) {
        this.__pendingValue = a;
      }
      commit() {
        for (; gb(this.__pendingValue); ) {
          var d = this.__pendingValue;
          (this.__pendingValue = hb), d(this);
        }
        if (this.__pendingValue !== hb) {
          var a = this.__pendingValue,
            b = this.value,
            c =
              null == a ||
              (null != b &&
                (a.capture !== b.capture ||
                  a.once !== b.once ||
                  a.passive !== b.passive));
          c &&
            this.element.removeEventListener(
              this.eventName,
              this.__boundHandleEvent,
              this.__options
            ),
            null != a &&
              (null == b || c) &&
              ((this.__options = wb(a)),
              this.element.addEventListener(
                this.eventName,
                this.__boundHandleEvent,
                this.__options
              )),
            (this.value = a),
            (this.__pendingValue = hb);
        }
      }
      handleEvent(a) {
        "function" == typeof this.value
          ? this.value.call(this.eventContext || this.element, a)
          : this.value.handleEvent(a);
      }
    }
    var wb = (a) =>
        a &&
        (ub
          ? { capture: a.capture, passive: a.passive, once: a.once }
          : a.capture),
      xb = new Map(),
      yb = new WeakMap(),
      zb = (a, b, c) => {
        var d = yb.get(b);
        d === void 0 &&
          (Ta(b, b.firstChild),
          yb.set(b, (d = new qb(Object.assign({ templateFactory: Ea }, c)))),
          d.appendInto(b)),
          d.setValue(a),
          d.commit();
      };
    var Ab = new (class a {
      handleAttributeExpressions(a, b, c, d) {
        var e = b[0];
        if ("." === e) {
          var g = new sb(a, b.slice(1), c);
          return g.parts;
        }
        if ("@" === e) return [new vb(a, b.slice(1), d.eventContext)];
        if ("?" === e) return [new rb(a, b.slice(1), c)];
        var f = new ob(a, b, c);
        return f.parts;
      }
      handleTextExpression(a) {
        return new qb(a);
      }
    })();
    "undefined" != typeof window &&
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");
    var Bb = function (a) {
        for (
          var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        return new lb(a, c, "html", Ab);
      },
      Cb = (a, b) => "".concat(a, "--").concat(b),
      Db = !0;
    "undefined" == typeof window.ShadyCSS
      ? (Db = !1)
      : "undefined" == typeof window.ShadyCSS.prepareTemplateDom &&
        (console.warn(
          "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
        ),
        (Db = !1));
    var Eb,
      Fb = (a) => (b) => {
        var c = Cb(b.type, a),
          d = xb.get(c);
        void 0 === d &&
          ((d = { stringsArray: new WeakMap(), keyString: new Map() }),
          xb.set(c, d));
        var e = d.stringsArray.get(b.strings);
        if (void 0 !== e) return e;
        var f = b.strings.join(Ua);
        if (((e = d.keyString.get(f)), void 0 === e)) {
          var g = b.getTemplateElement();
          Db && window.ShadyCSS.prepareTemplateDom(g, a),
            (e = new Ya(b, g)),
            d.keyString.set(f, e);
        }
        return d.stringsArray.set(b.strings, e), e;
      },
      Gb = ["html", "svg"],
      Hb = (a) => {
        Gb.forEach((b) => {
          var c = xb.get(Cb(b, a));
          c !== void 0 &&
            c.keyString.forEach((a) => {
              var {
                  element: { content: b },
                } = a,
                c = new Set();
              Array.from(b.querySelectorAll("style")).forEach((a) => {
                c.add(a);
              }),
                Ba(a, c);
            });
        });
      },
      Ib = new Set(),
      Jb = (a, b, c) => {
        Ib.add(a);
        var d = !c ? document.createElement("template") : c.element,
          e = b.querySelectorAll("style"),
          { length: f } = e;
        if (0 === f) return void window.ShadyCSS.prepareTemplateStyles(d, a);
        for (var g, h = document.createElement("style"), j = 0; j < f; j++)
          (g = e[j]),
            g.parentNode.removeChild(g),
            (h.textContent += g.textContent);
        Hb(a);
        var k = d.content;
        !c ? k.insertBefore(h, k.firstChild) : Ca(c, h, k.firstChild),
          window.ShadyCSS.prepareTemplateStyles(d, a);
        var l = k.querySelector("style");
        if (window.ShadyCSS.nativeShadow && null !== l)
          b.insertBefore(l.cloneNode(!0), b.firstChild);
        else if (!!c) {
          k.insertBefore(h, k.firstChild);
          var m = new Set();
          m.add(h), Ba(c, m);
        }
      },
      Kb = (a, b, c) => {
        if (!c || "object" != typeof c || !c.scopeName)
          throw new Error("The `scopeName` option is required.");
        var d = c.scopeName,
          e = yb.has(b),
          f = Db && 11 === b.nodeType && !!b.host,
          g = f && !Ib.has(d),
          h = g ? document.createDocumentFragment() : b;
        if ((zb(a, h, Object.assign({ templateFactory: Fb(d) }, c)), g)) {
          var i = yb.get(h);
          yb.delete(h);
          var j = i.value instanceof jb ? i.value.template : void 0;
          Jb(d, h, j), Ta(b, b.firstChild), b.appendChild(h), yb.set(b, i);
        }
        !e && f && window.ShadyCSS.styleElement(b.host);
      };
    window.JSCompiler_renameProperty = (a) => a;
    var Lb = {
        toAttribute(a, b) {
          return b === Boolean
            ? a
              ? ""
              : null
            : b === Object || b === Array
            ? null == a
              ? a
              : JSON.stringify(a)
            : a;
        },
        fromAttribute(a, b) {
          return b === Boolean
            ? null !== a
            : b === Number
            ? null === a
              ? null
              : +a
            : b === Object || b === Array
            ? JSON.parse(a)
            : a;
        },
      },
      Mb = (a, b) => b !== a && (b === b || a === a),
      Nb = {
        attribute: !0,
        type: String,
        converter: Lb,
        reflect: !1,
        hasChanged: Mb,
      },
      Ob = 1,
      Pb = 4,
      Qb = 8,
      Rb = 16,
      Sb = "finalized";
    class Tb extends HTMLElement {
      constructor() {
        super(),
          (this._updateState = 0),
          (this._instanceProperties = void 0),
          (this._updatePromise = new Promise(
            (a) => (this._enableUpdatingResolver = a)
          )),
          (this._changedProperties = new Map()),
          (this._reflectingProperties = void 0),
          this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        var a = [];
        return (
          this._classProperties.forEach((b, c) => {
            var d = this._attributeNameForProperty(c, b);
            void 0 !== d && (this._attributeToPropertyMap.set(d, c), a.push(d));
          }),
          a
        );
      }
      static _ensureClassProperties() {
        if (
          !this.hasOwnProperty(
            JSCompiler_renameProperty("_classProperties", this)
          )
        ) {
          this._classProperties = new Map();
          var a = Object.getPrototypeOf(this)._classProperties;
          a !== void 0 && a.forEach((a, b) => this._classProperties.set(b, a));
        }
      }
      static createProperty(a) {
        var b =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Nb;
        if (
          (this._ensureClassProperties(),
          this._classProperties.set(a, b),
          !(b.noAccessor || this.prototype.hasOwnProperty(a)))
        ) {
          var c = "symbol" == typeof a ? Symbol() : "__".concat(a),
            d = this.getPropertyDescriptor(a, c, b);
          void 0 !== d && Object.defineProperty(this.prototype, a, d);
        }
      }
      static getPropertyDescriptor(a, b) {
        return {
          get() {
            return this[b];
          },
          set(c) {
            var d = this[a];
            (this[b] = c), this._requestUpdate(a, d);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(a) {
        return (this._classProperties && this._classProperties.get(a)) || Nb;
      }
      static finalize() {
        var a = Object.getPrototypeOf(this);
        if (
          (a.hasOwnProperty(Sb) || a.finalize(),
          (this[Sb] = !0),
          this._ensureClassProperties(),
          (this._attributeToPropertyMap = new Map()),
          this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
        ) {
          var b = this.properties,
            c = [
              ...Object.getOwnPropertyNames(b),
              ...("function" == typeof Object.getOwnPropertySymbols
                ? Object.getOwnPropertySymbols(b)
                : []),
            ];
          for (var d of c) this.createProperty(d, b[d]);
        }
      }
      static _attributeNameForProperty(a, b) {
        var c = b.attribute;
        return !1 === c
          ? void 0
          : "string" == typeof c
          ? c
          : "string" == typeof a
          ? a.toLowerCase()
          : void 0;
      }
      static _valueHasChanged(a, b) {
        var c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Mb;
        return c(a, b);
      }
      static _propertyValueFromAttribute(a, b) {
        var c = b.type,
          d = b.converter || Lb,
          e = "function" == typeof d ? d : d.fromAttribute;
        return e ? e(a, c) : a;
      }
      static _propertyValueToAttribute(a, b) {
        if (void 0 !== b.reflect) {
          var c = b.type,
            d = b.converter,
            e = (d && d.toAttribute) || Lb.toAttribute;
          return e(a, c);
        }
      }
      initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((a, b) => {
          if (this.hasOwnProperty(b)) {
            var c = this[b];
            delete this[b],
              this._instanceProperties ||
                (this._instanceProperties = new Map()),
              this._instanceProperties.set(b, c);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((a, b) => (this[b] = a)),
          (this._instanceProperties = void 0);
      }
      connectedCallback() {
        this.enableUpdating();
      }
      enableUpdating() {
        this._enableUpdatingResolver !== void 0 &&
          (this._enableUpdatingResolver(),
          (this._enableUpdatingResolver = void 0));
      }
      disconnectedCallback() {}
      attributeChangedCallback(a, b, c) {
        b !== c && this._attributeToProperty(a, c);
      }
      _propertyToAttribute(a, b) {
        var c =
            2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Nb,
          d = this.constructor,
          e = d._attributeNameForProperty(a, c);
        if (e !== void 0) {
          var f = d._propertyValueToAttribute(b, c);
          if (f === void 0) return;
          (this._updateState |= Qb),
            null == f ? this.removeAttribute(e) : this.setAttribute(e, f),
            (this._updateState &= ~Qb);
        }
      }
      _attributeToProperty(a, b) {
        if (!(this._updateState & Qb)) {
          var c = this.constructor,
            d = c._attributeToPropertyMap.get(a);
          if (void 0 !== d) {
            var e = c.getPropertyOptions(d);
            (this._updateState |= Rb),
              (this[d] = c._propertyValueFromAttribute(b, e)),
              (this._updateState &= ~Rb);
          }
        }
      }
      _requestUpdate(a, b) {
        var c = !0;
        if (a !== void 0) {
          var d = this.constructor,
            e = d.getPropertyOptions(a);
          d._valueHasChanged(this[a], b, e.hasChanged)
            ? (!this._changedProperties.has(a) &&
                this._changedProperties.set(a, b),
              !0 === e.reflect &&
                !(this._updateState & Rb) &&
                (this._reflectingProperties === void 0 &&
                  (this._reflectingProperties = new Map()),
                this._reflectingProperties.set(a, e)))
            : (c = !1);
        }
        !this._hasRequestedUpdate &&
          c &&
          (this._updatePromise = this._enqueueUpdate());
      }
      requestUpdate(a, b) {
        return this._requestUpdate(a, b), this.updateComplete;
      }
      _enqueueUpdate() {
        var a = this;
        return Ga(function* () {
          a._updateState |= Pb;
          try {
            yield a._updatePromise;
          } catch (a) {}
          var b = a.performUpdate();
          return null != b && (yield b), !a._hasRequestedUpdate;
        })();
      }
      get _hasRequestedUpdate() {
        return this._updateState & Pb;
      }
      get hasUpdated() {
        return this._updateState & Ob;
      }
      performUpdate() {
        this._instanceProperties && this._applyInstanceProperties();
        var a = !1,
          b = this._changedProperties;
        try {
          (a = this.shouldUpdate(b)), a ? this.update(b) : this._markUpdated();
        } catch (b) {
          throw ((a = !1), this._markUpdated(), b);
        }
        a &&
          (!(this._updateState & Ob) &&
            ((this._updateState |= Ob), this.firstUpdated(b)),
          this.updated(b));
      }
      _markUpdated() {
        (this._changedProperties = new Map()), (this._updateState &= ~Pb);
      }
      get updateComplete() {
        return this._getUpdateComplete();
      }
      _getUpdateComplete() {
        return this._updatePromise;
      }
      shouldUpdate() {
        return !0;
      }
      update() {
        this._reflectingProperties !== void 0 &&
          0 < this._reflectingProperties.size &&
          (this._reflectingProperties.forEach((a, b) =>
            this._propertyToAttribute(b, this[b], a)
          ),
          (this._reflectingProperties = void 0)),
          this._markUpdated();
      }
      updated() {}
      firstUpdated() {}
    }
    (Eb = Sb), (Tb[Eb] = !0);
    var Ub =
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      Vb = Symbol();
    class Wb {
      constructor(a, b) {
        if (b !== Vb)
          throw new Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = a;
      }
      get styleSheet() {
        return (
          void 0 === this._styleSheet &&
            (Ub
              ? ((this._styleSheet = new CSSStyleSheet()),
                this._styleSheet.replaceSync(this.cssText))
              : (this._styleSheet = null)),
          this._styleSheet
        );
      }
      toString() {
        return this.cssText;
      }
    }
    var Xb = (a) => {
        if (a instanceof Wb) return a.cssText;
        if ("number" == typeof a) return a;
        throw new Error(
          "Value passed to 'css' function must be a 'css' function result: ".concat(
            a,
            ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
          )
        );
      },
      Yb = function (a) {
        for (
          var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        var e = c.reduce((b, c, d) => b + Xb(c) + a[d + 1], a[0]);
        return new Wb(e, Vb);
      };
    (window.litElementVersions || (window.litElementVersions = [])).push(
      "2.3.1"
    );
    var Zb = {};
    class $b extends Tb {
      static getStyles() {
        return this.styles;
      }
      static _getUniqueStyles() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
          var a = this.getStyles();
          if (void 0 === a) this._styles = [];
          else if (Array.isArray(a)) {
            var b = (a, c) =>
                a.reduceRight(
                  (a, c) => (Array.isArray(c) ? b(c, a) : (a.add(c), a)),
                  c
                ),
              c = b(a, new Set()),
              d = [];
            c.forEach((a) => d.unshift(a)), (this._styles = d);
          } else this._styles = [a];
        }
      }
      initialize() {
        super.initialize(),
          this.constructor._getUniqueStyles(),
          (this.renderRoot = this.createRenderRoot()),
          window.ShadowRoot &&
            this.renderRoot instanceof window.ShadowRoot &&
            this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow({ mode: "open" });
      }
      adoptStyles() {
        var a = this.constructor._styles;
        0 === a.length ||
          (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow
            ? Ub
              ? (this.renderRoot.adoptedStyleSheets = a.map(
                  (a) => a.styleSheet
                ))
              : (this._needsShimAdoptedStyleSheets = !0)
            : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                a.map((a) => a.cssText),
                this.localName
              ));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasUpdated &&
            window.ShadyCSS !== void 0 &&
            window.ShadyCSS.styleElement(this);
      }
      update(a) {
        var b = this.render();
        super.update(a),
          b !== Zb &&
            this.constructor.render(b, this.renderRoot, {
              scopeName: this.localName,
              eventContext: this,
            }),
          this._needsShimAdoptedStyleSheets &&
            ((this._needsShimAdoptedStyleSheets = !1),
            this.constructor._styles.forEach((a) => {
              var b = document.createElement("style");
              (b.textContent = a.cssText), this.renderRoot.appendChild(b);
            }));
      }
      render() {
        return Zb;
      }
    }
    ($b.finalized = !0), ($b.render = Kb);
    class _b {
      constructor(a) {
        (this.classes = new Set()), (this.changed = !1), (this.element = a);
        var b = (a.getAttribute("class") || "").split(/\s+/);
        for (var c of b) this.classes.add(c);
      }
      add(a) {
        this.classes.add(a), (this.changed = !0);
      }
      remove(a) {
        this.classes.delete(a), (this.changed = !0);
      }
      commit() {
        if (this.changed) {
          var a = "";
          this.classes.forEach((b) => (a += b + " ")),
            this.element.setAttribute("class", a);
        }
      }
    }
    var ac = new WeakMap(),
      bc = fb((a) => (b) => {
        if (
          !(b instanceof pb) ||
          b instanceof tb ||
          "class" !== b.committer.name ||
          1 < b.committer.parts.length
        )
          throw new Error(
            "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
          );
        var { committer: c } = b,
          { element: d } = c,
          e = ac.get(b);
        void 0 === e &&
          (d.setAttribute("class", c.strings.join(" ")),
          ac.set(b, (e = new Set())));
        var f = d.classList || new _b(d);
        for (var g in (e.forEach((b) => {
          b in a || (f.remove(b), e.delete(b));
        }),
        a)) {
          var h = a[g];
          h != e.has(g) &&
            (h ? (f.add(g), e.add(g)) : (f.remove(g), e.delete(g)));
        }
        "function" == typeof f.commit && f.commit();
      }),
      cc = new WeakMap(),
      dc = fb((a) => (b) => {
        if (
          !(b instanceof pb) ||
          b instanceof tb ||
          "style" !== b.committer.name ||
          1 < b.committer.parts.length
        )
          throw new Error(
            "The `styleMap` directive must be used in the style attribute and must be the only part in the attribute."
          );
        var { committer: c } = b,
          { style: d } = c.element,
          e = cc.get(b);
        for (var f in (void 0 === e &&
          ((d.cssText = c.strings.join(" ")), cc.set(b, (e = new Set()))),
        e.forEach((b) => {
          b in a ||
            (e.delete(b),
            -1 === b.indexOf("-") ? (d[b] = null) : d.removeProperty(b));
        }),
        a))
          e.add(f),
            -1 === f.indexOf("-") ? (d[f] = a[f]) : d.setProperty(f, a[f]);
      }),
      ec = (function () {
        function a(a, b) {
          var c = -1;
          return (
            a.some(function (a, d) {
              return a[0] === b && ((c = d), !0);
            }),
            c
          );
        }
        return "undefined" == typeof Map
          ? (function () {
              function b() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(b.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (b.prototype.get = function (b) {
                  var c = a(this.__entries__, b),
                    d = this.__entries__[c];
                  return d && d[1];
                }),
                (b.prototype.set = function (b, c) {
                  var d = a(this.__entries__, b);
                  ~d
                    ? (this.__entries__[d][1] = c)
                    : this.__entries__.push([b, c]);
                }),
                (b.prototype.delete = function (b) {
                  var c = this.__entries__,
                    d = a(c, b);
                  ~d && c.splice(d, 1);
                }),
                (b.prototype.has = function (b) {
                  return !!~a(this.__entries__, b);
                }),
                (b.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (b.prototype.forEach = function (a, b) {
                  void 0 === b && (b = null);
                  for (var c, d = 0, e = this.__entries__; d < e.length; d++)
                    (c = e[d]), a.call(b, c[1], c[0]);
                }),
                b
              );
            })()
          : Map;
      })(),
      fc =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        window.document === document,
      gc = (function () {
        return "undefined" != typeof global && global.Math === Math
          ? global
          : "undefined" != typeof self && self.Math === Math
          ? self
          : "undefined" != typeof window && window.Math === Math
          ? window
          : Function("return this")();
      })(),
      hc = (function () {
        return "function" == typeof requestAnimationFrame
          ? requestAnimationFrame.bind(gc)
          : function (a) {
              return setTimeout(function () {
                return a(Date.now());
              }, 1e3 / 60);
            };
      })(),
      ic = [
        "top",
        "right",
        "bottom",
        "left",
        "width",
        "height",
        "size",
        "weight",
      ],
      jc = "undefined" != typeof MutationObserver,
      kc = (function () {
        function a() {
          (this.connected_ = !1),
            (this.mutationEventsAdded_ = !1),
            (this.mutationsObserver_ = null),
            (this.observers_ = []),
            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
            (this.refresh = Fa(this.refresh.bind(this), 20));
        }
        return (
          (a.prototype.addObserver = function (a) {
            ~this.observers_.indexOf(a) || this.observers_.push(a),
              this.connected_ || this.connect_();
          }),
          (a.prototype.removeObserver = function (a) {
            var b = this.observers_,
              c = b.indexOf(a);
            ~c && b.splice(c, 1),
              !b.length && this.connected_ && this.disconnect_();
          }),
          (a.prototype.refresh = function () {
            var a = this.updateObservers_();
            a && this.refresh();
          }),
          (a.prototype.updateObservers_ = function () {
            var a = this.observers_.filter(function (a) {
              return a.gatherActive(), a.hasActive();
            });
            return (
              a.forEach(function (a) {
                return a.broadcastActive();
              }),
              0 < a.length
            );
          }),
          (a.prototype.connect_ = function () {
            !fc ||
              this.connected_ ||
              (document.addEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.addEventListener("resize", this.refresh),
              jc
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (a.prototype.disconnect_ = function () {
            fc &&
              this.connected_ &&
              (document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.removeEventListener("resize", this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (a.prototype.onTransitionEnd_ = function (a) {
            var b = a.propertyName,
              c = void 0 === b ? "" : b,
              d = ic.some(function (a) {
                return !!~c.indexOf(a);
              });
            d && this.refresh();
          }),
          (a.getInstance = function () {
            return this.instance_ || (this.instance_ = new a()), this.instance_;
          }),
          (a.instance_ = null),
          a
        );
      })(),
      lc = function (a, b) {
        for (var c, d = 0, e = Object.keys(b); d < e.length; d++)
          (c = e[d]),
            Object.defineProperty(a, c, {
              value: b[c],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
        return a;
      },
      mc = function (a) {
        var b = a && a.ownerDocument && a.ownerDocument.defaultView;
        return b || gc;
      },
      nc = Pa(0, 0, 0, 0),
      oc = (function () {
        return "undefined" == typeof SVGGraphicsElement
          ? function (a) {
              return (
                a instanceof mc(a).SVGElement && "function" == typeof a.getBBox
              );
            }
          : function (a) {
              return a instanceof mc(a).SVGGraphicsElement;
            };
      })(),
      pc = (function () {
        function a(a) {
          (this.broadcastWidth = 0),
            (this.broadcastHeight = 0),
            (this.contentRect_ = Pa(0, 0, 0, 0)),
            (this.target = a);
        }
        return (
          (a.prototype.isActive = function () {
            var a = Na(this.target);
            return (
              (this.contentRect_ = a),
              a.width !== this.broadcastWidth ||
                a.height !== this.broadcastHeight
            );
          }),
          (a.prototype.broadcastRect = function () {
            var a = this.contentRect_;
            return (
              (this.broadcastWidth = a.width),
              (this.broadcastHeight = a.height),
              a
            );
          }),
          a
        );
      })(),
      qc = (function () {
        return function (a, b) {
          var c = Oa(b);
          lc(this, { target: a, contentRect: c });
        };
      })(),
      rc = (function () {
        function a(a, b, c) {
          if (
            ((this.activeObservations_ = []),
            (this.observations_ = new ec()),
            "function" != typeof a)
          )
            throw new TypeError(
              "The callback provided as parameter 1 is not a function."
            );
          (this.callback_ = a), (this.controller_ = b), (this.callbackCtx_ = c);
        }
        return (
          (a.prototype.observe = function (a) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(a instanceof mc(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              b.has(a) ||
                (b.set(a, new pc(a)),
                this.controller_.addObserver(this),
                this.controller_.refresh());
            }
          }),
          (a.prototype.unobserve = function (a) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(a instanceof mc(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              b.has(a) &&
                (b.delete(a), !b.size && this.controller_.removeObserver(this));
            }
          }),
          (a.prototype.disconnect = function () {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (a.prototype.gatherActive = function () {
            var a = this;
            this.clearActive(),
              this.observations_.forEach(function (b) {
                b.isActive() && a.activeObservations_.push(b);
              });
          }),
          (a.prototype.broadcastActive = function () {
            if (this.hasActive()) {
              var a = this.callbackCtx_,
                b = this.activeObservations_.map(function (a) {
                  return new qc(a.target, a.broadcastRect());
                });
              this.callback_.call(a, b, a), this.clearActive();
            }
          }),
          (a.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
          }),
          (a.prototype.hasActive = function () {
            return 0 < this.activeObservations_.length;
          }),
          a
        );
      })(),
      sc = "undefined" == typeof WeakMap ? new ec() : new WeakMap(),
      tc = (function () {
        function a(b) {
          if (!(this instanceof a))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var c = kc.getInstance(),
            d = new rc(b, c, this);
          sc.set(this, d);
        }
        return a;
      })();
    ["observe", "unobserve", "disconnect"].forEach(function (a) {
      tc.prototype[a] = function () {
        var b;
        return (b = sc.get(this))[a].apply(b, arguments);
      };
    });
    var uc = (function () {
        return "undefined" == typeof gc.ResizeObserver ? tc : gc.ResizeObserver;
      })(),
      vc = {
        shuffle: !0,
        power_state: !0,
        artwork_border: !0,
        icon_state: !0,
        sound_mode: !0,
        runtime: !0,
        volume: !1,
        controls: !1,
        play_pause: !1,
        play_stop: !0,
        prev: !1,
        next: !1,
      },
      wc = {
        DEFAULT: "mdi:cast",
        DROPDOWN: "mdi:chevron-down",
        GROUP: "mdi:speaker-multiple",
        MENU: "mdi:menu-down",
        MUTE: { true: "mdi:volume-off", false: "mdi:volume-high" },
        NEXT: "mdi:skip-next",
        PLAY: { true: "mdi:pause", false: "mdi:play" },
        POWER: "mdi:power",
        PREV: "mdi:skip-previous",
        SEND: "mdi:send",
        SHUFFLE: "mdi:shuffle",
        STOP: { true: "mdi:stop", false: "mdi:play" },
        VOL_DOWN: "mdi:volume-minus",
        VOL_UP: "mdi:volume-plus",
      },
      xc = ["entity", "_overflow", "break", "thumbnail", "edit", "idle"],
      yc = ["media_duration", "media_position", "media_position_updated_at"],
      zc = [
        { attr: "media_title" },
        { attr: "media_artist" },
        { attr: "media_series_title" },
        { attr: "media_season", prefix: "S" },
        { attr: "media_episode", prefix: "E" },
        { attr: "app_name" },
      ],
      Ac = {
        SONOS: "sonos",
        SQUEEZEBOX: "squeezebox",
        BLUESOUND: "bluesound",
        SOUNDTOUCH: "soundtouch",
      };
    class Bc {
      constructor(a, b, c) {
        (this.hass = a || {}),
          (this.config = b || {}),
          (this.entity = c || {}),
          (this.state = c.state),
          (this.attr = c.attributes),
          (this.idle = !!b.idle_view && this.idleView),
          (this.active = this.isActive);
      }
      get id() {
        return this.entity.entity_id;
      }
      get icon() {
        return this.attr.icon;
      }
      get isPaused() {
        return "paused" === this.state;
      }
      get isPlaying() {
        return "playing" === this.state;
      }
      get isIdle() {
        return "idle" === this.state;
      }
      get isStandby() {
        return "standby" === this.state;
      }
      get isUnavailable() {
        return "unavailable" === this.state;
      }
      get isOff() {
        return "off" === this.state;
      }
      get isActive() {
        return (!this.isOff && !this.isUnavailable && !this.idle) || !1;
      }
      get shuffle() {
        return this.attr.shuffle || !1;
      }
      get content() {
        return this.attr.media_content_type || "none";
      }
      get mediaDuration() {
        return this.attr.media_duration || 0;
      }
      get updatedAt() {
        return this.attr.media_position_updated_at || 0;
      }
      get position() {
        return this.attr.media_position || 0;
      }
      get name() {
        return this.attr.friendly_name || "";
      }
      get groupCount() {
        return this.group.length;
      }
      get isGrouped() {
        return 1 < this.group.length;
      }
      get group() {
        return this.platform === Ac.SQUEEZEBOX
          ? this.attr.sync_group || []
          : this.attr["".concat(this.platform, "_group")] || [];
      }
      get platform() {
        return this.config.speaker_group.platform;
      }
      get master() {
        return this.supportsMaster
          ? this.group[0] || this.config.entity
          : this.config.entity;
      }
      get isMaster() {
        return this.master === this.config.entity;
      }
      get sources() {
        return this.attr.source_list || [];
      }
      get source() {
        return this.attr.source || "";
      }
      get soundModes() {
        return this.attr.sound_mode_list || [];
      }
      get soundMode() {
        return this.attr.sound_mode || "";
      }
      get muted() {
        return this.attr.is_volume_muted || !1;
      }
      get vol() {
        return this.attr.volume_level || 0;
      }
      get picture() {
        return this.attr.entity_picture_local || this.attr.entity_picture;
      }
      get hasArtwork() {
        return (
          this.picture &&
          "none" !== this.config.artwork &&
          this.active &&
          !this.idle
        );
      }
      get mediaInfo() {
        return zc
          .map((a) => Da({ text: this.attr[a.attr], prefix: "" }, a))
          .filter((a) => a.text);
      }
      get hasProgress() {
        return (
          !this.config.hide.progress &&
          !this.idle &&
          yc.every((a) => a in this.attr)
        );
      }
      get progress() {
        return (
          this.position +
          (Date.now() - new Date(this.updatedAt).getTime()) / 1e3
        );
      }
      get idleView() {
        var a = this.config.idle_view;
        return (
          !!(
            (a.when_idle && this.isIdle) ||
            (a.when_standby && this.isStandby) ||
            (a.when_paused && this.isPaused)
          ) ||
          (!!(this.updatedAt && a.after && !this.isPlaying) &&
            this.checkIdleAfter(a.after))
        );
      }
      get trackIdle() {
        return (
          this.active &&
          !this.isPlaying &&
          this.updatedAt &&
          this.config.idle_view &&
          this.config.idle_view.after
        );
      }
      checkIdleAfter(a) {
        var b = (Date.now() - new Date(this.updatedAt).getTime()) / 1e3;
        return (
          (this.idle = b > 60 * a), (this.active = this.isActive), this.idle
        );
      }
      get supportsShuffle() {
        return "undefined" != typeof this.attr.shuffle;
      }
      get supportsMute() {
        return "undefined" != typeof this.attr.is_volume_muted;
      }
      get supportsVolumeSet() {
        return "undefined" != typeof this.attr.volume_level;
      }
      get supportsMaster() {
        return this.platform !== Ac.SQUEEZEBOX;
      }
      get artwork() {
        return "url(".concat(
          this.attr.entity_picture_local
            ? this.hass.hassUrl(this.picture)
            : this.picture,
          ")"
        );
      }
      getAttribute(a) {
        return this.attr[a] || "";
      }
      toggle(a) {
        return this.config.toggle_power
          ? this.callService(a, "toggle")
          : this.isOff
          ? this.callService(a, "turn_on")
          : void this.callService(a, "turn_off");
      }
      toggleMute(a) {
        this.config.speaker_group.sync_volume
          ? this.group.forEach((b) => {
              this.callService(a, "volume_mute", {
                entity_id: b,
                is_volume_muted: !this.muted,
              });
            })
          : this.callService(a, "volume_mute", {
              is_volume_muted: !this.muted,
            });
      }
      toggleShuffle(a) {
        this.callService(a, "shuffle_set", { shuffle: !this.shuffle });
      }
      setSource(a, b) {
        this.callService(a, "select_source", { source: b });
      }
      setMedia(a, b) {
        this.callService(a, "play_media", Da({}, b));
      }
      playPause(a) {
        this.callService(a, "media_play_pause");
      }
      playStop(a) {
        this.isPlaying
          ? this.callService(a, "media_stop")
          : this.callService(a, "media_play");
      }
      setSoundMode(a, b) {
        this.callService(a, "select_sound_mode", { sound_mode: b });
      }
      next(a) {
        this.callService(a, "media_next_track");
      }
      prev(a) {
        this.callService(a, "media_previous_track");
      }
      stop(a) {
        this.callService(a, "media_stop");
      }
      volumeUp(a) {
        this.supportsVolumeSet && 0 < this.config.volume_step
          ? this.callService(a, "volume_set", {
              entity_id: this.config.entity,
              volume_level: Ra(this.vol + this.config.volume_step / 100, 1),
            })
          : this.callService(a, "volume_up");
      }
      volumeDown(a) {
        this.supportsVolumeSet && 0 < this.config.volume_step
          ? this.callService(a, "volume_set", {
              entity_id: this.config.entity,
              volume_level: Qa(this.vol - this.config.volume_step / 100, 0),
            })
          : this.callService(a, "volume_down");
      }
      seek(a, b) {
        this.callService(a, "media_seek", { seek_position: b });
      }
      setVolume(a, b) {
        this.config.speaker_group.sync_volume
          ? this.group.forEach((c) => {
              var d =
                  this.config.speaker_group.entities.find(
                    (a) => a.entity_id === c
                  ) || {},
                e = b;
              d.volume_offset &&
                ((e += d.volume_offset / 100),
                1 < e && (e = 1),
                0 > e && (e = 0)),
                this.callService(a, "volume_set", {
                  entity_id: c,
                  volume_level: e,
                });
            })
          : this.callService(a, "volume_set", {
              entity_id: this.config.entity,
              volume_level: b,
            });
      }
      handleGroupChange(a, b, c) {
        var { platform: d } = this,
          e = { entity_id: b };
        return c
          ? ((e.master = this.config.entity),
            d === Ac.SOUNDTOUCH
              ? this.handleSoundtouch(
                  a,
                  this.isGrouped ? "ADD_ZONE_SLAVE" : "CREATE_ZONE",
                  b
                )
              : d === Ac.SQUEEZEBOX
              ? this.callService(
                  a,
                  "sync",
                  { entity_id: this.config.entity, other_player: b },
                  Ac.SQUEEZEBOX
                )
              : this.callService(a, "join", e, d))
          : d === Ac.SOUNDTOUCH
          ? this.handleSoundtouch(a, "REMOVE_ZONE_SLAVE", b)
          : d === Ac.SQUEEZEBOX
          ? this.callService(a, "unsync", e, Ac.SQUEEZEBOX)
          : this.callService(a, "unjoin", e, d);
      }
      handleSoundtouch(a, b, c) {
        return this.callService(
          a,
          b,
          { master: this.master, slaves: c },
          Ac.SOUNDTOUCH,
          !0
        );
      }
      toggleScript(a, b) {
        var c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        this.callService(a, b.split(".").pop(), Da({}, c), "script");
      }
      toggleService(a, b) {
        var c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        a.stopPropagation();
        var [d, e] = b.split(".");
        this.hass.callService(d, e, Da({}, c));
      }
      callService(a, b, c) {
        var d =
            3 < arguments.length && arguments[3] !== void 0
              ? arguments[3]
              : "media_player",
          e =
            !!(4 < arguments.length && arguments[4] !== void 0) && arguments[4];
        a.stopPropagation(),
          this.hass.callService(
            d,
            b,
            Da(Da({}, !e && { entity_id: this.config.entity }), c)
          );
      }
    }
    var Cc = Yb(Aa()),
      Dc = Yb(za()),
      Ec = (a, b, c, d, f) => {
        var g;
        switch (d.action) {
          case "more-info": {
            (g = new Event("hass-more-info", { composed: !0 })),
              (g.detail = { entityId: d.entity || f }),
              a.dispatchEvent(g);
            break;
          }
          case "navigate": {
            if (!d.navigation_path) return;
            window.history.pushState(null, "", d.navigation_path),
              (g = new Event("location-changed", { composed: !0 })),
              (g.detail = { replace: !1 }),
              window.dispatchEvent(g);
            break;
          }
          case "call-service": {
            if (!d.service) return;
            var [h, i] = d.service.split(".", 2),
              j = Da({}, d.service_data);
            b.callService(h, i, j);
            break;
          }
          case "url": {
            if (!d.url) return;
            window.location.href = d.url;
          }
        }
      };
    class Fc extends $b {
      static get properties() {
        return {
          item: {},
          checked: Boolean,
          disabled: Boolean,
          master: Boolean,
        };
      }
      render() {
        return Bb(
          ya(),
          this.checked,
          this.disabled,
          (a) => a.stopPropagation(),
          this.handleClick,
          this.item.name,
          this.master ? Bb(xa()) : ""
        );
      }
      handleClick(a) {
        a.stopPropagation(),
          this.dispatchEvent(
            new CustomEvent("change", {
              detail: { entity: this.item.entity_id, checked: !this.checked },
            })
          );
      }
      static get styles() {
        return Yb(wa());
      }
    }
    customElements.define("mmp-group-item", Fc);
    class Gc extends $b {
      render() {
        return Bb(va());
      }
      static get styles() {
        return Yb(ua());
      }
    }
    customElements.define("mmp-button", Gc);
    class Hc extends $b {
      static get properties() {
        return { entities: {}, player: {}, visible: Boolean };
      }
      get group() {
        return this.player.group;
      }
      get master() {
        return this.player.master;
      }
      get isMaster() {
        return this.player.isMaster;
      }
      get isGrouped() {
        return this.player.isGrouped;
      }
      handleGroupChange(a) {
        var { entity: b, checked: c } = a.detail;
        this.player.handleGroupChange(a, b, c);
      }
      render() {
        if (!this.visible) return Bb(ta());
        var { group: a, isMaster: b, isGrouped: c } = this,
          { id: d } = this.player;
        return Bb(
          sa(),
          this.entities.map((a) => this.renderItem(a, d)),
          !c,
          (a) => this.player.handleGroupChange(a, d, !1),
          c && b
            ? Bb(ra(), (b) => this.player.handleGroupChange(b, a, !1))
            : Bb(qa()),
          !b,
          (a) =>
            this.player.handleGroupChange(
              a,
              this.entities.map((a) => a.entity_id),
              !0
            )
        );
      }
      renderItem(a, b) {
        var c = a.entity_id;
        return Bb(
          pa(),
          this.handleGroupChange,
          a,
          c === b || this.group.includes(c),
          c === b || !this.isMaster,
          c === this.master
        );
      }
      static get styles() {
        return Yb(oa());
      }
    }
    customElements.define("mmp-group-list", Hc);
    class Ic extends $b {
      static get properties() {
        return { items: [], label: String, selected: String };
      }
      get selectedId() {
        return this.items.map((a) => a.id).indexOf(this.selected);
      }
      onChange(a) {
        var b = a.target.selected;
        b !== this.selectedId &&
          this.items[b] &&
          (this.dispatchEvent(
            new CustomEvent("change", { detail: this.items[b] })
          ),
          (a.target.selected = -1));
      }
      render() {
        return Bb(
          na(),
          "right",
          "top",
          44,
          !0,
          (a) => a.stopPropagation(),
          this.icon
            ? Bb(ma(), wc.DROPDOWN)
            : Bb(la(), this.selected || this.label, wc.DROPDOWN),
          this.selectedId,
          this.onChange,
          this.items.map((a) =>
            Bb(
              ka(),
              a.id || a.name,
              a.icon ? Bb(ja(), a.icon) : "",
              a.name ? Bb(ia(), a.name) : ""
            )
          )
        );
      }
      static get styles() {
        return [Dc, Yb(ha())];
      }
    }
    customElements.define("mmp-dropdown", Ic);
    class Jc extends $b {
      static get properties() {
        return { player: {}, shortcuts: {} };
      }
      get buttons() {
        return this.shortcuts.buttons;
      }
      get list() {
        return this.shortcuts.list;
      }
      get show() {
        return !this.shortcuts.hide_when_off || this.player.active;
      }
      get active() {
        return this.player.getAttribute(this.shortcuts.attribute);
      }
      get height() {
        return this.shortcuts.column_height || 36;
      }
      render() {
        if (!this.show) return Bb(ga());
        var { active: a } = this,
          b = this.list
            ? Bb(fa(), this.handleShortcut, this.list, this.shortcuts.label, a)
            : "",
          c = this.buttons
            ? Bb(
                ea(),
                this.buttons.map((b) =>
                  Bb(
                    da(),
                    dc(this.shortcutStyle(b)),
                    this.shortcuts.columns,
                    b.id === a,
                    (a) => this.handleShortcut(a, b),
                    this.shortcuts.align_text,
                    b.icon ? Bb(ca(), b.icon) : "",
                    b.image ? Bb(ba(), b.image) : "",
                    b.name ? Bb(aa(), b.name) : ""
                  )
                )
              )
            : "";
        return Bb(_(), c, b);
      }
      handleShortcut(a, b) {
        var { type: c, id: d, data: e } = b || a.detail;
        if ("source" === c) return this.player.setSource(a, d);
        if ("service" === c) return this.player.toggleService(a, d, e);
        if ("script" === c) return this.player.toggleScript(a, d, e);
        if ("sound_mode" === c) return this.player.setSoundMode(a, d);
        this.player.setMedia(a, { media_content_type: c, media_content_id: d });
      }
      shortcutStyle(a) {
        return Da(
          { "min-height": "".concat(this.height, "px") },
          a.cover && { "background-image": "url(".concat(a.cover, ")") }
        );
      }
      static get styles() {
        return [Dc, Yb($())];
      }
    }
    customElements.define("mmp-shortcuts", Jc);
    var Kc = function (a, b) {
      var c =
          2 < arguments.length && arguments[2] !== void 0
            ? arguments[2]
            : "unknown",
        d = a.selectedLanguage || a.language,
        e = a.resources[d];
      return e && e[b] ? e[b] : c;
    };
    class Lc extends $b {
      static get properties() {
        return { hass: {}, config: {}, player: {} };
      }
      get label() {
        return Kc(this.hass, "ui.card.media_player.text_to_speak", "Say");
      }
      get input() {
        return this.shadowRoot.getElementById("tts-input");
      }
      get message() {
        return this.input.value;
      }
      render() {
        return Bb(Z(), this.label, (a) => a.stopPropagation(), this.handleTts);
      }
      handleTts(a) {
        var { config: b, message: c } = this,
          d = Da(
            { message: c, entity_id: b.entity_id || this.player.id },
            "group" === b.entity_id && { entity_id: this.player.group }
          );
        b.language && (d.language = b.language),
          "alexa" === b.platform
            ? this.hass.callService("notify", "alexa_media", {
                message: c,
                data: { type: b.type || "tts" },
                target: d.entity_id,
              })
            : "sonos" === b.platform
            ? this.hass.callService("script", "sonos_say", {
                sonos_entity: d.entity_id,
                volume: b.volume || 0.5,
                message: c,
              })
            : "webos" === b.platform
            ? this.hass.callService(
                "notify",
                d.entity_id.split(".").slice(-1)[0],
                { message: c }
              )
            : "ga" === b.platform
            ? this.hass.callService("notify", "ga_broadcast", { message: c })
            : this.hass.callService("tts", "".concat(b.platform, "_say"), d),
          a.stopPropagation(),
          this.reset();
      }
      reset() {
        this.input.value = "";
      }
      static get styles() {
        return Yb(Y());
      }
    }
    customElements.define("mmp-tts", Lc);
    var Mc = (a) => {
      var b = parseInt(a % 60, 10),
        c = parseInt((a / 60) % 60, 10),
        d = parseInt((a / 3600) % 24, 10);
      return (
        (d = 10 > d ? "0".concat(d) : d),
        (c = 10 > c ? "0".concat(c) : c),
        (b = 10 > b ? "0".concat(b) : b),
        ""
          .concat("00" === d ? "" : "".concat(d, ":"))
          .concat(c, ":")
          .concat(b)
      );
    };
    class Nc extends $b {
      static get properties() {
        return {
          _player: {},
          showTime: Boolean,
          progress: Number,
          duration: Number,
          tracker: {},
          seekProgress: Number,
          seekWidth: Number,
          track: Boolean,
        };
      }
      set player(a) {
        (this._player = a), this.hasProgress && this.trackProgress();
      }
      get duration() {
        return this.player.mediaDuration;
      }
      get player() {
        return this._player;
      }
      get hasProgress() {
        return this.player.hasProgress;
      }
      get width() {
        return this.shadowRoot.querySelector(".mmp-progress").offsetWidth;
      }
      get offset() {
        return this.getBoundingClientRect().left;
      }
      get classes() {
        return bc({
          transiting: !this.seekProgress,
          seeking: this.seekProgress,
        });
      }
      render() {
        return Bb(
          X(),
          this.initSeek,
          this.handleSeek,
          this.initSeek,
          this.handleSeek,
          this.resetSeek,
          (a) => a.stopPropagation(),
          !this.player.isPlaying,
          this.showTime
            ? Bb(W(), Mc(this.seekProgress || this.progress), Mc(this.duration))
            : "",
          this.classes,
          this.seekProgress || this.progress,
          this.duration
        );
      }
      trackProgress() {
        (this.progress = this.player.progress),
          this.tracker ||
            (this.tracker = setInterval(() => this.trackProgress(), 1e3)),
          this.player.isPlaying ||
            (clearInterval(this.tracker), (this.tracker = null));
      }
      initSeek(a) {
        var b = a.offsetX || a.touches[0].pageX - this.offset;
        (this.seekWidth = this.width),
          (this.seekProgress = this.calcProgress(b)),
          this.addEventListener("touchmove", this.moveSeek),
          this.addEventListener("mousemove", this.moveSeek);
      }
      resetSeek() {
        (this.seekProgress = null),
          this.removeEventListener("touchmove", this.moveSeek),
          this.removeEventListener("mousemove", this.moveSeek);
      }
      moveSeek(a) {
        a.preventDefault();
        var b = a.offsetX || a.touches[0].pageX - this.offset;
        this.seekProgress = this.calcProgress(b);
      }
      handleSeek(a) {
        this.resetSeek();
        var b = a.offsetX || a.changedTouches[0].pageX - this.offset,
          c = this.calcProgress(b);
        this.player.seek(a, c);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this.resetSeek(),
          clearInterval(this.tracker),
          (this.tracker = null);
      }
      connectedCallback() {
        super.connectedCallback(), this.hasProgress && this.trackProgress();
      }
      calcProgress(a) {
        var b = (a / this.seekWidth) * this.duration;
        return Ra(Qa(b, 0.1), this.duration);
      }
      static get styles() {
        return Yb(V());
      }
    }
    customElements.define("mmp-progress", Nc);
    class Oc extends $b {
      static get properties() {
        return { player: {}, icon: Boolean };
      }
      get source() {
        return this.player.source;
      }
      get sources() {
        return this.player.sources.map((a) => ({
          name: a,
          id: a,
          type: "source",
        }));
      }
      render() {
        return Bb(
          U(),
          this.handleSource,
          this.sources,
          this.source,
          this.source,
          this.icon
        );
      }
      handleSource(a) {
        var { id: b } = a.detail;
        this.player.setSource(a, b);
      }
      static get styles() {
        return Yb(T());
      }
    }
    customElements.define("mmp-source-menu", Oc);
    class Pc extends $b {
      static get properties() {
        return { player: {}, selected: String, icon: Boolean };
      }
      get mode() {
        return this.player.soundMode;
      }
      get modes() {
        return this.player.soundModes.map((a) => ({
          name: a,
          id: a,
          type: "soundMode",
        }));
      }
      render() {
        return Bb(
          S(),
          this.handleChange,
          this.modes,
          this.mode,
          this.selected || this.mode,
          this.icon
        );
      }
      handleChange(a) {
        var { id: b } = a.detail;
        this.player.setSoundMode(a, b), (this.selected = b);
      }
      static get styles() {
        return Yb(R());
      }
    }
    customElements.define("mmp-sound-menu", Pc);
    class Qc extends $b {
      static get properties() {
        return { player: {}, config: {}, break: Boolean };
      }
      get showShuffle() {
        return !this.config.hide.shuffle && this.player.supportsShuffle;
      }
      get maxVol() {
        return this.config.max_volume || 100;
      }
      get minVol() {
        return this.config.min_volume || 0;
      }
      render() {
        var { hide: a } = this.config;
        return Bb(
          Q(),
          a.volume ? Bb(P()) : this.renderVolControls(this.player.muted),
          this.showShuffle
            ? Bb(
                O(),
                (a) => this.player.toggleShuffle(a),
                wc.SHUFFLE,
                this.player.shuffle
              )
            : Bb(N()),
          a.controls
            ? Bb(J())
            : Bb(
                M(),
                this.config.flow || this.break,
                a.prev ? "" : Bb(L(), (a) => this.player.prev(a), wc.PREV),
                this.renderPlayButtons(),
                a.next ? "" : Bb(K(), (a) => this.player.next(a), wc.NEXT)
              )
        );
      }
      renderVolControls(a) {
        return this.config.volume_stateless
          ? this.renderVolButtons(a)
          : this.renderVolSlider(a);
      }
      renderVolSlider(a) {
        return Bb(
          I(),
          this.renderMuteButton(a),
          this.handleVolumeChange,
          (a) => a.stopPropagation(),
          a,
          this.minVol,
          this.maxVol,
          100 * this.player.vol,
          "ltr"
        );
      }
      renderVolButtons(a) {
        return Bb(
          H(),
          this.renderMuteButton(a),
          (a) => this.player.volumeDown(a),
          wc.VOL_DOWN,
          (a) => this.player.volumeUp(a),
          wc.VOL_UP
        );
      }
      renderMuteButton(a) {
        if (!this.config.hide.mute)
          switch (this.config.replace_mute) {
            case "play":
            case "play_pause":
              return Bb(
                G(),
                (a) => this.player.playPause(a),
                wc.PLAY[this.player.isPlaying]
              );
            case "stop":
              return Bb(F(), (a) => this.player.stop(a), wc.STOP.true);
            case "play_stop":
              return Bb(
                E(),
                (a) => this.player.playStop(a),
                wc.STOP[this.player.isPlaying]
              );
            case "next":
              return Bb(D(), (a) => this.player.next(a), wc.NEXT);
            default:
              return this.player.supportsMute
                ? Bb(C(), (a) => this.player.toggleMute(a), wc.MUTE[a])
                : void 0;
          }
      }
      renderPlayButtons() {
        var { hide: a } = this.config;
        return Bb(
          B(),
          a.play_pause
            ? Bb(z())
            : Bb(
                A(),
                (a) => this.player.playPause(a),
                wc.PLAY[this.player.isPlaying]
              ),
          a.play_stop
            ? Bb(x())
            : Bb(
                y(),
                (a) => this.handleStop(a),
                a.play_pause ? wc.STOP[this.player.isPlaying] : wc.STOP.true
              )
        );
      }
      handleStop(a) {
        return this.config.hide.play_pause
          ? this.player.playStop(a)
          : this.player.stop(a);
      }
      handleVolumeChange(a) {
        var b = parseFloat(a.target.value) / 100;
        this.player.setVolume(a, b);
      }
      static get styles() {
        return [Dc, Yb(w())];
      }
    }
    customElements.define("mmp-media-controls", Qc);
    class Rc extends $b {
      static get properties() {
        return {
          hass: {},
          player: {},
          config: {},
          groupVisible: Boolean,
          idle: Boolean,
        };
      }
      get icon() {
        return this.config.speaker_group.icon || wc.GROUP;
      }
      get showGroupButton() {
        return this.config.speaker_group.entities;
      }
      get showPowerButton() {
        return !this.config.hide.power;
      }
      get powerColor() {
        return this.player.active && !this.config.hide.power_state;
      }
      get sourceSize() {
        return "icon" === this.config.source || this.hasControls || this.idle;
      }
      get soundSize() {
        return (
          "icon" === this.config.sound_mode || this.hasControls || this.idle
        );
      }
      get hasControls() {
        return (
          this.player.active &&
          this.config.hide.controls !== this.config.hide.volume
        );
      }
      get hasSource() {
        return 0 < this.player.sources.length && !this.config.hide.source;
      }
      get hasSoundMode() {
        return (
          0 < this.player.soundModes.length && !this.config.hide.sound_mode
        );
      }
      render() {
        return this.player.isUnavailable
          ? Bb(v(), Kc(this.hass, "state.default.unavailable", "Unavailable"))
          : Bb(
              u(),
              this.idle ? this.renderIdleView : "",
              this.hasControls ? Bb(t(), this.player, this.config) : "",
              this.hasSource
                ? Bb(
                    s(),
                    this.player,
                    this.sourceSize,
                    "full" === this.config.source
                  )
                : "",
              this.hasSoundMode
                ? Bb(
                    r(),
                    this.player,
                    this.soundSize,
                    "full" === this.config.sound_mode
                  )
                : "",
              this.showGroupButton
                ? Bb(
                    q(),
                    this.icon,
                    !this.player.isGrouped,
                    this.groupVisible,
                    this.handleGroupClick
                  )
                : "",
              this.showPowerButton
                ? Bb(
                    p(),
                    wc.POWER,
                    (a) => this.player.toggle(a),
                    this.powerColor
                  )
                : ""
            );
      }
      handleGroupClick(a) {
        a.stopPropagation(),
          this.dispatchEvent(new CustomEvent("toggleGroupList"));
      }
      get renderIdleView() {
        return this.player.isPaused
          ? Bb(o(), wc.PLAY[this.player.isPlaying], (a) =>
              this.player.playPause(a)
            )
          : Bb(n(), Kc(this.hass, "state.media_player.idle", "Idle"));
      }
      static get styles() {
        return [Dc, Yb(m())];
      }
    }
    customElements.define("mmp-powerstrip", Rc),
      customElements.get("ha-slider") ||
        customElements.define(
          "ha-slider",
          class extends customElements.get("paper-slider") {}
        ),
      customElements.get("ha-icon-button") ||
        customElements.define(
          "ha-icon-button",
          class extends customElements.get("paper-icon-button") {}
        ),
      customElements.get("ha-icon") ||
        customElements.define(
          "ha-icon",
          class extends customElements.get("iron-icon") {}
        );
    class Sc extends $b {
      constructor() {
        super(),
          (this._overflow = !1),
          (this.initial = !0),
          (this.picture = !1),
          (this.thumbnail = !1),
          (this.edit = !1),
          (this.rtl = !1);
      }
      static get properties() {
        return {
          _hass: {},
          config: {},
          entity: {},
          player: {},
          _overflow: Boolean,
          break: Boolean,
          initial: Boolean,
          picture: String,
          thumbnail: String,
          edit: Boolean,
          rtl: Boolean,
          idle: Boolean,
        };
      }
      static get styles() {
        return [Dc, Cc];
      }
      set hass(a) {
        if (a) {
          var b = a.states[this.config.entity];
          (this._hass = a),
            b &&
              this.entity !== b &&
              ((this.entity = b),
              (this.player = new Bc(a, this.config, b)),
              (this.rtl = this.computeRTL(a)),
              (this.idle = this.player.idle),
              this.player.trackIdle && this.updateIdleStatus());
        }
      }
      get hass() {
        return this._hass;
      }
      set overflow(a) {
        this._overflow !== a && (this._overflow = a);
      }
      get overflow() {
        return this._overflow;
      }
      get name() {
        return this.config.name || this.player.name;
      }
      setConfig(a) {
        if (!a.entity || "media_player" !== a.entity.split(".")[0])
          throw new Error(
            "Specify an entity from within the media_player domain."
          );
        var b = Da(
          Da(
            {
              artwork: "default",
              info: "default",
              more_info: !0,
              source: "default",
              sound_mode: "default",
              toggle_power: !0,
              volume_step: null,
              tap_action: { action: "more-info" },
            },
            a
          ),
          {},
          {
            hide: Da(Da({}, vc), a.hide),
            speaker_group: Da(
              Da({ show_group_count: !0, platform: "sonos" }, a.sonos),
              a.speaker_group
            ),
            shortcuts: Da({ label: "Shortcuts..." }, a.shortcuts),
          }
        );
        (b.max_volume = +b.max_volume || 100),
          (b.min_volume = +b.min_volume || 0),
          (b.collapse = b.hide.controls || b.hide.volume),
          (b.info = b.collapse && "scroll" !== b.info ? "short" : b.info),
          (b.flow = b.hide.icon && b.hide.name && b.hide.info),
          (this.config = b);
      }
      shouldUpdate(a) {
        return (
          void 0 === this.break && this.computeRect(this),
          xc.some((b) => a.has(b)) && this.player
        );
      }
      firstUpdated() {
        var a = new uc((a) => {
          a.forEach((a) => {
            window.requestAnimationFrame(() => {
              "scroll" === this.config.info && this.computeOverflow(),
                this._resizeTimer ||
                  (this.computeRect(a),
                  (this._resizeTimer = setTimeout(() => {
                    (this._resizeTimer = null),
                      this.computeRect(this._resizeEntry);
                  }, 250))),
                (this._resizeEntry = a);
            });
          });
        });
        a.observe(this),
          setTimeout(() => (this.initial = !1), 250),
          (this.edit = this.config.speaker_group.expanded || !1);
      }
      updated() {
        "scroll" === this.config.info &&
          setTimeout(() => {
            this.computeOverflow();
          }, 10);
      }
      render() {
        var { config: a } =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : this,
          b = this.computeArtwork();
        return Bb(
          l(),
          this.computeClasses(),
          this.computeStyles(),
          (a) => this.handlePopup(a),
          a.artwork,
          this.player.content,
          this.renderArtwork(b),
          this.player.idle,
          this.renderIcon(b),
          this.renderEntityName(),
          this.renderMediaInfo(),
          this.toggleGroupList,
          this.hass,
          this.player,
          a,
          this.edit,
          this.idle,
          a.flow,
          !a.collapse && this.player.active
            ? Bb(k(), this.player, a, this.break)
            : "",
          this.player,
          a.shortcuts,
          a.tts ? Bb(j(), a.tts, this.hass, this.player) : "",
          this.edit,
          a.speaker_group.entities,
          this.player,
          this.player.active && this.player.hasProgress
            ? Bb(i(), this.player, !this.config.hide.runtime)
            : ""
        );
      }
      renderArtwork(a) {
        if (this.thumbnail || this.config.background) {
          var b =
            this.config.background && (!a || "default" === this.config.artwork)
              ? "url(".concat(this.config.background, ")")
              : this.thumbnail;
          return Bb(h(), b);
        }
      }
      handlePopup(a) {
        a.stopPropagation(),
          Ec(
            this,
            this._hass,
            this.config,
            this.config.tap_action,
            this.player.id
          );
      }
      renderIcon(a) {
        if (!this.config.hide.icon) {
          if (this.player.active && a && "default" === this.config.artwork)
            return Bb(
              g(),
              this.thumbnail,
              !this.config.hide.artwork_border,
              this.player.state
            );
          var b = !this.config.hide.icon_state && this.player.isActive;
          return Bb(f(), b, this.computeIcon());
        }
      }
      renderEntityName() {
        return this.config.hide.name
          ? void 0
          : Bb(e(), this.name, this.speakerCount());
      }
      renderMediaInfo() {
        if (!this.config.hide.info) {
          var e = this.player.mediaInfo;
          return Bb(
            d(),
            "short" === this.config.info || !this.player.active,
            "scroll" === this.config.info,
            this.overflow,
            this.overflow,
            "scroll" === this.config.info
              ? Bb(
                  c(),
                  e.map((a) =>
                    Bb(b(), "attr__".concat(a.attr), a.prefix + a.text)
                  )
                )
              : "",
            e.map((b) => Bb(a(), "attr__".concat(b.attr), b.prefix + b.text))
          );
        }
      }
      speakerCount() {
        if (this.config.speaker_group.show_group_count) {
          var a = this.player.groupCount;
          return 1 < a ? " +".concat(a - 1) : "";
        }
      }
      computeClasses() {
        var { config: a } =
          0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this;
        return bc({
          "--responsive": this.break || a.hide.icon,
          "--initial": this.initial,
          "--bg": a.background,
          "--group": a.group,
          "--more-info": "none" !== a.tap_action,
          "--has-artwork": this.player.hasArtwork && this.thumbnail,
          "--flow": a.flow,
          "--collapse": a.collapse,
          "--rtl": this.rtl,
          "--progress": this.player.hasProgress,
          "--runtime": !a.hide.runtime && this.player.hasProgress,
          "--inactive": !this.player.isActive,
        });
      }
      computeStyles() {
        var { scale: a } = this.config;
        return dc(Da({}, a && { "--mmp-unit": "".concat(40 * a, "px") }));
      }
      computeArtwork() {
        var { picture: a, hasArtwork: b } = this.player;
        return (
          b &&
            a !== this.picture &&
            ((this.thumbnail = this.player.artwork), (this.picture = a)),
          !!(b && this.thumbnail)
        );
      }
      computeIcon() {
        return this.config.icon
          ? this.config.icon
          : this.player.icon || wc.DEFAULT;
      }
      computeOverflow() {
        var a = this.shadowRoot.querySelector(".marquee");
        if (a) {
          var b = a.clientWidth > a.parentNode.clientWidth;
          this.overflow =
            !!(b && this.player.active) && 7.5 + a.clientWidth / 50;
        }
      }
      computeRect(a) {
        var { left: b, width: c } = a.contentRect || a.getBoundingClientRect();
        this.break = c + 2 * b < 390;
      }
      computeRTL(a) {
        var b = a.language || "en";
        return (
          !!a.translationMetadata.translations[b] &&
          (a.translationMetadata.translations[b].isRTL || !1)
        );
      }
      toggleGroupList() {
        this.edit = !this.edit;
      }
      fire(a, b, c) {
        var d = c || {},
          f = null === b || void 0 === b ? {} : b,
          g = new Event(a, {
            bubbles: void 0 === d.bubbles || d.bubbles,
            cancelable: !!d.cancelable,
            composed: void 0 === d.composed || d.composed,
          });
        return (g.detail = f), this.dispatchEvent(g), g;
      }
      updateIdleStatus() {
        this._idleTracker && clearTimeout(this._idleTracker);
        var a = (Date.now() - new Date(this.player.updatedAt).getTime()) / 1e3;
        this._idleTracker = setTimeout(() => {
          (this.idle = this.player.checkIdleAfter(this.config.idle_view.after)),
            (this.player.idle = this.idle),
            (this._idleTracker = null);
        }, 1e3 * (60 * this.config.idle_view.after - a));
      }
      getCardSize() {
        return this.config.collapse ? 1 : 2;
      }
    }
    customElements.define("mini-media-player", Sc);
  });
})();
