export default class Settings {
  constructor() {
    this.defaults = new Map();
    this.users = new Map();
    this.defaults.set('theme', 'dark');
    this.defaults.set('music', 'trance');
    this.defaults.set('difficulty', 'easy');
  }

  addUserProfile(nameSettings, valueSettings) {
    this.users.set(nameSettings, valueSettings);
  }

  get() {
    const result = new Map();
    for (const key of this.defaults.keys()) {
      if (this.users.has(key)) {
        result.set(key, this.users.get(key));
      } else {
        result.set(key, this.defaults.get(key));
      }
    }
    return result;
  }
}
