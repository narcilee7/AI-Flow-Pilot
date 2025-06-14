import localforage from 'localforage'

class LocalForageHelper {
  private static instance: LocalForageHelper;
  private expireTime: number;
  private storage: LocalForage;

  private constructor() {
    this.expireTime = 1000 * 60 * 60 * 24 * 7; // 7 days
    this.storage = localforage.createInstance({
      name: 'jobPilot',
    });
  }

  public static getInstance(): LocalForageHelper {
    if (!LocalForageHelper.instance) {
      LocalForageHelper.instance = new LocalForageHelper();
    }
    return LocalForageHelper.instance;
  }

  public async getItem<T>(key: string): Promise<T | null> {
    const rawContent = await this.storage.getItem(key);
    if (!rawContent) {
      return null;
    }

    const parsedContent = JSON.parse(rawContent as string) as {
      value: T;
      expireTime: number;
    };

    if (parsedContent.expireTime < Date.now()) {
      await this.storage.removeItem(key);
      return null;
    }

    return parsedContent.value;
  }

  public async setItem<T>(key: string, value: T): Promise<void> {
    const content = {
      value,
      expireTime: Date.now() + this.expireTime,
    };

    await this.storage.setItem(key, JSON.stringify(content));
  }

  public async removeItem(key: string): Promise<void> {
    await this.storage.removeItem(key);
  }

  public async clear(): Promise<void> {
    await this.storage.clear();
  }
}

export default LocalForageHelper;