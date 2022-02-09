import { atom, snapshot_UNSTABLE } from 'recoil';

export const canNext = atom({
  key: 'canNext',
  default: false,
});

export const takeSnapshot = () => {
  const testSnapshot = snapshot_UNSTABLE();
  return testSnapshot;
};
