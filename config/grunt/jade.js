module.exports= {
  html: {
    files: {
      '.tmp/views': ['<%=yo.app%>/views/**/*.jade']
    },
    options: {
      client: false,
      basePath: '<%=yo.app%>/views/',
      pretty:true
    }
  }
}
