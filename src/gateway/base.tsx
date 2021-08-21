export default class Base {
  public static async create() {
    const instance = new this();

    return instance;
  }

  protected async get(url: string, withAuth: boolean) {
    const headers: Record<string, any> = {
      'Content-Type': 'application/json',
    };

    if (withAuth) headers.Authorization = `Bearer`;

    const result = await fetch(url, {
      method: 'GET',
      headers,
    });

    return result;
  }

  protected async post(url: string, body: Record<string, any>) {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return result;
  }
}
