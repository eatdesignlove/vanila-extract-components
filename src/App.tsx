import { useState } from 'react';
import cx from 'classnames';

import { lightTheme, darkTheme } from './components/shared/theme.css';
import Button from './components/Button';
import './App.css';

function App() {
	const [isDarkMode, setDarkMode] = useState(false);

	return (
		<div id="app" className={cx('App', isDarkMode ? darkTheme : lightTheme)}>
			<h1>with Vanilla-extract</h1>
			<Button
				variant="primary"
				size="md"
				onClick={() => {
					setDarkMode(!isDarkMode);
				}}
			>
				{isDarkMode ? '🌕 Dark' : '🌞 Light'}
			</Button>
			<hr />
			<h2>Buttons</h2>
			<div>
				<Button variant="primary" size="lg">
					버튼
				</Button>
				<Button variant="primary" size="md">
					버튼
				</Button>
				<Button variant="primary" size="sm">
					버튼
				</Button>
			</div>
			<div>
				<Button variant="primary" size="lg">
					버튼
				</Button>
				<Button variant="secondary" size="lg">
					버튼
				</Button>
				<Button variant="tertiary" size="lg">
					버튼
				</Button>
			</div>
		</div>
	);
}

export default App;
