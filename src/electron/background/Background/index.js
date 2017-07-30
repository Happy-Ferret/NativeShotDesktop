// @flow

import * as Tray from './Tray'
import * as Windows from './Windows'
import Quit from './Quit'

import type { Shape as TrayShape } from '../../flows/tray'
import type { Shape as CoreShape } from '../../flows/core'
import type { Shape as WindowsShape } from '../../flows/windows'
import type { Shape as QuitShape } from '../../flows/quit'

type State = {
    tray: TrayShape,
    core: CoreShape,
    windows: WindowsShape,
    quit: QuitShape
}

Background.wantedState = ['tray', 'core', 'windows', 'quit'];
function Background(state: State, stateOld: State, dispatch) {
    console.log('IN BACKGROUND RENDER, state:', state);

    const { tray } = state;
    const { tray:trayOld } = stateOld;
    if (tray !== trayOld) {
        if (tray) {
            Tray.init(dispatch, state.core);
        } else {
            Tray.uninit();
        }
    }

    const { windows } = state;
    const { windows:windowsOld } = stateOld;
    if (windows !== windowsOld) { // safe to do reference test here to detect change as this is in Background and Server is in background
        Windows.update(windows, windowsOld, dispatch);
    }

    const { quit } = state;
    Quit(quit);

}

export default Background