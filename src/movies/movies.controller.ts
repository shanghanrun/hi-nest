import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

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
    getOne(@Param('id') movieId: number) {
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }
    @Delete(":id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId:number, @Body() updateData) {
        this.moviesService.update(movieId, updateData);
    }


}
