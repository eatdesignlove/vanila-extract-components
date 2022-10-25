import { ReactNode } from 'react';
import cx from 'classnames';
import * as styles from './Button.css';

type Types = {
	variant: 'primary' | 'secondary' | 'tertiary' | 'normal';
	size: 'sm' | 'md' | 'lg';
	children: ReactNode;
	as?: 'link' | 'button';
	href?: string;
	onClick?: () => void;
};

function Button({ variant = 'normal', size, children, as, href, onClick }: Types) {
	if (as === 'link') {
		return (
			<a href={href} className={cx(styles.variant[variant], styles.size[size])} onClick={onClick} />
		);
	}
	return (
		<button className={cx(styles.variant[variant], styles.size[size])} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
