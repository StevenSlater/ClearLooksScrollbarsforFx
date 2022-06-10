"use strict";

/* ClearLooks Scrollbars for Firefox 98+ *************************************
 based on Aris-t2 / CustomJSforFx
 customized to resemble ClearLooks Gtk theme
 'method 1' or 'method 2' is required to load custom js in Firefox
 STARTUP CACHE HAS TO BE DELETED AFTER EVERY CHANGE!
 'widget.non-native-theme.gtk.scrollbar.allow-buttons' needs to be true
 'always show scrollbars' setting should be true
*****************************************************************************/

var cs_border = 1; // in px
var cs_border_color = "#919191";
var cs_border_radius = 3; // in px
var cs_background_color = "#d6d4d2";
var cs_corner_color = "#e8e7e5";
var cs_width = 14;
var cs_button_length = 14;
var cs_thumb_image_vertical = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHCAYAAAArkDztAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQI12PMyMhoY2BgqGRABe0MJANGOhgFAPm5CD5Gino4AAAAAElFTkSuQmCC)";
var cs_thumb_image_horizontal = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAGCAYAAAAPDoR2AAAABmJLR0QA/wD/AP+gvaeTAAAAJUlEQVQI12PIyMhoY4ACdDYTAwNDJQMCoLCZGPAAyiTbkfgobAAQ6AhFazuzRQAAAABJRU5ErkJggg==)";
var cs_gradient_vertical = "linear-gradient(to right,#e8e8e8 0%,#dfdfdf 49%,#d9d9d9 50%,#cdcdcd 100%)";
var cs_gradient_horizontal = "linear-gradient(to bottom,#e8e8e8 0%,#dfdfdf 49%,#d9d9d9 50%,#cdcdcd 100%)";
var cs_gradient_vertical_hover = "linear-gradient(to right,#f1f1f1 0%,#e8e8e8 49%,#e1e1e1 50%,#d5d5d5 100%)";
var cs_gradient_horizontal_hover = "linear-gradient(to bottom,#f1f1f1 0%,#e8e8e8 49%,#e1e1e1 50%,#d5d5d5 100%)";
var cs_button_image_vertical_increment = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAABmJLR0QA/wD/AP+gvaeTAAAAP0lEQVQI12PMyMhoY2BgqGTADtqZz5w5s9fExISdgYHBFl1yxowZVcwMDAwMWBS1z5gxowrDvIyMjDaolXAAACSoE9YP5UYKAAAAAElFTkSuQmCC)";
var cs_button_image_vertical_decrement = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAABmJLR0QA/wD/AP+gvaeTAAAANklEQVQI12NgQAIZGRltGRkZbchizMiSDAwMlQwMDLYmJibsZ86c2QtXgCQJA3BFjFgkkUE7ANHGErJw43TbAAAAAElFTkSuQmCC)";
var cs_button_image_horizontal_increment = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVQI112NwQkAMAwCj9BhXSEdoF0h4/ZTgsSPeCgi6WAKIB3G94bL2impG8wJwK2qHR4AmLcP72wPPBuoojIAAAAASUVORK5CYII=)";
var cs_button_image_horizontal_decrement = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAABmJLR0QA/wD/AP+gvaeTAAAAPUlEQVQI113KsQ2AQAzAwAspWCgt+2QFFmArNvihqF6KcGfLDLr7iSm4YwrEFDj8yLXWW1UnLkiYMfe64weHExQ4Szh5VwAAAABJRU5ErkJggg==)";

/****************************************************************************/

Components.utils.import("resource://gre/modules/Services.jsm");
var ss =  Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
@namespace html url("http://www.w3.org/1999/xhtml");\
\
scrollbar, scrollcorner, scrollbar thumb, scrollbar scrollbarbutton {\
  -moz-appearance: none !important;\
}\
scrollbar {\
  background-color: '+cs_background_color+' !important;\
  border-color: '+cs_border_color+' !important;\
  border-radius: '+cs_border_radius+'px !important;\
  border-style: solid !important;\
  border-width: '+cs_border+'px !important;\
}\
scrollcorner {\
  background-color: '+cs_corner_color+' !important;\
}\
scrollbar thumb {\
  border-color: '+cs_border_color+' !important;\
  border-radius: '+cs_border_radius+'px !important;\
  border-style: solid !important;\
  border-width: 0px !important;\
}\
scrollbar thumb[orient="vertical"] {\
  background-image: '+cs_thumb_image_vertical+','+cs_gradient_vertical+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-width: '+cs_border+'px 0px !important;\
}\
scrollbar thumb[orient="horizontal"] {\
  background-image: '+cs_thumb_image_horizontal+','+cs_gradient_horizontal+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-width: 0px '+cs_border+'px !important;\
}\
\
'), null, null);
ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

// apparently, some styles need to be applied in a second/separate request
// (otherwise the buttons won't render, hover settings won't take effect, etc)
// perhaps some of the above styles cause FF to overwrite others as a side effect?

uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
@namespace html url("http://www.w3.org/1999/xhtml");\
\
scrollbar scrollbarbutton, \
scrollbar[orient="vertical"] scrollbarbutton,\
scrollbar[orient="horizontal"] scrollbarbutton, \
scrollbar[orient="vertical"] scrollbarbutton:hover,\
scrollbar[orient="horizontal"] scrollbarbutton:hover {\
  border-radius: 0px !important;\
}\
\
scrollbar thumb[orient="vertical"]:hover, scrollbar thumb[orient="vertical"]:active {\
  background-image: '+cs_thumb_image_vertical+','+cs_gradient_vertical_hover+' !important;\
}\
scrollbar thumb[orient="horizontal"]:hover, scrollbar thumb[orient="horizontal"]:active {\
  background-image: '+cs_thumb_image_horizontal+','+cs_gradient_horizontal_hover+' !important;\
}\
\
scrollbar[orient="vertical"] scrollbarbutton {\
  min-width: '+cs_width+'px !important;\
  width: '+cs_width+'px !important;\
  max-width: '+cs_width+'px !important;\
  min-height: '+cs_button_length+'px !important;\
  height: '+cs_button_length+'px !important;\
  max-height: '+cs_button_length+'px !important;\
}\
scrollbar[orient="vertical"] scrollbarbutton[type="decrement"] {\
  background-image: '+cs_button_image_vertical_decrement+','+cs_gradient_vertical+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-color: '+cs_border_color+' !important;\
  border-radius: 0px !important;\
  border-style: solid !important;\
  border-width: 0px 0px '+cs_border+'px 0px !important;\
}\
scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:hover {\
  background-image: '+cs_button_image_vertical_decrement+','+cs_gradient_vertical_hover+' !important;\
}\
scrollbar[orient="vertical"] scrollbarbutton[type="increment"] {\
  background-image: '+cs_button_image_vertical_increment+','+cs_gradient_vertical+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-color: '+cs_border_color+' !important;\
  border-radius: 0px !important;\
  border-style: solid !important;\
  border-width: '+cs_border+'px 0px 0px 0px !important;\
}\
scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:hover {\
  background-image: '+cs_button_image_vertical_increment+','+cs_gradient_vertical_hover+' !important;\
}\
scrollbar[orient="horizontal"] scrollbarbutton {\
  min-width: '+cs_button_length+'px !important;\
  width: '+cs_button_length+'px !important;\
  max-width: '+cs_button_length+'px !important;\
  min-height: '+cs_width+'px !important;\
  height: '+cs_width+'px !important;\
  max-height: '+cs_width+'px !important;\
}\
scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"] {\
  background-image: '+cs_button_image_horizontal_decrement+','+cs_gradient_horizontal+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-color: '+cs_border_color+' !important;\
  border-radius: 0px !important;\
  border-style: solid !important;\
  border-width: 0px 0px '+cs_border+'px 0px !important;\
}\
scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:hover {\
  background-image: '+cs_button_image_horizontal_decrement+','+cs_gradient_horizontal_hover+' !important;\
}\
scrollbar[orient="horizontal"] scrollbarbutton[type="increment"] {\
  background-image: '+cs_button_image_horizontal_increment+','+cs_gradient_horizontal+' !important;\
  background-position: center,left top !important;\
  background-repeat: no-repeat,repeat !important;\
  border-color: '+cs_border_color+' !important;\
  border-radius: 0px !important;\
  border-style: solid !important;\
  border-width: '+cs_border+'px 0px 0px 0px !important;\
}\
scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:hover {\
  background-image: '+cs_button_image_horizontal_increment+','+cs_gradient_horizontal_hover+' !important;\
}\
'), null, null);
ss.loadAndRegisterSheet(uri, ss.AGENT_SHEET);

