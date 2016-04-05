# qiniu_upload

一个使用 qiniu 上传文件的模块，依赖jQuery

# 使用

```js
var qiniuUpload = require('qiniu_upload')
var $ = require('jquery')
var url = 'token_url'

$('.btn').change(function(){
    var file = $(this).get(0).files[0]
    
    qiniuUpload(file,url).then(function(url){
        //...
    })
    
})
```

返回 Promise 对象

## 参数

* `file`: 文件
* `url`: 获取 `token` 的接口

# 安装

```shell
npm install qiniu_upload
```

