const gulp = require('gulp');

gulp.task('default', async () => {
	const Sequelize_auto = require('sequelize-auto');
	const sequelize_auto = new Sequelize_auto('test', 'test', 'test', {
		host: '3.36.243.240',
		port: '3306',
		dialect: 'mysql'
	});
	sequelize_auto.run((err) => {
		if (err) {
			throw err;
		}
	});
});
