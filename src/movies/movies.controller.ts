import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(): string {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param('id') movieId) {
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    create() {
        return 'This will create a movie';
    }
    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will deleted a movie with the id: ${movieId}`
    }

    @Patch("/:id")
    patch(@Param("id") movieId) {
        return `This will patch a movie with the id: ${movieId}`;
    }
}
