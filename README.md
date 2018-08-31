# 中债一站式项目

> 应用技术：node、webpack、npm(cnpm)、vue-cli、vuex、jQuery、axios、less、elementUI、bootstrap、Bootstrap-table、font-awesome

## 1、建立项目

### 下载依赖
npm install

### 启动服务
npm run dev

## 2、测试项目
### 运行测试单元
npm run unit

### 运行 e2e 测试
npm run e2e

### 运行所有测试
npm test

## 3、打包项目

### 打包
npm run build

### 打包项目并查看分析报告
npm run build --report

## 4、项目目录
### 具体页面在src/components中
	1. 公共导航条：navBar
	2. 公共侧边栏：sideBar
	3. 公共整体：mainPage
	4. 主体信息：subjectInfo
	5. 个券信息：voucherInfo
	6. 大数据看板：bigData
	7. 财务分析：financialAnalysis
	8. 经营分析：operationAnalysis
	9. 智能模型：intelligentModel
	10. 估值交易：valuationTransaction
	11. 智能报告：intelligentReport
	12. 讨论区：discussionArea

##### 所需依赖
1. 引入Vuex

		import Vuex from 'vuex'		
		Vue.use(Vuex)

2. 引入jQuery

		文档地址：https://jquery.com/
		（1）package.json中添加：
			dependencies:{
				"jquery" : "^3.3.1"
			}
		（2）npm install
		（3）/build/webpack.base.conf.js中添加：
			var webpack = require("webpack")
			module.exports中添加：
			plugins: [
				new webpack.optimize.CommonsChunkPlugin('common.js'),
				new webpack.ProvidePlugin({
					jQuery: "jquery",
					$: "jquery"
				})
			]
		引入：/src/main.js中：
		import $ from 'jquery'


3. 引入Bootstrap

		文档地址：http://www.bootcss.com/
		下载地址：https://v3.bootcss.com/getting-started/#download（下载之后将dist文件夹复制到assets文件夹下，并重命名，如：“bootstrap-3.3.7”）
		/build/webpack.base.conf.js的alias中添加：
		'assets': path.resolve(__dirname, '../src/assets'),  
		'jquery': "jquery/src/jquery"  
		引入：/src/main.js中：
		import './assets/bootstrap-3.3.7/css/bootstrap.min.css'  
		import './assets/bootstrap-3.3.7/js/bootstrap.min'

4. 引入Bootstrap-table

		文档地址：http://bootstrap-table.wenzhixin.net.cn/zh-cn/documentation/
		下载地址：http://bootstrap-table.wenzhixin.net.cn/zh-cn/getting-started/（下载之后将dist文件夹复制到assets文件夹下，并重命名，如：“bootstrap-table-master”）
		引入：/src/main.js中：
		import './assets/bootstrap-table-master/bootstrap-table.min.css'
		import './assets/bootstrap-table-master/bootstrap-table.min'

5. 引入Element

		文档地址：http://element.eleme.io/#/zh-CN
		npm i element-ui -S
		引入：/src/main.js中：
		import ElementUI from 'element-ui'
		import 'element-ui/lib/theme-chalk/index.css'
		Vue.use(ElementUI)

6. 引入UEditor

		文档地址：http://ueditor.baidu.com/website/
		下载地址：http://ueditor.baidu.com/website/download.html（下载并解压到static文件夹下）
		引入：/src/main.js中：
		import '../static/ueditor1_4_3_3-utf8-jsp/ueditor.config.js'
		import '../static/ueditor1_4_3_3-utf8-jsp/ueditor.all.js'
		import '../static/ueditor1_4_3_3-utf8-jsp/lang/zh-cn/zh-cn.js'
		import '../static/ueditor1_4_3_3-utf8-jsp/ueditor.parse.min.js'
		配置：
		1、.babelrc中添加（忽略ESLint对ueditor.all.js的检测，不然报错）：
			"ignore": ["./static/ueditor1_4_3_3-utf8-jsp/ueditor.all.js"],
		2、static/ueditor1_4_3_3-utf8-jsp/ueditor.config.js添加：
			window.UEDITOR_HOME_URL = "../../../../static/ueditor1_4_3_3-utf8-jsp/";
		3、static/ueditor1_4_3_3-utf8-jsp/ueditor.all.js中：
			UE.plugin.register('autosave', function (){
				...
				'contentchange': function () {
				// 添加如下代码（解决enableAutoSave自动保存设置失效问题）
				if (!me.getOpt('enableAutoSave')) {
                    return;
                }
				
 
7. 引入font-awesome

		文档地址：http://www.fontawesome.com.cn/
		npm install font-awesome
		引入：/src/main.js中：
		import 'font-awesome/css/font-awesome.css'

8. 添加Less

		文档地址：http://lesscss.cn/
		npm install less less-loader --s
		/build/webpack.base.conf.js的rules中添加：
		{
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader",
		},
		使用：<style src="路径" lang="less"></style>


##### VUE-CLI配置
1. 关闭Eslint代码检测

		/build/webpack.base.conf.js中：
		rules: [
       		...(config.dev.useEslint ? [createLintingRule()] : []), （注掉此句，改为：// ...(config.dev.useEslint ? [createLintingRule()] : []),）
		]

2. 防止打包后tomcat、nginx、node、apache等服务器中刷新出现404

		/src/router/index.js中：
		export default new Router({
			mode: 'history', （注掉此句，改为：// mode: 'history'）
		})

3. 打包后项目文件夹名

		/src/router/index.js中：
		export default new Router({
			base: '/onestop', （在new Router中添加此句）
		})

4. 解决打包后原assest、static文件夹中各种文件、图片等路径错误问题

		/config/index.js中：	  	
		build: {
			assetsPublicPath: '/', （改为：assetsPublicPath: './'）
		}

		/build/webpack.prod.conf.js中：
		output: {
    		publicPath: './', （在output中添加此句）
		}

		/build/utils.js中：
	    return ExtractTextPlugin.extract({
	        use: loaders,
	        fallback: 'vue-style-loader',
	        publicPath: '../../' （在ExtractTextPlugin.extract中添加此句）
	    })

5. 解决font-awesome打包后引入失败问题：
		
		/build/webpack.base.conf.js中：
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
		  		limit: 10000, （改为：limit: 90000）
		 		name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
			}
		}

6. 前端跨域问题：
		
		/config/index.js中：
		proxyTable: {（在proxyTable中添加如下代码）
	      '/crossDomain': {
		        target: 'http://127.0.0.1',
		        secure: true,  
		        changeOrigin: true, 
		        pathRewrite: {
		          '^/crossDomain': '' 
		        }
	    	}
		}

7. nginx反向代理：

		a、找到nginx文件夹中conf文件夹下的nginx.conf；
		b、找到如下代码：
			location / {
			   root  html;
			   index  index.html index.htm;
			}
		c、在其后加上如下代码（crossDomain为代理的名称，proxy_pass为需要调用的接口）
		    location /crossDomain {
		      rewrite  ^.+crossDomain/?(.*)$ /$1 break;
		      include  uwsgi_params;
		      proxy_pass  'http://127.0.0.1',
			}

8. 开发、部署接口配置

	a.开发：
		/config/prod.env.js中：
		module.exports = merge(prodEnv, {
		  ...
		  API: '"[开发的接口地址]"'(添加此句)
		}

	b.部署：
		/config/prod.env.js中：
		module.exports = {
		  ...
		  API: '"[部署的接口地址]"'(添加此句)
		}
	
	c.调用方法：
		process.env.API(直接调用即可)
		

```