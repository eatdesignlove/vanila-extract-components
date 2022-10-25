import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../shared/theme.css';

const base = style({
	cursor: 'pointer',
	border: 'none',
	color: vars.color.text,
	borderRadius: '4px',
	':hover': {
		opacity: 0.9,
	},
});

export const variant = styleVariants({
	primary: [
		base,
		{
			background: vars.color.primary,
			padding: vars.space.x5,
		},
	],
	secondary: [
		base,
		{
			background: vars.color.secondary,
		},
	],
	tertiary: [
		base,
		{
			background: vars.color.tertiary,
		},
	],
	normal: [
		base,
		{
			background: 'none',
		},
	],
});

export const size = styleVariants({
	lg: [
		base,
		vars.typography.body2,
		{
			padding: `${vars.space.x8} ${vars.space.x10}`,
		},
	],
	md: [
		base,
		vars.typography.body1,
		{
			padding: `${vars.space.x6} ${vars.space.x8}`,
		},
	],
	sm: [
		base,
		vars.typography.caption,
		{
			padding: `${vars.space.x4} ${vars.space.x6}`,
		},
	],
});
