import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sanitizeId } from '../util';
import { BackgroundMode } from '../types/BackgroundMode';

import phaserGame from '../PhaserGame';
import LoadSource from '../scenes/LoadSource';

export function getInitialBackgroundMode() {
  const currentHour = new Date().getHours();
  return currentHour > 6 && currentHour <= 18 ? BackgroundMode.DAY : BackgroundMode.NIGHT;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    backgroundMode: getInitialBackgroundMode(),
    sessionId: '',
    videoConnected: false,
    loggedIn: false,
    playerNameMap: new Map<string, string>()
  },
  reducers: {
    toggleBackgroundMode: (state) => {
      const newMode = state.backgroundMode === BackgroundMode.DAY ? BackgroundMode.NIGHT : BackgroundMode.DAY;

      state.backgroundMode = newMode;
      const loadSource = phaserGame.scene.keys.loadSource as LoadSource;
      loadSource.changeBackgroundMode(newMode);
    },
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload;
    },
    setVideoConnected: (state, action: PayloadAction<boolean>) => {
      state.videoConnected = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setPlayerNameMap: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.playerNameMap.set(sanitizeId(action.payload.id), action.payload.name);
    },
    removePlayerNameMap: (state, action: PayloadAction<string>) => {
      state.playerNameMap.delete(sanitizeId(action.payload));
    }
  }
});

export const { toggleBackgroundMode, setSessionId, setVideoConnected, setLoggedIn, setPlayerNameMap, removePlayerNameMap } = userSlice.actions;

export default userSlice.reducer;
