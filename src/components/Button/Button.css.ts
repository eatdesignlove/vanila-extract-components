import { style } from '@vanilla-extract/css';
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

export const primary = style([
	base,
	{
		background: vars.color.primary,
		padding: vars.space.x5,
	},
]);

export const secondary = style([
	base,
	{
		background: vars.color.secondary,
	},
]);

export const tertiary = style([
	base,
	{
		background: vars.color.tertiary,
	},
]);

export const normal = style([
	base,
	{
		background: 'none',
	},
]);

export const lg = style([
	base,
	vars.typography.body2,
	{
		padding: `${vars.space.x8} ${vars.space.x10}`,
	},
]);

export const md = style([
	base,
	vars.typography.body1,
	{
		padding: `${vars.space.x6} ${vars.space.x8}`,
	},
]);

export const sm = style([
	base,
	vars.typography.caption,
	{
		padding: `${vars.space.x4} ${vars.space.x6}`,
	},
]);
