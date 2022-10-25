import { ReactNode } from 'react';
import cx from 'classnames';

import Button from '../Button';

import * as styles from './Model.css';

type Types = {
	isShow: boolean;
	children: ReactNode;
	onClose: () => void;
};

function Modal({ children, isShow, onClose }: Types) {
	return (
		<div className={cx(styles.container, isShow && styles.isShow)}>
			<article className={styles.modal}>
				{children}
				<Button variant="tertiary" size="sm" onClick={onClose}>
					Close
				</Button>
			</article>
		</div>
	);
}

export default Modal;
