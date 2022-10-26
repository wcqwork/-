console.log('11111111111');

var scrollToEl = function (event, elementId) {
    window.treeHelper.setCurrentElementId(elementId);
    var el = $(event.currentTarget);
    if (el.hasClass("closed")) {
        el.removeClass("closed");
        el.addClass("opend");
    } else {
        el.removeClass("opend");
        el.addClass("closed");
    }

    var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
    // console.log($(overElement));
    window.treeHelper.scrollWindow(overElement);
    event.stopPropagation();
}
var handlerTreeNodeMouseOver = function (event, elementId) {
    window.treeHelper.setCurrentElementId(elementId);
    var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
    // debugger;
    window.treeHelper.renderHighlight(overElement, true, false);
    // console.log($(overElement));
    event.stopPropagation();
}
var handlerTreeNodeLeave = function (event, elementId) {
    window.treeHelper.setCurrentElementId(elementId);
    window.treeHelper.clearContainerContext()
    event.stopPropagation();
}

var startTreeStyle = function () {
    $("body").addClass("alltreecontaner");
    var _body = document.body;
    window.treeHelper.processNodeTree(_body).then(dom => {
        return window.treeHelper.getBodyChildrenOnly(dom);
    }).then(result => {
        console.log(result);
        // debugger
        window.treeHelper.state.domTree = result.slice(0, 6);

        var _treeUl = $('<ul class="dragArea"></ul>'); // tree
        var _treeDomContainer = $('<div class="dom-tree"></div>'); // treeContainer
        _treeDomContainer.append(_treeUl);
        window.treeHelper.renderTreeNodeHtml(window.treeHelper.state.domTree, _treeUl);
        var rightPanel = $(window.treeHelper.state.rightPanel);
        rightPanel.find(".side-view").append(_treeDomContainer);
        $("body").append(rightPanel);
        window.treeHelper.exportSettingStyle(); // 导出所有样式
    }).catch(error => {
        console.log(error);
    })

    //Add CSS File to html
    const style = $('<style data-reserved-styletag></style>').html(window.treeHelper.getInsertionCSS());
    $("body").append(style);

    // 页面联动domTree
    const htmlBody = $("#backstage-headArea,#backstage-bodyArea,#backstage-footArea");
    htmlBody.find('*').addBack().on('dragenter', (event) => {
        event.stopPropagation()
    }).on('dragover', (event) => {
        event.preventDefault()
        event.stopPropagation()
    }).on('dragstart', (event) => {
        event.preventDefault()
        event.stopPropagation()
    }).on('dragend', (event) => {
        event.preventDefault()
        event.stopPropagation()
    }).on('mouseover', (event) => {
        const currentElement = $(event.target)
        const elementRectangle = event.target.getBoundingClientRect()
        const mousePosition = {
            x: elementRectangle.x,
            y: elementRectangle.y
        }

        window.treeHelper.orchestrateDragDrop(currentElement, elementRectangle, mousePosition, true, true);

        var elementId = currentElement.attr("data-el-id");
        window.treeHelper.setCurrentElementId(elementId);
        window.treeHelper.highlightElement(event.target);

        event.preventDefault()
        event.stopPropagation()
    }).on('mouseleave', () => {
        window.treeHelper.clearContainerContext()
        window.treeHelper.stoppedHoveringElement();
    }).on('click', (event) => {
        window.stylePanelHelper.removePanel();
        const currentElement = $(event.target);
        var elementId = currentElement.attr("data-el-id");
        window.treeHelper.setCurrentElementId(elementId);
        window.treeHelper.highlightElement(event.target, true);

        window.stylePanelHelper.initPanel(event.target);
        event.preventDefault()
        event.stopPropagation()
    })
}


var script = document.createElement("script");
script.innerHTML = `
window.scrollToEl = ${scrollToEl};
window.handlerTreeNodeMouseOver = ${handlerTreeNodeMouseOver};
window.handlerTreeNodeLeave = ${handlerTreeNodeLeave};
window.startTreeStyle = ${startTreeStyle}
`
document.head.appendChild(script)

