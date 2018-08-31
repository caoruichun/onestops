// 引入HTML转PDF依赖
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
  // 文件下载
	downFile: (response) => {  
    let fileDownload = require('js-file-download');
    let fileName = response.headers['content-disposition'].match(/filename(\S*)xls/)[0];
    fileName = decodeURI(fileName.substring(fileName.indexOf('=')+2));     
    try {
      let a = document.createElement('a');
      let blob = new Blob([response.data], {type: 'text/plain'});
      let url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },500);        
    }
    catch(err) {
      fileDownload(response.data,fileName);
    }
	}, 
  // 上传附件
  upfile: (file) => {
    $('.dia-document').append(file);
  },
  // 科学计数法
  scientificNotation: (num)=> {
    num = num.toString();
    let b = num.substring(num.indexOf('.'));
    let a = num.substring(0,num.indexOf('.'));
    if(Number(a)<0) {
      a = '-' + Math.floor(Number(a.substring(1))).toLocaleString();
    }
    else {
      a = Math.floor(num).toLocaleString();
    };
    if(a.indexOf('.')>0) {
      a = num.substring(0,num.indexOf('.'));
    }
    else if(a=='.000') {
      a = '0';
    };
    return a.toString()+b;
  },
  // 打印指定HTML
  installPrint(options) {
    let htmlContent = window.document.body.innerHTML;
    window.document.body.innerHTML = document.getElementById(options).innerHTML;
    window.print();
    window.document.body.innerHTML = htmlContent;
  },
  // HTML转PDF
  installPDF: (options) => {
    $('#pageLoading').show();
    var title = options[1];
    html2Canvas(document.querySelector(options[0]), {
      allowTaint: true
    })
    .then(function (canvas) {
      let contentWidth = canvas.width
      let contentHeight = canvas.height
      let pageHeight = contentWidth / 592.28 * 841.89
      let leftHeight = contentHeight
      let position = 0
      let imgWidth = 555.28
      let imgHeight = 555.28 / contentWidth * contentHeight
      let pageData = canvas.toDataURL('image/jpeg', 1.0)
      let PDF = new JsPDF('', 'pt', 'a4')
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
      } else {
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          if (leftHeight > 0) {
            PDF.addPage()
          }
        }
      }
      PDF.save(title + '.pdf');
    });
    $('#pageLoading').hide();
    return false;
  }
}
