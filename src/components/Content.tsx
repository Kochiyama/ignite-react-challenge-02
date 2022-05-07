import '../styles/content.scss';
import { Genre } from '../types/Genre';
import { MovieList } from './MovieList';

interface ContentProps {
	selectedGenre: Genre;
	selectedGenreId: number;
}

export function Content({ selectedGenre, selectedGenreId }: ContentProps) {
	return (
		<div className='container'>
			<header>
				<span className='category'>
					Categoria:<span> {selectedGenre.title}</span>
				</span>
			</header>

			<MovieList selectedGenreId={selectedGenreId} />
		</div>
	);
}
