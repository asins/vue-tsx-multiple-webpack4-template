// 获取多级入口
// getMultiEntry('./src/'+config.entryPath[i]+'/**/*.js','js')

const glob = require('glob');
const path = require('path');

exports.getMultiEntry = function(globPath, type) {
  const entries = {};

  glob.sync(globPath).forEach(entry => {
    const basename = path.basename(entry, path.extname(entry));
    const tmp = entry.split('/').splice(-4);
    console.log('tmp-->', entry, basename, tmp);
    let pathSrc = tmp[0] + '/' + tmp[1]
    if (tmp[0] === 'src') {
      pathSrc = tmp[2]
    }
    const pathname = pathSrc + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });

  console.log('entries-----------', entries);
  return entries;
}