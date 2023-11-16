import chai, { expect } from 'chai';
import '../../src/index';
import { setup } from '@playkit-js/kaltura-player-js';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';
/* eslint-disable jest/valid-expect */


const onClick = () => {
  console.log('Clicked');
};

describe('Custom Buttons', () => {
  let player;
  const pluginConfig = {
    plugins: {
      customButtons: {
        items: [
          {
            label: 'button',
            area: 'BottomBarRightControls',
            presets: ['Playback'],
            onClick,
            className: 'plugin-js-button',
            content: 'Button',
            beforeComponent: 'Volume'
          }
        ]
      }
    }
  };

  before(async () => {
    const element = document.createElement('div');
    element.id = targetId;
    document.body.appendChild(element);
  });

  after(() => {
    document.getElementById(targetId).remove();
  });

  afterEach(() => {
    player.destroy();
    for (const element of document.getElementsByTagName('video')) {
      element.remove();
    }
  });

  it('Plugin configured properly', async () => {
    player = setup({
      ...config,
      ...pluginConfig
    });
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();
    const pluginInstance = player.plugins.customButtons;
    // Expect
    expect(pluginInstance.config.items.length).equal(1);
    expect(pluginInstance.config.items[0].label).equal('button');
    expect(pluginInstance.config.items[0].area).equal('BottomBarRightControls');
    expect(pluginInstance.config.items[0].presets[0]).equal('Playback');
    expect(pluginInstance.config.items[0].className).equal('plugin-js-button');
    expect(pluginInstance.config.items[0].content).equal('Button');
    expect(pluginInstance.config.items[0].beforeComponent).equal('Volume');
  });

  it('Button should have the class name', async () => {
    // Given
    player = setup({
      ...config,
      ...pluginConfig
    });
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();
    const customButton = document.querySelector('.plugin-js-button');
    expect(customButton.classList.contains('plugin-js-button')).equal(true);
  });

  it('Button should have the provided content', async () => {
    // Given
    player = setup({
      ...config,
      ...pluginConfig
    });
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();
    const customButton = document.querySelector('.plugin-js-button');
    expect(customButton.textContent).equal(pluginConfig.plugins.customButtons.items[0].content);
  });

  it('Fire a click event when button is clicked on', async () => {
    // Given
    player = setup({
      ...config,
      ...pluginConfig
    });
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();
    // Capture the original console.log method
    const originalConsoleLog = console.log;

    // Create a variable to store the logged messages
    let loggedMessage;

    // Override console.log to capture the message
    console.log = (message) => {
      loggedMessage = message;
    };

    // Do
    const customButton = document.querySelector('.plugin-js-button');
    customButton.click();

    // Assert the content of the logged message
    expect(loggedMessage).to.equal('Clicked');

    // Restore the original console.log method
    console.log = originalConsoleLog;
  });
});
