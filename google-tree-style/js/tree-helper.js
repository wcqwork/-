const treeHelper = {
    state: {
        domTree: undefined,
        specialArr:['#text','#comment','SCRIPT','LINK','TEMPLATE','IFRAME',"STYLE"],
        rightPanel:`
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
    makeid: function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    processNodeTree: function (dom) {
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

            return {
                elementId: this.makeid(),
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
        }

        if (node.dataset && node.dataset.hasOwnProperty('flWidgetInstance')) {
            newNodeName = node.dataset.name
        }

        return {
            elementId: this.makeid(),
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
    },
    getBodyChildrenOnly: function (dom) {
        return dom.children
    },
    renderTreeNodeHtml: function (treeArr,parentDom) {
        for(var i = 0; i < treeArr.length;i++){
            if(treeArr[i].nodeName && !this.state.specialArr.includes(treeArr[i].nodeName)){    
                if(treeArr[i].children){
                    var _li = $(`
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item">
                            <p class="draggable-title">
                                <i class="fa fa-minus"></i>
                                ${treeArr[i].nodeName}
                            </p>
                        </li>
                    `);
                    parentDom.show();
                    parentDom.append(_li);
                    var _ul = $('<ul class="dragArea" style="display:none;"></ul>');
                    _li.append(_ul);
                    this.renderTreeNodeHtml(treeArr[i].children,_ul);
                }else{
                    var _li = $(`
                        <li data-el-id="${treeArr[i].elementId}" class="draggable-item">
                            <p class="draggable-title">
                                <i class="fa fa-minus"></i>
                                ${treeArr[i].nodeName}
                            </p>
                        </li>
                    `);
                    parentDom.show();
                    parentDom.append(_li);
                }
            }
        }
    }
}