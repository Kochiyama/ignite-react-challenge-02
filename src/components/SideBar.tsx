import '../styles/sidebar.scss';
import { Genre } from '../types/Genre';
import { Button } from './Button';

interface SideBarProps {
	genres: Genre[];
	selectedGenreId: number;
	handleClick: (id: number) => void;
}

export function SideBar({
	genres,
	selectedGenreId,
	handleClick,
}: SideBarProps) {
	return (
		<nav className='sidebar'>
			<span>
				Watch<p>Me</p>
			</span>

			<div className='buttons-container'>
				{genres.map(genre => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClick(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}
