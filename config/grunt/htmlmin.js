module.exports = {
    options: {
        removeComments: true,
        collapseWhitespace: true
    },
    deploy: {
        expand: true,
        cwd: 'dist',
        src: '**/*.html',
        dest: 'dist'
    }
}