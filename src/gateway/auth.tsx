import Base from './base';
import { UserCredentials } from '../interfaces';

class Auth extends Base {
  private baseUrl = 'auth';

  public async login(userCredentials: UserCredentials) {
    const url = 'login';

    const result = await this.post(`/${this.baseUrl}/${url}`, userCredentials);

    return result;
  }

  public async forgotPassword(email: string) {
    const url = 'forgot-password';

    const result = await this.post(`/${this.baseUrl}/${url}`, { email });

    return result;
  }

  public async resetPassword(email: string) {
    const url = 'forgot-password';

    const result = await this.post(`/${this.baseUrl}/${url}`, { email });

    return result;
  }
}

const authInstance = new Auth();

export default authInstance;
