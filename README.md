# ClearLooks(-like) Scrollbars for Firefox 98+

Custom JS that styles Scrollbars in Firefox to resemble a grey ClearLooks Gtk theme.

![preview](/scrollbar.png?raw=true)

Extra steps are necessary to get Firefox to load custom JS, e.g. methods 1 or 2
documented at [https://github.com/Aris-t2/CustomJSforFx](https://github.com/Aris-t2/CustomJSforFx).

As of Fx113, scrollbar width CSS doesn't work, so
`widget.non-native-theme.scrollbar.size.override` needs to be
configured to cs\_width + 2x cs\_border! (16 if you kept the defaults.)

For best results, `widget.non-native-theme.gtk.scrollbar.allow-buttons` and
the 'always show scrollbars' setting should both be true.
