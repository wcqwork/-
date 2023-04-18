var handlerDropSwitch = function (event, elementId) {
    try {
        event.stopPropagation();
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
    window.treeHelper.highlightElement(event.target, false, '', true,false);

    window.stylePanelHelper.initPanel(overElement);
    // 当前编辑的元素
    window.treeHelper.setCurrentEditContainerContent();

    // 左下角轮播
    treeHelper.initLeftBottomCorona(overElement);
    event.preventDefault()
    event.stopPropagation();
}
var handlerTreeNodeMouseOver = function (event, elementId) {
    window.treeHelper.setCurrentElementId(elementId);
    var overElement = window.treeNodeReference[elementId] && window.treeNodeReference[elementId].node;
    // debugger;
    window.treeHelper.renderHighlight(overElement, true, false);
    window.treeHelper.highlightElement(event.target, false, '', false,false);
    // console.log($(overElement));
    event.stopPropagation();
}
var handlerTreeNodeLeave = function (event, elementId) {
    window.treeHelper.elementRemoveActive()
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
        // window.treeHelper.highlightElement(event.target);

        event.preventDefault()
        event.stopPropagation()
    }).on('mouseleave', () => {
        window.treeHelper.clearContainerContext();
        window.treeHelper.stoppedHoveringElement();
    }).on('click', (event) => {
        window.stylePanelHelper.removePanel();
        const currentElement = $(event.target);
        var elementId = currentElement.attr("data-el-id");
        window.treeHelper.setCurrentElementId(elementId);
        window.treeHelper.highlightElement(event.target, true, '', true);

        // 当前编辑的元素
        window.treeHelper.setCurrentEditContainerContent('click',event.target);

        // 初始化样式编辑面板
        if (!$("body").draggable) {
            window.DetectionLinkJs();
        } else {
            window.stylePanelHelper.initPanel(event.target);
        }
        // 左下角轮播
        treeHelper.initLeftBottomCorona(event.target);

        event.preventDefault()
        event.stopPropagation()
    })
}

var DetectionLinkJs = function () {
    var jsArr = [
        "//cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.min.js",
        '//cdn.bootcdn.net/ajax/libs/spectrum/1.8.1/spectrum.js',
        '//code.jquery.com/ui/1.10.4/jquery-ui.js'
    ]
    jsArr.forEach(link => {
        loadScript(link, function () {
            console.log(link);
        });
    })
    function loadScript(url, callback) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = 'async'
        script.src = url
        document.head.appendChild(script)
        if (script.readyState) {
            //IE
            script.onreadystatechange = function () {
                if (script.readyState == 'complete' || script.readyState == 'loaded') {
                    script.onreadystatechange = null
                    callback()
                }
            }
        } else {
            //非IE
            script.onload = function () {
                callback()
            }
        }
    }
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
        // console.log(result);
        window.treeHelper.state.domTree = result;

        var _treeUl = $('<ul class="dragArea"></ul>'); // tree
        var _treeDomContainer = $('<div class="dom-tree"></div>'); // treeContainer
        _treeDomContainer.append(_treeUl);
        window.treeHelper.renderTreeNodeHtml(window.treeHelper.state.domTree, _treeUl);
        var rightPanel = $(window.treeHelper.state.rightPanel);
        rightPanel.find(".side-view").append(_treeDomContainer);
        $("body").append(rightPanel);

        // 独立功能初始化
        window.treeHelper.setIframeWindow();//初始化屏幕切换
        window.treeHelper.exportSettingStyle(); // 导出所有样式
        window.treeHelper.setOutlineInit(); // 导出所有样式
        window.treeHelper.initSettingDom();//初始化style dom
    }).catch(error => {
        console.log(error);
    })
}

/**
 * 初始化生成iframe
 */
var initIframe = function (_pageUrl) {
    document.querySelectorAll("head link").forEach(item => item.remove());
    document.body.innerHTML = '';

    // 注入需要的第三方资源
    let jsArray = [
        {
            url: '//cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.min.js',
            callback: function () {
                loadScript('//cdn.bootcdn.net/ajax/libs/spectrum/1.8.1/spectrum.js', function () {
                    window.treeHelper.state.loadjsState.spectrum = true;
                    window.loadjsState();
                    // console.log('spectrum');

                    loadScript('//code.jquery.com/ui/1.10.4/jquery-ui.js', function () {
                        window.treeHelper.state.loadjsState.jqueryUi = true;
                        window.loadjsState();
                    });
                });
            }
        },
        // {
        //     url: '//code.jquery.com/ui/1.10.4/jquery-ui.js',
        //     callback: function () {
        //         window.treeHelper.state.loadjsState.jqueryUi = true;
        //         window.loadjsState();
        //         // console.log('jqueryUi');
        //     }
        // },
    ]
    // Iframe = $(`<iframe id="backstage-syleEdit-iframe" class="screen-pc-proview" src=${_pageUrl} style='width: 100%;height: calc(100vh - 100px);border: 0;'></iframe>`);
    // $("body").append(Iframe);

    var Iframe = document.createElement('iframe');
    Iframe.setAttribute("id", "backstage-syleEdit-iframe");
    Iframe.setAttribute("class", "screen-pc-proview");
    Iframe.setAttribute("style", "width: 100%;height: calc(100vh - 77px);border: 0;");
    Iframe.src = _pageUrl;
    document.body.appendChild(Iframe);

    appendScript(jsArray)


    function appendScript(jssrc) {
        jssrc.forEach(link => {
            loadScript(link.url, link.callback);
        })
    }
    function loadScript(url, callback) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = 'async'
        script.src = url
        document.head.appendChild(script)
        if (script.readyState) {
            //IE
            script.onreadystatechange = function () {
                if (script.readyState == 'complete' || script.readyState == 'loaded') {
                    script.onreadystatechange = null
                    callback()
                }
            }
        } else {
            //非IE
            script.onload = function () {
                callback()
            }
        }
    }

}

/**
 * 
 */

var startTreeStyle = function () {
    var _pageUrl = window.beforeActive();
    window.initIframe(_pageUrl);

    var pageIframe = document.getElementById("backstage-syleEdit-iframe");
    pageIframe.addEventListener('load', function () {
        //动态插入样式
        var style = document.createElement("style");
        // debugger
        style.innerText = ".childFilter {filter: contrast(60%);}";

        pageIframe.contentDocument.head.appendChild(style);


        window.treeHelper.iframeContentDocument = pageIframe.contentDocument;
        window.treeHelper.iframeEl = pageIframe;
        window.treeHelper.state.loadjsState.iframe = true;
        window.loadjsState();
    }, true)
}

var loadjsState = function () {
    var _isloadCompulte = true;
    Object.values(window.treeHelper.state.loadjsState).forEach((item, index) => {
        if (!item) {
            _isloadCompulte = false;
        }
    });
    if (_isloadCompulte) {
        // console.log('资源全部加载完毕');
        window.initGooglePage();
    }
}

var initGooglePage = function () {
    $(".google-page-edit-plugin").remove(); //先清除防止重复初始化

    var pageBodyEl = window.treeHelper.iframeContentDocument.body;
    window.initLeftDomTree(pageBodyEl);

    // Add CSS File to html
    const style = $('<style data-reserved-styletag></>').html(window.treeHelper.getInsertionCSS());
    $(window.treeHelper.iframeContentDocument).find("body").append(style);


    // const htmlBody = $("#backstage-headArea,#backstage-bodyArea,#backstage-footArea");
    const htmlBody = $(window.treeHelper.iframeContentDocument.body).children();
    window.linkageDomTree(htmlBody);
    // 监听
    var {_window,_document,_$} = treeHelper.getElementDocFun();
    _document.addEventListener('keydown', function(event) {
        if (event.ctrlKey) {
            treeHelper.state.keypreesCtrl = true;
        }
    });
    _document.addEventListener('keyup', function(event) {
        if (!event.ctrlKey) {
            treeHelper.state.keypreesCtrl = false;
        }
    });
    // 注入缓存样式
    window.stylePanelHelper.initStyleSessionStorage();
}

/**
 * 前置特殊处理
 */
var beforeActive = function () {
    var _pageUrl = "";

    // leaddong后台预览
    var iframePrev = document.querySelector("#backstage-pc-priview");
    if (iframePrev) {
        try{
            _pageUrl =iframePrev.contentWindow.location.href;
        }catch(e){
            _pageUrl = iframePrev.src;
            console.log(e);
        }
    } else {
        _pageUrl = window.location.href;
    }
    return _pageUrl;
}




var script = document.createElement("script");
script.innerHTML = `
window.handlerDropSwitch = ${handlerDropSwitch};
window.scrollToEl = ${scrollToEl};
window.handlerTreeNodeMouseOver = ${handlerTreeNodeMouseOver};
window.handlerTreeNodeLeave = ${handlerTreeNodeLeave};
window.startTreeStyle = ${startTreeStyle}
window.loadjsState = ${loadjsState}
window.initGooglePage = ${initGooglePage}
window.DetectionLinkJs = ${DetectionLinkJs}
window.beforeActive = ${beforeActive}

window.initIframe = ${initIframe}
window.linkageDomTree = ${linkageDomTree}
window.initLeftDomTree = ${initLeftDomTree}
`
document.head.appendChild(script);