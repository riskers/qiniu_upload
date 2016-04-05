var $ = require('jquery')

module.exports = qiniuUpload;

function qiniuUpload(file,url){
	var token = '',
		domain = '',
		fd = new FormData() ,
		key = ''

	var dtd = $.Deferred()

	$.ajax({
		url: url
	}).done(function(e){
		token = e.token,
		domain = e.domain;

		fd.append('token',token) ;
		fd.append('file',file)

		$.ajax({
			url: 'http://upload.qiniu.com',
			type: 'POST',
			dataType: 'json',
			data: fd,
			contentType : false ,
			processData : false 
		}).done(function(data){
			key = data.key

			dtd.resolve(domain+key)		

		}).fail(function(){
			alert('上传失败')
		})
	}).fail(function(){
		alert('上传失败')
	})

	return dtd.promise()
}


