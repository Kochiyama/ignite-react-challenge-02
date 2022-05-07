import '../styles/movie-list.scss';
import { Movie } from '../types/Movie';
import { MovieCard } from './MovieCard';

interface MovieListProps {
	movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
	return (
		<main>
			<div className='movies-list'>
				{movies.map(movie => (
					<MovieCard
						key={movie.imdbID}
						title={movie.Title}
						poster={movie.Poster}
						runtime={movie.Runtime}
						rating={movie.Ratings[0].Value}
					/>
				))}
			</div>
		</main>
	);
}
