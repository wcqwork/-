var handlerDropSwitch = function (event, elementId) {
    try {
        var el = $(event.currentTarget).parent().parent();
        if (el.hasClass("closed")) {
            el.removeClass("closed");
            el.addClass("opend");
        } else {
            el.removeClass("opend");
            el.addClass("closed");
        }
    } catch (e) {
        console.log(e);
    }
}

var scrollToEl = function (event, elementId) {
    window.treeHelper.setCurrentElementId(elementId);

    var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
    // console.log($(overElement));
    window.treeHelper.scrollWindow(overElement);

    window.stylePanelHelper.removePanel();
    const currentElement = $(event.target);
    var elementId = currentElement.attr("data-el-id");
    window.treeHelper.setCurrentElementId(elementId);
    window.treeHelper.highlightElement(event.target, true);

    window.stylePanelHelper.initPanel(event.target);
    event.preventDefault()
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

/**
 * 页面联动domTree
 * @param {*} htmlBody 
 */
var linkageDomTree = function (htmlBody) {
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

/**
 * 初始化domtree
 */
var initLeftDomTree = function (pageBodyEl) {
    // $("body").addClass("alltreecontaner");
    // var _body = document.body;
    window.treeHelper.processNodeTree(pageBodyEl).then(dom => {
        return window.treeHelper.getBodyChildrenOnly(dom);
    }).then(result => {
        console.log(result);
        // debugger
        window.treeHelper.state.domTree = result;

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
}

/**
 * 初始化生成iframe
 */
var initIframe = function () {
    $("body").html($(''));
    var _pageUrl = window.location.href;
    Iframe = $(`<iframe id="backstage-syleEdit-iframe" class="backstage-mobile" src=${_pageUrl} style='width:374px;height:750px;border: 0;'></iframe>`);
    $("body").append(Iframe);
}

var startTreeStyle = function () {
    window.initIframe();

    var pageIframe = document.getElementById("backstage-syleEdit-iframe");
    pageIframe.addEventListener('load',function(){
        window.treeHelper.iframeContentDocument = pageIframe.contentDocument;
        var pageBodyEl = window.treeHelper.iframeContentDocument.body;
        window.initLeftDomTree(pageBodyEl);

        // Add CSS File to html
        const style = $('<style data-reserved-styletag></style>').html(window.treeHelper.getInsertionCSS());
        $(window.treeHelper.iframeContentDocument).find("body").append(style);
        

        // const htmlBody = $("#backstage-headArea,#backstage-bodyArea,#backstage-footArea");
        const htmlBody = $(window.treeHelper.iframeContentDocument.body);
        window.linkageDomTree(htmlBody);
    },true)
}


var script = document.createElement("script");
script.innerHTML = `
window.handlerDropSwitch = ${handlerDropSwitch};
window.scrollToEl = ${scrollToEl};
window.handlerTreeNodeMouseOver = ${handlerTreeNodeMouseOver};
window.handlerTreeNodeLeave = ${handlerTreeNodeLeave};
window.startTreeStyle = ${startTreeStyle}

window.initIframe = ${initIframe}
window.linkageDomTree = ${linkageDomTree}
window.initLeftDomTree = ${initLeftDomTree}
`
document.head.appendChild(script)

