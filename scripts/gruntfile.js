'use strict';
module.exports = function(grunt){
    grunt.option('target') || grunt.option('target','yol');
    grunt.initConfig({
        copy :{},
        clean:{
            options:{
                force:true,
            },
            build:{
                src:['../application/<%= grunt.option(\"target\") %>/css']
            }
        },
        less:{
            build:{
                files:{
                    '../application/<%= grunt.option(\"target\") %>/css/main.css':'../application/<%= grunt.option(\"target\") %>/less/main.less'
                }
            }
        },
        ngtemplates:{
            app: {
                src: '../application/<%= grunt.option(\"target\") %>/views/*.html',
                dest: '../application/<%= grunt.option(\"target\") %>/templates.js',
                options: {
                    bootstrap: function(module, script) {
                        return 'define(["app"], function(app) { return app.run(function($templateCache) { ' + script + ' }); });';
                    },
                    url: function(file) {
                        return (file.split("views/")[1]).replace('.html', '');
                    }
                }
            }
        },
        uglify:{

        }
    })


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build',['clean','less','ngtemplates'])
}