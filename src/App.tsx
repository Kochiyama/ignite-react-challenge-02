import { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { api } from './services/api';
import './styles/global.scss';
import { Genre } from './types/Genre';

export function App() {
	const [selectedGenreId, setSelectedGenreId] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

	useEffect(() => {
		api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
			setSelectedGenre(response.data);
		});
	}, [selectedGenreId]);

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<SideBar
				setSelectedGenreId={setSelectedGenreId}
				selectedGenreId={selectedGenreId}
			/>

			<Content
				selectedGenre={selectedGenre}
				selectedGenreId={selectedGenreId}
			/>
		</div>
	);
}
