module.exports = {
	purge: {
		enabled: true,
		content: [
			'./*.html',
			'./**/*.html'
		]
  },
	theme: {
		extend: {
			fontFamily: {
				'display': 'Font Display',
			},
			colors: {
				black: '#585858',
			}
		}
	},
	variants: {
		extend: {
			scale: ['group-hover'],
			translate: ['group-hover'],
			textDecoration: ['group-hover'],
			padding: ['last', 'first', 'hover'],
			margin: ['last', 'first'],
			borderWidth: ['last', 'first']
		}
	}
}
