import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/movie-list.scss';
import { Movie } from '../types/Movie';
import { MovieCard } from './MovieCard';

interface MovieListProps {
	selectedGenreId: number;
}

export function MovieList({ selectedGenreId }: MovieListProps) {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
			setMovies(response.data);
		});
	}, [selectedGenreId]);

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
