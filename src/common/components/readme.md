### 本目录下，所有以 com- 开头的vue文件，都会注册成全局组件。
### 入口文件reg.js
***
***

### 1.全局富文本组件：
```html
<public-rich-text ref="publicRichText" @editContent='getContent' :content='addForm.content' /></public-rich-text>
```
*特别注意📢📢📢：*
> 富文本change方法实时赋值 必须需要用新变量接收。
> 不能直接用addForm.content接收
```js
getContent (val) { this.richContent = val } ✅
getContent (val) { this.addForm.content = val } ❌
```
**注销事件：关闭浏览器 默认弹框提示**
```js
offBeforeUnload () {
  window.tinymce.off('BeforeUnload')
}
```
***
***

### 2.icon图标组件：支持自定义icon，size，color等参数
```html
<IconFont icon='...' :size='14' color='#D8DCE5'></IconFont>
```
***
***

### 3.上传文件组件：自定义参数详情参考`com-file-upload.vue`文件
```html
<g-file-upload :accept='acceptFiles' multiple :limit='10' :action='studentUpload' :flieUrlList='attachments' @fileUrls='getFilesUrls'>
  <template #tips>...</template>
</g-file-upload>
```
* accept支持的文件类型有：`.jpg, .jpeg, .png, .gif, .pdf, .xls, .xlsx, .ppt, .pptx, .doc, .docx, .txt, .JPG, .JPEG, .PNG, .GIF, .PDF, XLS, XLSX, .PPT, .PPTX, .DOC, .DOCX, .TXT, .mp4, .m3u8, .flv, f4v, .webm,.mov, .m4v, .3gp, .avi, .wmv`等等

*特别注意📢📢📢：*
> 上传文件成功后 @fileUrls 方法实时获取最新文件urls，必须需要用新变量接收。
> 不能直接用`attachmentst`接收
```js
getFilesUrls (url) {
  this.addForm.attachments = url ✅
}
getFilesUrls (url) {
  this.attachments = url ❌
},
```

***
***
### 4.全局组件：导入数据/下载模板弹窗
```html
<import-dialog v-if="isShowImportDgl" :show.sync="isShowImportDgl" :importParentUrl="url.importEvaluatedPerson" :tempUrl="tempUrl" @importSuccess='requestData(true)'>
</import-dialog>
```
* importParentUrl: 导入接口
* tempUrl: 导出模板地址
* importSuccess：回调函数
