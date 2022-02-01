import { UsersService } from './users.service';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUser() {
        return 'get user';
    }

    @Post()
    createUser() {
        return 'save user';
    }

    @Put(':id')
    updateUser() {
        return 'update user';
    }

    @Delete(':id')
    deleteUser() {
        return 'delete user';
    }
}
