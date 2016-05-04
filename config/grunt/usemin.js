module.exports = function () {
    var cdnRoot = require('../config').cdnDomain[process.env.DEPLOY_TYPE] || '';
    //var cdnRoot="http://nobody.com"
    return {
        // look under this files
        css: '<%=yo.dist%>/static/**/*.css',
        html: '<%=yo.dist%>/**/*.html',
        js: '<%=yo.dist%>/static/**/*.js',
        options: {
            // 配置cdn
            patterns: require('../usemin-pattern').pattern(cdnRoot)
        }
    };
};
