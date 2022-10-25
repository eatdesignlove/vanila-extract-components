import {
	createGlobalTheme,
	createThemeContract,
	createTheme,
	styleVariants,
} from '@vanilla-extract/css';

const shared = createGlobalTheme('#app', {
	font: {
		body: 'arial',
	},
	space: {
		x20: '40px',
		x10: '20px',
		x9: '18px',
		x8: '16px',
		x7: '14px',
		x6: '12px',
		x5: '10px',
		x4: '8px',
		x2: '4px',
		x: '2px',
	},
});

const typography = styleVariants({
	body2: [{ fontSize: 24 }],
	body1: [{ fontSize: 16 }],
	caption: [{ fontSize: 12 }],
});

const color = createThemeContract({
	primary: null,
	secondary: null,
	tertiary: null,
	text: null,
});

export const lightTheme = createTheme(color, {
	primary: 'red',
	secondary: 'orange',
	tertiary: 'beige',
	text: '#000',
});

export const darkTheme = createTheme(color, {
	primary: '#000',
	secondary: '#666',
	tertiary: '#999',
	text: '#fff',
});

export const vars = {
	...shared,
	typography,
	color,
};
