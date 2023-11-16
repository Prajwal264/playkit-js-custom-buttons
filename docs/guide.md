# usage guide

- [Getting started](#getting-started)
  - [Setup](#setup)
  - [Configuration](#configuration)

## Getting started

### Setup

First include `playkit-custom-buttons-plugin.js` **after** kaltura-player script in your web page.

```html
<script src="https://raw.githack.com/kaltura/kaltura-player-js/master/dist/kaltura-ovp-player.js"></script>
<script src="./playkit-custom-buttons-plugin.js"></script>
```

Add the plugin-example to the player config under the plugins section.

```js
const config = {
  targetId: 'player-placeholder',
  provider: {
    partnerId: 1234567
  },
  plugins: {
    customButtons: {
      items: [
        {
          label: 'button',
          area: 'BottomBarRightControls',
          presets: ['Playback'],
          onClick: () => {
            console.log('clicked');
          },
          className: 'button',
          content: 'Click Me!',
          beforeComponent: 'Volume'
        }
      ]
    }
  }
};

const player = KalturaPlayer.setup(config);
```