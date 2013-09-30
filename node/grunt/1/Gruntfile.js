module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: { // 压缩
      options: {
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'out/a-b.js',
        dest: 'out/c.js'
      }
    },
    concat: {
      options: {
          separator: ';'
      },
      dist: {
          src: ['my/cmb/a.js', 'my/cmb/b.js'],
          dest: 'out/a-b.js'
      }
    }
  });
  
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。

  grunt.registerTask('default', ['concat','uglify']);
};