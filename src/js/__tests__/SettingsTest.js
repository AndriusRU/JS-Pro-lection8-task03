import Settings from '../class/Settings';

test('defaul settings', () => {
  const defaultSettings = new Settings();
  const correctSettings = new Map();
  correctSettings.set('theme', 'dark');
  correctSettings.set('music', 'trance');
  correctSettings.set('difficulty', 'easy');
  expect(defaultSettings.get()).toEqual(correctSettings);
});

test('defaul settings', () => {
  const userSettings = new Settings();
  userSettings.addUserProfile('music', 'pop');
  const correctSettings = new Map();
  correctSettings.set('theme', 'dark');
  correctSettings.set('music', 'pop');
  correctSettings.set('difficulty', 'easy');
  expect(userSettings.get()).toEqual(correctSettings);
});
