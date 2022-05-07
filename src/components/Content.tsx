import '../styles/content.scss';
import { Genre } from '../types/Genre';
import { Movie } from '../types/Movie';
import { MovieList } from './MovieList';

interface ContentProps {
	selectedGenre: Genre;
	movies: Movie[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
	return (
		<div className='container'>
			<header>
				<span className='category'>
					Categoria:<span> {selectedGenre.title}</span>
				</span>
			</header>

			<MovieList movies={movies} />
		</div>
	);
}
