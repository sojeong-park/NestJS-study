import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers() {
        return 'get all users';
    }
}
