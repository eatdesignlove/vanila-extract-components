import { useState } from 'react';
import cx from 'classnames';

import { lightTheme, darkTheme } from './components/shared/theme.css';
import Button from './components/Button';
import Modal from './components/Modal';

import './App.css';

function App() {
	const [isDarkMode, setDarkMode] = useState(false);
	const [isShowModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!isShowModal);
	}

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
				{isDarkMode ? 'π Dark' : 'π Light'}
			</Button>
			<hr />
			<h2>Buttons</h2>
			<div>
				<Button variant="primary" size="lg">
					λ²νΌ
				</Button>
				<Button variant="primary" size="md">
					λ²νΌ
				</Button>
				<Button variant="primary" size="sm">
					λ²νΌ
				</Button>
			</div>
			<div>
				<Button variant="primary" size="lg">
					λ²νΌ
				</Button>
				<Button variant="secondary" size="lg">
					λ²νΌ
				</Button>
				<Button variant="tertiary" size="lg">
					λ²νΌ
				</Button>
			</div>
			<h2>Modal</h2>
			<Button variant="primary" size="md" onClick={handleShowModal}>
				Show Modal
			</Button>
			<Modal isShow={isShowModal} onClose={handleShowModal}>
				<h2>μλνμΈμ</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, reprehenderit.</p>
			</Modal>
		</div>
	);
}

export default App;
