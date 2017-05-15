module.exports = {

	src: 'src',
	
	build: 'build',

	assets: {

		src: 'src/assets/**/*'

	},

	scripts: {
		src: ['src/**/*.{js,html}'],

		entrypoint: 'src/index.js',
	},

	server: {
		port: 8601
	},

	html: {
		src: 'src/**/*.html',
	},

	styles: {
		entrypoint: 'src/styles/index.less',
		
		src: ['src/styles/**/*.less', 'node_modules/hitch-modules/**/*.{less,css}']
	}

}