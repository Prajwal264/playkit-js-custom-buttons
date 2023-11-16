import { h, Component, ComponentChild } from 'preact';
import { PlaykitUI, ui } from '@playkit-js/kaltura-player-js';

import EventManager = PlaykitUI.EventManager;

const { withEventManager } = ui.Event;

type CustonButtonProps = {
  onClick: () => void;
  content: string;
  className: string;
  eventManager?: EventManager;
};

@withEventManager
export class CustomButtonComponent extends Component<CustonButtonProps> {
  render(): ComponentChild {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.props.content}
      </button>
    );
  }
}
