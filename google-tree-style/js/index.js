$(function () {
    console.log('页面加载完成');

    window.scrollToEl = function (event, elementId) {
        treeHelper.setCurrentElementId(elementId);
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
        treeHelper.scrollWindow(overElement);
        event.stopPropagation();
    }
    window.handlerTreeNodeMouseOver = function (event, elementId) {
        treeHelper.setCurrentElementId(elementId);
        var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
        // debugger;
        treeHelper.renderHighlight(overElement, true, false);
        // console.log($(overElement));
        event.stopPropagation();
    }
    window.handlerTreeNodeLeave = function (event, elementId) {
        treeHelper.setCurrentElementId(elementId);
        treeHelper.clearContainerContext()
        event.stopPropagation();
    }

    var _body = document.body;
    treeHelper.processNodeTree(_body).then(dom => {
        return treeHelper.getBodyChildrenOnly(dom);
    }).then(result => {
        console.log(result);
        // debugger
        treeHelper.state.domTree = result.slice(0, 6);

        var _treeUl = $('<ul class="dragArea"></ul>'); // tree
        var _treeDomContainer = $('<div class="dom-tree"></div>'); // treeContainer
        _treeDomContainer.append(_treeUl);
        treeHelper.renderTreeNodeHtml(treeHelper.state.domTree, _treeUl);
        var rightPanel = $(treeHelper.state.rightPanel);
        rightPanel.find(".side-view").append(_treeDomContainer);
        $("body").append(rightPanel)
    }).catch(error => {
        console.log(error);
    })

    //Add CSS File to html
    const style = $('<style data-reserved-styletag></style>').html(treeHelper.getInsertionCSS());
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

        treeHelper.orchestrateDragDrop(currentElement, elementRectangle, mousePosition, true, true);

        var elementId =  currentElement.attr("data-el-id");
        treeHelper.setCurrentElementId(elementId);
        treeHelper.highlightElement(event.target);

        event.preventDefault()
        event.stopPropagation()
    }).on('mouseleave', () => {
        treeHelper.clearContainerContext()
        treeHelper.stoppedHoveringElement();
    }).on('click', (event) => {
        const currentElement = $(event.target);
        var elementId =  currentElement.attr("data-el-id");
        treeHelper.setCurrentElementId(elementId);
        treeHelper.highlightElement(event.target, true);

        var _selector = treeHelper.getNodeSelect(event.target);
        console.log(_selector);
        event.preventDefault()
        event.stopPropagation()
    })

})