# PlayKit JS Custom Buttons - Custom Buttons plugin for the [PlayKit JS Player]

<!--[![Build Status](https://github.com/kaltura/playkit-js-downloads/actions/workflows/run_canary.yaml/badge.svg)](https://github.com/kaltura/playkit-js-downloads/actions/workflows/run_canary.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js-downloads/latest.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js-downloads)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js-downloads/canary.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js-downloads/v/canary) -->

This plugin enables custom buttons to be added on top of the Kaltura Player.

PlayKit JS Custom Buttons is written in [ECMAScript6], statically analysed using [Typescript] and transpiled in ECMAScript5 using [Babel].

[typescript]: https://www.typescriptlang.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io

## Getting Started

### Prerequisites

The plugin requires [Kaltura Player] and [playkit-ui-managers] to be loaded first.

[kaltura player]: https://github.com/kaltura/kaltura-player-js
[playkit-ui-managers]: https://github.com/kaltura/playkit-js-ui-managers

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/Prajwal264/playkit-js-custom-buttons.git
cd playkit-js-custom-buttons
yarn install
```

### Building

Then, build the plugin

```javascript
yarn run build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<!--Kaltura player-->
<script type="text/javascript" src="/PATH/TO/FILE/kaltura-player.js"></script>
<!--Playkit ui managers plugin -->
<script type="text/javascript" src="/PATH/TO/FILE/playkit-ui-manager.js"></script>
<!--PlayKit download plugin-->
<script type="text/javascript" src="/PATH/TO/FILE/playkit-custom-buttons-plugin.js"></script>
<div id="player-placeholder" style="height:360px; width:640px">
  <script type="text/javascript">
    var playerContainer = document.querySelector("#player-placeholder");
    var config = {
     ...
     targetId: 'player-placeholder',
     plugins: {
       customButtons: {
         items: [{
            label: 'button',
            area: 'BottomBarRightControls',
            presets: ['Playback'],
            onClick: () => { console.log('clicked') },
            className: 'button',
            content: 'Click Me!',
            beforeComponent: 'Volume',
         }]  
       }
     },
     ...
    };
    var player = KalturaPlayer.setup(config);
    player.loadMedia(...);
  </script>
</div>
```

#### Configuation Example

* You may enable the download plugin just by adding it without any specific plugin config to the plugins config section or also add your own preferred config

```
plugins: {
  customButtons: {
     items: [{
        label: 'button',
        area: 'BottomBarRightControls',
        presets: ['Playback'],
        onClick: () => { console.log('clicked') },
        className: 'button',
        content: 'Click Me!',
        beforeComponent: 'Volume',
     }]  
   }
}
```

```
plugins: {
  customButtons: {
     items: [{
        label: 'button',   // name of the button to be inserted
        area: 'BottomBarRightControls',  // area of insertion
        presets: ['Playback'], // presets
        onClick: () => { console.log('clicked') }, // onClick handler
        className: 'button',  // class name for the button
        content: 'Click Me!',  // content to be inserted 
        beforeComponent: 'Volume',  // position of insertion
        afterComponent: undefined,  // position of insertion
     }]  
  }
}
```

### And coding style tests

We use ESLint [recommended set](http://eslint.org/docs/rules/) with some additions for enforcing [Flow] types and other rules.

See [ESLint config](.eslintrc.json) for full configuration.

We also use [.editorconfig](.editorconfig) to maintain consistent coding styles and settings, please make sure you comply with the styling.

## Compatibility

TBD
