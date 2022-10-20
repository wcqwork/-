$(function(){
    console.log('页面加载完成');

    var _body = document.body;

    treeHelper.processNodeTree(_body).then(dom => {
        return treeHelper.getBodyChildrenOnly(dom);
    }).then(result => {
        console.log(result);
        treeHelper.state.domTree = result;

        var _treeUl = $('<ul class="dragArea"></ul>'); // tree
        var _treeDomContainer = $('<div class="dom-tree"></div>'); // treeContainer
        _treeDomContainer.append(_treeUl);
        treeHelper.renderTreeNodeHtml(result,_treeUl);
        var rightPanel = $(treeHelper.state.rightPanel);
        rightPanel.find(".side-view").append(_treeDomContainer);
        $("body").append(rightPanel)
    }).catch(error => {
        console.log(error);
    })
})