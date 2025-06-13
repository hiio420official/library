// cats.controller.ts
import { HttpStatus, HttpException, UseGuards } from "@nestjs/common";
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../common/exception/forbidden.exception';
import { RolesGuard } from "src/roles/roles.guard";
import { Roles } from "src/roles/roles.decorator";
@Controller('cats')
@UseGuards(new RolesGuard())
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    @UseGuards(RolesGuard)
    async findAll() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }


    @Get()
    @Roles(["admin"])
    async findAll() {
        try {
            await this.service.findAll()
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }


    @Get()
    async findAll() {
        throw new ForbiddenException();
    }


    @Get(':id')
    async findOne(@Param('id') id: string) {
        const cat = await this.catsService.findById(id);
        if (!cat) {
            throw new NotFoundException(`고양이 ID ${id}를 찾을 수 없습니다.`);
        }
        return cat;
    }
}
