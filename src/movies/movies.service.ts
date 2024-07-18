import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];   // Movie인스턴스가 들어 있는 배열

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);  //  +id 해도 숫자로 바뀐다.
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        }
        return movie;
    }

    search(year): Movie[] {
        return this.movies.filter(movie => movie.year === +year)
    }

    findTitle(title): Movie {
        return this.movies.find(movie => movie.title === title)
    }

    deleteOne(id:number) {
        this.movies = this.movies.filter(movie => movie.id !== id);  // filter는 본래값을 변화시키지 않는다. 이렇게 할당해야 된다.
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id: number, updateData) {
        // const movie = this.getOne(id);
        // this.deleteOne(id);
        // this.movies.push({ ...movie, ...updateData });
        let movie = this.getOne(id);
        movie = {...movie, ...updateData}
        this.deleteOne(id)
        this.movies.push(movie)
    }
}
