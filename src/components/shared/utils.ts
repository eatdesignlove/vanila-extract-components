type responsiveType = {
	md?: object;
	lg?: object;
};

export const responsive = ({ md = {}, lg = {} }: responsiveType) => ({
	'@media': {
		'screen and (min-width: 993px)': md,
		'screen and (min-width: 1680px)': lg,
	},
});
