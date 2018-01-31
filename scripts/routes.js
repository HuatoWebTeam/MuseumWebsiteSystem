//
// 项目中的路由，因为使用了browserhistory ， 没有服务端做处理，所以自己处理，
// 处理的办法就是根据路由在根目录生成对应的文件夹，并把index.html 复制过去
/**8
 * 这里是声明 项目中的路由，复制文件夹在./deploy.js 中
 */

const routes = [
  "Home",
  "Plan",
  "Case",
  "About",
  'Product',
  "BusinessDetail/system01",
  "BusinessDetail/system02",
  "BusinessDetail/system03",
  "BusinessDetail/system04",
  "BusinessDetail/system05",
  "BusinessDetail/system06",
  "BusinessDetail/system07",
  "BusinessDetail/system08"
];

module.exports = routes