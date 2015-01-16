# jquerify

> 你肯定用过 jQuery，也多少看过别人分析 jQuery 源码；但是你知道 jQuery 源码是怎么管理的吗，你能搭建一个像它那样的源码管理平台吗？


**用 jQuery 源码管理工具改编，可以让你开发像 jQuery 一样的库，助你写出伟大的代码**


## 主要功能
1. 模块化开发组件，自动打包你需要的模块，部署时不需要引用 require.js
2. 集成 覆盖测试，持续集成测试
3. 使用 Grunt 管理开发流程
4. 合用 Brow 管理引用的框架



## Build

### 模块

在 src 文件里，可能含有一个 bar.js 同时含有一个 bar 的文件夹，表示它们属于同一个模块，即在编译的时候指定 `-bar` 时，bar.js 及 bar 文件内的所有 js 文件都会被排除


### AMD 支持

默认情况下项目会 `exports/global`，同时支持 `exports/amd`，在编译的时候可以指定 `-exports/amd` 来导出不支持 amd 的版本



### 变量替换

> 只能用在字符串中

* `$PROJECT_NAME`  项目名字（npm 或 bower 的名字）
* `$VERSION`       版本号，package 中指定的 version，可能在编译过程中会加上一些特殊后缀
* `$DATE`          当前日期


### 编译后删除代码块

    /* ExcludeStart */ 
    
    [code in here will be removed]
    
    /* ExcludeEnd */
    
### 编译后删除代码行

    [code in here will be removed]  // BuildExclude comment


### 如何编写新的模块

  `src/*.js` 文件是子模块，每个子模块可能还有它自己的子模块在 `src/*` 文件夹（两个 * 号名称相同）

  由于 jQuery 全局就一个变量，其它所有模块都是往全局变量注入新的属性或函数，所以虽然这是用了 require.js 来编写，
  但在编译的时候会忽略 js 文件里的 return 语句的。不过为了程序的易读性，我们书写的时候还是加上比较好。
  
  另外，在 `src/**/var` 文件夹下的所有文件都会被编译成 `var filename = ...` 的形式。所以在这些文件夹下的文件直接写 return 是没问题的。
  

### 如何引入第三方库

1. 将第三方库放入 `external` （可以通过`bowercopy`安装）文件夹下，在 grunt 中配置 path 路径
2. 参看 `build/tasks/build.js` 文件上的 `convert` 函数下的一个 `underscore` （注释掉了）模块的处理方式

_（有空加强下这块的功能，让用户直接在 grunt 中配置即可）_


## Test

### Blanket

[Blanket coverage in browser](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_browser.md) 

此组件完全与 Qunit 结合了，只要在浏览器上访问 test/index.html 页面，即可切换选项，打开 coverage 功能来

### jsCover

[jsCover User Manual](http://tntim96.github.io/JSCover/manual/manual.xml)

此组件需要用 Java 来运行一个服务器，所以要在 test 目录下运行 ./runJsCover 脚本即可看到结果


## Grunt plugins

### jscs

* [jscs github](https://github.com/jscs-dev/node-jscs)
* [jscs rules](http://jscs.info/rules.html)


### dist 

* `grunt dist:path_1:path_2`  将 dist 目录下的打包好的文件 copy 到 path_1 和 path_2 下
* 另外也可以在项目根目录下添加一个 `.destination.json` 文件，json 的 keys 会被用来做要发布到的目录，如我要发布到 path_1 和 path_2，可以：
    
    {
      "path_1": true,
      "path_2": true
    }

### testswarm

1. 将你要测试的模块配置在 grunt 的 testswarm 配置下
2. 运行 `grunt testswarm:[git_commit_id]`


[项目github地址](https://github.com/jquery/testswarm)

[Project 管理平台](http://fcbst.sinaapp.com/testswarm/)

`build/testswarm.json` 文件的结构：
  
    {
      "testUrl" : "http://you_project_url.com",  // 默认会加上 /test/index.html
      "swarmUrl" : "http://fcbst.sinaapp.com/testswarm/",
      "browserSets": [ "Mobile-Browers", "PC-Browers" ],
      "authUsername" : "project_id",
      "authToken" : "project_token",
      "runMax" : 3
    }
