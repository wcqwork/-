//table td.towDeci{mso-number-format:"0\.00"}控制单元格样式小数点两位
var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style type="text/css">table td,table th{border: .5px solid #666666;}table td.towDeci{mso-number-format:"0\.00"}</style></head><body><table>{table}</table></body></html>',
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            })
        };
    return function (table, name, filename) {
        name = commStr.ywrq;
        filename = commStr.sftjb;
        table = "tableList";
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML.replaceAll(">0.00<", "><")}
        //内容较少可以用这个
        //document.getElementById("dlink").href = uri + base64(format(template, ctx));

        //因为浏览器URL有长度限制,将excel数据转换成base64,数据量过大的时候长度超过浏览器GET限制,部分被阻断,识别不出来excel,下载失败
        //数据量过大的时候需要使用blob对象
        var blob = new Blob([format(template, ctx)], {type: "application/vnd.ms-excel"});
        document.getElementById("dlink").href = URL.createObjectURL(blob);

        document.getElementById("dlink").download = filename;
        document.getElementById("dlink").click();
    }
})();
