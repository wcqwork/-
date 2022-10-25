/**
 * domtree辅组生成类
 */
const treeHelper = {
    state: {
        domTree: undefined,
        currentElementId: null,
        specialArr: ['#text', '#comment', 'SCRIPT', 'LINK', 'TEMPLATE', 'IFRAME', "STYLE"],
        rightPanel: `
        <div class="wrapper">
    <div class="app-side-view">
        <div class="side-content active">
            <div class="side-view">
                <!---->
                <div class="header">
                    <p>DOM tree</p>
                    <button class="exportStyleBtn">导出</button>
                </div>
            </div>
        </div>
        <div class="side-nav">
            <div class="" style="display:none;">
                <i class="fa fa-square-o"></i>
            </div>
            <div class="active" onclick='$(".wrapper .app-side-view.side-content").toggleClass(" active")'>
                <i class="fa fa-align-left"></i>
            </div>
        </div>
    </div>
    <div class="right-seeting-board">
        <div class="setting-title"><div>样式设置</div><div class="setting-close"></div></div>
        <div class="seeting-content">
            <div class="seeting-content-item">
                <div class="subtitle">
                    <div>布局</div>
                    <div><label>权重   <input checked type="checkbox" id="weightCheckbox"></input></label></div>
                </div>
                <div class="subtitle-content">
                    <div
                        id="el-collapse-content-7635"
                        class="el-collapse-item__wrap"
                        role="tabpanel"
                        aria-hidden="false"
                        aria-labelledby="el-collapse-head-7635"
                        data-old-padding-top=""
                        data-old-padding-bottom=""
                        data-old-overflow=""
                        style=""
                    >
                        <div class="el-collapse-item__content">
                            <div class="layout-page-container" data-v-42fee549="">
                                <div class="layout-box-container">
                                    <div class="margin-top-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="margin-right-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="margin-bottom-div">
                                        <span class="next-input next-medium next-noborder">
                                            <span class="help-txt">外边距</span>
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="margin-left-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="padding-top-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="padding-right-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="padding-bottom-div">
                                        <span class="next-input next-medium next-noborder">
                                            <span class="help-txt">内边距</span>
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                    <div class="padding-left-div">
                                        <span class="next-input next-medium next-noborder">
                                            <!---->
                                            <input maxlength="3" placeholder="0" autocomplete="off">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       
        `
    },
    /**
     * 设置当前选中的唯一elementId
     * @param {*} elementId 
     */
    setCurrentElementId: function (elementId) {
        this.state.currentElementId = elementId;
    },
    getMouseBearingsPercentage: function ($element, elementRect, mousePos) {
        if (!elementRect)
            elementRect = $element.get(0).getBoundingClientRect();
        var mousePosPercent_X = ((mousePos.x - elementRect.left) / (elementRect.right - elementRect.left)) * 100;
        var mousePosPercent_Y = ((mousePos.y - elementRect.top) / (elementRect.bottom - elementRect.top)) * 100;

        return { x: mousePosPercent_X, y: mousePosPercent_Y };
    },
    orchestrateDragDrop: function ($element, elementRect, mousePos, toHighlight, hideLine) {
        // debugger;
        //If no element is hovered or element hovered is the placeholder -> not valid -> return false;
        if (!$element || $element.length == 0 || !elementRect || !mousePos)
            return false;

        if ($element.is('html'))
            $element = $element.find('body');
        //Top and Bottom Area Percentage to trigger different case. [5% of top and bottom area gets reserved for this]
        var breakPointNumber = { x: 5, y: 5 };

        var mousePercents = this.getMouseBearingsPercentage($element, elementRect, mousePos);
        if ((mousePercents.x > breakPointNumber.x && mousePercents.x < 100 - breakPointNumber.x) && (mousePercents.y > breakPointNumber.y && mousePercents.y < 100 - breakPointNumber.y)) {
            //Case 1 -
            var $tempelement = $element.clone();
            $tempelement.find('.drop-marker').remove();
            if ($tempelement.html().trim() == '' && !this.checkVoidElement($tempelement)) {
                if (mousePercents.y < 90)
                    return this.placeInside($element, toHighlight, hideLine);
            } else if ($tempelement.children().length == 0) {
                //text element detected
                this.decideBeforeAfter($element, mousePercents, undefined, toHighlight, hideLine);
            } else if ($tempelement.children().length == 1) {
                //only 1 child element detected
                this.decideBeforeAfter($element.children(':not(.drop-marker,[data-dragcontext-marker])').first(), mousePercents, undefined, toHighlight, hideLine);
            } else {
                var positionAndElement = this.findNearestElement($element, mousePos.x, mousePos.y);
                this.decideBeforeAfter(positionAndElement.el, mousePercents, mousePos, toHighlight, hideLine);
                //more than 1 child element present
            }
        } else if ((mousePercents.x <= breakPointNumber.x) || (mousePercents.y <= breakPointNumber.y)) {
            var validElement = null
            if (mousePercents.y <= mousePercents.x)
                validElement = this.findValidParent($element, 'top', hideLine);
            else
                validElement = this.findValidParent($element, 'left', hideLine);
            if (toHighlight)
                validElement = $element
            if (validElement.is('body,html'))
                validElement = $('body').children(':not(.drop-marker,[data-dragcontext-marker])').first();
            this.decideBeforeAfter(validElement, mousePercents, mousePos, toHighlight, hideLine);
        } else if ((mousePercents.x >= 100 - breakPointNumber.x) || (mousePercents.y >= 100 - breakPointNumber.y)) {
            var validElement = null
            if (mousePercents.y >= mousePercents.x)
                validElement = this.findValidParent($element, 'bottom', hideLine);
            else
                validElement = this.findValidParent($element, 'right', hideLine);
            if (toHighlight)
                validElement = $element
            if (validElement.is('body,html'))
                validElement = $('body').children(':not(.drop-marker,[data-dragcontext-marker])').last();
            this.decideBeforeAfter(validElement, mousePercents, mousePos, toHighlight, hideLine);
        }
    },
    decideBeforeAfter: function ($targetElement, mousePercents, mousePos, toHighlight, hideLine) {
        if (mousePos) {
            mousePercents = this.getMouseBearingsPercentage($targetElement, null, mousePos);
        }

        /*if(!mousePercents)
         {
         mousePercents = this.getMouseBearingsPercentage($targetElement, $targetElement.get(0).getBoundingClientRect(), mousePos);
         } */

        var $orientation = ($targetElement.css('display') == 'inline' || $targetElement.css('display') == 'inline-block');
        if ($targetElement.is('br'))
            $orientation = false;

        if ($orientation) {
            if (mousePercents.x < 50) {
                return this.placeBefore($targetElement, toHighlight, hideLine);
            } else {
                return this.placeAfter($targetElement, toHighlight, hideLine);
            }
        } else {
            if (mousePercents.y < 50) {
                return this.placeBefore($targetElement, toHighlight, hideLine);
            } else {
                return this.placeAfter($targetElement, toHighlight, hideLine);
            }
        }
    },
    placeAfter: function ($element, toHighlight, hideLine) {
        var placeholder = this.getPlaceHolder();
        var inlinePlaceholder = ($element.css('display') == 'inline' || $element.css('display') == 'inline-block');
        if ($element.is('br')) {
            inlinePlaceholder = false;
        } else if ($element.is('td,th')) {
            placeholder.addClass('horizontal').css('width', $element.width() + 'px');
            return this.addPlaceHolder($element, 'inside-append', placeholder, toHighlight, hideLine);
        }
        if (inlinePlaceholder)
            placeholder.addClass('vertical').css('height', $element.innerHeight() + 'px');
        else
            placeholder.addClass('horizontal').css('width', $element.parent().width() + 'px');
        this.addPlaceHolder($element, 'after', placeholder, toHighlight, hideLine);
    },
    checkVoidElement: function ($element) {
        var voidelements = ['i', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'video', 'iframe', 'source', 'track', 'wbr'];
        var selector = voidelements.join(',')
        if ($element.is(selector))
            return true;
        else
            return false;
    },
    calculateDistance: function (elementData, mouseX, mouseY) {
        return Math.sqrt(Math.pow(elementData.x - mouseX, 2) + Math.pow(elementData.y - mouseY, 2));
    },
    findNearestElement: function ($container, clientX, clientY) {
        var _this = this;
        var previousElData = null;
        var childElement = $container.children(':not(.drop-marker,[data-dragcontext-marker])');
        if (childElement.length > 0) {
            childElement.each(function () {
                if ($(this).is('.drop-marker'))
                    return;

                var offset = $(this).get(0).getBoundingClientRect();
                var distance = 0;
                var distance1, distance2 = null;
                var position = '';
                var xPosition1 = offset.left;
                var xPosition2 = offset.right;
                var yPosition1 = offset.top;
                var yPosition2 = offset.bottom;
                var corner1 = null;
                var corner2 = null;

                //Parellel to Yaxis and intersecting with x axis
                if (clientY > yPosition1 && clientY < yPosition2) {
                    if (clientX < xPosition1 && clientY < xPosition2) {
                        corner1 = { x: xPosition1, y: clientY, 'position': 'before' };
                    } else {
                        corner1 = { x: xPosition2, y: clientY, 'position': 'after' };
                    }

                }
                //Parellel to xAxis and intersecting with Y axis
                else if (clientX > xPosition1 && clientX < xPosition2) {
                    if (clientY < yPosition1 && clientY < yPosition2) {
                        corner1 = { x: clientX, y: yPosition1, 'position': 'before' };
                    } else {
                        corner1 = { x: clientX, y: yPosition2, 'position': 'after' };
                    }

                } else {
                    //runs if no element found!
                    if (clientX < xPosition1 && clientX < xPosition2) {
                        corner1 = { x: xPosition1, y: yPosition1, 'position': 'before' }; //left top
                        corner2 = { x: xPosition1, y: yPosition2, 'position': 'after' }; //left bottom
                    } else if (clientX > xPosition1 && clientX > xPosition2) {
                        corner1 = { x: xPosition2, y: yPosition1, 'position': 'before' }; //Right top
                        corner2 = { x: xPosition2, y: yPosition2, 'position': 'after' }; //Right Bottom
                    } else if (clientY < yPosition1 && clientY < yPosition2) {
                        corner1 = { x: xPosition1, y: yPosition1, 'position': 'before' }; //Top Left
                        corner2 = { x: xPosition2, y: yPosition1, 'position': 'after' }; //Top Right
                    } else if (clientY > yPosition1 && clientY > yPosition2) {
                        corner1 = { x: xPosition1, y: yPosition2, 'position': 'before' }; //Left bottom
                        corner2 = { x: xPosition2, y: yPosition2, 'position': 'after' } //Right Bottom
                    }
                }

                distance1 = _this.calculateDistance(corner1, clientX, clientY);

                if (corner2 !== null)
                    distance2 = _this.calculateDistance(corner2, clientX, clientY);

                if (distance1 < distance2 || distance2 === null) {
                    distance = distance1;
                    position = corner1.position;
                } else {
                    distance = distance2;
                    position = corner2.position;
                }

                if (previousElData !== null) {
                    if (previousElData.distance < distance) {
                        return true; //continue statement
                    }
                }
                previousElData = { 'el': this, 'distance': distance, 'xPosition1': xPosition1, 'xPosition2': xPosition2, 'yPosition1': yPosition1, 'yPosition2': yPosition2, 'position': position }
            });
            if (previousElData !== null) {
                var position = previousElData.position;
                return { 'el': $(previousElData.el), 'position': position };
            } else {
                return false;
            }
        }
    },
    findValidParent: function ($element, direction, hideLine) {
        switch (direction) {
            case 'left':
                while (true) {
                    var elementRect = $element.get(0).getBoundingClientRect();
                    var $tempElement = $element.parent();
                    var tempelementRect = $tempElement.get(0).getBoundingClientRect();
                    if (hideLine)
                        return $element
                    if ($element.is('body'))
                        return $element;
                    if (Math.abs(tempelementRect.left - elementRect.left) == 0)
                        $element = $element.parent();
                    else
                        return $element;
                }
                break;
            case 'right':
                while (true) {
                    var elementRect = $element.get(0).getBoundingClientRect();
                    var $tempElement = $element.parent();
                    var tempelementRect = $tempElement.get(0).getBoundingClientRect();
                    if (hideLine)
                        return $element;
                    if ($element.is('body'))
                        return $element;
                    if (Math.abs(tempelementRect.right - elementRect.right) == 0)
                        $element = $element.parent();
                    else
                        return $element;
                }
                break;
            case 'top':
                while (true) {
                    var elementRect = $element.get(0).getBoundingClientRect();
                    var $tempElement = $element.parent();
                    var tempelementRect = $tempElement.get(0).getBoundingClientRect();
                    if (hideLine)
                        return $element;
                    if ($element.is('body'))
                        return $element;
                    if (Math.abs(tempelementRect.top - elementRect.top) == 0)
                        $element = $element.parent();
                    return $element;
                }
                break;
            case 'bottom':
                while (true) {
                    var elementRect = $element.get(0).getBoundingClientRect();
                    var $tempElement = $element.parent();
                    var tempelementRect = $tempElement.get(0).getBoundingClientRect();
                    if (hideLine)
                        return $element
                    if ($element.is('body'))
                        return $element;
                    if (Math.abs(tempelementRect.bottom - elementRect.bottom) == 0)
                        $element = $element.parent();
                    else
                        return $element;
                }
                break;
        }
    },
    placeBefore: function ($element, toHighlight, hideLine) {
        var placeholder = this.getPlaceHolder();
        var inlinePlaceholder = ($element.css('display') == 'inline' || $element.css('display') == 'inline-block');
        if ($element.is('br')) {
            inlinePlaceholder = false;
        } else if ($element.is('td,th')) {
            placeholder.addClass('horizontal').css('width', $element.width() + 'px');
            return this.addPlaceHolder($element, 'inside-prepend', placeholder, toHighlight, hideLine);
        }
        if (inlinePlaceholder)
            placeholder.addClass('vertical').css('height', $element.innerHeight() + 'px');
        else
            placeholder.addClass('horizontal').css('width', $element.parent().width() + 'px');
        this.addPlaceHolder($element, 'before', placeholder, toHighlight, hideLine);
    },
    getPlaceHolder: function () {
        return $('<li class="drop-marker"></li>');
    },
    addPlaceHolder: function ($element, position, placeholder, toHighlight, hideLine) {
        if (!placeholder)
            placeholder = this.getPlaceHolder();
        this.removePlaceholder();
        switch (position) {
            case 'before':
                placeholder.find('.message').html($element.parent().data('sh-dnd-error'));
                if (!toHighlight && !hideLine) {
                    $element.before(placeholder);
                }
                this.addContainerContext($element, 'sibling', toHighlight);
                break;
            case 'after':
                placeholder.find('.message').html($element.parent().data('sh-dnd-error'));
                if (!toHighlight && !hideLine) {
                    $element.after(placeholder);
                }
                this.addContainerContext($element, 'sibling', toHighlight);
                break
            case 'inside-prepend':
                placeholder.find('.message').html($element.data('sh-dnd-error'));
                if (!toHighlight && !hideLine) {
                    $element.prepend(placeholder);
                }

                this.addContainerContext($element, 'inside', toHighlight);
                break;
            case 'inside-append':
                placeholder.find('.message').html($element.data('sh-dnd-error'));
                if (!toHighlight && !hideLine) {
                    $element.append(placeholder);
                }

                this.addContainerContext($element, 'inside', toHighlight);
                break;
        }
    },
    addContainerContext: function ($element, position, toHighlight) {
        var $contextMarker = this.getContextMarker();
        this.clearContainerContext();
        if ($element.is('html,body')) {
            position = 'inside';
            $element = $('body');
        }
        if (toHighlight) {
            position = 'inside';
        }
        // debugger;
        switch (position) {
            case 'inside':
                // bus.$emit('hovering-element', $element[0], true, true)
                this.highlightElement($element[0], true, true);
                this.positionContextMarker($contextMarker, $element);
                if ($element.hasClass('stackhive-nodrop-zone'))
                    $contextMarker.addClass('invalid');
                var name = this.getElementName($element);
                $contextMarker.find('[data-dragcontext-marker-text]').html(name);
                if ($('body [data-sh-parent-marker]').length != 0)
                    $('body [data-sh-parent-marker]').first().before($contextMarker);
                else
                    $('body').append($contextMarker);
                break;
            case 'sibling':
                // bus.$emit('hovering-element', $element.parent()[0], true, true)
                this.highlightElement($element.parent()[0], true, true);
                this.positionContextMarker($contextMarker, $element.parent());
                if ($element.parent().hasClass('stackhive-nodrop-zone'))
                    $contextMarker.addClass('invalid');
                var name = this.getElementName($element.parent());
                $contextMarker.find('[data-dragcontext-marker-text]').html(name);
                $contextMarker.attr('data-dragcontext-marker', name.toLowerCase());
                if ($('body [data-sh-parent-marker]').length != 0)
                    $('body [data-sh-parent-marker]').first().before($contextMarker);
                else
                    $('body').append($contextMarker);
                break;
        }
    },
    /**
     * 设置元素所在位置tip
     * @param {*} $contextMarker 
     * @param {*} $element 
     */
    positionContextMarker: function ($contextMarker, $element) {
        var rect = $element.get(0).getBoundingClientRect();
        $contextMarker.css({
            height: (rect.height + 4) + 'px',
            width: (rect.width + 4) + 'px',
            top: (rect.top + document.documentElement.scrollTop - 2) + 'px',
            left: (rect.left + document.documentElement.scrollLeft - 2) + 'px'
        });
        if (rect.top + $('body').scrollTop() < 24)
            $contextMarker.find('[data-dragcontext-marker-text]').css('top', '4px');
    },
    getElementName: function ($element) {
        return $element.prop('tagName');
    },
    getContextMarker: function () {
        var $contextMarker = $('<div data-dragcontext-marker><span data-dragcontext-marker-text></span></div>');
        return $contextMarker;
    },
    clearContainerContext: function () {
        $('[data-dragcontext-marker]').remove();
    },
    removePlaceholder: function () {
        $('.drop-marker').remove();
    },
    makeid: function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    processNodeTree: function (dom) {
        window.treeNodeReference = {};
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.getNodeTree(dom));
        });
    },
    getNodeTree: function (node) {
        let newNodeName

        if (node.hasChildNodes()) {
            var children = [];
            for (var j = 0; j < node.childNodes.length; j++) {
                children.push(this.getNodeTree(node.childNodes[j]));
            }

            if (node.dataset && node.dataset.hasOwnProperty('flWidgetInstance')) {
                newNodeName = node.dataset.name
            }

            var _makeidKey = this.makeid();
            this.renderNodeElementId(node, _makeidKey);

            var _elementObjKey = {
                elementId: _makeidKey,
                elementName: newNodeName,
                nodeName: node.nodeName,
                parentName: node.parentNode.nodeName,
                hasChildren: this.hasChildren,
                children: children,
                content: node.innerHTML || node.textContent || '',
                attributes: node.attributes,
                node: node,
                open: true
            }
            window.treeNodeReference[_makeidKey] = _elementObjKey;

            return _elementObjKey;
        }

        if (node.dataset && node.dataset.hasOwnProperty('flWidgetInstance')) {
            newNodeName = node.dataset.name
        }

        var _makeid = this.makeid();
        this.renderNodeElementId(node, _makeid);
        var _elementObj = {
            elementId: _makeid,
            elementName: newNodeName,
            nodeName: node.nodeName,
            parentName: node.parentNode.nodeName,
            hasChildren: this.hasChildren,
            children: children,
            content: node.innerHTML || node.textContent || '',
            attributes: node.attributes,
            node: node,
            open: true
        };
        window.treeNodeReference[_makeid] = _elementObj;

        return _elementObj;
    },
    /**
     * 设置页面dom埋点
     * @param {*} node 
     * @param {*} makeid 
     */
    renderNodeElementId: function (node, makeid) {
        if (node && node.nodeName && !this.state.specialArr.includes(node.nodeName)) {
            node.setAttribute("data-el-id", makeid);
        }
    },
    getBodyChildrenOnly: function (dom) {
        return dom.children
    },
    /**
     * json渲染成domtree
     * @param {*} treeArr 
     * @param {*} parentDom 
     */
    renderTreeNodeHtml: function (treeArr, parentDom) {
        for (var i = 0; i < treeArr.length; i++) {
            if (treeArr[i].nodeName && !this.state.specialArr.includes(treeArr[i].nodeName)) {

                if (treeArr[i].children) {
                    var _li = $(`
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item opend" onmouseover="handlerTreeNodeMouseOver(event,'${treeArr[i].elementId}')" onmouseleave="handlerTreeNodeLeave(event,'${treeArr[i].elementId}')" onmousedown="scrollToEl(event,'${treeArr[i].elementId}')" >
                            <p class="draggable-title">
                                <i></i>
                                ${treeArr[i].nodeName}
                            </p>
                        </li>
                    `);
                    // parentDom.show();
                    parentDom.append(_li);
                    var _ul = $('<ul class="dragArea"></ul>');
                    _li.append(_ul);
                    this.renderTreeNodeHtml(treeArr[i].children, _ul);
                } else {
                    var _li = $(`
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item opend" onmouseover="handlerTreeNodeMouseOver(event,'${treeArr[i].elementId}')" onmouseleave="handlerTreeNodeLeave(event,'${treeArr[i].elementId}')" onmousedown="scrollToEl(event,'${treeArr[i].elementId}')" >
                            <p class="draggable-title">
                                ${treeArr[i].nodeName}
                            </p>
                        </li>
                    `);
                    // parentDom.show();
                    parentDom.append(_li);
                }
            }
        }
    },
    renderHighlight: function (element, toHighlight, hideLine) {
        const el = element;
        if (el) {
            // Get element being dragged
            const $currentElement = $(el)
            const elementRectangle = el.getBoundingClientRect()
            const mousePosition = {
                x: elementRectangle.x,
                y: elementRectangle.y
            }

            // Show highlight line in the iframe
            this.orchestrateDragDrop($currentElement, elementRectangle, mousePosition, toHighlight, hideLine)
        }
    },
    /**
     * 高亮右边domtree
     * @param {*} element 
     * @param {*} scroll 
     * @param {*} inPanel 
     */
    highlightElement: function (element, scroll, inPanel) {
        var elementId = this.state.currentElementId
        if (elementId) {
            $('.dragArea li').removeClass('active')
            $('[data-el-id="' + elementId + '"]').addClass('active')

            if (scroll) {
                this.scrollTree(elementId, inPanel)
            }
        }
    },
    stoppedHoveringElement: function () {
        $('.dragArea li').removeClass('active')
    },
    /**
     * 页面滚动到指定位置
     * @param {*} elementId 
     * @param {*} inPanel 
     * @returns 
     */
    scrollTree: function (elementId, inPanel) {
        let win
        let scrollableArea
        let element

        if (inPanel) {
            element = $('.dom-tree-wrapper [data-el-id="' + elementId + '"] .draggable-title')[0]
            win = $('.dom-tree-wrapper .dom-tree')[0]
            scrollableArea = $('.dom-tree-wrapper .dom-tree')
        } else {
            element = $('.side-view [data-el-id="' + elementId + '"] .draggable-title')[0]
            win = $('.side-view .dom-tree')[0]
            scrollableArea = $('.side-view .dom-tree')
        }

        if (!element) {
            return
        }

        const rect = element.getBoundingClientRect()
        const windowHeight = scrollableArea.outerHeight()
        const elHeight = rect.height
        const elOffset = rect.top
        let offset

        if (elHeight < windowHeight) {
            offset = ((elOffset - 55) + scrollableArea.scrollTop()) - ((windowHeight / 2) - (elHeight / 2))
        } else {
            offset = (elOffset - 55) + scrollableArea.scrollTop()
        }

        win.scroll({
            top: offset,
            behavior: 'smooth'
        })
    },
    scrollWindow(overElement) {
        const win = window;
        const rect = overElement.getBoundingClientRect()
        const windowHeight = win.innerHeight
        const elHeight = rect.height
        const elOffset = rect.top
        let offset

        if (elHeight < windowHeight) {
            offset = (elOffset + win.scrollY) - ((windowHeight / 2) - (elHeight / 2))
        } else {
            offset = elOffset + win.scrollY
        }

        win.scroll({
            top: offset,
            behavior: 'smooth'
        })
    },
    /**
     * //Add CSS File to html
     * @returns 
     */
    getInsertionCSS: function () {
        let styles = "" +
            ".reserved-drop-marker{width:100%;height:2px;background:#00a8ff;position:absolute}.reserved-drop-marker::after,.reserved-drop-marker::before{content:'';background:#00a8ff;height:7px;width:7px;position:absolute;border-radius:50%;top:-2px}.reserved-drop-marker::before{left:0}.reserved-drop-marker::after{right:0}";
        styles += "[data-dragcontext-marker],[data-sh-parent-marker]{outline:#19cd9d solid 2px;outline-offset: -4px;text-align:center;position:absolute;z-index:123456781;pointer-events:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}[data-dragcontext-marker] [data-dragcontext-marker-text],[data-sh-parent-marker] [data-sh-parent-marker-text]{background:#19cd9d;color:#fff;padding:2px 10px;display:inline-block;font-size:14px;position:relative;top:-22px;min-width:121px;font-weight:700;pointer-events:none;z-index:123456782}[data-dragcontext-marker].invalid{outline:#dc044f solid 2px;outline-offset: -4px;}[data-dragcontext-marker].invalid [data-dragcontext-marker-text]{background:#dc044f}[data-dragcontext-marker=body]{outline-offset:-4px}[data-dragcontext-marker=body] [data-dragcontext-marker-text]{top:4px;}";
        styles += '.drop-marker{pointer-events:none;}.drop-marker.horizontal{background:#00adff;position:absolute;height:2px;list-style:none;visibility:visible!important;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4);z-index:123456789;text-align:center}.drop-marker.horizontal.topside{margin-top:0}.drop-marker.horizontal.bottomside{margin-top:2px}.drop-marker.horizontal:before{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-3px;float:left;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4)}.drop-marker.horizontal:after{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-3px;float:right;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4)}.drop-marker.vertical{height:50px;list-style:none;border:1px solid #00ADFF;position:absolute;margin-left:3px;display:inline;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}.drop-marker.vertical.leftside{margin-left:0}.drop-marker.vertical.rightside{margin-left:3px}.drop-marker.vertical:before{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-4px;top:0;position:absolute;margin-left:-4px;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}.drop-marker.vertical:after{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-left:-4px;bottom:-4px;position:absolute;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}';
        return styles
    },
    /**
     * 获取node的select选择器
     * @param {*} el 
     */
    getNodeSelect: function (el) {
        const getCssSelectorShort = (el) => {
            let path = [], parent;
            while (parent = el.parentNode) {
                let tag = el.tagName, siblings;
                path.unshift(
                    el.id ? `#${el.id}` : (
                        siblings = parent.children,
                        [].filter.call(siblings, sibling => sibling.tagName === tag).length === 1 ? tag :
                            `${tag}:nth-child(${1 + [].indexOf.call(siblings, el)})`
                    )
                );
                el = parent;
            };
            path.splice(0, 1);
            return `${path.join(' > ')}`;
        };
        return getCssSelectorShort(el);
    },
    exportSettingStyle: function(){
        var lCSSCoder = {
            format: function(s) {
                s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
                s = s.replace(/;\s*;/g, ";");
                s = s.replace(/\,[\s\.\#\d]*{/g, "{");
                s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
                s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
                s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
                return s
            },
            packAdv: function(s) {
                s = s.replace(/\/\*(.|\n)*?\*\//g, "");
                s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
                s = s.replace(/\,[\s\.\#\d]*\{/g, "{");
                s = s.replace(/;\s*;/g, ";");
                s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
                return (s == null) ? "" : s[1]
            },
            pack: function(s) {
                s = s.replace(/\/\*(.|\n)*?\*\//g, "");
                s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
                s = s.replace(/\,[\s\.\#\d]*\{/g, "{");
                s = s.replace(/;\s*;/g, ";");
                s = s.replace(/;\s*}/g, "}");
                s = s.replace(/([^\s])\{([^\s])/g, "$1{$2");
                s = s.replace(/([^\s])\}([^\n]s*)/g, "$1}\n$2");
                return s
            }
        };

        var exportStyleBtn = $(".exportStyleBtn");
        exportStyleBtn.unbind('click').bind('click',function(){
            var selectorStr = stylePanelHelper.state.stylePanelContainer;
            var _allInjectStyle =  $("#" + selectorStr).html();
            console.log(_allInjectStyle);
            initExportEl(_allInjectStyle);
        })

        function initExportEl(_allInjectStyle){
            if( $(".exportSettingStyle").length <= 0){
                var _styleBoxContainer = $(`
                <div class="exportSettingStyle">
                    <div class="exportSetingClose"></div>
                    <textarea id="exportInnerHtml"></textarea>
                </div>
            `);
                $("body").append(_styleBoxContainer);
            }

            $("#exportInnerHtml").html(lCSSCoder['format'](_allInjectStyle));

            $(".exportSetingClose").unbind('click').bind('click',function(){
                $(".exportSettingStyle").hide();
            })
            $(".exportSettingStyle").show();
        }
    }
}

/**
 * 样式面板辅组工具类
 */
const stylePanelHelper = {
    state: {
        // 选择器
        currentSelector: null,
        stylePanel:".right-seeting-board",
        spaceItemVal:["margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left"],
        // 导出的样式文件选择器
        stylePanelContainer:"stylePanelContainer"
    },
    /**
     * 初始化样式面板
     */
    initPanel: function (el) {
        $(this.state.stylePanel).show();

        this.closePanel();
        var _selector = treeHelper.getNodeSelect.call(treeHelper,el);
        this.state.currentSelector = _selector;
        var resultArr = this.getNodeDesignStyle(el, this.state.spaceItemVal);
        spacePanelHelper.initSpaceInputVal.call(spacePanelHelper,resultArr);
        spacePanelHelper.initEventListerInputSpace.call(spacePanelHelper);
        console.log(resultArr);
    },
    /**
     * 移除样式面板
     */
    removePanel: function(){
        $(this.state.stylePanel).hide();
    },
    /**
     * 获取dom对应的样式值
     * @param {*} el 
     * @param {*} arr 
     * @returns 
     */
    getNodeDesignStyle: function (el, arr) {
        var styleMap = getComputedStyle(el);
        var resultArr = [];
        for (var item of arr) {
            resultArr.push(parseFloat(styleMap[item]));
        }
        return resultArr;
    },
    closePanel: function(){
        $(".setting-close").unbind('click').bind('click',function(){
            stylePanelHelper.removePanel();
        });
    },
    injectPanelStyle: function(selector,styleName,styleVal){
        var isFlag = $("#weightCheckbox").is(":checked");
        var _styleStr = generateStyle(selector,styleName,styleVal,isFlag);
        var selectContainer = this.state.stylePanelContainer;
        console.log(_styleStr);
        var styleElStr = $("<style id="+ selectContainer +"></style>");
        if($("#"+ selectContainer).length <= 0){
            $("body").append(styleElStr);
            $("#"+ selectContainer).append(_styleStr);
        }else{
            $("#"+ selectContainer).append(_styleStr);
        }

        function generateStyle(selector,styleName,styleVal,isFlag){
            var _styleStr;
            if(isFlag){
                _styleStr =  selector + "{" + styleName + ":" + styleVal + "px" +" !important" + "}";
            }else{
                _styleStr =  selector + "{" + styleName + ":" + styleVal + "px" + "}";
            }
           return _styleStr;
        }
    }
}

/**
 * 间距设置项
 */
const spacePanelHelper = {
    /**
     * 获取间距面板对应input
     * @returns 
     */
    getSpaceInput: function () {
        var _boxContainer = $(".layout-box-container");
        var marginTop = _boxContainer.find(".margin-top-div").find("input");
        var marginRight = _boxContainer.find(".margin-right-div").find("input");
        var marginBottom = _boxContainer.find(".margin-bottom-div").find("input");
        var marginLeft = _boxContainer.find(".margin-left-div").find("input");
        var paddingTop = _boxContainer.find(".padding-top-div").find("input");
        var paddingRight = _boxContainer.find(".padding-right-div").find("input");
        var paddingBottom = _boxContainer.find(".padding-bottom-div").find("input");
        var paddingLeft = _boxContainer.find(".padding-left-div").find("input");

        return [
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft
        ]
    },
    /**
     * 初始化间距设置面板
     * @param {*} resultArr 
     */
    initSpaceInputVal: function (resultArr) {
        var spaceEl = this.getSpaceInput();
        if (resultArr.length == 8) {
            for (var i = 0; i < resultArr.length; i++) {
                spaceEl[i].val(resultArr[i])
            }
        };
    },
    /**
     * 初始化间距面板失去焦点事件绑定
     */
    initEventListerInputSpace: function () {
        var mapptingArr = Object.assign({},stylePanelHelper.state.spaceItemVal);
        var spaceEl = this.getSpaceInput();
        for (let i = 0; i < spaceEl.length; i++) {
            (function(){
                var _originVal = spaceEl[i].val();
                spaceEl[i].unbind('blur').bind('blur', function () {
                    var _inputVal = $(this).val();
                    if(_originVal != _inputVal){
                        var _selector = stylePanelHelper.state.currentSelector;
    
                        // 生成样式
                        stylePanelHelper.injectPanelStyle(_selector,mapptingArr[i],_inputVal);
                    }
                })
            })()
        }
    }
}