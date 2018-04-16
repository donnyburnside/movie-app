import { IMovie } from './movie.model';
import { GenreType } from './genre.model';

export interface IAppState {
  title: string;
  description: string;
  version: string;
  movies: IMovie[];
  genres: GenreType[];
  selectedMovie: IMovie;
};
