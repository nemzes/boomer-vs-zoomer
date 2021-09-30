import { writable } from "svelte/store";

const initialState = {
  boomers: 0,
  zoomers: 0,
};

function createScoring() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addPointsOnEasy: (type) => () =>
      update((score) => ({ ...score, [type]: (score[type] += 1) })),
    addPointsOnDifficult: (type) => () =>
      update((score) => ({ ...score, [type]: (score[type] += 3) })),
    removePoint: (type) => () =>
      update((score) => ({ ...score, [type]: (score[type] -= 1) })),
    reset: () => set(initialState),
  };
}

export const score = createScoring();
