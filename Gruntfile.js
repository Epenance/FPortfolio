/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //Setting up slim
    slim: {
      dist: {
        options: {                       // Target options
        pretty: true
      },
        files: [{
          expand: true,
          cwd: 'slim',
          src: ['{,*/}*.slim'],
          dest: 'www',
          ext: '.php'
        }]
      }
    },
    coffee: {
      compile: {
        files: {
          //'www/js/fancy.js': 'coffee/test.coffee' // 1:1 compile
        }
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'coffee',
        src: ['*.coffee'],
        dest: 'www/js',
        ext: '.js'
      }
    },
    watch: {
      //Watching all the .slim files in the project
      slimfiles: {
      files: '{,*/}*.slim',
      tasks:['slim']
      },
    coffefiles: {
      files:'{,*/}*.coffee',
      tasks:['coffee']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['slim']);



};
