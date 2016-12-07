module.exports = function(grunt) {
    // 插件配置
    grunt.initConfig({
        watch: {
            //lesswatch
            less: {
                files: ['index.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            }
        },
        //less编译
        less: {
            development: {
                files: {
                    'index.css': 'index.less'
                }
            }
        }
    });
    // 插件导入
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册插件
    grunt.registerTask('default', ['less']);

};
