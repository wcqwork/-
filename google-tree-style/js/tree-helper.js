const treeHelper = {
    state: {
        domTree: undefined,
        specialArr: ['#text', '#comment', 'SCRIPT', 'LINK', 'TEMPLATE', 'IFRAME', "STYLE"],
        rightPanel: `
                <div class="wrapper">
            <div class="app-side-view">
                <div class="side-content">
                    <div class="dom-tree-wrapper">
                        <div class="header">
                            <p>DOM tree</p>
                        </div>
                        <div class="dom-tree">
                            <ul class="dragArea">
                                <!---->
                                <li data-el-id="2dEstnql" class="draggable-item open
                                    active">
                                    <p class="draggable-title">
                                        <i class="fa fa-minus"></i>
                                        DIV
                                        <i class="fa fa-trash-o"></i>
                                    </p>
                                    <ul class="dragArea">
                                        <!---->
                                        <li data-el-id="ZIgg9JQF" class="draggable-item
                                            open">
                                            <p class="draggable-title">
                                                <i class="fa fa-minus"></i>
                                                DIV
                                                <i class="fa fa-trash-o"></i>
                                            </p>
                                            <ul class="dragArea">
                                                <!---->
                                                <li data-el-id="z1NRlAuV"
                                                    class="draggable-item no-children
                                                    open">
                                                    <p class="draggable-title">
                                                        <!---->
                                                        H1
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea"></ul>
                                                </li>
                                                <!---->
                                                <li data-el-id="vnU8TZM2"
                                                    class="draggable-item no-children
                                                    open">
                                                    <p class="draggable-title">
                                                        <!---->
                                                        P
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea"></ul>
                                                </li>
                                                <!---->
                                                <li data-el-id="98cxGoyL"
                                                    class="draggable-item open">
                                                    <p class="draggable-title">
                                                        <i class="fa fa-minus"></i>
                                                        P
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea">
                                                        <!---->
                                                        <li data-el-id="eacshohd"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                A
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                    </ul>
                                                </li>
                                                <!---->
                                            </ul>
                                        </li>
                                        <!---->
                                    </ul>
                                </li>
                                <!---->
                                <li data-el-id="qMWOhRGI" class="draggable-item open">
                                    <p class="draggable-title">
                                        <i class="fa fa-minus"></i>
                                        DIV
                                        <i class="fa fa-trash-o"></i>
                                    </p>
                                    <ul class="dragArea">
                                        <!---->
                                        <!---->
                                        <!---->
                                        <li data-el-id="Kh2Mtqrq" class="draggable-item
                                            open">
                                            <p class="draggable-title">
                                                <i class="fa fa-minus"></i>
                                                DIV
                                                <i class="fa fa-trash-o"></i>
                                            </p>
                                            <ul class="dragArea">
                                                <!---->
                                                <li data-el-id="JUwftfGH"
                                                    class="draggable-item open">
                                                    <p class="draggable-title">
                                                        <i class="fa fa-minus"></i>
                                                        DIV
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea">
                                                        <!---->
                                                        <li data-el-id="leIlvYzi"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                H2
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="IANJe4K1"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="d4PdEiLr"
                                                            class="draggable-item open">
                                                            <p class="draggable-title">
                                                                <i class="fa fa-minus"></i>
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea">
                                                                <!---->
                                                                <li
                                                                    data-el-id="DMh1SzfL"
                                                                    class="draggable-item
                                                                    no-children open">
                                                                    <p
                                                                        class="draggable-title">
                                                                        <!---->
                                                                        A
                                                                        <i class="fa
                                                                            fa-trash-o"></i>
                                                                    </p>
                                                                    <ul
                                                                        class="dragArea"></ul>
                                                                </li>
                                                                <!---->
                                                            </ul>
                                                        </li>
                                                        <!---->
                                                    </ul>
                                                </li>
                                                <!---->
                                                <li data-el-id="NjyGzLir"
                                                    class="draggable-item open">
                                                    <p class="draggable-title">
                                                        <i class="fa fa-minus"></i>
                                                        DIV
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea">
                                                        <!---->
                                                        <li data-el-id="aUUmtDCr"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                H2
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="ItpXILxw"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="o2txGotr"
                                                            class="draggable-item open">
                                                            <p class="draggable-title">
                                                                <i class="fa fa-minus"></i>
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea">
                                                                <!---->
                                                                <li
                                                                    data-el-id="1OFkCgLa"
                                                                    class="draggable-item
                                                                    no-children open">
                                                                    <p
                                                                        class="draggable-title">
                                                                        <!---->
                                                                        A
                                                                        <i class="fa
                                                                            fa-trash-o"></i>
                                                                    </p>
                                                                    <ul
                                                                        class="dragArea"></ul>
                                                                </li>
                                                                <!---->
                                                            </ul>
                                                        </li>
                                                        <!---->
                                                    </ul>
                                                </li>
                                                <!---->
                                                <li data-el-id="jxvWnenH"
                                                    class="draggable-item open">
                                                    <p class="draggable-title">
                                                        <i class="fa fa-minus"></i>
                                                        DIV
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea">
                                                        <!---->
                                                        <li data-el-id="BCawokYE"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                H2
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="VigX1lDW"
                                                            class="draggable-item
                                                            no-children open">
                                                            <p class="draggable-title">
                                                                <!---->
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea"></ul>
                                                        </li>
                                                        <!---->
                                                        <li data-el-id="6U4ANqhJ"
                                                            class="draggable-item open">
                                                            <p class="draggable-title">
                                                                <i class="fa fa-minus"></i>
                                                                P
                                                                <i class="fa
                                                                    fa-trash-o"></i>
                                                            </p>
                                                            <ul class="dragArea">
                                                                <!---->
                                                                <li
                                                                    data-el-id="U40alvFy"
                                                                    class="draggable-item
                                                                    no-children open">
                                                                    <p
                                                                        class="draggable-title">
                                                                        <!---->
                                                                        A
                                                                        <i class="fa
                                                                            fa-trash-o"></i>
                                                                    </p>
                                                                    <ul
                                                                        class="dragArea"></ul>
                                                                </li>
                                                                <!---->
                                                            </ul>
                                                        </li>
                                                        <!---->
                                                    </ul>
                                                </li>
                                                <!---->
                                            </ul>
                                        </li>
                                        <!---->
                                        <li data-el-id="5SlvsnuX" class="draggable-item
                                            no-children open">
                                            <p class="draggable-title">
                                                <!---->
                                                HR
                                                <i class="fa fa-trash-o"></i>
                                            </p>
                                            <ul class="dragArea"></ul>
                                        </li>
                                        <!---->
                                        <li data-el-id="1MqUoX0h" class="draggable-item
                                            open">
                                            <p class="draggable-title">
                                                <i class="fa fa-minus"></i>
                                                FOOTER
                                                <i class="fa fa-trash-o"></i>
                                            </p>
                                            <ul class="dragArea">
                                                <!---->
                                                <li data-el-id="Twnbudqb"
                                                    class="draggable-item no-children
                                                    open">
                                                    <p class="draggable-title">
                                                        <!---->
                                                        P
                                                        <i class="fa fa-trash-o"></i>
                                                    </p>
                                                    <ul class="dragArea"></ul>
                                                </li>
                                                <!---->
                                            </ul>
                                        </li>
                                        <!---->
                                    </ul>
                                </li>
                                <!---->
                            </ul>
                        </div>
                    </div>
                    <div class="side-view">
                        <!---->
                        <div class="header">
                            <p>DOM tree</p>
                        </div>
                    </div>
                </div>
                <div class="side-nav">
                    <div class="" style="display:none;">
                        <i class="fa fa-square-o"></i>
                    </div>
                    <div class="active">
                        <i class="fa fa-align-left"></i>
                    </div>
                </div>
            </div>
        </div>    
        `
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
    positionContextMarker: function ($contextMarker, $element) {
        var rect = $element.get(0).getBoundingClientRect();
        $contextMarker.css({
            height: (rect.height + 4) + 'px',
            width: (rect.width + 4) + 'px',
            top: (rect.top + $('body').scrollTop() - 2) + 'px',
            left: (rect.left + $($("body")).scrollLeft() - 2) + 'px'
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
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item closed" onmouseover="handlerTreeNodeMouseOver(event,'${treeArr[i].elementId}')" onmouseleave="handlerTreeNodeLeave(event,'${treeArr[i].elementId}')" onmousedown="scrollToEl(event,'${treeArr[i].elementId}')" >
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
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item closed" onmouseover="handlerTreeNodeMouseOver(event,'${treeArr[i].elementId}')" onmouseleave="handlerTreeNodeLeave(event,'${treeArr[i].elementId}')" onmousedown="scrollToEl(event,'${treeArr[i].elementId}')" >
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
    findByElement(node, element) {
        if (node.node == element) {
            return node
        }

        if (node.children && node.children.length) {
            for (var i = 0; i < node.children.length; i++) {
                this.findByElement(node.children[i])
            }
        }

        return
    },
    highlightElement: function (element, scroll, inPanel) {
        // debugger;
        let found
        if (this.state.domTree && this.state.domTree.length) {
            this.state.domTree.forEach((node) => {
                found = this.findByElement(node, element)

                if (found) {
                    // debugger;
                    $('.dragArea li').removeClass('active')
                    $('[data-el-id="' + found.elementId + '"]').addClass('active')

                    if (scroll) {
                        this.scrollTree(found.elementId, inPanel)
                    }
                }
            })
        }
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
}