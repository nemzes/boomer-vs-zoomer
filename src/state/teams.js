import { writable } from "svelte/store";

function createMembersStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addMember: (memberName) => update((members) => [...members, memberName]),
    removeMember: (idx) =>
      update((members) => [...members.slice(0, idx), ...list.slice(idx + 1)]),
    reset: () => set([]),
  };
}

export const count = createMembersStore();
