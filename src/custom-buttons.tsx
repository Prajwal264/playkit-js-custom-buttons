import { BasePlugin, ui } from '@playkit-js/kaltura-player-js';
import { CustomButtonsPluginConfig } from './types/custom-buttons-plugin-config';
import { h } from 'preact';
import { CustomButtonComponent } from './ui/custom-button/custom-button.component';

export const pluginName = 'customButtons';

export class CustomButtonsPlugin extends BasePlugin<CustomButtonsPluginConfig> {
  protected static defaultConfig: CustomButtonsPluginConfig = {
    items: []
  };

  public static isValid(): boolean {
    return true;
  }

  protected loadMedia(): void {
    this.addCustomComponents();
  }

  private addCustomComponents(): void {
    for (const item of this.config.items) {
      this.player.ui.addComponent({
        label: item.label,
        area: item.area,
        presets: item.presets,
        get: CustomButtonComponent,
        beforeComponent: item.beforeComponent,
        afterComponent: item.afterComponent,
        props: {
          className: item.className,
          content: item.content,
          onClick: item.onClick
        }
      });
    }
  }
}
