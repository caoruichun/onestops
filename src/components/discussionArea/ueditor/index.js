export  default {
  name:'UEditor',
  data(){
    return{
      editor: null,
      toolbars:'',
    }
  },
  mounted() {
    //初始化UE
    // if(!!window.ActiveXObject || "ActiveXObject" in window){
    //   this.toolbars=[
    //     [
    //       'bold', //加粗
    //       'italic', //斜体
    //       'underline', //下划线
    //       'emotion', //表情
    //     ]
    //   ]
    // }else{
    //   this.toolbars=[
    //     [
    //       'bold', //加粗
    //       'italic', //斜体
    //       'underline', //下划线
    //       'emotion', //表情
    //       'insertimage', //多图上传
    //       'attachment', //附件
    //     ]
    //   ]
    // };

    const _this = this;
    this.editor = UE.delEditor('editor');
    this.editor = UE.getEditor('editor', {
      toolbars:[
        [
          'bold', //加粗
          'italic', //斜体
          'underline', //下划线
          'emotion', //表情
          'insertimage', //多图上传
          'attachment', //附件
        ]
      ],
      initialFrameWidth: '100%', // 初始化编辑器宽度
      initialFrameHeight: '200', // 初始化编辑器高度
      wordCount: false, // 是否开启字数统计
      autoHeightEnabled: false, // 是否自动长高
      enableAutoSave: false, // 是否启用自动保存
      autoFloatEnabled: true, // toolbar的位置不动
      elementPathEnabled: false, // 是否启用元素路径
      UEDITOR_HOME_URL: 'static/ueditor/'
    }).ready(function() {
      this.setContent('')
    })
  },
  breforeDestroy() {
    // 销毁UEditor（防止组件切换之后不显示）
    this.editor.destory();
  },
}
