import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // এখানে তুমি ইউজার খুঁজে বের করবা ডাটাবেজ থেকে (এখন ডেমো ইউজ করছি)
    if (email !== 'admin@example.com' || password !== '123456') {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: 'admin@example.com', username: 'admin' };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }
}
