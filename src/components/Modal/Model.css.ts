import { style } from '@vanilla-extract/css';
import { vars } from '../shared/theme.css';
import { responsive } from '../shared/utils';

export const container = style({
	position: 'fixed',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	opacity: 0,
	transition: 'transform 0.25s, opacity 0.25s',
	pointerEvents: 'none',
});

export const isShow = style({
	opacity: 1,
	pointerEvents: 'all',
	background: 'rgba(0,0,0,0.5)',
});

export const modal = style([
	{
		position: 'absolute',
		top: '5%',
		left: '50%',
		transform: 'translateX(-50%) scale(0.75) ',
		transition: 'transform 0.25s',
		zIndex: 1,
		borderRadius: '16px',
		padding: `${vars.space.x4} ${vars.space.x8} ${vars.space.x20}`,
		background: '#fff',
		selectors: {
			[`${isShow} &`]: {
				transform: 'translateX(-50%) scale(1)',
			},
		},
	},
	responsive({
		md: {
			background: 'red',
		},
		lg: {
			background: 'yellow',
		},
	}),
]);
