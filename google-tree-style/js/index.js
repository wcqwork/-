$(function(){
    console.log('页面加载完成');

    window.scrollToEl = function(event,elementId){
        var el = $(event.currentTarget);
        if(el.hasClass("closed")){
            el.removeClass("closed");
            el.addClass("opend");
        }else{
            el.removeClass("opend");
            el.addClass("closed");
        }
       
        var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
        console.log($(overElement));
        treeHelper.scrollWindow(overElement);
        event.stopPropagation();    
    }
    window.handlerTreeNodeMouseOver = function(event,elementId){
        var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
        treeHelper.renderHighlight(overElement, true, false);
        console.log($(overElement));
        event.stopPropagation();    
    }
    window.handlerTreeNodeLeave = function(event,elementId){
        treeHelper.clearContainerContext()
        event.stopPropagation();  
    }

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