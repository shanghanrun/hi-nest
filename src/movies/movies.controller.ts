import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query('year') searchingYear) {
        return this.moviesService.search(searchingYear)
    }
    @Get("find")
    findTitle(@Query('title') title: string) {
        return this.moviesService.findTitle(title);
    }

    @Get(":id")
    getOne(@Param('id') movieId) {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }
    @Delete(":id")
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId, @Body() updateData) {
        this.moviesService.update(movieId, updateData);
    }


}
