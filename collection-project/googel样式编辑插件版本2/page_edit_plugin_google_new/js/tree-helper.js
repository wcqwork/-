var setAllHelper = function () {
    window.treeHelper = {
        iframeContentDocument: null,
        iframeEl: null,
        state: {
            loadjsState: {
                spectrum: false,
                jqueryUi: false,
                iframe: false,
            },
            domTree: undefined,
            currentElementId: null,
            keypreesCtrl:false,
            specialArr: ['#text', '#comment', 'SCRIPT', 'LINK', 'TEMPLATE', 'IFRAME', "STYLE"],
            rightPanel: `
            <div class="wrapper google-page-edit-plugin">
            <div class="top-windowChoose">
                <div class="top-left-outline">
                <svg t="1668588709471" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4390" width="32" height="32"><path d="M834.244923 608.649846h-64.433231V512a32.216615 32.216615 0 0 0-32.256-32.216615h-193.339077v-64.433231h64.433231a32.216615 32.216615 0 0 0 32.256-32.256V189.755077A32.216615 32.216615 0 0 0 608.649846 157.538462h-193.339077a32.216615 32.216615 0 0 0-32.216615 32.216615v193.378461a32.216615 32.216615 0 0 0 32.256 32.216616h64.433231v64.433231h-193.378462a32.216615 32.216615 0 0 0-32.177231 32.216615v96.649846H189.755077a32.216615 32.216615 0 0 0-32.216615 32.256v193.339077a32.216615 32.216615 0 0 0 32.216615 32.216615h193.378461a32.216615 32.216615 0 0 0 32.216616-32.216615v-193.378461a32.216615 32.216615 0 0 0-32.256-32.177231H318.660923v-64.472616h386.678154v64.433231h-64.433231a32.216615 32.216615 0 0 0-32.256 32.256v193.339077a32.216615 32.216615 0 0 0 32.256 32.216615h193.339077a32.256 32.256 0 0 0 32.216615-32.216615v-193.378461a32.216615 32.216615 0 0 0-32.216615-32.177231zM350.877538 673.122462v128.905846H221.971692V673.083077H350.916923z m96.689231-322.244924V221.971692h128.866462V350.916923h-128.866462z m354.461539 451.15077H673.083077V673.083077h128.905846v128.905846z" p-id="4391"></path></svg>
                </div>
                <div class="top-windowChoose-bd">
                    <div class="screen-window-container">
                        <ul>
                            <li iframeclass="screen-pc-proview" class="screen-on" data-width="100%" data-height="calc(100vh - 77px)">
                                <svg t="1667978170876" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3690" width="22" height="22"><path d="M85.312 192a64 64 0 0 1 64-64h725.376a64 64 0 0 1 64 64v469.312a64 64 0 0 1-64 64h-320v85.376H704V896H320v-85.312h149.312v-85.376h-320a64 64 0 0 1-64-64V192z m85.376 21.312V640h682.624V213.312H170.688z" p-id="3691"></path></svg>
                            </li>
                            <li iframeclass="screen-laptop-proview" class="" data-width="1400px" data-height="calc(100vh - 100px)">
                            <svg t="1681703628770" class="icon" viewBox="0 0 1547 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6503" width="22" height="22"><path d="M1410.844 887.467v-819.2c0-36.41-29.582-68.267-68.266-68.267H204.8c-36.409 0-68.267 29.582-68.267 68.267v819.2H0v91.022h4.551C13.653 1005.796 38.684 1024 68.267 1024H1479.11c29.582 0 54.613-18.204 63.716-45.511h4.55v-91.022h-136.533zM250.311 113.777h1046.756v682.667H250.31V113.778z m637.156 796.445H659.91v-45.51h227.556v45.51z" p-id="6504"></path></svg>
                            </li>
                            <li iframeclass="screen-tabletH-proview" class="" data-width="1024px" data-height="680px">
                                <svg t="1667978259751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3960" width="22" height="22"><path d="M170.688 789.312h682.624V234.688H170.688v554.624z m0 85.376c-44.544 0-85.376-34.496-85.376-82.688v-560c0-48.192 40.832-82.688 85.376-82.688h682.624c44.48 0 85.376 34.496 85.376 82.688v560c0 48.192-40.896 82.688-85.376 82.688H170.688z m608-512v298.624h-85.376V362.688h85.376z" p-id="3961"></path></svg>
                            </li>
                            <li iframeclass="screen-mobileS-proview" class="linkThis" data-width="374px" data-height="750px">
                                <svg t="1667978285968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4095" width="22" height="22"><path d="M311.741217 111.304348A66.871652 66.871652 0 0 0 244.869565 178.176V847.026087a66.871652 66.871652 0 0 0 66.871652 66.871652h401.296696a66.871652 66.871652 0 0 0 66.871652-66.871652V178.176A66.871652 66.871652 0 0 0 713.037913 111.304348H311.741217z m22.305392 713.394087V200.481391h356.685913v624.217044H334.046609zM623.304348 667.826087H400.695652v89.043478h222.608696v-89.043478z" p-id="4096"></path></svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="top-left-right-word">
                    <a href="http://en-1231313.tw.ldyjz.com/--id40262957.html" target="_blank">使用文档</a>
                </div>
                <div class="top-right-export">
                    <button>导出代码</button>
                </div>
            </div>
            <div class="app-side-view">
            
                <div class="side-content active" id="ld-panel-setting-dom-tree">
                    <div class="side-view">
                    <div class="ld-top-line"></div>
                        <!---->
                        <div class="header">
                            <p class="ld-b-tree">页面大纲</p>
                            <span class="close-dom-tree"><svg t="1668499548553" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3399" width="20" height="20"><path d="M451.648 512L180.16 240.448l60.288-60.288L512 451.648l271.552-271.488 60.288 60.288L572.416 512l271.488 271.552-60.288 60.288L512 572.416l-271.552 271.488-60.288-60.288L451.648 512z" p-id="3400" fill="#707070"></path></svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-seeting-board" style="display: none;" id="ld-panel-setting">
            <div class="ld-top-line"></div>
                <div class="setting-title" id="setting-title-header">
                    <div class="ld-s-t">样式设置</div>
                    <div class="setting-close"><svg t="1668499548553" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3399" width="20" height="20"><path d="M451.648 512L180.16 240.448l60.288-60.288L512 451.648l271.552-271.488 60.288 60.288L572.416 512l271.488 271.552-60.288 60.288L512 572.416l-271.552 271.488-60.288-60.288L451.648 512z" p-id="3400" fill="#707070"></path></svg></div>
                </div>
                <input type="checkbox"  style="display:none;" id="weightCheckbox" name="weightCheckbox" checked="checked" />
                <div class="seeting-content" id="ld-accordion">
    
                    <h3 class="subtitle">可见性</h3>
                    <div class="seeting-content-item" id="setting-hidden-flag">
                        <label class="ld-show-dom"> <input type="radio" data-name="ld-none" value="none" name="ldHidden" /><span>隐藏</span> </label>
                        <label class="ld-show-dom"> <input type="radio" data-name="ld-block" value="block" name="ldHidden" /><span>不隐藏</span> </label>
                    </div>
    
                    <h3 class="subtitle">文字</h3>
                    <div class="seeting-content-item">
                        <h4 class="seeting-h4">字体</h4>
                        <div class="subtitle-content ld-font-setting">
                            <select class="ld-s-select ld-s-select" id="setting-fontfamily-flag">
                                <option value="Abel">Abel</option>
                                <option value="Akronim">Akronim</option>
                                <option value="Aladin">Aladin</option>
                                <option value="Alef">Alef</option>
                                <option value="Alex Brush">Alex Brush</option>
                                <option value="Anton">Anton</option>
                                <option value="Arial">Arial</option>
                                <option value="Arial Black">Arial Black</option>
                                <option value="Arsenal">Arsenal</option>
                                <option value="Arvo">Arvo</option>
                                <option value="Assistant">Assistant</option>
                                <option value="Baloo Tamma">Baloo Tamma</option>
                                <option value="Bangers">Bangers</option>
                                <option value="Barlow Condensed">Barlow Condensed</option>
                                <option value="Basic">Basic</option>
                                <option value="Baumans">Baumans</option>
                                <option value="Bebas Neue Regular">Bebas Neue Regular</option>
                                <option value="Bigelow Rules">Bigelow Rules</option>
                                <option value="Black Han Sans">Black Han Sans</option>
                                <option value="Boogaloo">Boogaloo</option>
                                <option value="Bowlby One SC">Bowlby One SC</option>
                                <option value="Cabin">Cabin</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Calligraffitti">Calligraffitti</option>
                                <option value="Cantora One">Cantora One</option>
                                <option value="Cardo">Cardo</option>
                                <option value="Carrois Gothic SC">Carrois Gothic SC</option>
                                <option value="Changa One">Changa One</option>
                                <option value="Chewy">Chewy</option>
                                <option value="Chicle">Chicle</option>
                                <option value="Cinzel">Cinzel</option>
                                <option value="Comfortaa">Comfortaa</option>
                                <option value="Comic Sans MS">Comic Sans MS</option>
                                <option value="Concert One">Concert One</option>
                                <option value="Condiment">Condiment</option>
                                <option value="Contrail One">Contrail One</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Covered By Your Grace">Covered By Your Grace</option>
                                <option value="Crimson Text Regular">Crimson Text Regular</option>
                                <option value="Cutive">Cutive</option>
                                <option value="Damion">Damion</option>
                                <option value="Dancing Script">Dancing Script</option>
                                <option value="Dela Gothic One">Dela Gothic One</option>
                                <option value="Devonshire">Devonshire</option>
                                <option value="Didact Gothic">Didact Gothic</option>
                                <option value="Diplomata SC">Diplomata SC</option>
                                <option value="Dosis">Dosis</option>
                                <option value="Droid Sans">Droid Sans</option>
                                <option value="Droid Serif">Droid Serif</option>
                                <option value="EB Garamond">EB Garamond</option>
                                <option value="El Messiri">El Messiri</option>
                                <option value="Emilys Candy">Emilys Candy</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Enriqueta">Enriqueta</option>
                                <option value="Erica One">Erica One</option>
                                <option value="Euphoria Script">Euphoria Script</option>
                                <option value="Fascinate Inline">Fascinate Inline</option>
                                <option value="Fira Sans">Fira Sans</option>
                                <option value="Fjalla One">Fjalla One</option>
                                <option value="Fredericka the Great">Fredericka the Great</option>
                                <option value="Fredoka One">Fredoka One</option>
                                <option value="Gentium Book">Gentium Book</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Geostar Fill">Geostar Fill</option>
                                <option value="Great Vibes">Great Vibes</option>
                                <option value="Griffy">Griffy</option>
                                <option value="Hanalei Fill">Hanalei Fill</option>
                                <option value="Headland One">Headland One</option>
                                <option value="Helvetica">Helvetica</option>
                                <option value="Henny Penny">Henny Penny</option>
                                <option value="Herr Von Muellerhoff">Herr Von Muellerhoff</option>
                                <option value="Hind">Hind</option>
                                <option value="Hind Madurai">Hind Madurai</option>
                                <option value="Hind Vadodara">Hind Vadodara</option>
                                <option value="Homemade Apple">Homemade Apple</option>
                                <option value="Impact">Impact</option>
                                <option value="Imprima">Imprima</option>
                                <option value="Inter">Inter</option>
                                <option value="Jim Nightshade">Jim Nightshade</option>
                                <option value="Julius Sans One">Julius Sans One</option>
                                <option value="Kaushan Script">Kaushan Script</option>
                                <option value="Lato">Lato</option>
                                <option value="Lexend Deca">Lexend Deca</option>
                                <option value="Libre Baskerville">Libre Baskerville</option>
                                <option value="Lobster">Lobster</option>
                                <option value="Lobster Two">Lobster Two</option>
                                <option value="Londrina Shadow">Londrina Shadow</option>
                                <option value="Love Ya Like A Sister">Love Ya Like A Sister</option>
                                <option value="Loved by the King">Loved by the King</option>
                                <option value="Lovers Quarrel">Lovers Quarrel</option>
                                <option value="Luckiest Guy">Luckiest Guy</option>
                                <option value="Macondo Swash Caps">Macondo Swash Caps</option>
                                <option value="Marcellus SC">Marcellus SC</option>
                                <option value="Margarine">Margarine</option>
                                <option value="Merriweather">Merriweather</option>
                                <option value="Metamorphous">Metamorphous</option>
                                <option value="Miss Fajardose">Miss Fajardose</option>
                                <option value="Monoton">Monoton</option>
                                <option value="Monsieur La Doulaise">Monsieur La Doulaise</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Montserrat Alternates">Montserrat Alternates</option>
                                <option value="Mr Dafoe">Mr Dafoe</option>
                                <option value="Mrs Saint Delafield">Mrs Saint Delafield</option>
                                <option value="MuktaVaani-Regular">MuktaVaani-Regular</option>
                                <option value="Muli">Muli</option>
                                <option value="Mystery Quest">Mystery Quest</option>
                                <option value="Niconne">Niconne</option>
                                <option value="Nixie One">Nixie One</option>
                                <option value="Noto Sans JP">Noto Sans JP</option>
                                <option value="Noto Sans SC">Noto Sans SC</option>
                                <option value="Noto Sans TC">Noto Sans TC</option>
                                <option value="Nunito">Nunito</option>
                                <option value="Nunito Sans">Nunito Sans</option>
                                <option value="Odibee Sans">Odibee Sans</option>
                                <option value="Oleo Script">Oleo Script</option>
                                <option value="Open Sans">Open Sans</option>
                                <option value="Open Sans Condensed">Open Sans Condensed</option>
                                <option value="Oswald">Oswald</option>
                                <option value="Pacifico">Pacifico</option>
                                <option value="Permanent Marker">Permanent Marker</option>
                                <option value="Pinyon Script">Pinyon Script</option>
                                <option value="Poiret One">Poiret One</option>
                                <option value="Pontano Sans">Pontano Sans</option>
                                <option value="Poppins">Poppins</option>
                                <option value="PT Sans">PT Sans</option>
                                <option value="PT Sans Narrow">PT Sans Narrow</option>
                                <option value="Questrial">Questrial</option>
                                <option value="Quicksand">Quicksand</option>
                                <option value="Quicksand-Regular">Quicksand-Regular</option>
                                <option value="Qwigley">Qwigley</option>
                                <option value="Racing Sans One">Racing Sans One</option>
                                <option value="Raleway">Raleway</option>
                                <option value="Rammetto One">Rammetto One</option>
                                <option value="Ranchers">Ranchers</option>
                                <option value="Rancho">Rancho</option>
                                <option value="Roboto">Roboto</option>
                                <option value="Roboto Condensed">Roboto Condensed</option>
                                <option value="Roboto Flex">Roboto Flex</option>
                                <option value="Roboto Mono">Roboto Mono</option>
                                <option value="Roboto Serif">Roboto Serif</option>
                                <option value="Roboto Slab">Roboto Slab</option>
                                <option value="Rock Salt">Rock Salt</option>
                                <option value="Rokkitt">Rokkitt</option>
                                <option value="Rouge Script">Rouge Script</option>
                                <option value="Rubik">Rubik</option>
                                <option value="Rubik Glitch">Rubik Glitch</option>
                                <option value="Rufina">Rufina</option>
                                <option value="Russo One">Russo One</option>
                                <option value="Ruthie">Ruthie</option>
                                <option value="sans-serif">sans-serif</option>
                                <option value="Scheherazade New">Scheherazade New</option>
                                <option value="serif">serif</option>
                                <option value="Shadows Into Light">Shadows Into Light</option>
                                <option value="Shadows Into Light Two">Shadows Into Light Two</option>
                                <option value="Sigmar One">Sigmar One</option>
                                <option value="Six Caps">Six Caps</option>
                                <option value="Source Sans Pro">Source Sans Pro</option>
                                <option value="Spicy Rice">Spicy Rice</option>
                                <option value="Stint Ultra Condensed">Stint Ultra Condensed</option>
                                <option value="Sumana-Regular">Sumana-Regular</option>
                                <option value="Tangerine">Tangerine</option>
                                <option value="Teko">Teko</option>
                                <option value="The Girl Next Door">The Girl Next Door</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="TitilliumWeb-Regular">TitilliumWeb-Regular</option>
                                <option value="Trebuchet MS">Trebuchet MS</option>
                                <option value="Ubuntu">Ubuntu</option>
                                <option value="Ubuntu Condensed">Ubuntu Condensed</option>
                                <option value="Varela Round">Varela Round</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Wallpoet">Wallpoet</option>
                                <option value="Wire One">Wire One</option>
                                <option value="Work Sans">Work Sans</option>
                                <option value="Yanone Kaffeesatz">Yanone Kaffeesatz</option>
                                <option value="Yantramanav">Yantramanav</option>
                                <option value="Yellowtail">Yellowtail</option>
                                <option value="Yesteryear">Yesteryear</option>
                                <option value="Zen Kaku Gothic New">Zen Kaku Gothic New</option>
                                <option value="宋体">宋体</option>
                                <option value="微软雅黑">微软雅黑</option>
                                <option value="楷体">楷体</option>
                                <option value="黑体">黑体</option>
                              </select>
                              <div class="ld-font-style ld-text-decoration" type="text-decoration">
                                <svg t="1668042952396" fill="currentColor" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1972" width="22" height="22"><path d="M789.3504 480c0 64.256-14.5408 131.9936-59.8528 184.0128-46.2848 53.1456-118.272 82.6368-217.4976 82.6368-101.7856 0-173.2608-36.5056-218.368-91.648-43.8272-53.5552-58.9824-120.0128-58.9824-175.0016V106.6496H320v373.3504c0 41.0112 11.52 86.528 39.68 120.9856 26.88 32.8704 72.7552 60.3648 152.32 60.3648 82.1248 0 127.488-23.8592 153.1392-53.4016 26.6752-30.6176 38.8608-74.9056 38.8608-128v-373.248H789.3504v373.248z m42.6496 437.3504H192V832h640v85.3504z" p-id="1973"></path></svg>
                              </div>
                              <div class="ld-font-style ld-style-italic" type="font-style">
                                <svg t="1668042969969" fill="currentColor" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2112" width="22" height="22"><path d="M524.5952 213.3504H384V128h362.6496v85.3504h-135.2192L499.4048 810.6496H640V896H277.3504v-85.3504h135.2192l112.0256-597.2992z" p-id="2113"></path></svg>
                              </div>
                        </div>
    
                        <div class="seeting-content-ul">
                            <div class="seeting-content-li">
                                <h4 class="seeting-h4">字号</h4>
                                <div>
                                    <input type="number" class="ld-s-input" id="setting-fontsize-flag">
                                </div>
                            </div>
                            <div class="seeting-content-li">
                                <h4 class="seeting-h4">字重</h4>
                                <div>
                                    <select class="ld-default-inp" id="setting-font-weight-flag">
                                        <option value="normal">请选择</option>
                                        <option value="100">100</option>
                                        <option value="200">200</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="600">600</option>
                                        <option value="700">700</option>
                                        <option value="bold">bold</option>
                                        <option value="lighter">lighter</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="seeting-content-ul">
                            <div class="seeting-content-li">
                                <h4 class="seeting-h4">行高</h4>
                                <div>
                                    <input type="number" class="ld-s-input" id="setting-lineHeight-flag">
                                </div>
                            </div>
                            <div class="seeting-content-li">
                                <h4 class="seeting-h4">字间距</h4>
                                <div>
                                    <input type="number" class="ld-s-input" id="setting-letterSpacing-flag">
                                </div>
                            </div>
                        </div>
                        <h4 class="seeting-h4">颜色</h4>
                        <div class="subtitle-content ld-set-color ld-init-color-style" id="ld-font-color-bt"> 
                            <input id='ld-font-text-color'/>
                        </div>
                        <h4 class="seeting-h4">对齐</h4>
                        <div class="subtitle-content">
                            <div class="ld-setting-text-align" id="setting-text-align-flag">
                                <p value="left"><svg t="1668043223022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M85.312 149.312h853.376v85.376H85.312V149.312z m0 213.376h448V448h-448V362.688z m0 213.312h768v85.312h-768V576z m0 213.312h448v85.376h-448v-85.376z" p-id="2325"></path></svg></p>
                                <p value="center"><svg t="1668043232599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2500" width="20" height="20"><path d="M85.312 149.312h853.376v85.376H85.312V149.312z m213.376 213.376h426.624V448H298.688V362.688zM128 576h768v85.312H128V576z m170.688 213.312h426.624v85.376H298.688v-85.376z" p-id="2501"></path></svg></p>
                                <p value="right"><svg t="1668043243053" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2676" width="20" height="20"><path d="M938.688 149.312H85.312v85.376h853.376V149.312z m0 213.376h-448V448h448V362.688z m0 213.312h-768v85.312h768V576z m0 213.312h-448v85.376h448v-85.376z" p-id="2677"></path></svg></p>
                                <p value="justify"><svg t="1668043253103" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2852" width="20" height="20"><path d="M85.312 149.312h853.376v85.376H85.312V149.312z m0 213.376h853.376V448H85.312V362.688z m0 213.312h853.376v85.312H85.312V576z m0 213.312h853.376v85.376H85.312v-85.376z" p-id="2853"></path></svg></p>
                            </div>
                        </div>
                        <h4 class="seeting-h4">悬浮文字颜色</h4>
                            <div class="subtitle-content ld-set-color ld-init-color-style" id="ld-hover-color-bt"> 
                                <input id='ld-hover-text-color'/>
                            </div>
                        <h4 class="seeting-h4">是否允许换行</h4>
                        <div class="subtitle-content">
                            <div class="ld-setting-white-space" id="setting-white-space-flag">
                                <p class="nowrap" value="nowrap">不换行</p>
                                <p class="normal" value="normal">换行</p>
                            </div>
                        </div>
                        <h4 class="seeting-h4">是否超出隐藏</h4>
                        <div class="subtitle-content">
                            <div class="ld-setting-visibility" id="setting-visibility-flag">
                                <p class="visible" value="visible">不隐藏</p>
                                <p class="hidden" value="hidden">隐藏</p>
                            </div>
                        </div>
                        <h4 class="seeting-h4 ld-setting-line-number-text">超出几行隐藏（超出的部分显示…）</h4>
                        <div class="subtitle-content">
                            <div class="ld-setting-line-number" id="setting-line-number-flag">
                                <input class="ld-default-inp ld-b-inp _lineNumber"  type="number" min="1">
                            </div>
                        </div>
                    </div>

                    <h3 class="subtitle">大小</h3>
                    <div class="seeting-content-item" id="setting-element-size-flag">
                        <label class="ld-show-dom"> <input type="radio" data-name="ld-zoom" value="zoom" checked name="ldElementSize" /><span>百分比缩放大小</span> </label>
                        <label class="ld-show-dom"> <input type="radio" data-name="ld-pixel" value="pixel" name="ldElementSize" /><span>像素</span> </label>
                        <div class="ld-show-slider seeting-h4">
                            <div id="ld-show-slider-zoom"></div><span class="ld-show-slider-zoom-text"></span>
                        </div>
                        <div class="ld-show-pixel seeting-h4">
                            <div id="ld-show-pixel-width">
                            <span>宽度</span>
                                    <div class="ld-b-px">
                                        <input class="ld-default-inp ld-b-inp _pixelWidth"  type="number"><span class="ld-px">px</span>
                                    </div>
                            </div>
                            <div id="ld-show-pixel-height">
                                <span>高度</span>
                                <div class="ld-b-px">
                                    <input class="ld-default-inp ld-b-inp _pixelHeight"  type="number"><span class="ld-px">px</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <h3 class="subtitle">背景</h3>
                    <div class="seeting-content-item" id="setting-background-color-flag">
                      <h4 class="seeting-h4">背景颜色</h4>
                      <div class="subtitle-content ld-set-color ld-init-color-style" id="ld-font-color-bt"> 
                          <input id='ld-font-background-color'/>
                      </div>
                    </div> 
    
    
                    <h3 class="subtitle">边距</h3>
                    <div class="seeting-content-item" style="overflow: hidden;">
                        <div class="subtitle-content">
                            <div id="el-collapse-content-7635" class="el-collapse-item__wrap" role="tabpanel"
                                aria-hidden="false" aria-labelledby="el-collapse-head-7635" data-old-padding-top=""
                                data-old-padding-bottom="" data-old-overflow="" style="">
                                <div class="el-collapse-item__content">
                                    <div class="layout-page-container" data-v-42fee549="">
                                        <div class="layout-box-container" id='ld-margin-padding-dom'>
                                            <div id="ld-center-m-b">
                                                <svg fill="currentColor" t="1668081388707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2669" width="24" height="24"><path d="M865.097143 0C952.868571 0 1024 71.131429 1024 158.902857v706.194286c0 87.771429-71.131429 158.902857-158.902857 158.902857H158.902857A158.902857 158.902857 0 0 1 0 865.097143V158.902857C0 71.131429 71.131429 0 158.902857 0z m0 35.328H158.902857a123.611429 123.611429 0 0 0-123.611428 123.574857v706.194286a123.611429 123.611429 0 0 0 123.611428 123.611428h706.194286a123.611429 123.611429 0 0 0 123.611428-123.611428V158.902857a123.611429 123.611429 0 0 0-123.611428-123.611428z m-298.788572 444.781714a97.536 97.536 0 0 1 0 137.910857l-103.424 103.460572a97.536 97.536 0 1 1-137.910857-137.910857l60.342857-60.342857 34.450286 34.486857-60.342857 60.342857a48.749714 48.749714 0 1 0 68.973714 68.937143l103.424-103.424c19.053714-19.053714 19.053714-49.92 0-68.973715l34.486857-34.486857z m155.172572-155.136a97.536 97.536 0 0 1 0 137.874286l-60.342857 60.342857-34.486857-34.450286 60.342857-60.342857A48.749714 48.749714 0 1 0 618.057143 359.424l-103.424 103.460571c-19.017143 19.017143-19.017143 49.92 0 68.937143l-34.486857 34.486857a97.536 97.536 0 0 1 0-137.910857l103.460571-103.424a97.536 97.536 0 0 1 137.874286 0z" p-id="2670"></path></svg>
                                            </div>
                                            <div class="margin-top-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='margin-top' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="margin-right-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='margin-right' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="margin-bottom-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <span class="help-txt">外边距</span>
                                                    <input type='margin-bottom' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="margin-left-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='margin-left' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="padding-top-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='padding-top' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="padding-right-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='padding-right' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="padding-bottom-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <span class="help-txt">内边距</span>
                                                    <input type='padding-bottom' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                            <div class="padding-left-div">
                                                <span class="next-input next-medium next-noborder">
                                                    <!---->
                                                    <input type='padding-left' maxlength="4" placeholder="0" autocomplete="off">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <h3 class="subtitle">边框</h3>
                    <div class="seeting-content-item" id="setting-border-select">
                        <div class="ld-seeting-b-out">
                            <div class="ld-seeting-b-left" >
                                <div>
                                    <div type='Top' class="ld-s-border ld-b-tb"><svg fill="currentColor" t="1668594022136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4334" width="28" height="28"><path d="M891.733333 665.6a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM145.066667 746.666667v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 1 0 42.666667 0zM891.733333 512a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM870.4 268.8v68.266667a21.333333 21.333333 0 1 0 42.666667 0v-68.266667a21.333333 21.333333 0 1 0-42.666667 0zM145.066667 439.466667v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 1 0 42.666667 0zM891.733333 819.2a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM145.066667 593.066667v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 1 0 42.666667 0zM605.866667 900.266667a21.333333 21.333333 0 0 0-21.333334-21.333334h-68.266666a21.333333 21.333333 0 1 0 0 42.666667h68.266666a21.333333 21.333333 0 0 0 21.333334-21.333333zM759.466667 900.266667a21.333333 21.333333 0 0 0-21.333334-21.333334h-68.266666a21.333333 21.333333 0 1 0 0 42.666667h68.266666a21.333333 21.333333 0 0 0 21.333334-21.333333zM913.066667 900.266667v-17.066667a21.333333 21.333333 0 0 0-42.24-4.266667H823.466667a21.333333 21.333333 0 1 0 0 42.666667h68.266666a21.333333 21.333333 0 0 0 21.333334-21.333333zM145.066667 900.266667v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 1 0 42.666667 0zM298.666667 900.266667a21.333333 21.333333 0 0 0-21.333334-21.333334h-68.266666a21.333333 21.333333 0 1 0 0 42.666667h68.266666a21.333333 21.333333 0 0 0 21.333334-21.333333zM452.266667 900.266667a21.333333 21.333333 0 0 0-21.333334-21.333334h-68.266666a21.333333 21.333333 0 1 0 0 42.666667h68.266666a21.333333 21.333333 0 0 0 21.333334-21.333333z" p-id="4335" fill="#4E5969"></path><path d="M913.066667 226.133333v-102.4a21.333333 21.333333 0 0 0-21.333334-21.333333h-768a21.333333 21.333333 0 0 0-21.333333 21.333333v162.133334a21.333333 21.333333 0 1 0 42.666667 0V247.466667h746.666666a21.333333 21.333333 0 0 0 21.333334-21.333334z" p-id="4336" fill="#4E5969"></path></svg></div>
                                </div>
                                <div class="ld-s-b-center">
                                    <div type='Left'  class="ld-s-border"><svg fill="currentColor" t="1668050587792" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2463" width="28" height="28"><path d="M661.333333 128a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM742.4 874.666667h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 1 0 0-42.666666zM507.733333 128a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM264.533333 149.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM435.2 874.666667h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 1 0 0-42.666666zM814.933333 128a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM588.8 874.666667h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 1 0 0-42.666666zM896 413.866667a21.333333 21.333333 0 0 0-21.333333 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM896 260.266667a21.333333 21.333333 0 0 0-21.333333 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM896 106.666667h-17.066667a21.333333 21.333333 0 0 0-4.266666 42.24V196.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM896 874.666667h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 1 0 0-42.666666zM896 721.066667a21.333333 21.333333 0 0 0-21.333333 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM896 567.466667a21.333333 21.333333 0 0 0-21.333333 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333z" p-id="2464"></path><path d="M221.866667 106.666667H119.466667a21.333333 21.333333 0 0 0-21.333334 21.333333v768a21.333333 21.333333 0 0 0 21.333334 21.333333h162.133333a21.333333 21.333333 0 1 0 0-42.666666h-38.4V128a21.333333 21.333333 0 0 0-21.333333-21.333333z" p-id="2465" fill="#4E5969"></path></svg></div>
                                    <div type='All'  class="ld-s-border"><svg fill="currentColor" t="1668081388707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2669" width="24" height="24"><path d="M865.097143 0C952.868571 0 1024 71.131429 1024 158.902857v706.194286c0 87.771429-71.131429 158.902857-158.902857 158.902857H158.902857A158.902857 158.902857 0 0 1 0 865.097143V158.902857C0 71.131429 71.131429 0 158.902857 0z m0 35.328H158.902857a123.611429 123.611429 0 0 0-123.611428 123.574857v706.194286a123.611429 123.611429 0 0 0 123.611428 123.611428h706.194286a123.611429 123.611429 0 0 0 123.611428-123.611428V158.902857a123.611429 123.611429 0 0 0-123.611428-123.611428z m-298.788572 444.781714a97.536 97.536 0 0 1 0 137.910857l-103.424 103.460572a97.536 97.536 0 1 1-137.910857-137.910857l60.342857-60.342857 34.450286 34.486857-60.342857 60.342857a48.749714 48.749714 0 1 0 68.973714 68.937143l103.424-103.424c19.053714-19.053714 19.053714-49.92 0-68.973715l34.486857-34.486857z m155.172572-155.136a97.536 97.536 0 0 1 0 137.874286l-60.342857 60.342857-34.486857-34.450286 60.342857-60.342857A48.749714 48.749714 0 1 0 618.057143 359.424l-103.424 103.460571c-19.017143 19.017143-19.017143 49.92 0 68.937143l-34.486857 34.486857a97.536 97.536 0 0 1 0-137.910857l103.460571-103.424a97.536 97.536 0 0 1 137.874286 0z" p-id="2670" fill="#4E5969"></path></svg></div>
                                    <div type='Right'  class="ld-s-border"><svg fill="currentColor" t="1668050637528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2825" width="28" height="28"><path d="M354.1248 896a21.333333 21.333333 0 0 0 21.333333 21.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM273.058133 149.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM507.7248 896a21.333333 21.333333 0 0 0 21.333333 21.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM750.9248 874.666667h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 1 0 0-42.666666zM580.258133 149.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM200.5248 896a21.333333 21.333333 0 0 0 21.333333 21.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM426.658133 149.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM119.458133 610.133333a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM119.458133 763.733333a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM119.458133 917.333333h17.066667a21.333333 21.333333 0 0 0 4.266667-42.24V827.733333a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM119.458133 149.333333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM119.458133 302.933333a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM119.458133 456.533333a21.333333 21.333333 0 0 0 21.333334-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333z" p-id="2826"></path><path d="M793.591467 917.333333h102.4a21.333333 21.333333 0 0 0 21.333333-21.333333V128a21.333333 21.333333 0 0 0-21.333333-21.333333h-162.133334a21.333333 21.333333 0 1 0 0 42.666666h38.4V896a21.333333 21.333333 0 0 0 21.333334 21.333333z" p-id="2827" fill="#4E5969"></path></svg></div>
                                </div>
                                <div>
                                    <div type='Bottom'  class="ld-s-border ld-b-tb"><svg fill="currentColor" t="1668050664532" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3006" width="28" height="28"><path d="M123.741867 358.4a21.333333 21.333333 0 0 0-21.333334 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666667 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM870.417067 277.333333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM123.741867 512a21.333333 21.333333 0 0 0-21.333334 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666667 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM145.0752 755.2v-68.266667a21.333333 21.333333 0 1 0-42.666667 0v68.266667a21.333333 21.333333 0 1 0 42.666667 0zM870.417067 584.533333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM123.741867 204.8a21.333333 21.333333 0 0 0-21.333334 21.333333v68.266667a21.333333 21.333333 0 1 0 42.666667 0v-68.266667a21.333333 21.333333 0 0 0-21.333333-21.333333zM870.417067 430.933333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM409.608533 123.733333a21.333333 21.333333 0 0 0 21.333334 21.333334h68.266666a21.333333 21.333333 0 1 0 0-42.666667h-68.266666a21.333333 21.333333 0 0 0-21.333334 21.333333zM256.008533 123.733333a21.333333 21.333333 0 0 0 21.333334 21.333334h68.266666a21.333333 21.333333 0 1 0 0-42.666667h-68.266666a21.333333 21.333333 0 0 0-21.333334 21.333333zM102.408533 123.733333v17.066667a21.333333 21.333333 0 0 0 42.24 4.266667h47.36a21.333333 21.333333 0 1 0 0-42.666667h-68.266666a21.333333 21.333333 0 0 0-21.333334 21.333333zM870.417067 123.733333v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM716.817067 123.733333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM563.217067 123.733333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333z" p-id="3007"></path><path d="M102.408533 797.866667v102.4a21.333333 21.333333 0 0 0 21.333334 21.333333h768a21.333333 21.333333 0 0 0 21.333333-21.333333v-8.533334l0.008533-85.333333v-68.266667a21.333333 21.333333 0 1 0-42.666666 0V776.533333h-746.666667a21.333333 21.333333 0 0 0-21.341867 21.333334z" p-id="3008" fill="#4E5969"></path></svg></div>
                                </div>
                            </div>
                            <div class="ld-seeting-b-right">
                                    <div class="ld-b-px">
                                        <input type="number" class="ld-default-inp">
                                        <span>px</span>
                                    </div>
                                    <div class="ld-default-inp ld-color-select-box ld-init-color-style" id="ld-font-color-bt"> 
                                    <input id='ld-border-color'/>
                                </div>
                                   
                                    <select name="" id="ld-border-s" class="ld-default-inp">
                                        <option value="none">none</option>
                                        <option value="solid">—</option>
                                        <option value="dashed">---</option>
                                        <option value="dotted">...</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <h3 class="subtitle">圆角</h3>
                    <div class="seeting-content-item" id="setting-borderRadius-select">
                       <div class="ld-b-flex">
                        <div>
                            <div class="ld-b-flex">
                                <p class="ld-r-svg"><svg t="1668048517637" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2714" width="24" height="24"><path d="M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" p-id="2715"></path></svg></p>
                                <p><input class="ld-default-inp ld-b-inp _borderTopLeftRadius" type-style="border-top-left-radius" type="number"><span class="ld-px">px</span></p>
                            </div>
                            <div class="ld-b-flex">
                                <p class="ld-r-svg"><svg t="1668050338469" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2897" width="24" height="24"><path d="M712 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m2-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM136 374h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m0-174h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m752 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-230 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m230 624H358c-87.3 0-158-70.7-158-158V484c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v182c0 127 103 230 230 230h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" p-id="2898"></path></svg></p>
                                <p><input class="ld-default-inp ld-b-inp _borderTopRightRadius" type-style="border-bottom-left-radius" type="number"><span class="ld-px">px</span></p>
                            </div>
                        </div>
                        <div class="ld-r-center ld-b-all">
                        <svg fill="currentColor" t="1668081388707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2669" width="24" height="24"><path d="M865.097143 0C952.868571 0 1024 71.131429 1024 158.902857v706.194286c0 87.771429-71.131429 158.902857-158.902857 158.902857H158.902857A158.902857 158.902857 0 0 1 0 865.097143V158.902857C0 71.131429 71.131429 0 158.902857 0z m0 35.328H158.902857a123.611429 123.611429 0 0 0-123.611428 123.574857v706.194286a123.611429 123.611429 0 0 0 123.611428 123.611428h706.194286a123.611429 123.611429 0 0 0 123.611428-123.611428V158.902857a123.611429 123.611429 0 0 0-123.611428-123.611428z m-298.788572 444.781714a97.536 97.536 0 0 1 0 137.910857l-103.424 103.460572a97.536 97.536 0 1 1-137.910857-137.910857l60.342857-60.342857 34.450286 34.486857-60.342857 60.342857a48.749714 48.749714 0 1 0 68.973714 68.937143l103.424-103.424c19.053714-19.053714 19.053714-49.92 0-68.973715l34.486857-34.486857z m155.172572-155.136a97.536 97.536 0 0 1 0 137.874286l-60.342857 60.342857-34.486857-34.450286 60.342857-60.342857A48.749714 48.749714 0 1 0 618.057143 359.424l-103.424 103.460571c-19.017143 19.017143-19.017143 49.92 0 68.937143l-34.486857 34.486857a97.536 97.536 0 0 1 0-137.910857l103.460571-103.424a97.536 97.536 0 0 1 137.874286 0z" p-id="2670"></path></svg>
                        </div>
                        <div>
                            <div class="ld-b-flex">
                                <p class="ld-r-svg"><svg t="1668050357076" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3080" width="24" height="24"><path d="M368 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-2 696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m522-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-48-696H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c87.3 0 158 70.7 158 158v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-127-103-230-230-230z" p-id="3081"></path></svg></p>
                                <p><input class="ld-default-inp ld-b-inp _borderBottomLeftRadius" type-style="border-top-right-radius" type="number"><span class="ld-px">px</span></p>
                            </div>
                            <div class="ld-b-flex">
                                <p class="ld-r-svg"><svg t="1668050377281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3225" width="24" height="24"><path d="M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8z" p-id="3226"></path></svg></p>
                                <p><input class="ld-default-inp ld-b-inp _borderBottomRightRadius" type-style="border-bottom-right-radius" type="number"><span class="ld-px">px</span></p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <h3 class="subtitle">Flex布局设置项</h3>
                    <div class="seeting-content-item" id="setting-flex-select">
                        <div class="lxdialog">
                        <div class="flex">
                          <div class="row mapObj_row_0">
                            <div class="row_1"><span class="title_1">主轴排列方向</span></div>
                            <div class="col">
                              <div class="col_1  " title="主轴为水平方向，起点在左端" mapValue="row">
                                <svg t="1670047916788" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3169" width="20" height="20">
                                  <path
                                    d="M204.8 158.8992C204.8 127.6928 230.0928 102.4 261.2992 102.4h169.472c31.232 0 56.5248 25.2928 56.5248 56.4992v395.4688a56.4992 56.4992 0 0 1-56.4992 56.4992h-169.4976A56.4992 56.4992 0 0 1 204.8 554.368V158.8992z m480.2304 749.6192a13.056 13.056 0 0 0 21.888 9.6256l124.3904-114.0224a13.056 13.056 0 0 0 0-19.2768l-124.416-114.0224a13.056 13.056 0 0 0-21.8624 9.6256v71.68H204.8v84.736h480.2304v71.6544z m141.2352-749.6192A56.4992 56.4992 0 0 0 769.792 102.4h-169.472a56.4992 56.4992 0 0 0-56.4992 56.4992v395.4688c0 31.232 25.2928 56.4992 56.4992 56.4992h169.472a56.4992 56.4992 0 0 0 56.4992-56.4992V158.8992zM628.5312 187.136h112.9984v338.9952h-112.9984V187.136z"
                                    p-id="3170"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="主轴为水平方向，起点在右端" mapValue="row-reverse">
                                <svg t="1670048014237" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3364" width="32" height="32">
                                  <path
                                    d="M545.664 158.8992c0-31.2064 23.7056-56.4992 52.9664-56.4992h158.8736c29.2608 0 52.992 25.2928 52.992 56.4992v395.4688c0 31.232-23.7312 56.4992-52.992 56.4992h-158.8736c-29.2608 0-52.992-25.2928-52.992-56.4992V158.8992zM368.9984 908.544c0 11.3664-12.672 17.3056-20.5312 9.6256l-116.608-114.0224a13.6704 13.6704 0 0 1 0-19.2768l116.608-114.0224c7.8592-7.68 20.5312-1.7408 20.5312 9.6512v71.6288H819.2v84.736H368.9984v71.68z m123.6992-749.6192c0-31.2064-23.7056-56.4992-52.992-56.4992H280.832C251.5712 102.4 227.84 127.6928 227.84 158.8992v395.4688c0 31.232 23.7056 56.4992 52.9664 56.4992h158.8992c29.2608 0 52.9664-25.2928 52.9664-56.4992V158.8992z m-185.3952 28.2624h105.9328v338.9696h-105.9328V187.1616z"
                                    p-id="3365"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="主轴为垂直方向，起点在上沿" mapValue="column">
                                <svg t="1670048062827" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3499" width="32" height="32">
                                  <path
                                    d="M703.0528 640a11.8528 11.8528 0 0 0-8.704 19.84l103.3216 112.7168c4.6848 5.12 12.7744 5.12 17.4592 0l103.3216-112.7168a11.8528 11.8528 0 0 0-8.704-19.84H844.8V204.8h-76.8v435.2h-64.9472zM153.6 460.8a51.2 51.2 0 0 1-51.2-51.2v-153.6a51.2 51.2 0 0 1 51.2-51.2h358.4a51.2 51.2 0 0 1 51.2 51.2v153.6a51.2 51.2 0 0 1-51.2 51.2H153.6z m0 51.2a51.2 51.2 0 0 0-51.2 51.2v153.6a51.2 51.2 0 0 0 51.2 51.2h358.4a51.2 51.2 0 0 0 51.2-51.2v-153.6a51.2 51.2 0 0 0-51.2-51.2H153.6z m25.6 179.2v-102.4h307.2v102.4H179.2z"
                                    p-id="3500"></path>
                                </svg>
                              </div>
                
                              <div class="col_1" title="主轴为垂直方向，起点在下沿" mapValue="column-reverse">
                                <svg t="1670048083843" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3634" width="32" height="32">
                                  <path
                                    d="M563.2 409.6a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2v-153.6a51.2 51.2 0 0 1 51.2-51.2h358.4a51.2 51.2 0 0 1 51.2 51.2v153.6z m-76.8-25.6v-102.4H179.2v102.4h307.2z m25.6 128a51.2 51.2 0 0 1 51.2 51.2v153.6a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2v-153.6a51.2 51.2 0 0 1 51.2-51.2h358.4z m406.4768-190.6176a11.8528 11.8528 0 0 1-8.7296 19.84H844.8v435.2h-76.8v-435.2h-64.9216a11.8528 11.8528 0 0 1-8.7296-19.84l103.3216-112.7424c4.7104-5.12 12.7744-5.12 17.4592 0l103.3472 112.7424z"
                                    p-id="3635"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="row mt10 mapObj_row_1">
                            <div class="row_1"><span class="title_1">是否允许换行</span></div>
                            <div class="col">
                              <div class="col_1 " title="nowrap" mapValue="nowrap">
                                <span class="warp_span">不换行</span>
                              </div>
                              <div class="col_1" title="wrap" mapValue="wrap">
                                <span class="warp_span">换行</span>
                              </div>
                            </div>
                          </div>
                
                          <div class="row mt10 mapObj_row_3">
                            <div class="row_1"><span class="title_1">主轴对齐方式</span></div>
                            <div class="col">
                              <div class="col_1" title="左对齐" mapValue="flex-start">
                                <svg t="1668584896035" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4877" width="16" height="16">
                                  <path
                                    d="M333.913043 244.869565V89.043478h-89.043478v845.913044h89.043478v-155.826087h133.565218a44.521739 44.521739 0 0 0 44.521739-44.521739V289.391304a44.521739 44.521739 0 0 0-44.521739-44.521739h-133.565218z m222.608696 44.521739a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565218a44.521739 44.521739 0 0 1 44.521739 44.521739v445.217392a44.521739 44.521739 0 0 1-44.521739 44.521739h-133.565218a44.521739 44.521739 0 0 1-44.521739-44.521739V289.391304z"
                                    p-id="4878"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="右对齐" mapValue="flex-end">
                                <svg t="1668584962504" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="2902" width="16" height="16">
                                  <path
                                    d="M756.869565 934.956522V89.043478h-89.043478v155.826087h-111.304348a44.521739 44.521739 0 0 0-44.521739 44.521739v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h111.304348v155.826087h89.043478zM244.869565 289.391304a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565218a44.521739 44.521739 0 0 1 44.521739 44.521739v445.217392a44.521739 44.521739 0 0 1-44.521739 44.521739h-133.565218a44.521739 44.521739 0 0 1-44.521739-44.521739V289.391304z"
                                    p-id="2903"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="居中对齐" mapValue="center">
                                <svg t="1668584847239" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4727" width="16" height="16">
                                  <path
                                    d="M556.521739 934.956522V89.043478h-89.043478v845.913044h89.043478zM178.086957 289.391304a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565217a44.521739 44.521739 0 0 1 44.521739 44.521739v445.217392a44.521739 44.521739 0 0 1-44.521739 44.521739h-133.565217a44.521739 44.521739 0 0 1-44.521739-44.521739V289.391304z m445.217391 0a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565217a44.521739 44.521739 0 0 1 44.521739 44.521739v445.217392a44.521739 44.521739 0 0 1-44.521739 44.521739h-133.565217a44.521739 44.521739 0 0 1-44.521739-44.521739V289.391304z"
                                    p-id="4728"></path>
                                </svg>
                              </div>
                
                
                              <div class="col_1 " title="两端对齐，项目间的间隔相等" mapValue="space-between">
                                <svg t="1668585030717" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3202" width="16" height="16">
                                  <path
                                    d="M178.086957 934.956522V89.043478H89.043478v845.913044h89.043479zM934.956522 89.043478v845.913044h-89.043479V89.043478h89.043479z m-645.565218 155.826087a44.521739 44.521739 0 0 0-44.521739 44.521739v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h133.565218a44.521739 44.521739 0 0 0 44.521739-44.521739V289.391304a44.521739 44.521739 0 0 0-44.521739-44.521739h-133.565218z m311.652174 0a44.521739 44.521739 0 0 0-44.521739 44.521739v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h133.565218a44.521739 44.521739 0 0 0 44.521739-44.521739V289.391304a44.521739 44.521739 0 0 0-44.521739-44.521739h-133.565218z"
                                    p-id="3203"></path>
                                </svg>
                              </div>
                              <div class="col_1 " title="横向平分，每个项目两侧的间隔相等" mapValue="space-around">
                                <svg t="1670048432660" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3769" width="32" height="32">
                                  <path
                                    d="M356.173913 89.043478h-89.043478v155.826087h-44.521739a44.521739 44.521739 0 0 0-44.521739 44.521739v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h44.521739v155.826087h89.043478v-155.826087h44.521739a44.521739 44.521739 0 0 0 44.521739-44.521739V289.391304a44.521739 44.521739 0 0 0-44.521739-44.521739h-44.521739V89.043478z m400.695652 0h-89.043478v155.826087h-44.521739a44.521739 44.521739 0 0 0-44.521739 44.521739v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h44.521739v155.826087h89.043478v-155.826087h44.521739a44.521739 44.521739 0 0 0 44.521739-44.521739V289.391304a44.521739 44.521739 0 0 0-44.521739-44.521739h-44.521739V89.043478z"
                                    p-id="3770"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="row mt10 mapObj_row_4">
                            <div class="row_1"><span class="title_1">辅轴对齐方式</span></div>
                            <div class="col">
                              <div class="col_1" title="起点对齐" mapValue="flex-start">
                                <svg t="1668583386168" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3107" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                                  height="16">
                                  <path
                                    d="M578.782609 155.826087H89.043478v89.043478h178.086957v445.217392a44.521739 44.521739 0 0 0 44.521739 44.521739h133.565217a44.521739 44.521739 0 0 0 44.521739-44.521739V244.869565h44.52174v601.043478a44.521739 44.521739 0 0 0 44.521739 44.52174h133.565217a44.521739 44.521739 0 0 0 44.521739-44.52174V244.869565h178.086957V155.826087H578.782609z"
                                    p-id="3108"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="终点对齐" mapValue="flex-end">
                                <svg t="1668583420550" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3257" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                                  height="16">
                                  <path
                                    d="M534.26087 200.347826a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565217a44.521739 44.521739 0 0 1 44.521739 44.521739v601.043478h178.086957v89.043479H89.043478v-89.043479h155.826087V356.173913a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565218a44.521739 44.521739 0 0 1 44.521739 44.521739v445.217391h66.782609V200.347826z"
                                    p-id="3258"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="水平居中" mapValue="center">
                                <svg t="1668582663949" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="2957" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                                  height="16">
                                  <path
                                    d="M534.26087 200.347826a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565217a44.521739 44.521739 0 0 1 44.521739 44.521739v289.391304h178.086957v89.043479h-178.086957v267.130434a44.521739 44.521739 0 0 1-44.521739 44.52174h-133.565217a44.521739 44.521739 0 0 1-44.521739-44.52174V578.782609h-44.52174v155.826087a44.521739 44.521739 0 0 1-44.521739 44.521739h-133.565217a44.521739 44.521739 0 0 1-44.521739-44.521739v-155.826087H89.043478v-89.043479h178.086957v-200.347826a44.521739 44.521739 0 0 1 44.521739-44.521739h133.565217a44.521739 44.521739 0 0 1 44.521739 44.521739v200.347826h44.52174V200.347826z"
                                    p-id="2958"></path>
                                </svg>
                              </div>
                              <div class="col_1 " title="占满整个容器的高度" mapValue="baseline">
                                <svg t="1668585057209" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3502" width="16" height="16">
                                  <path
                                    d="M89.043478 801.391304h845.913044v89.043479H89.043478zM452.919652 121.09913L209.830957 756.869565h111.304347l57.878261-159.387826h266.24l57.878261 159.387826h111.304348L571.347478 121.09913h-118.427826zM410.178783 512l100.61913-278.706087h3.561739L614.088348 512h-203.909565z"
                                    p-id="3503"></path>
                                </svg>
                              </div>
                              <div class="col_1 " title="项目第一行文字的基线对齐" mapValue="stretch">
                                <svg t="1668583462797" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3407" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                                  height="16">
                                  <path
                                    d="M244.869565 244.869565H89.043478V155.826087h845.913044v89.043478h-178.086957v556.521739h178.086957v89.043479H89.043478v-89.043479h155.826087V244.869565z m222.608696 0v556.521739h66.782609V244.869565h-66.782609z"
                                    p-id="3408"></path>
                                </svg>
                              </div>
                
                            </div>
                          </div>
                          <div class="row mt10 mapObj_row_2">
                            <div class="row_1"><span class="title_1">多行对齐方式</span></div>
                            <div class="col">
                              <div class="col_1" title="与交叉轴的起点对齐" mapValue="flex-start">
                                <svg t="1670048606700" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="3904" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478z m-712.347826 178.086957a44.521739 44.521739 0 0 1 44.521739-44.521739h422.956522a44.521739 44.521739 0 0 1 44.521739 44.521739v111.304348a44.521739 44.521739 0 0 1-44.521739 44.521739H267.130435a44.521739 44.521739 0 0 1-44.521739-44.521739v-111.304348z m44.521739 200.347826a44.521739 44.521739 0 0 0-44.521739 44.521739v111.304348a44.521739 44.521739 0 0 0 44.521739 44.521739h422.956522a44.521739 44.521739 0 0 0 44.521739-44.521739v-111.304348a44.521739 44.521739 0 0 0-44.521739-44.521739H267.130435z"
                                    p-id="3905"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="与交叉轴的终点对齐" mapValue="flex-end">
                                <svg t="1670048633355" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4039" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478zM222.608696 534.26087a44.521739 44.521739 0 0 1 44.521739-44.52174h422.956522a44.521739 44.521739 0 0 1 44.521739 44.52174v111.304347a44.521739 44.521739 0 0 1-44.521739 44.52174H267.130435a44.521739 44.521739 0 0 1-44.521739-44.52174v-111.304347z m44.521739 200.347826a44.521739 44.521739 0 0 0-44.521739 44.521739v111.304348a44.521739 44.521739 0 0 0 44.521739 44.521739h422.956522a44.521739 44.521739 0 0 0 44.521739-44.521739v-111.304348a44.521739 44.521739 0 0 0-44.521739-44.521739H267.130435z"
                                    p-id="4040"></path>
                                </svg>
                              </div>
                              <div class="col_1 " title="与交叉轴的中点对齐" mapValue="center">
                                <svg t="1670048643227" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4174" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478zM222.608696 378.434783a44.521739 44.521739 0 0 1 44.521739-44.52174h422.956522a44.521739 44.521739 0 0 1 44.521739 44.52174v111.304347a44.521739 44.521739 0 0 1-44.521739 44.52174H267.130435a44.521739 44.521739 0 0 1-44.521739-44.52174v-111.304347z m44.521739 200.347826a44.521739 44.521739 0 0 0-44.521739 44.521739v111.304348a44.521739 44.521739 0 0 0 44.521739 44.521739h422.956522a44.521739 44.521739 0 0 0 44.521739-44.521739v-111.304348a44.521739 44.521739 0 0 0-44.521739-44.521739H267.130435z"
                                    p-id="4175"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="与交叉轴两端对齐，轴线之间的间隔平均分布" mapValue="space-between">
                                <svg t="1670048684927" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4309" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478z m-712.347826 178.086957a44.521739 44.521739 0 0 1 44.521739-44.521739h422.956522a44.521739 44.521739 0 0 1 44.521739 44.521739v111.304348a44.521739 44.521739 0 0 1-44.521739 44.521739H267.130435a44.521739 44.521739 0 0 1-44.521739-44.521739v-111.304348z m44.521739 422.956522a44.521739 44.521739 0 0 0-44.521739 44.521739v111.304347a44.521739 44.521739 0 0 0 44.521739 44.52174h422.956522a44.521739 44.521739 0 0 0 44.521739-44.52174v-111.304347a44.521739 44.521739 0 0 0-44.521739-44.521739H267.130435z"
                                    p-id="4310"></path>
                                </svg>
                              </div>
                              <div class="col_1" title="每根轴线两侧的间隔相等" mapValue="space-around">
                                <svg t="1670048705691" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4444" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478zM222.608696 333.913043a44.521739 44.521739 0 0 1 44.521739-44.521739h422.956522a44.521739 44.521739 0 0 1 44.521739 44.521739v111.304348a44.521739 44.521739 0 0 1-44.521739 44.521739H267.130435a44.521739 44.521739 0 0 1-44.521739-44.521739v-111.304348z m44.521739 311.652174a44.521739 44.521739 0 0 0-44.521739 44.52174v111.304347a44.521739 44.521739 0 0 0 44.521739 44.521739h422.956522a44.521739 44.521739 0 0 0 44.521739-44.521739v-111.304347a44.521739 44.521739 0 0 0-44.521739-44.52174H267.130435z"
                                    p-id="4445"></path>
                                </svg>
                              </div>
                
                              <div class="col_1" title="（默认值）：轴线占满整个交叉轴" mapValue="stretch">
                                <svg t="1670048722193" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="4579" width="32" height="32">
                                  <path
                                    d="M934.956522 89.043478H89.043478v845.913044h89.043479V178.086957h756.869565V89.043478z m-712.347826 178.086957a44.521739 44.521739 0 0 1 44.521739-44.521739h422.956522a44.521739 44.521739 0 0 1 44.521739 44.521739v178.086956a44.521739 44.521739 0 0 1-44.521739 44.521739H267.130435a44.521739 44.521739 0 0 1-44.521739-44.521739v-178.086956z m44.521739 356.173913a44.521739 44.521739 0 0 0-44.521739 44.521739v178.086956a44.521739 44.521739 0 0 0 44.521739 44.52174h422.956522a44.521739 44.521739 0 0 0 44.521739-44.52174v-178.086956a44.521739 44.521739 0 0 0-44.521739-44.521739H267.130435z"
                                    p-id="4580"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <h5 class="subtitle_flex">模块设置</h5>
                        <div class="childNodeTable">
                            <!-- <table>
                            <thead>
                                <tr>
                                <th><input type="checkbox" name="selectAll"  value=""></th>
                                    <th>
                                        序号
                                    </th>
                                    <th>
                                        子元素标签
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            </table>-->
                        </div>
                        <div class="subtitle-content" id="setting-flex-child-sketch-flag" style="">

                        </div>
                    </div>
                </div>
                <div id="ld-style-reset">回退</div>
    
    
    
            </div>
        </div>
             `,
             leftBottomCoronaEl:`
                <div id="leftBottomCoronaEl">
                    <div class="icon-CoronaEl">
                        <svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1 0 0 1 -10 -13 )">
                                <path d="M 4.32015625 8.6640625  L 4.28125 8.664062499999998  C 4.061198260194608 8.664077739018957  3.8498471207441725 8.578124350830201  3.692265625 8.42453125  L 0.8797656249999997 5.682343749999999  C 0.7168420632010379 5.523528035957799  0.6249592132253965 5.305647565948948  0.6249592132253965 5.078124999999998  C 0.6249592132253965 4.612112216416659  1.0027372164166604 4.234334213225395  1.46875 4.234334213225395  C 1.6888066352570394 4.234334213225395  1.900156990690716 4.320301918437071  2.057734375 4.473906249999999  L 4.2240625000000005 6.58609375  L 9.028749999999999 0.9451562499999993  C 9.189006793415167 0.7494820622112419  9.428591085967788 0.6360197591643986  9.681515239821273 0.6360197591643986  C 10.147505497491005 0.6360197591643986  10.525265239821273 1.0137795014946667  10.525265239821273 1.4797697591643981  C 10.525265239821273 1.68590569869699  10.449803569892097 1.8849106358282706  10.313125 2.03921875  L 4.9225 8.36734375  C 4.7714151064788295 8.545322579081454  4.553340894844957 8.652747463100319  4.32015625 8.6640625  Z M 19.375 4.65625  C 19.375 6.8790625  17.5665625 8.6875  15.34375 8.6875  C 13.1209375 8.6875  11.3125 6.8790625  11.3125 4.65625  C 11.3125 2.4334374999999993  13.1209375 0.625  15.34375 0.625  C 17.5665625 0.625  19.375 2.4334375  19.375 4.65625  Z M 17.687499999999996 4.65625  C 17.686079131924657 3.362421617436299  16.637578382563703 2.313920868075339  15.34375 2.3125  C 14.049332617584078 2.3125  13 3.361832617584078  13 4.65625  C 13 5.950667382415922  14.049332617584078 7  15.34375 7  C 16.638167382415922 7  17.6875 5.950667382415922  17.6875 4.65625  Z M 19.375 15.34375  C 19.375 17.5665625  17.5665625 19.375  15.34375 19.375  C 13.1209375 19.375  11.3125 17.5665625  11.3125 15.34375  C 11.3125 13.1209375  13.1209375 11.3125  15.34375 11.3125  C 17.5665625 11.3125  19.375 13.1209375  19.375 15.34375  Z M 17.687499999999996 15.34375  C 17.686079131924657 14.0499216174363  16.637578382563703 13.00142086807534  15.34375 13  C 14.049332617584078 13  13 14.049332617584078  13 15.34375  C 13 16.638167382415922  14.049332617584078 17.6875  15.34375 17.6875  C 16.638167382415922 17.6875  17.6875 16.638167382415922  17.6875 15.34375  Z M 8.6875 15.34375  C 8.6875 17.5665625  6.8790625 19.375  4.65625 19.375  C 2.4334375 19.375  0.625 17.5665625  0.625 15.34375  C 0.625 13.1209375  2.4334375 11.3125  4.65625 11.3125  C 6.8790625 11.3125  8.6875 13.1209375  8.6875 15.34375  Z M 7 15.34375  C 6.998579131924661 14.049921617436297  5.950078382563703 13.00142086807534  4.65625 13  C 3.361832617584078 13  2.3125 14.049332617584078  2.3125 15.34375  C 2.3125 16.638167382415922  3.361832617584078 17.6875  4.65625 17.6875  C 5.950667382415922 17.6875  7 16.638167382415922  7 15.34375  Z " fill-rule="nonzero" fill="#ffffff" stroke="none" transform="matrix(1 0 0 1 10 13 )" />
                            </g>
                        </svg>
                        <div class="icon-CoronaEl-number">
                            
                        </div>
                        <div class="icon-tip-text">
                            可批量编辑与选中元素类似的元素或其包含的相同子元素
                        </div>
                    </div>
                    <div class="face-plate-CoronaEl">
                        <div class="batch-edit-plate">
                            <div class="batch-edit-plate-title">
                                <div>批量编辑</div>
                                <div class="batch-edit-plate-close">
                                    <svg style="fill: white;" t="1681461798086" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3150" width="22" height="22"><path d="M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z" p-id="3151"></path></svg>
                                </div>
                            </div>
                            <div class="batch-edit-plate-contet">
                                <div class="batch-edit-plate-switchElement">
                                    <div class="batch-edit-plate-switchElement-item active" data-value=".batch-resemble-content">同级相似元素</div>
                                    <div class="batch-edit-plate-switchElement-item" data-value=".batch-child-content">子元素</div>
                                </div>
                                <div class="batch-edit-plate-switchElement-content">
                                    <div class="batch-resemble-content batch-item active"></div>
                                    <div class="batch-child-content batch-item">
                                        <ul>
                                            <li class="resemble-element-li" data-value=" a">链接文字</li>
                                            <li class="resemble-element-li" data-value=" img">图片</li>
                                        </ul>
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
            ;
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
                    validElement = $(window.treeHelper.iframeContentDocument).find("body").children(':not(.drop-marker,[data-dragcontext-marker])').first();
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
                    validElement = $(window.treeHelper.iframeContentDocument).find("body").children(':not(.drop-marker,[data-dragcontext-marker])').last();
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
                    return { 'el': $(window.treeHelper.iframeContentDocument).find(previousElData.el), 'position': position };
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
                $element = $(window.treeHelper.iframeContentDocument).find("body");
            }
            if (toHighlight) {
                position = 'inside';
            }
            ;
            switch (position) {
                case 'inside':
                    // bus.$emit('hovering-element', $element[0], true, true)
                    // this.highlightElement($element[0], true, true,'',false);
                    this.positionContextMarker($contextMarker, $element);
                    if ($element.hasClass('stackhive-nodrop-zone'))
                        $contextMarker.addClass('invalid');
                    var name = this.getElementName($element);
                    $contextMarker.find('[data-dragcontext-marker-text]').html(name);
                    if ($(window.treeHelper.iframeContentDocument).find('body [data-sh-parent-marker]').length != 0)
                        $(window.treeHelper.iframeContentDocument).find('body [data-sh-parent-marker]').first().before($contextMarker);
                    else
                        $(window.treeHelper.iframeContentDocument).find("body").append($contextMarker);
                    break;
                case 'sibling':
                    // bus.$emit('hovering-element', $element.parent()[0], true, true)
                    // this.highlightElement($element.parent()[0], true, true,'',false);
                    this.positionContextMarker($contextMarker, $element.parent());
                    if ($element.parent().hasClass('stackhive-nodrop-zone'))
                        $contextMarker.addClass('invalid');
                    var name = this.getElementName($element.parent());
                    $contextMarker.find('[data-dragcontext-marker-text]').html(name);
                    $contextMarker.attr('data-dragcontext-marker', name.toLowerCase());
                    if ($(window.treeHelper.iframeContentDocument).find('body [data-sh-parent-marker]').length != 0)
                        $(window.treeHelper.iframeContentDocument).find('body [data-sh-parent-marker]').first().before($contextMarker);
                    else
                        $(window.treeHelper.iframeContentDocument).find("body").append($contextMarker);
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
                top: (rect.top + $(window.treeHelper.iframeContentDocument).scrollTop() - 2) + 'px',
                left: (rect.left + $(window.treeHelper.iframeContentDocument).scrollLeft() - 2) + 'px'
            });
            if (rect.top + $(window.treeHelper.iframeContentDocument).find("body").scrollTop() < 24)
                $contextMarker.find('[data-dragcontext-marker-text]').css('top', '4px');
        },
        /**
         * 设置相似的元素高亮
         */
        setResembleElementHighlight: function(selector){
            var {_window,_document,_$} = treeHelper.getElementDocFun();
            if(_$('#resembleElementContainer').length <= 0 ){
                const resembleElementContainerEl = "<div id='resembleElementContainer' style='z-index: 10000000;'></div>";
                _$('body').append(resembleElementContainerEl);
            }else {
                _$('#resembleElementContainer').html('');
            }
            
            var elementContainerEl = _$('#resembleElementContainer');
            _$(selector).each((index,item) => {
                var rect = $(item).get(0).getBoundingClientRect();
                var top = (rect.top + _$(_document).scrollTop() - 2) + 'px';
                var left = (rect.left + _$(_document).scrollLeft() - 2) + 'px';
                var width = (rect.width + 4) + 'px';
                var height = (rect.height + 4) + 'px';
                var reseEleItem = `
                    <div class="resemble">
                        <div class="mask-resemble"></div>
                        <div class="mask-selecter">
                            <span class="mask-left">${selector}</span>
                            <span class="mask-right">${width} × ${height}</span>
                        </div>
                    </div>
                `;
                var _resetEl = _$(reseEleItem);
                _resetEl.css({
                    top: top,
                    left: left
                });
                _resetEl.find('.mask-resemble').css({
                    height: height,
                    width: width
                });
                elementContainerEl.append(_resetEl);
            })
        },
        /**
         * 选择元素时左下角辅组选择轮盘
         */
        initLeftBottomCorona: function(element){
            var {_$:_$c} = treeHelper.getElementDocFun();
            var _$ = $;
            if(_$('#leftBottomCoronaEl').length <= 0 ){
                var _leftBottomEl = treeHelper.state.leftBottomCoronaEl;
                _$('body').append(_leftBottomEl);
            }
            _$("#leftBottomCoronaEl li.resemble-element-li").removeClass('active');
            // 相似元素 批量编辑
            var arrSelectList1 =  stylePanelHelper.getSelectorsForElement(element);
            arrSelectList1.then(res => {
                if(res && res.length > 0){
                    // res = res.reverse();
                    res = stylePanelHelper.filterSelectorsForElement(res,element);
                    var remebContainerEl = _$('.batch-resemble-content');
                    updateNumber(res);
                    createLiElement(res,remebContainerEl);
                }  
                _$("#leftBottomCoronaEl .batch-resemble-content li.resemble-element-li").unbind('mouseover').bind('mouseover',function(){
                    if( _$(this).hasClass('active')){
                        return;
                    }
                    var _selector = _$(this).find("textarea").val();
                    treeHelper.setResembleElementHighlight(_selector);
                }).unbind('mouseleave').bind('mouseleave',function(){
                    _$c('#resembleElementContainer').remove();
                }).unbind('click').bind('click',function(){
                    // 相似元素蒙层
                    _$c('#resembleElementContainer').remove();
                    _$("#leftBottomCoronaEl li.resemble-element-li").removeClass('active');
                    _$(this).addClass('active');
                    var _selector = _$(this).find("textarea").val();       
                    checkEleFun(_selector);
                })

                // 根据相似元素的选择器 动态创建li
                function createLiElement(arrayList,remebContainerEl){
                    remebContainerEl.html('');
                    var _ulContainerEl = _$('<ul></ul>');
                    arrayList.forEach(function(item){
                        var _liContainerEl = _$(`<li class="resemble-element-li" data-value="${item}">${item}
                            <textarea style="display:none;">${item}</textarea>
                            <div class="icon-resemble-element-li">
                                <svg t="1681357684355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10291" width="28" height="28"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z" fill="#ffffff" p-id="10292"></path><path d="M726.976697 393.184142c-12.54369-12.447359-32.831716-12.320065-45.248112 0.25631l-233.279613 235.839269-103.26354-106.112189c-12.352748-12.703669-32.60809-12.927295-45.248112-0.639914-12.672705 12.320065-12.959978 32.60809-0.639914 45.248112l126.016611 129.503454c0.063647 0.096331 0.192662 0.096331 0.25631 0.192662 0.063647 0.063647 0.096331 0.192662 0.159978 0.25631 2.016073 1.983389 4.512082 3.19957 6.880796 4.544765 1.247144 0.672598 2.239699 1.792447 3.519527 2.303346 3.872168 1.599785 8.000645 2.399677 12.096439 2.399677 4.06483 0 8.12794-0.799892 11.967424-2.33603 1.247144-0.512619 2.208735-1.536138 3.392232-2.176052 2.399677-1.343475 4.895686-2.528692 6.944443-4.544765 0.063647-0.063647 0.096331-0.192662 0.192662-0.25631 0.063647-0.096331 0.159978-0.127295 0.25631-0.192662l256.223626-259.008628C739.647682 425.85588 739.520387 405.600538 726.976697 393.184142z" fill="#ffffff" p-id="10293"></path></svg>
                            </div>
                        </li>`);
                        _ulContainerEl.append(_liContainerEl);
                    });
                    remebContainerEl.append(_ulContainerEl);
                }

                // 更新数量
                function updateNumber(res){
                    _$('#leftBottomCoronaEl .icon-CoronaEl .icon-CoronaEl-number').text(res.length + '');
                }
            })
            
            // 图标切换关闭
            _$("#leftBottomCoronaEl .icon-CoronaEl,#leftBottomCoronaEl .batch-edit-plate-close").unbind('click').bind('click',function(){
                _$("#leftBottomCoronaEl .icon-CoronaEl").addClass('Triggered');
                _$("#leftBottomCoronaEl .icon-CoronaEl").toggleClass('active');
                _$("#leftBottomCoronaEl .face-plate-CoronaEl").toggle();
            });

            // 编辑项切换 同级相似元素 | 子元素
            var _switchBtnEl = _$("#leftBottomCoronaEl .batch-edit-plate-switchElement-item");
            _switchBtnEl.unbind('click').bind('click',function(){
                _switchBtnEl.removeClass('active');
                $(this).addClass('active');

                _$('.batch-edit-plate-switchElement-content .batch-item').removeClass('active');
                var _batchClass = $(this).attr('data-value');
                _$(_batchClass).addClass('active');
            })

            // 子元素悬浮蒙层和点击选中
            _$("#leftBottomCoronaEl .batch-child-content li.resemble-element-li").unbind('mouseover').bind('mouseover',function(){
                if( _$(this).hasClass('active')){
                    return;
                }
                var prefixClass = stylePanelHelper.state.currentSelector;
                var eleClass = _$(this).attr("data-value");
                var _selector = prefixClass + eleClass;
                treeHelper.setResembleElementHighlight(_selector);
            }).unbind('mouseleave').bind('mouseleave',function(){
                _$c('#resembleElementContainer').remove();
            }).unbind('click').bind('click',function(){
                // 相似元素蒙层
                _$c('#resembleElementContainer').remove();
                _$("#leftBottomCoronaEl li.resemble-element-li").removeClass('active');
                _$(this).addClass('active');
                var prefixClass = stylePanelHelper.state.currentSelector;
                var eleClass = _$(this).attr("data-value");
                var _selector = prefixClass + eleClass;  
                checkEleFun(_selector);
            })

            // 根据选择器选中对应的元素，并更新选择器
            function checkEleFun(_selector){
                // 清空
                treeHelper.clearContainerContextAll();
                _$c(_selector).each(function(index,item){
                    // if(item.matches(stylePanelHelper.state.currentSelector)){
                    //     return true;
                    // }
                    const currentElement = _$c(item)
                    const elementRectangle = item.getBoundingClientRect()
                    const mousePosition = {
                        x: elementRectangle.x,
                        y: elementRectangle.y
                    }
                    treeHelper.orchestrateDragDrop(currentElement, elementRectangle, mousePosition, true, true);
       
                    // 当前编辑的元素
                    window.treeHelper.setCurrentEditContainerContent('batch');
                });
                window.stylePanelHelper.initPanel(_selector);
            }
        },
        getElementName: function ($element) {
            return $element.prop('tagName');
        },
        getContextMarker: function () {
            var $contextMarker = $('<div data-dragcontext-marker><span data-dragcontext-marker-text></span></div>');
            return $contextMarker;
        },
        getElementDocFun: function(){
            var _document = window.treeHelper.iframeContentDocument;
            var _$ = window.treeHelper.iframeEl.contentWindow.$;
            var _window = window.treeHelper.iframeContentDocument;
            return {_window,_document,_$};
        },
        clearContainerContext: function () {
            $(window.treeHelper.iframeContentDocument).find('[data-dragcontext-marker]:not(.current-edit-node)').remove();
        },
        clearContainerContextAll: function () {
            $(window.treeHelper.iframeContentDocument).find('[data-dragcontext-marker]').remove();
        },
        removePlaceholder: function () {
            $(window.treeHelper.iframeContentDocument).find('.drop-marker').remove();
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
                        var isSpecialFlag = excludeSpecial(treeArr[i].children)
                        var _li = $(`
                            <li data-el-id="${treeArr[i].elementId}" class="draggable-item closed" onmouseover="handlerTreeNodeMouseOver(event,'${treeArr[i].elementId}')" onmouseleave="handlerTreeNodeLeave(event,'${treeArr[i].elementId}')" onmousedown="scrollToEl(event,'${treeArr[i].elementId}')" >
                                <p class="draggable-title">
                                    ${treeArr[i].nodeName}
                                    <span class="ld-onmousedown" onmousedown="handlerDropSwitch(event,'${treeArr[i].elementId}')">
                                    <svg t="1668421955113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2845" width="18" height="18"><path d="M531.968 743.04a25.6 25.6 0 0 1-39.936 0L203.968 382.912a25.6 25.6 0 0 1 19.968-41.6H800a25.6 25.6 0 0 1 19.968 41.6l-288 360.128z" p-id="2846" fill="#bfbfbf"></path></svg>
                                    </span>
                                </p>
                            </li>
                        `);
                        if(isSpecialFlag){
                            _li.addClass('drag-no-show');
                        }
                        parentDom.append(_li);
                        var _ul = $('<ul class="dragArea "></ul>');
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
                        parentDom.append(_li);
                    }
                }
            }

            function excludeSpecial(arrayList){
                var _num = 0;
                var _totalNum = arrayList.length;
                arrayList.forEach(item => {
                    if(treeHelper.state.specialArr.includes(item.nodeName)){
                        _num++;
                    }
                })
                if(_num >= _totalNum){
                    // debugger;
                    return true;
                }
                return false
            }
        },
        renderHighlight: function (element, toHighlight, hideLine) {
            const el = element;
            if (el) {
                // Get element being dragged
                const $currentElement = $(window.treeHelper.iframeContentDocument).find(el)
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
        highlightElement: function (element, scroll, inPanel, clickActive, isUpdateState = true) {
            var elementId = this.state.currentElementId;
            if (elementId) {
                if (clickActive) {
                    $('.dragArea li').removeClass('clickActive')
                    $('[data-el-id="' + elementId + '"]').addClass('clickActive')
                } else {
                    $('.dragArea li').removeClass('active')
                    $('[data-el-id="' + elementId + '"]').addClass('active')
                }
                if(isUpdateState){
                    $('.dom-tree .dragArea .draggable-item').removeClass('opend').removeClass('closed').addClass('closed')
                    $('[data-el-id="' + elementId + '"]').parents('.closed').removeClass('closed')
                }

                if (scroll) {
                    this.scrollTree(elementId, inPanel)
                }
            }
        },
        elementRemoveActive: function () {
            $('.dragArea li').removeClass('active')
        },
        setCurrentEditContainerContent: function (type,element) {
            var {_window,_document,_$} = treeHelper.getElementDocFun();
            var _current_marker = _$('[data-dragcontext-marker]');
            _current_marker.removeClass('current-edit-node');
            // 是否需要多选情况
            if(type && type == 'click' && treeHelper.state.keypreesCtrl){
                stylePanelHelper.state.batchEleList.push(element);
                _current_marker.addClass('current-edit-node');
            } else if(type && type == 'update' && stylePanelHelper.state.batchEleList.length > 0){ // 多选情况
                _current_marker.addClass('current-edit-node');
            }else if(type && type == 'batch'){ // 范围内a标签 相似元素
                _current_marker.addClass('current-edit-node');
            }else{
                stylePanelHelper.state.batchEleList = [];
                if(element){
                    stylePanelHelper.state.batchEleList.push(element);
                }
                if (_current_marker.length == 1) {
                    _current_marker.addClass('current-edit-node');
                } else {
                    _$('[data-dragcontext-marker]:last-child').addClass('current-edit-node');
                }
            }
            this.clearContainerContext();
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
            const win = treeHelper.iframeEl.contentWindow;
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
            styles += "[data-dragcontext-marker],[data-sh-parent-marker]{outline:rgb(0, 140, 255) dashed 2px;outline-offset: -4px;text-align:center;position:absolute;z-index:123456781;pointer-events:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}[data-dragcontext-marker] [data-dragcontext-marker-text],[data-sh-parent-marker] [data-sh-parent-marker-text]{background:rgb(0, 140, 255);color:#fff;padding:2px 10px;display:inline-block;font-size:14px;position:relative;top: -18.3px;min-width:60px;font-weight:700;pointer-events:none;z-index:123456782;    padding-top: 4px;}[data-dragcontext-marker].invalid{outline:#dc044f solid 2px;outline-offset: -4px;}[data-dragcontext-marker].invalid [data-dragcontext-marker-text]{background:#dc044f}[data-dragcontext-marker=body]{outline-offset:-4px}[data-dragcontext-marker=body] [data-dragcontext-marker-text]{top:4px;}.current-edit-node[data-dragcontext-marker]{outline-style: solid;}";
            styles += '.drop-marker{pointer-events:none;}.drop-marker.horizontal{background:#00adff;position:absolute;height:2px;list-style:none;visibility:visible!important;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4);z-index:123456789;text-align:center}.drop-marker.horizontal.topside{margin-top:0}.drop-marker.horizontal.bottomside{margin-top:2px}.drop-marker.horizontal:before{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-3px;float:left;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4)}.drop-marker.horizontal:after{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-3px;float:right;box-shadow:0 1px 2px rgba(255,255,255,.4),0 -1px 2px rgba(255,255,255,.4)}.drop-marker.vertical{height:50px;list-style:none;border:1px solid #00ADFF;position:absolute;margin-left:3px;display:inline;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}.drop-marker.vertical.leftside{margin-left:0}.drop-marker.vertical.rightside{margin-left:3px}.drop-marker.vertical:before{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-top:-4px;top:0;position:absolute;margin-left:-4px;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}.drop-marker.vertical:after{content:"";width:8px;height:8px;background:#00adff;border-radius:8px;margin-left:-4px;bottom:-4px;position:absolute;box-shadow:1px 0 2px rgba(255,255,255,.4),-1px 0 2px rgba(255,255,255,.4)}';
            styles += `
            #resembleElementContainer .resemble{
                position:absolute;
                z-index: 123456789;
              }
              #resembleElementContainer .mask-resemble{
                background-color: rgba(120, 170, 210, 0.7);
              }
              #resembleElementContainer .mask-selecter{
                background-color: rgb(51, 55, 64);
                border-radius: 2px;
                font-weight: bold;
                padding: 3px 5px;
                font-size: 12px;
                margin-top: 6px;
                margin-left: 5px;
                display:none;
              }
              #resembleElementContainer .mask-selecter .mask-left{
                color: rgb(238, 120, 230);
                border-right: 1px solid rgb(170, 170, 170);
                padding-right: 0.5rem;
                margin-right: 0.5rem;
              }
              #resembleElementContainer .mask-selecter .mask-right{
                color: rgb(215, 215, 215);
              }
            `;
            return styles
        },
        /**
         * 获取node的select选择器
         * @param {*} el 
         */
        getNodeSelect: function (el) {
            const getCssSelectorShort = (el) => {
                let path = [];
                while (el.parentNode) {
                  if (el.id) {
                    path.unshift(`#${el.id}`);
                    break;
                  } else {
                    let tag = el.tagName, siblings = el.parentNode.children;
                    let index = [...siblings].indexOf(el) + 1;
                    let selector = `${tag}:nth-child(${index})`;
                    if ([...siblings].filter(sibling => sibling.tagName === tag).length === 1) {
                      selector = tag;
                    }
                    path.unshift(selector);
                    el = el.parentNode;
                  }
                };
                return `${path.join(' > ')}`;
              };              
            return getCssSelectorShort(el);
        },
        exportSettingStyle: function () {
            var lCSSCoder = {
                format: function (s) {
                    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
                    s = s.replace(/;\s*;/g, ";");
                    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
                    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
                    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
                    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
                    return s
                },
                packAdv: function (s) {
                    s = s.replace(/\/\*(.|\n)*?\*\//g, "");
                    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
                    s = s.replace(/\,[\s\.\#\d]*\{/g, "{");
                    s = s.replace(/;\s*;/g, ";");
                    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
                    return (s == null) ? "" : s[1]
                },
                pack: function (s) {
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

            var exportStyleBtn = $(".google-page-edit-plugin .top-right-export");
            exportStyleBtn.unbind('click').bind('click', function () {
                stylePanelHelper.repeatStyleFilter();
                var _allInjectStyle = stylePanelHelper.generateJsontoStyle();
                initExportEl(_allInjectStyle);
            })

            function initExportEl(_allInjectStyle) {
                if ($(".exportSettingStyle").length <= 0) {
                    var _styleBoxContainer = $(`
                    <div class="mask-dialog">
                    <div class="exportSettingStyle">
                        
                        <div class="export-title">
                            <div class="export-name">导出代码</div>
                            <div class="exportSetingClose">
                                <svg t="1668397816313" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3729" width="16" height="16"><path d="M451.648 512L180.16 240.448l60.288-60.288L512 451.648l271.552-271.488 60.288 60.288L572.416 512l271.488 271.552-60.288 60.288L512 572.416l-271.552 271.488-60.288-60.288L451.648 512z" p-id="3730"></path></svg>
                            </div>
                        </div>
                        <div class="export-body">
                            <textarea id="exportInnerHtml" readonly></textarea>
                        </div>
                        <div class="export-bottom">
                            <button class="copy-calc">取消</button>
                            <button class="copy-code">一键复制</button>
                        </div>
                    </div>
                    </div>
                `);
                    $("body").append(_styleBoxContainer);
                }

                $("#exportInnerHtml").html(lCSSCoder['format'](_allInjectStyle || ''));

                $(".exportSettingStyle .exportSetingClose,.exportSettingStyle .copy-calc").unbind('click').bind('click', function () {
                    $(".mask-dialog").hide();
                })
                $(".exportSettingStyle .copy-code").unbind('click').bind('click', function () {
                    $("#exportInnerHtml").select();
                    document.execCommand("copy");
                    $(".mask-dialog").hide();

                    showMessage("复制成功", 1);
                });
                $(".mask-dialog").show();


                function showMessage(message, type) {
                    let messageJQ = $(`
                        <div class='showMessage'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#04AE1C"/>
                            <path d="M5 9L8 11.5C8 11.5 11.0474 8.25736 13 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            <span style='margin-left:10px;'>${message}</span>
                        </div>
                    `);
                    if (type == 0) {
                        messageJQ.addClass("showMessageError");
                    } else if (type == 1) {
                        messageJQ.addClass("showMessageSuccess");
                    }
                    // 先将原始隐藏，然后添加到页面，最后以400毫秒的速度下拉显示出来
                    messageJQ.hide().appendTo("body").slideDown(400);
                    // 4秒之后自动删除生成的元素
                    window.setTimeout(function () {
                        messageJQ.show().slideUp(400, function () {
                            messageJQ.remove();
                        })
                    }, 3000);
                }
            }
        },
        setOutlineInit: function () {
            var btnOutline = $(".google-page-edit-plugin .top-left-outline");
            btnOutline.unbind('click').bind('click', function () {
                $(this).toggleClass("active");
                $(".google-page-edit-plugin .app-side-view").toggle();
                if (!$("#ld-panel-setting-dom-tree").hasClass('ui-draggable')) {
                    $("#ld-panel-setting-dom-tree").draggable();
                }
            })
            $('#ld-panel-setting-dom-tree .close-dom-tree').unbind('click').bind('click', function () {
                $(".google-page-edit-plugin .app-side-view").toggle();
                btnOutline.toggleClass("active");
            })
        },
        setIframeWindow: function () {
            $(".google-page-edit-plugin .screen-window-container li").unbind('click').bind('click', function () {
                $(this).parent().find("li").removeClass("screen-on");
                $(this).addClass("screen-on");


                var _width = $(this).attr("data-width") || '374px';
                var _height = $(this).attr("data-height") || '750px';

                $(window.treeHelper.iframeEl).css("width", _width);
                $(window.treeHelper.iframeEl).css("height", _height);

                var _domAttr = $(this).attr("iframeclass");
                $(window.treeHelper.iframeEl).removeClass();
                $(window.treeHelper.iframeEl).addClass(_domAttr);

                // 样式编辑面板隐藏
                $(stylePanelHelper.state.stylePanel).hide();

                // 清除编辑元素元素
                treeHelper.clearContainerContextAll();
            })
        },
        initSettingDom: function () {
            // console.log('初始化DOm');
            // $("#ld-draggable").draggable();
        }
    };
    window.initColors = function (id, movecallback, changecallback) {

        var fontsizeEl = $(".right-seeting-board");
        var Picture_chooseColorArry = [["rgb(0, 0, 0)", "rgba(0,0,0,0.5)", "rgb(34, 34, 34)", "rgb(51, 51, 51)", "rgb(238, 238, 238)", "rgb(102, 102, 102)", "rgb(153, 153, 153)", "rgb(170, 170, 170)", "rgb(204, 204, 204)", "rgb(221, 221, 221)"], ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)", "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]];
        // if (!fontsizeEl.find(id).hasClass("isloadComplete")) {  
        fontsizeEl.find(id).spectrum({
            showInput: true,
            showButtons: false,
            preferredFormat: "rgb",
            showPalette: true,
            showSelectionPalette: true,
            palette: Picture_chooseColorArry,
            showAlpha: true,
            allowEmpty: true,
            move: function (color) {
                movecallback(color)
            },
            change: function (color) {
                changecallback(color)
            },
        });
        fontsizeEl.find(id).attr("class", "isloadComplete");
        fontsizeEl.find(id).next().append(`<div class="ld-color-val">${fontsizeEl.find(id).val()}</div><div class="ld-color-close"><svg t="1668417347086" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2493" width="18" height="18"><path d="M451.648 512L180.16 240.448l60.288-60.288L512 451.648l271.552-271.488 60.288 60.288L572.416 512l271.488 271.552-60.288 60.288L512 572.416l-271.552 271.488-60.288-60.288L451.648 512z" p-id="2494"></path></svg></div>`)
        fontsizeEl.find(id).next().find('.ld-color-close').click(function (event) {
            event.stopPropagation();
            fontsizeEl.find(id).spectrum("set", null);
            movecallback(null)
            changecallback(null)
        })
        // }
    }
    window.stylePanelHelper = {
        state: {
            // 选择器
            currentSelector: null, // 当前编辑的选择器
            batchEleList:[], // 批量选择 ctrl + 单击
            stylePanel: ".right-seeting-board",
            spaceItemVal: ["margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left"],
            // 导出的样式文件选择器
            stylePanelContainer: "stylePanelContainer",
            currentTerminalJson: { "screen-pc-proview": { type: 'pc' },"screen-laptop-proview":{ type : 'laptop'}, "screen-tabletH-proview": { type: 'tabletH' }, "screen-mobileS-proview": { type: 'mobileS' } },
            screenSize: { pc: null,laptop: 1400, tabletH: 1024, mobileS: 500 },
            googlePanelStyle: { pc: {},laptop:{}, tabletH: {}, mobileS: {} },
            currentPanelStyle: {},
            __styleMap: ''
        },
        /** el element or selector
         * 初始化样式面板 
         */
        initPanel: function (el) {
            // 清空当前编辑样式对象
            this.state.currentPanelStyle = {};

            // 打开样式编辑面板
            $(this.state.stylePanel).show();

            // 绑定关闭面板
            this.closePanel();
            if (!$("#ld-panel-setting").hasClass('ui-draggable')) {
                // $("#ld-panel-setting").draggable({ handle: "#setting-title-header", containment: "html" });
                $("#ld-panel-setting").draggable({ handle: "#setting-title-header" });
                $("#ld-accordion").accordion({
                    collapsible: true,
                    heightStyle: "content"
                });
                $("#ld-style-reset").unbind('click').bind('click', function () {
                    stylePanelHelper.resetCurrentEditChildSyle()
                    stylePanelHelper.resetCurrentEditSyle()
                })
            }
            var {_window,_document,_$} = treeHelper.getElementDocFun();
            var batchEleList = stylePanelHelper.state.batchEleList
            // 获取对应的选择器
            if(typeof el == 'string'){ // 已经是选择器  相似元素 和 子元素a标签等元素
                this.state.currentSelector = el;
                el = _$(el).get(0);
            }else if(batchEleList.length > 1){ // 批量编辑 ctrl + 单击 批量选择处理
                var _selector = "";
                batchEleList.forEach(item => {
                    _selector += ',' + treeHelper.getNodeSelect.call(treeHelper, item);
                })
                _selector = _selector.replace(',','');
                this.state.currentSelector = _selector;
                el = batchEleList[0];
            } else { // 默认点击操作
                var _selector = treeHelper.getNodeSelect.call(treeHelper, el);
                this.state.currentSelector = _selector;
            }
            if(!el){
                return;
            }
            // 当前元素所有样式集合
            var _styleMap = this.getNormalDesinStyle(el);
            this.state.__styleMap = _styleMap;

            // 布局间距面板
            var resultArr = this.getNodeDesignStyle(el, this.state.spaceItemVal);
            spacePanelHelper.initSpaceInputVal.call(spacePanelHelper, resultArr);
            spacePanelHelper.initEventListerInputSpace.call(spacePanelHelper);
            // console.log(resultArr);

            // 是否隐藏
            hiddenPanelHelper.initInputVal.call(hiddenPanelHelper, _styleMap);
            hiddenPanelHelper.initEventListerInputSpace.call(hiddenPanelHelper, _styleMap, el);

            // 字体
            fontfamilyPanelHelper.initInputVal.call(fontfamilyPanelHelper, _styleMap);
            fontfamilyPanelHelper.initEventListerInputSpace.call(fontfamilyPanelHelper);

            // 字体大小
            fontsizePanelHelper.initInputVal.call(fontsizePanelHelper, _styleMap);
            fontsizePanelHelper.initEventListerInputSpace.call(fontsizePanelHelper);

            // 字体大小
            fontweightPanelHelper.initInputVal.call(fontweightPanelHelper, _styleMap);
            fontweightPanelHelper.initEventListerInputSpace.call(fontweightPanelHelper);

            // 大小
            elementSizePanelHelper.initInputVal.call(elementSizePanelHelper, _styleMap);
            elementSizePanelHelper.initEventListerInputSpace.call(elementSizePanelHelper);

            // 背景颜色
            backgroundColorPanelHelper.initInputVal.call(backgroundColorPanelHelper, _styleMap);
            backgroundColorPanelHelper.initEventListerInputSpace.call(backgroundColorPanelHelper, el);

            //行高
            lineHeightPanelHelper.initInputVal.call(lineHeightPanelHelper, _styleMap);
            lineHeightPanelHelper.initEventListerInputSpace.call(lineHeightPanelHelper);

            // 字间距
            letterSpacingPanelHelper.initInputVal.call(letterSpacingPanelHelper, _styleMap);
            letterSpacingPanelHelper.initEventListerInputSpace.call(letterSpacingPanelHelper);

            // 文字颜色
            fontColorPanelHelper.initInputVal.call(fontColorPanelHelper, _styleMap);
            fontColorPanelHelper.initEventListerInputSpace.call(fontColorPanelHelper, el);

            //hover颜色
            hoverColorPanelHelper.initInputVal.call(hoverColorPanelHelper, _styleMap);
            hoverColorPanelHelper.initEventListerInputSpace.call(hoverColorPanelHelper);

            // 对齐方式
            textAlignPanelHelper.initInputVal.call(textAlignPanelHelper, _styleMap);
            textAlignPanelHelper.initEventListerInputSpace.call(textAlignPanelHelper);

            //是否换行
            whiteSpacePanelHelper.initInputVal.call(whiteSpacePanelHelper, _styleMap);
            whiteSpacePanelHelper.initEventListerInputSpace.call(whiteSpacePanelHelper);

            //是否隐藏
            visibilityPanelHelper.initInputVal.call(visibilityPanelHelper, _styleMap);
            visibilityPanelHelper.initEventListerInputSpace.call(visibilityPanelHelper);

            // 边框
            borderPanelHelper.initInputVal.call(borderPanelHelper, _styleMap);
            borderPanelHelper.initEventListerInputSpace.call(borderPanelHelper);

            // 颜色
            colorPanelHelper.initInputVal.call(colorPanelHelper, _styleMap);
            colorPanelHelper.initEventListerInputSpace.call(colorPanelHelper);

            // 圆角
            borderRadiusPanelHelper.initInputVal.call(borderRadiusPanelHelper, _styleMap);
            borderRadiusPanelHelper.initEventListerInputSpace.call(borderRadiusPanelHelper);

            // 当前排版缩略图
            // var resultFlexArr = this.getNodeDesignStyle(el, this.state.spaceItemFlexVal);
            flexSketchPanelHelper.initInputVal.call(flexSketchPanelHelper, _styleMap);
            flexSketchPanelHelper.initEventListerInputSpace.call(flexSketchPanelHelper, _styleMap, el);
        },
        /**
         * 移除样式面板
         */
        removePanel: function () {
            $(this.state.stylePanel).hide();
        },
        /**
         * 获取dom对应的样式值
         * @param {*} el 
         * @param {*} arr 
         * @returns 
         */
        getNodeDesignStyle: function (el, arr) {
            var styleMap = el && getComputedStyle(el);
            var resultArr = [];
            for (var item of arr) {
                resultArr.push(parseFloat(styleMap[item]));
            }
            return resultArr;
        },
        /**
         * 当前元素所有样式集合
         * @param {*} el 
         * @returns 
         */
        getNormalDesinStyle: function (el) {
            var styleMap = el && getComputedStyle(el);
            return styleMap;
        },
        /**
         * 处理面板关闭
         */
        closePanel: function () {
            $(".setting-close").unbind('click').bind('click', function () {
                stylePanelHelper.removePanel();

                window.treeHelper.clearContainerContextAll();
            });
        },
        /**
         * 返回当前屏幕信息
         * @returns {type: 'mobileS', srceen: 374}
         */
        getTerminalType: function () {
            var _currentTerminalJson = window.stylePanelHelper.state.currentTerminalJson || {};
            for (var key in _currentTerminalJson) {
                if ($(window.treeHelper.iframeEl).hasClass(key)) {
                    return _currentTerminalJson[key];
                }
            }
        },
        /**
         * 生成样式转成{} 暂存到googlePanelStyle
         * @param {*} selector 
         * @param {*} styleName 
         * @param {*} styleVal 
         */
        generatePanelObj: function (selector, styleName, styleVal, unit) {
            var isFlag = $("#weightCheckbox").is(":checked");
            var _screenInfo = this.getTerminalType();
            var _googlePanelStyle = this.state.googlePanelStyle[_screenInfo.type];
            var _style = generateStyleVal(styleName, styleVal, isFlag);
            if (_googlePanelStyle[selector]) {
                _googlePanelStyle[selector].push(_style);
            } else {
                var _arrObj = [];
                _googlePanelStyle[selector] = _arrObj;
                _arrObj.push(_style);
            }

            // 当前面板样式
            var _currentPanelStyle = this.state.currentPanelStyle;
            if (_currentPanelStyle[selector]) {
                _currentPanelStyle[selector].push(_style);
            } else {
                var _arrObj_C = [];
                _currentPanelStyle[selector] = _arrObj_C;
                _arrObj_C.push(_style);
            }


            // 存储到当前浏览器回话
            this.setSessionStorageStyle(JSON.stringify(this.state.googlePanelStyle));

            function generateStyleVal(styleName, styleVal, isFlag) {
                var _styleStr;
                if (isFlag) {
                    _styleStr = styleName + ":" + styleVal + unit + " !important;";
                } else {
                    _styleStr = styleName + ":" + styleVal + unit + ";";
                }
                return _styleStr;
            }
        },
        /**
         * 重置当前编辑的样式
         */
        resetCurrentEditSyle: function () {
            var _currentPanelStyle = this.state.currentPanelStyle;
            if (JSON.stringify(_currentPanelStyle) != "{}") {

                var _screenInfo = this.getTerminalType();
                var _googlePanelStyle = this.state.googlePanelStyle[_screenInfo.type];


                var _selector = this.state.currentSelector;
                if (_googlePanelStyle[_selector] && _currentPanelStyle[_selector]) {
                    for (var item of _currentPanelStyle[_selector]) {
                        var _index = _googlePanelStyle[_selector].indexOf(item);
                        if (_index != -1) {
                            _googlePanelStyle[_selector].splice(_index, 1);
                        }
                    }
                }
                if (_googlePanelStyle[_selector]) {
                    if (_googlePanelStyle[_selector].length <= 0) {
                        delete _googlePanelStyle[_selector];
                    }
                }


                // 更新注入页面样式
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);

                // 更新存储到当前浏览器回话
                this.setSessionStorageStyle(JSON.stringify(this.state.googlePanelStyle));

                // 重新初始化样式编辑面板
                var currentElement = treeHelper.iframeContentDocument.querySelector(stylePanelHelper.state.currentSelector);
                window.stylePanelHelper.initPanel(currentElement);

            }
        },
        /**
         * 重置当前子元素编辑的样式
         */
        resetCurrentEditChildSyle: function () {

            var _currentPanelStyle = this.state.currentPanelStyle;
            if (JSON.stringify(_currentPanelStyle) != "{}") {

                var _screenInfo = this.getTerminalType();
                var _googlePanelStyle = this.state.googlePanelStyle[_screenInfo.type];


                var _selector = this.state.currentSelector;
                var child_selector
                for (let i = 0; i < window.flexSketchPanelHelper.state.selectChildNodeList.length; i++) {
                    child_selector = _selector + window.flexSketchPanelHelper.state.selectChildNodeList[i].tagName + "(" + Number(window.flexSketchPanelHelper.state.selectChildNodeList[i].num + 1) + ")"
                    if (_googlePanelStyle[child_selector] && _currentPanelStyle[child_selector]) {
                        for (var item of _currentPanelStyle[child_selector]) {
                            var _index = _googlePanelStyle[child_selector].indexOf(item);
                            if (_index != -1) {
                                _googlePanelStyle[child_selector].splice(_index, 1);
                            }
                        }
                    }
                    if (_googlePanelStyle[child_selector]) {
                        if (_googlePanelStyle[child_selector].length <= 0) {
                            delete _googlePanelStyle[child_selector];
                        }
                    }

                }




                // 更新注入页面样式
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);

                // 更新存储到当前浏览器回话
                this.setSessionStorageStyle(JSON.stringify(this.state.googlePanelStyle));

                // 重新初始化样式编辑面板
                // var currentElement = treeHelper.iframeContentDocument.querySelector(stylePanelHelper.state.currentSelector);
                // window.stylePanelHelper.initPanel(currentElement);
            }
        },
        /**
         * 把暂存的googlePanelStyle {} 转成对应样式
         * @returns 
         */
        generateJsontoStyle: function () {
            var googleStyle = "";
            var styleObj = this.state.googlePanelStyle;
            for (var key in styleObj) {
                if (JSON.stringify(styleObj[key]) != '{}') {
                    var screenStyle = generateObjToStyle(styleObj[key]);

                    // 获取对应的屏幕分辨率
                    var _screenSize = window.stylePanelHelper.state.screenSize || {};
                    if (_screenSize[key]) {
                        googleStyle += `@media screen and (max-width: ${_screenSize[key]}px){` + screenStyle + '}';
                    } else {
                        googleStyle += screenStyle;
                    }
                }
            }
            // console.log(googleStyle);
            return googleStyle;

            // json转成对应样式
            function generateObjToStyle(_googlePanelStyle) {
                var entriesArr = Object.entries(_googlePanelStyle);
                var allPanelStyle = "";
                for (let [selector, styleVal] of entriesArr) {
                    var _styleStr = "";
                    for (var item of styleVal) {
                        _styleStr += item;
                    }
                    allPanelStyle += selector + "{" + _styleStr + "}";
                }
                return allPanelStyle;
            }
        },
        /**
         * 存储到当前浏览器回话
         * @param {*} googleStyle 
         */
        setSessionStorageStyle: function (googleStyle) {
            window.sessionStorage.removeItem('googlePanelStyle');
            window.sessionStorage.setItem("googlePanelStyle", googleStyle);
        },
        getSessionStorageStyle: function () {
            return window.sessionStorage.getItem('googlePanelStyle');
        },
        /**
         * 初始化注入缓存样式
         */
        initStyleSessionStorage: function () {
            var _googleStyle = this.getSessionStorageStyle();
            if (_googleStyle) {
                this.state.googlePanelStyle = JSON.parse(_googleStyle);
                var _googlePanelStyle = this.generateJsontoStyle();
                this.injectPanelStyleTwo(_googlePanelStyle);
            }
        },
        /**
         * 把外部样式表改成行内样式表 
         * 解决 Failed to read the 'cssRules' property from 'CSSStyleSheet': Cannot access rules
         */
        inlineExternalStyles: function () {
            return new Promise(function (resolve, reject) {
              const _document = window.treeHelper.iframeContentDocument
              const linkTags = _document.querySelectorAll('link[rel="stylesheet"]:not([class="isalery"])');
              let processedCount = 0;
              const maxRetryCount = 3;
              let retryCountMap = {};
          
              linkTags.forEach(linkTag => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', linkTag.href, false); // 改为同步请求
                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    linkTag.classList.add('isalery');
                    const styleTag = _document.createElement('style');
                    styleTag.type = 'text/css';
                    styleTag.appendChild(_document.createTextNode(xhr.responseText));
                    _document.head.appendChild(styleTag);
                    processedCount++;
          
                    if (processedCount === linkTags.length) {
                      resolve('');
                    }
                  } else if (xhr.readyState === 4) {
                    // 请求失败，尝试重试
                    const retryCount = retryCountMap[linkTag.href] || 0;
                    if (retryCount < maxRetryCount) {
                    //   console.log(`资源请求失败，正在进行第${retryCount + 1}次重试...`);
                      retryCountMap[linkTag.href] = retryCount + 1;
                      xhr.open('GET', linkTag.href, false); // 改为同步请求
                      xhr.send();
                    } else {
                    //   console.log(`资源请求失败，已尝试重试${maxRetryCount}次，放弃重试`);
                      processedCount++;
                    }
                  }
                };
                xhr.send();
              });
          
              if (linkTags.length <= 0) {
                resolve('');
              }
            });
          },          
        getSelectorsForElement: async function(element){
            // 
            try{
                await window.stylePanelHelper.inlineExternalStyles();
            }catch(e){  
                console.log(e);
            }
            const  _document = window.treeHelper.iframeContentDocument
            // const element = _document.querySelector(selector);
            const selectors = [];
        
            // 遍历所有样式标签
            const styleTags = _document.getElementsByTagName('style');
            for (let i = 0; i < styleTags.length; i++) {
                const styleTag = styleTags[i];
                const rules = styleTag.sheet.cssRules || styleTag.sheet.rules;
            
                // 遍历样式标签中的所有规则
                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
            
                    // 检查规则是否为 CSS 样式规则并匹配目标元素 rule instanceof CSSStyleRule && 
                    if (element.matches(rule.selectorText)) {
                        selectors.push(rule.selectorText);
                    }
                }
            }
            return selectors;
        },
        /**
         * 过滤不需要的相似元素选择器，并加上组件或区块的id
         * @param {*} styleArrayList 
         * @param {*} _$ 
         * @param {*} _document 
         * @returns 
         */
        filterSelectorsForElement: function(styleArrayList,element){
            var {_window,_document,_$} = treeHelper.getElementDocFun();
            var newStyleArrList = [];
           
            styleArrayList.forEach((item) => {
                var lenState = _$(item).length < 1;
                var valideElResult = validateEle(item,"body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, button, select");
                
                if(lenState || valideElResult){

                }else {
                    var validateBlockResult = validateBlockFun(item);
                    if(_$(validateBlockResult).length > 0){
                        newStyleArrList.push(validateBlockResult);
                    }
                }
            });
            return newStyleArrList;
            function validateEle(selector,strArr){
                var arrayList = strArr.split(',');
                for(var item of arrayList){
                    item = item.replace(/ /g,'');
                    var _divEl = _document.createElement(item);
                    if(_divEl.matches(selector)){
                        return true;
                    }
                }
                return false;
            }

            // 并加上组件或区块的id
            function validateBlockFun(_selector){
                if(element){
                    var blockEle = _$(element).parents('div[data-type=siteblocks]');
                    var cptEle = _$(element).parents('div[data-type=outerContainer]');
                    var blockId = '';
                    if(blockEle.length > 0){
                        blockId = blockEle.attr('id');
                    }else if(cptEle.length > 0){
                        blockId = cptEle.attr('id');
                    }
                    if(blockId){
                        var newSelect = "";
                        var newSlectList = _selector.split(",");
                        newSlectList.forEach(item => {
                            // 已经有id
                            if(item.indexOf(blockId) > 0){
                                newSelect += ',' + item;
                            }else{
                                newSelect += ',' + '#' + blockId +' '+ item;
                                
                            }
                        });
                        newSelect = newSelect.replace(',','');
                        return newSelect;
                    }
                }
                return _selector;
            }
        },
        /**
         * 把json对象的样式 插入到页面
         * @param {*} allPanelStyle 
         */
        injectPanelStyleTwo: function (allPanelStyle) {
            var selectContainer = this.state.stylePanelContainer;
            var styleElStr = $("<style id=" + selectContainer + "></style>");
            if ($(window.treeHelper.iframeContentDocument).find("#" + selectContainer).length <= 0) {
                $(window.treeHelper.iframeContentDocument).find("body").append(styleElStr);
                $(window.treeHelper.iframeContentDocument).find("#" + selectContainer).html(allPanelStyle);
            } else {
                $(window.treeHelper.iframeContentDocument).find("#" + selectContainer).html(allPanelStyle);
            }
            //  更新当前编辑框
            this.realCurrentSelected();
        },
        injectPanelStyle: function (selector, styleName, styleVal) {
            var isFlag = $("#weightCheckbox").is(":checked");
            var _styleStr = generateStyle(selector, styleName, styleVal, isFlag);
            var selectContainer = this.state.stylePanelContainer;
            console.log(_styleStr);
            var styleElStr = $("<style id=" + selectContainer + "></style>");
            if ($(window.treeHelper.iframeContentDocument).find("#" + selectContainer).length <= 0) {
                $(window.treeHelper.iframeContentDocument).find("body").append(styleElStr);
                $(window.treeHelper.iframeContentDocument).find("#" + selectContainer).append(_styleStr);
            } else {
                $(window.treeHelper.iframeContentDocument).find("#" + selectContainer).append(_styleStr);
            }

            //  更新当前编辑框
            this.realCurrentSelected();

            function generateStyle(selector, styleName, styleVal, isFlag) {
                var _styleStr;
                if (isFlag) {
                    _styleStr = selector + "{" + styleName + ":" + styleVal + "px" + " !important" + "}";
                } else {
                    _styleStr = selector + "{" + styleName + ":" + styleVal + "px" + "}";
                }
                return _styleStr;
            }
        },
        /**
         * 更新当前编辑框
         */
        realCurrentSelected: function () {
            try {
                var {_window,_document,_$} = treeHelper.getElementDocFun();
                // 清空
                treeHelper.clearContainerContextAll();
                const currentSelectEl = _$(stylePanelHelper.state.currentSelector);
                currentSelectEl.each(function(index,item){
                    const currentElement = $(item)
                    const elementRectangle = item.getBoundingClientRect()
                    const mousePosition = {
                        x: elementRectangle.x,
                        y: elementRectangle.y
                    }
                    treeHelper.orchestrateDragDrop(currentElement, elementRectangle, mousePosition, true, true);

                    // 当前编辑的元素
                    window.treeHelper.setCurrentEditContainerContent(currentSelectEl.length > 1 ? 'batch' : '');
                });
            } catch (e) {
                console.log(e);
            }
        },
        // 重复样式过滤
        repeatStyleFilter: function () {
            var styleObj = this.state.googlePanelStyle;
            for (var key in styleObj) {
                if (JSON.stringify(styleObj[key]) != '{}') {
                    // styleObj[key] = filterRepeatArr(styleObj[key]);
                    for (var _selector in styleObj[key]) {
                        if (JSON.stringify(styleObj[key][_selector]) != '[]') {
                            styleObj[key][_selector] = filterRepeatArr(styleObj[key][_selector]);
                        }
                    }
                }
            }

            // 更新注入页面样式
            var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
            stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);

            // 更新存储到当前浏览器回话
            this.setSessionStorageStyle(JSON.stringify(this.state.googlePanelStyle));


            function filterRepeatArr(arrList) {
                // var _newArr = [...new Set(arrList)];
                var _arrObj = {};
                arrList.forEach((item, index) => {
                    var _key = item.split(":")[0];
                    _arrObj[_key] = item.split(":")[1];
                })

                var _resultArr = [];
                for (var [key, value] of Object.entries(_arrObj)) {
                    _resultArr.push(key + ": " + value);
                }
                return _resultArr;
            }

        }
    };
    //间距
    window.spacePanelHelper = {
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
            var mapptingArr = Object.assign({}, stylePanelHelper.state.spaceItemVal);
            var spaceEl = this.getSpaceInput();
            for (let i = 0; i < spaceEl.length; i++) {
                (function () {
                    var _originVal = spaceEl[i].val();
                    spaceEl[i].unbind('input').bind('input', function () {
                        var _inputVal = $(this).val();
                        _inputVal = !_inputVal ? '0' : _inputVal;
                        var _selector = stylePanelHelper.state.currentSelector;
                        if ($("#ld-center-m-b").hasClass('active')) {
                            var types = mapptingArr[i].indexOf('margin') > -1 ? 'margin' : 'padding';
                            $("#ld-margin-padding-dom").find('input[type^=margin]').val(_inputVal);
                            stylePanelHelper.generatePanelObj(_selector, types, _inputVal, "px");
                        } else {
                            // 生成样式
                            stylePanelHelper.generatePanelObj(_selector, mapptingArr[i], _inputVal, "px");
                        }

                        var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                        stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                    })
                })()
            }
            $("#ld-center-m-b").unbind('click').bind('click', function () {
                $(this).toggleClass('active')
            })
        }
    };
    //显示隐藏元素
    window.hiddenPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-hidden-flag");
        },
        /**
         * 初始化样式面板对应样式
         * @param {*} resultArr 
         */
        initInputVal: function (resultArr) {
            var hiddenInputEl = this.getHiddenInput();
            if (resultArr["display"] == "none") {
                hiddenInputEl.find('input[data-name=ld-none]').attr('checked', true);
                hiddenInputEl.find('input[data-name=ld-block]').attr('checked', false);
            } else {
                hiddenInputEl.find('input[data-name=ld-none]').attr('checked', false);
                hiddenInputEl.find('input[data-name=ld-block]').attr('checked', true);
            }
        },
        initEventListerInputSpace: function (resultArr, el) {
            var hiddenInputEl = this.getHiddenInput();
            var _orginVal = resultArr["display"];
            var hiddenInputElRadio = hiddenInputEl.find('input[name=ldHidden]');
            hiddenInputElRadio.unbind('change').bind('change', function () {
                var checkedRadioVal = hiddenInputEl.find('input[name=ldHidden]:checked').val();
                if (_orginVal == 'none') {
                    _orginVal = 'block'
                }
                var checkedRadio = checkedRadioVal == 'none' ? 'none' : _orginVal;

                var _selector = stylePanelHelper.state.currentSelector;

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "display", checkedRadio, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //Flex控制器
    window.flexSketchPanelHelper = {
        state: {
            childNodeList: {},
            selectChildNodeList: []
        },
        getSketchBox: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-flex-sketch-flag");
        },
        getSketchEl: function (el, flagParent) {
            if (flagParent) {
                var dataElId = $(el).parent().attr("data-el-id")
            } else {
                var dataElId = $(el).attr("data-el-id")
            }
            var SketchEl = $("[data-el-id='" + dataElId + "']:not(.draggable-item)")
            var styleSketchObj = {}
            styleSketchObj.parent = {}
            styleSketchObj.parent.width = $(SketchEl).width()
            styleSketchObj.parent.height = $(SketchEl).height()

            var _this = this

            styleSketchObj.parent.img = this.initImg($(SketchEl)).then(function (res) {
                styleSketchObj.parent.img = res
                styleSketchObj.parent.dataElId = $(SketchEl).attr("data-el-id")
                // console.log(styleSketchObj)
                var SketchBoxEl = _this.getSketchBox();
                var parentStyleHeight = $(SketchBoxEl).width() / styleSketchObj.parent.width * styleSketchObj.parent.height
                var html = ""
                html += `<div style="width:auto;max-height: 200px;height:${parentStyleHeight}px;background:red;padding:2px;">`
                html += `<img style="object-fit: cover;width: 100%;max-width: 100%;max-height: 100%;" src="${styleSketchObj.parent.img}"/>`
                html += `</div>`
                SketchBoxEl.html(html)
            })

        },
        initImg: function (el) {
            return new Promise(async (resolve, reject) => {
                try {
                    const canvas = await html2canvas(el[0], { scale: 1, useCORS: true, height: el.height(), width: el.width() })
                    let url = canvas.toDataURL();
                    resolve(url);
                } catch (error) {
                    reject(error);
                }

            })
        },
        initInputVal: function (resultArr) {
            var SketchBoxEl = this.getSketchBox();
        },
        prepChildFilter: "",
        initEventListerInputSpace: function (resultArr, el) {
            this.state.selectChildNodeList = []
            //子元素数据
            var renderBox = {}
            //缩略图加载 暂时弃用
            // var SketchBoxElData = this.getSketchEl(el, $(el).is('.draggable-title'))
            if ($(el).is('.draggable-title')) {
                var dataElId = $(el).parent().attr("data-el-id")
            } else {
                var dataElId = $(el).attr("data-el-id")
            }
            //var el = $("[data-el-id='" + dataElId + "']:not(.draggable-item)")

            //var SketchBoxEl = this.getSketchBox();
            // SketchBoxEl.html(SketchBoxElData)

            $('.lxdialog  .col_1').off('click').on('click', function () {
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active').siblings().removeClass('active');
                    renderFlex();
                    iconRotate($(this).attr("mapvalue"));
                } else {
                    $(this).removeClass('active');
                    renderFlex();
                    iconRotate("row");

                }
                //更新子集数据
                // window.flexSketchPanelHelper.bindEventUpdate(renderBox);

            })
            $('.lxdialog #generateCode').off('click').on('click', function () {
                var flexDirection = $(".lxdialog .mapObj_row_0 .col_1.active").attr("mapValue");
                var flexWrap = $(".lxdialog  .mapObj_row_1 .col_1.active").attr("mapValue");
                var alignContent = $(".lxdialog  .mapObj_row_2 .col_1.active").attr("mapValue");
                var justifyContent = $(".lxdialog  .mapObj_row_3 .col_1.active").attr("mapValue");
                var callBackStyle = flexCodeMap(flexDirection, flexWrap, alignContent, justifyContent);
                var _selector = stylePanelHelper.state.currentSelector;
                // var mapptingArr = Object.assign({}, stylePanelHelper.state.spaceItemFlexVal);
                // 生成样式

                for (const key in callBackStyle) {
                    stylePanelHelper.generatePanelObj(_selector, key, callBackStyle[key], "");
                }

                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);


            })
            //生成flex样式
            function renderFlex() {
                var callBackStyle = flexCodeMap();
                var _selector = stylePanelHelper.state.currentSelector;
                // stylePanelHelper.state.googlePanelStyle = {};
                for (const key in callBackStyle) {
                    stylePanelHelper.generatePanelObj(_selector, key, callBackStyle[key], "");
                }

                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            }
            // flex图标切换
            function iconRotate(mapvalue) {
                if (mapvalue == "row") {
                    $(".lxdialog .mapObj_row_1 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_2 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_3 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=center] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-start] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-end] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=stretch] svg").css("transform", "rotate(0deg)");
                }
                if (mapvalue == "column") {
                    $(".lxdialog .mapObj_row_1 .col_1 svg").css("transform", "rotate(90deg)");
                    $(".lxdialog .mapObj_row_2 .col_1 svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_3 .col_1 svg").css("transform", "rotate(90deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=center] svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-start] svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-end] svg").css("transform", "rotate(270deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=stretch] svg").css("transform", "rotate(90deg)");
                }
                if (mapvalue == "row-reverse") {
                    $(".lxdialog .mapObj_row_1 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_2 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_3 .col_1 svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_3 [mapvalue=flex-start] svg").css("transform", "rotate(0deg) scale(-1,1)");
                    $(".lxdialog .mapObj_row_3 [mapvalue=flex-end] svg").css("transform", "rotate(0deg) scale(-1,1)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=center] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-start] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-end] svg").css("transform", "rotate(0deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=stretch] svg").css("transform", "rotate(0deg)");
                }
                if (mapvalue == "column-reverse") {
                    $(".lxdialog .mapObj_row_1 .col_1 svg").css("transform", "rotate(90deg)");
                    $(".lxdialog .mapObj_row_2 .col_1 svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_3 .col_1 svg").css("transform", "rotate(90deg)");
                    $(".lxdialog .mapObj_row_3 [mapvalue=flex-start] svg").css("transform", "rotate(90deg) scale(-1,1)");
                    $(".lxdialog .mapObj_row_3 [mapvalue=flex-end] svg").css("transform", "rotate(90deg) scale(-1,1)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=center] svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-start] svg").css("transform", "rotate(-90deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=flex-end] svg").css("transform", "rotate(270deg)");
                    $(".lxdialog .mapObj_row_4 [mapvalue=stretch] svg").css("transform", "rotate(90deg)");
                }
            }
            function flexCodeMap() {
                var flexObj = {
                    "display": "flex"
                }
                var flexDirection = $(".lxdialog .mapObj_row_0 .col_1.active").attr("mapValue") == undefined ? "-1" : $(".lxdialog .mapObj_row_0 .col_1.active").attr("mapValue");
                var flexWrap = $(".lxdialog .mapObj_row_1 .col_1.active").attr("mapValue") == undefined ? "-1" : $(".lxdialog .mapObj_row_1 .col_1.active").attr("mapValue");
                var alignContent = $(".lxdialog .mapObj_row_2 .col_1.active").attr("mapValue") == undefined ? "-1" : $(".lxdialog .mapObj_row_2 .col_1.active").attr("mapValue");
                var justifyContent = $(".lxdialog .mapObj_row_3 .col_1.active").attr("mapValue") == undefined ? "-1" : $(".lxdialog .mapObj_row_3 .col_1.active").attr("mapValue");
                var alignItems = $(".lxdialog .mapObj_row_4 .col_1.active").attr("mapValue") == undefined ? "-1" : $(".lxdialog .mapObj_row_4 .col_1.active").attr("mapValue");
                if (flexDirection != "-1") {
                    flexObj["flex-direction"] = flexDirection;
                } else {
                    flexObj["flex-direction"] = "unset";
                }
                if (flexWrap != "-1") {
                    flexObj["flex-wrap"] = flexWrap;
                } else {
                    flexObj["flex-wrap"] = "unset";
                }
                if (alignContent != "-1") {
                    flexObj["align-content"] = alignContent;
                } else {
                    flexObj["align-content"] = "unset";
                }
                if (justifyContent != "-1") {
                    flexObj["justify-content"] = justifyContent;
                } else {
                    flexObj["justify-content"] = "unset";
                }
                if (alignItems != "-1") {
                    flexObj["align-items"] = alignItems;
                } else {
                    flexObj["align-items"] = "unset";
                }
                if (flexDirection == "-1" && flexWrap == "-1" && alignContent == "-1" && justifyContent == "-1" && alignItems == "-1") {
                    return {};
                }
                return flexObj;
            }

            function readStyle() {
                $('.lxdialog .col_1').removeClass('active');
                var curentDispaly = resultArr["display"];
                var curentflexDirection = resultArr["flex-direction"];
                var curentFlexWrap = resultArr["flex-wrap"];
                var curentAlignContent = resultArr["align-content"];
                var curentJustifyContent = resultArr["justify-content"];
                var curentAlignItems = resultArr["align-items"];
                if (curentDispaly == "flex") {
                    $('.lxdialog .mapObj_row_0 [mapvalue=' + curentflexDirection + ']').addClass('active').siblings().removeClass('active');
                    $('.lxdialog .mapObj_row_1 [mapvalue=' + curentFlexWrap + ']').addClass('active').siblings().removeClass('active');
                    $('.lxdialog .mapObj_row_2 [mapvalue=' + curentAlignContent + ']').addClass('active').siblings().removeClass('active');
                    $('.lxdialog .mapObj_row_3 [mapvalue=' + curentJustifyContent + ']').addClass('active').siblings().removeClass('active');
                    $('.lxdialog .mapObj_row_4 [mapvalue=' + curentAlignItems + ']').addClass('active').siblings().removeClass('active');
                }
                iconRotate(curentflexDirection);
                $('.lxdialog .row').each(function () {
                    var title = $(this).find('.active').attr("mapvalue") == undefined ? "normal" : $(this).find('.active').attr("mapvalue");
                    $(this).find('.title_2').text(title);
                })
            }
            readStyle();
            function virtualDom() {
                var _this = this
                if (window.flexSketchPanelHelper.prepChildFilter != "") {
                    $("[data-el-id='" + window.flexSketchPanelHelper.prepChildFilter + "']~:not(.draggable-item)").removeClass("childFilter")
                    $("[data-el-id='" + window.flexSketchPanelHelper.prepChildFilter + "']:not(.draggable-item)").removeClass("childFilter")
                }
                //初始清空上一个

                var curentDom = $(el);
                var curentDomchild = $(el).children();
                renderBox = {
                    width: curentDom.width(),
                    height: curentDom.height(),
                    children: []
                }
                if (curentDomchild.length > 0) {
                    curentDomchild.each(function (index, elitem) {
                        let obj = {}
                        obj.dataElId = $(this).attr("data-el-id")
                        obj.tagName = ">" + $(this).get(0).tagName + ":nth-child"//获取标签名称
                        obj.tagType = $(this).get(0).tagName//获取标签类型SCRIPT、STYLE
                        obj.width = Math.round(($(this)[0].offsetWidth / renderBox.width) * 100)
                        obj.height = Math.round(($(this)[0].offsetHeight / renderBox.height) * 100)
                        obj.index = index
                        if ($(this).css("display") == "none") {
                            obj.show = "是"
                        } else {
                            obj.show = "否"
                        }

                        renderBox.children.push(obj)
                    })
                    let html = ``
                    html += `<div class="child-item-num">`
                    html += `<span>子级数量：</span>`
                    html += `<span class="item-value">${renderBox.children.length}</span>`
                    html += `</div>`

                    html += `<span class="item-name item-name-orderFlag">开启排序:</span>`
                    html += `<div class="ck-switch">
                             <span class="ck-switch-on ck-switch-current ck-switch-current-3"></span>
                             <span class="ck-switch-off">否</span>
                            </div>`

                    html += `<div class="child-item-img">`
                    html += `<p>当前子级：</p>`
                    html += `<span class="item-value"><select>`
                    if (renderBox.children.length > 0) {
                        for (let j = 0; j < renderBox.children.length; j++) {
                            if (renderBox.children[j].tagType == "SCRIPT" || renderBox.children[j].tagType == "STYLE") {
                                html += `<option disabled data-sort="${j + 1}">${j + 1}:不可选</option>`
                            } else {
                                html += `<option  data-sort="${j + 1}">${j + 1}</option>`
                            }

                        }
                    } else {
                        html += `<option>请重新选择</option>`
                    }

                    html += `</select></span>`

                    html += `<div class="item-img">`

                    html += `</div>`
                    html += `</div>`

                    html += `<div class="child-item-style">`
                    html += `<p>当前子级数据：</p>`
                    html += `<div class="item-list">`

                    html += `<span class="item-name item-name-width">宽</span>`
                    html += `<span class="item-value">`
                    html += `<input class="item-value-width" maxlength="3" placeholder="" autocomplete="off" value="${renderBox.children[0].width}"><span>%</span>`
                    html += `</span>`

                    html += `<span class="item-name item-name-height">高</span>`
                    html += `<span class="item-value">`
                    html += `<input class="item-value-height" maxlength="3" placeholder="" autocomplete="off" value="${renderBox.children[0].height}"><span>%</span>`
                    html += `</span>`

                    // html += `<span class="item-name item-name-orderFlag">开启排序:</span>`
                    // html += `<span class="item-value">`
                    // html += `<input type="radio" value>`
                    // html += `</span>`

                    html += `<span class="item-name item-name-index hide">序号:</span>`
                    html += `<span class="item-value item-name-index-value hide">`
                    html += `<input class="item-value-index" maxlength="3" placeholder="" autocomplete="off" value="${renderBox.children[0].index + 1}">`
                    html += `</span>`

                    html += `<span class="item-name item-name-show">是否隐藏:</span>`
                    html += `<span class="item-value">${renderBox.children[0].show}</span>`

                    html += `</div> `
                    html += `</div> `

                    // console.log(html)
                    $("#setting-flex-child-sketch-flag").html(html)


                    $('.ck-switch .ck-switch-off').unbind('click').bind('click', function () {

                        $('.ck-switch .ck-switch-on').addClass('ck-switch-current ck-switch-current-3').html('');
                        $('.ck-switch .ck-switch-off').removeClass('ck-switch-current ck-switch-current-40').html('否');

                        // 开启后 触发flex 显示序号
                        // renderFlex()
                        CkSwitchFlag($(this), false)
                    });


                    $('.ck-switch .ck-switch-on').unbind('click').bind('click', function () {
                        if ($(this).hasClass('ck-switch-on')) {
                            $('.ck-switch .ck-switch-on').removeClass('ck-switch-current ck-switch-current-3').html('是');
                            $('.ck-switch .ck-switch-off').addClass('ck-switch-current ck-switch-current-40').html('');
                            //获取当前子元素下拉序号
                            $(this).parents("#setting-flex-child-sketch-flag").find("select").get(0).selectedIndex
                            // 开启后 触发flex 显示序号
                            CkSwitchFlag($(this), true)
                        }
                    });
                } else {
                    $("#setting-flex-child-sketch-flag").html(`<div class="child-item-num">
                        <p>下级数量：</p>
                        <span class="item-value">0</span>
                    </div>`)
                }

                $("#setting-flex-child-sketch-flag").hide()
                //默认下拉选中第一个
                //$("#setting-flex-child-sketch-flag .child-item-img .item-value select")[0].options[0].selected = true

            }
            function CkSwitchFlag(item, flag) {
                if (flag) {
                    // console.log("开始", renderBox.children)
                    item.parents("#setting-flex-child-sketch-flag").find(".item-name-index").removeClass("hide")
                    item.parents("#setting-flex-child-sketch-flag").find(".item-name-index-value").removeClass("hide")
                    //排序
                    item.parents("#setting-flex-child-sketch-flag").find("select").get(0).selectedIndex
                    item.parents("#setting-flex-child-sketch-flag").find("select option").each(function (i, dom) {

                        $(this).attr("data-order", i + 1)
                        renderBox.children[i].order = i + 1
                    })

                    $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-index").on("change", function () {
                        let _val = Number($(this).val())
                        let thisIndex = item.parents("#setting-flex-child-sketch-flag").find("select").get(0).selectedIndex
                        // console.log("参数1", thisIndex, "参数2", _val)
                        var sortOrderData = sortOrder(thisIndex, _val)
                        for (let i = 0; i < renderBox.children.length; i++) {
                            let _selector = stylePanelHelper.state.currentSelector + renderBox.children[i].tagName + "(" + Number(i + 1) + ")";
                            stylePanelHelper.generatePanelObj(_selector, "order", renderBox.children[i].order, "");
                            var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                            stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                        }
                        renderBox.children = sortOrderData
                    })
                } else {
                    item.parents("#setting-flex-child-sketch-flag").find(".item-name-index").addClass("hide")
                    item.parents("#setting-flex-child-sketch-flag").find(".item-name-index-value").addClass("hide")
                }

            }
            function maxVal(order, len) {
                var neworder = order + 1;
                if (neworder > len) {
                    neworder = len;
                }
                return neworder
            }
            function minVal(order, len) {
                var neworder = order - 1;
                if (neworder < 1) {
                    neworder = 1;
                }
                return neworder
            }
            function sortOrder(thisIndex, _val) {
                // console.log('sb', renderBox.children)
                var selectVal = renderBox.children[thisIndex];
                var newArr = JSON.parse(JSON.stringify(renderBox.children))
                for (let i = 0; i < renderBox.children.length; i++) {
                    // console.log('renderBox.children[i].order', renderBox.children[i].order)
                    if (newArr[thisIndex].order > _val) {
                        if (newArr[i].order >= _val && newArr.index != newArr[i].index) {
                            renderBox.children[i].order = maxVal(renderBox.children[i].order, renderBox.children.length)
                        }
                    } else {
                        if (newArr[i].order <= _val && newArr.index != newArr[i].index) {
                            renderBox.children[i].order = minVal(renderBox.children[i].order, renderBox.children.length)
                        }
                    }
                    if (newArr[thisIndex].index == newArr[i].index) {
                        renderBox.children[i].order = _val
                    }
                }
                // console.log("结束", renderBox.children)
                return renderBox.children
            }
            virtualDom()
            //上一个dataElId数据

            if (renderBox.children.length > 0) {
                var iframeDocument = $("#backstage-syleEdit-iframe")[0].contentWindow.document;
                $(el).children().removeClass("childFilter")
                // var targetDom = $(iframeDocument).find('[data-el-id=OTvYJ4DW]');
                // $(iframeDocument).find("[data-el-id='" + renderBox.children[0].dataElId + "']~:not(.draggable-item)").addClass("childFilter")
                // window.flexSketchPanelHelper.prepChildFilter = renderBox.children[0].dataElId
            }
            //绑定select change事件
            $("#setting-flex-child-sketch-flag .child-item-img .item-value select").on("change", function () {
                // console.log($(this).get(0).selectedIndex)
                //前一个取消选中效果

                updateChilddata($(this).get(0).selectedIndex, renderBox.children)

            });
            $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-width").on("change", function () {

                let _val = $(this).val()
                let thisIndex = $("#setting-flex-child-sketch-flag .child-item-img .item-value select").get(0).selectedIndex
                renderBox.children[thisIndex].width = _val
                let _selector = stylePanelHelper.state.currentSelector + renderBox.children[thisIndex].tagName + "(" + Number(thisIndex + 1) + ")";
                stylePanelHelper.generatePanelObj(_selector, "width", _val + "%", "");

                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);

            });
            $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-height").on("change", function () {
                let _val = $(this).val()
                let thisIndex = $("#setting-flex-child-sketch-flag .child-item-img .item-value select").get(0).selectedIndex
                renderBox.children[thisIndex].height = _val
                let _selector = stylePanelHelper.state.currentSelector + renderBox.children[thisIndex].tagName + "(" + Number(thisIndex + 1) + ")";
                stylePanelHelper.generatePanelObj(_selector, "height", _val + "%", "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            });

            //修改子级图片
            function updateChildImg(index, arrData) {

            }
            //修改子级数据
            function updateChilddata(index, arrData) {
                // if (window.flexSketchPanelHelper.prepChildFilter) {
                //     $("[data-el-id='" + window.flexSketchPanelHelper.prepChildFilter + "']:not(.draggable-item)").addClass("childFilter")
                // }
                $("[data-el-id='" + arrData[index].dataElId + "']:not(.draggable-item)").removeClass("childFilter")
                $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-width").val(arrData[index].width)
                $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-height").val(arrData[index].height)
                if (arrData[index].order && $("#setting-flex-child-sketch-flag .ck-switch .ck-switch-on").html() == "是") {
                    $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-index").val(arrData[index].order)
                } else {
                    $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-value-index").val(arrData[index].index + 1)
                }

                $("#setting-flex-child-sketch-flag .child-item-style .item-list .item-name-show~span").html(arrData[index].show)
                // let OldDataElId_ChildFilter = renderBox.children[index].dataElId
                // window.flexSketchPanelHelper.prepChildFilter = JSON.parse(JSON.stringify(OldDataElId_ChildFilter))
            }
            function renderChildNodeTable() {
                window.flexSketchPanelHelper.state.childNodeList = {};
                let childNodeList = window.flexSketchPanelHelper.state.childNodeList;
                let selectChildNodeList = window.flexSketchPanelHelper.state.selectChildNodeList;

                let childHtml = ``;
                if ($(el).children().length > 0) {
                    $('.childNodeTable').show();
                    // $('#setting-flex-child-sketch-flag').show();
                    var moveSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1669880025231" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="46010" width="200" height="200"><path d="M365.714286 585.142857a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m0-292.571428a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m0-292.571429a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m292.571428 585.142857a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m-292.571428 292.571429a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m292.571428 0a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m0-585.142857a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m0-292.571429a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z" p-id="46011"/></svg>`
                    var editSvg = `<svg t="1670052154912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5178" width="14" height="14" data-spm-anchor-id="a313x.7781069.0.i30"><path d="M483.072 714.496l30.165333 30.208 415.957334-415.829333a42.837333 42.837333 0 0 0 0-60.288 42.538667 42.538667 0 0 0-60.330667-0.042667l-355.541333 355.413333-355.242667-355.413333a42.496 42.496 0 0 0-60.288 0 42.837333 42.837333 0 0 0-0.085333 60.330667l383.701333 383.872 1.706667 1.749333z" fill="#3D3D3D" p-id="5179"></path></svg>`
                    $(el).children().each(function (i) {
                        childHtml += `
                        <div class="move-box">
                            <div class="item-module-box">
                                <span class="item-moveSvg">
                                    ${moveSvg}
                                </span>
                                <span>
                                    模块${i + 1}
                                </span>
                                <span class="item-editSvg" data-el-id-clone="${$(this).attr("data-el-id")}">
                                    ${editSvg}
                                </span>
                            </div>
                            <div class="item-edit-box">
                                <span class="item-name item-name-width">
                                    宽
                                </span>
                                <span class="item-value">
                                    <input class="item-value-width" maxlength="3" placeholder="" autocomplete="off" value="${Math.round(($(this)[0].offsetWidth / $(el).width()) * 100)}"><span>%</span>
                                </span>
                                <span class="brStyle"><br></span>
                                <span class="item-name item-name-height">
                                    高
                                </span>
                                <span class="item-value">
                                    <input class="item-value-height" maxlength="3" placeholder="" autocomplete="off" value="${Math.round(($(this)[0].offsetHeight / $(el).height()) * 100)}"><span>%</span>
                                </span>
                            </div>
                        </div>`
                        let obj = {}
                        // childNodeList[$(this).attr("data-el-id")]

                        obj = {
                            id: $(this).attr("data-el-id"),
                            num: (i + 0),
                            order: !$(this).css("order") || $(this).css("order") == "0" ? (i + 1) : $(this).css("order"),
                            tagName: ">" + $(this).get(0).tagName + ":nth-child",//获取标签名称
                            tagType: $(this).get(0).tagName,//获取标签类型SCRIPT、STYLE
                            dom: $(this),
                            event: this
                        }
                        selectChildNodeList.push(obj)
                    })
                } else {
                    $('.childNodeTable').hide();
                    $('#setting-flex-child-sketch-flag').hide();
                }

                $('#setting-flex-child-sketch-flag').hide();
                //绑定input按钮事件
                $(".childNodeTable").html(childHtml)
                $(".childNodeTable .move-box .item-edit-box").hide()

                // $('.childNodeTable input[name="selectAll"]').off('click').on('click', function () {
                //     selectChildNodeList = [];
                //     if ($(this).is(':checked')) {
                //         $('.childNodeTable tbody .childNodeTable_input').each(function () {
                //             $(this).prop("checked", true);

                //             selectChildNodeList.push(childNodeList[$(this).attr("data-el-id-clone")])
                //         });
                //         changeStyleForInput();
                //     } else {
                //         $('.childNodeTable tbody .childNodeTable_input').each(function () {
                //             $(this).removeAttr("checked", false);
                //         });
                //     }
                //     console.log(selectChildNodeList)
                // })
                // $('.childNodeTable tbody .childNodeTable_input').off('click').on('click', function () {
                //     if ($(this).is(':checked')) {
                //         $(this).prop("checked", true);
                //         selectChildNodeList.push(childNodeList[$(this).attr("data-el-id-clone")])
                //         changeStyleForInput();
                //     } else {
                //         $(this).removeAttr("checked", false);
                //         selectChildNodeList.splice(selectChildNodeList.findIndex(item => item.id === $(this).attr("data-el-id-clone")), 1)
                //     }
                //     console.log(selectChildNodeList)
                // })
                //绑定编辑按钮
                $('.childNodeTable .item-module-box span:nth-child(3) svg').off('click').on('click', function () {
                    var _dataElId = $(this).parent(".item-editSvg").attr("data-el-id-clone")
                    var iframeDocument = $("#backstage-syleEdit-iframe")[0].contentWindow.document;
                    // console.log("当前", selectChildNodeList)
                    // $(iframeDocument).find("[data-el-id='" + _dataElId + "']~:not(.draggable-item)").addClass("childFilter")
                    if ($(this).parents(".move-box").find(".item-edit-box").css("display") != "none") {
                        $(this).parents(".move-box").find(".item-edit-box").hide()
                        $(iframeDocument).find("[data-el-id='" + _dataElId + "']").removeClass("childFilter")
                        $(this).parents(".move-box").find(".item-module-box").removeClass("item-module-box-active")
                        $(this).parents(".move-box").find(".item-edit-box").removeClass("item-edit-box-active")
                        $(this).css("transform", "rotate(0deg)")
                    } else {
                        $(this).parents(".move-box").find(".item-edit-box").show()
                        $(this).parents(".move-box").find(".item-module-box").addClass("item-module-box-active")
                        $(this).parents(".move-box").find(".item-edit-box").addClass("item-edit-box-active")
                        $(iframeDocument).find("[data-el-id='" + _dataElId + "']").addClass("childFilter")
                        $(this).css("transform", "rotate(180deg)")

                    }

                })
                //每个更改宽度，高度change事件
                $(".childNodeTable .move-box .item-value-width").on("change", function () {
                    let _val = $(this).val()
                    var item_dataElId = $(this).parents(".move-box").find(".item-editSvg").attr("data-el-id-clone")
                    itemValueStyle("width", _val, item_dataElId);
                })
                $(".childNodeTable .move-box .item-value-height").on("change", function () {
                    let _val = $(this).val()
                    var item_dataElId = $(this).parents(".move-box").find(".item-editSvg").attr("data-el-id-clone")
                    itemValueStyle("height", _val, item_dataElId);
                })


                $("#setting-flex-child-sketch-flag  .item-value-width").on("change", function () {
                    let _val = $(this).val()

                    itemValueStyle("width", _val);

                });
                $("#setting-flex-child-sketch-flag  .item-value-height").on("change", function () {
                    let _val = $(this).val()
                    itemValueStyle("height", _val);
                });
                function itemValueStyle(style, _val, item_dataElId) {
                    selectChildNodeList.forEach(element => {
                        if (element.id == item_dataElId) {
                            let _selector = treeHelper.getNodeSelect.call(treeHelper, element.event);
                            stylePanelHelper.generatePanelObj(_selector, style, _val + "%", "");
                            var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                            stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                        }

                    });
                }

                // console.log("初始", selectChildNodeList)

                function initSortTable() {//初始化排序插件
                    $('.childNodeTable').sortable({
                        cursor: "move",
                        revert: true, //释放时，添加动画
                        opacity: 0.6,
                        handle: '.item-moveSvg',
                        distance: 5,
                        update: function (event, ui) { //更新排序之后

                            // console.log(ui)
                            // console.log($(ui.item).find(".item-editSvg").attr("data-el-id-clone"))
                            // console.log("开始", selectChildNodeList)
                            var _dataelidclone = $(ui.item).find(".item-editSvg").attr("data-el-id-clone")
                            // childNodeList[_dataelidclone]
                            //index
                            var sortOrderData

                            var thisIndex = ""
                            for (let i = 0; i < selectChildNodeList.length; i++) {
                                if (_dataelidclone == selectChildNodeList[i].id) {
                                    thisIndex = i
                                    // console.log("thisIndex", thisIndex)
                                }
                            }
                            var _val = ""
                            $(".childNodeTable .move-box").each(function (index, el) {
                                var _thisdataelidclone = $(el).find(".item-editSvg").attr("data-el-id-clone")
                                if (_thisdataelidclone == _dataelidclone) {
                                    _val = index
                                    // console.log("_val", _val)
                                }
                            })
                            // console.log("参数1", selectChildNodeList[index].num, "参数2", index)
                            sortOrderData = sortOrder(thisIndex, _val + 1)
                            for (let i = 0; i < selectChildNodeList.length; i++) {
                                let _selector = stylePanelHelper.state.currentSelector + selectChildNodeList[i].tagName + "(" + Number(i + 1) + ")";
                                stylePanelHelper.generatePanelObj(_selector, "order", selectChildNodeList[i].order, "");
                                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                            }
                            selectChildNodeList = sortOrderData


                        }
                    });
                }
                initSortTable()
                function destroySortTable() {
                    $('.childNodeTable').sortable("destroy");
                }
                function maxVal(order, len) {
                    var neworder = order + 1;
                    if (neworder > len) {
                        neworder = len;
                    }
                    return neworder
                }
                function minVal(order, len) {
                    var neworder = order - 1;
                    if (neworder < 1) {
                        neworder = 1;
                    }
                    return neworder
                }
                function sortOrder(thisIndex, _val) {
                    var newArr = JSON.parse(JSON.stringify(selectChildNodeList))
                    for (let i = 0; i < selectChildNodeList.length; i++) {
                        // console.log('selectChildNodeList[i].order', selectChildNodeList[i].order)
                        if (newArr[thisIndex].order > _val) {
                            if (newArr[i].order >= _val && newArr.num != newArr[i].num) {
                                selectChildNodeList[i].order = maxVal(selectChildNodeList[i].order, selectChildNodeList.length)
                            }
                        } else {
                            if (newArr[i].order <= _val && newArr.num != newArr[i].num) {
                                selectChildNodeList[i].order = minVal(selectChildNodeList[i].order, selectChildNodeList.length)
                            }
                        }
                        if (newArr[thisIndex].num == newArr[i].num) {
                            selectChildNodeList[i].order = _val
                        }
                    }
                    // console.log("结束", selectChildNodeList)
                    return selectChildNodeList
                }

            }
            renderChildNodeTable();
        },
        bindEventUpdate: function (renderBox) {
            for (let i = 0; i < renderBox.children.length; i++) {
                //宽度
                var _val = renderBox.children[i].width
                let _selector_width = stylePanelHelper.state.currentSelector + renderBox.children[i].tagName + "(" + Number(i + 1) + ")";
                if (_val == "50") {
                    var marginLeft = parseInt($(_selector_width).css("margin-left")) - 2
                    stylePanelHelper.generatePanelObj(_selector_width, "margin-left", marginLeft + "px", "");
                }
                stylePanelHelper.generatePanelObj(_selector_width, "width", _val + "%", "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                // 高度
                var _val = renderBox.children[i].width
                let _selector_height = stylePanelHelper.state.currentSelector + renderBox.children[i].tagName + "(" + Number(i + 1) + ")";
                stylePanelHelper.generatePanelObj(_selector_height, "height", _val + "%", "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);

                if (!$("#setting-flex-child-sketch-flag .child-item-style .item-list .item-name-index-value").hasClass("hide")) {
                    for (let j = 0; j < renderBox.children.length; j++) {
                        let _selector_order = stylePanelHelper.state.currentSelector + renderBox.children[j].tagName + "(" + Number(j + 1) + ")";
                        stylePanelHelper.generatePanelObj(_selector_order, "order", renderBox.children[j].order, "");
                        var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                        stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                    }
                }

            }
        },

    };
    //字体
    window.fontfamilyPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-fontfamily-flag");
        },
        initInputVal: function (resultArr) {
            var fontfamilyEl = this.getHiddenInput().parent('.ld-font-setting');
            // console.log('所有样式',resultArr)
            if (resultArr["font-family"]) {
                fontfamilyEl.val(resultArr["font-family"]);
            }
            if (resultArr["fontStyle"] == 'italic') {
                fontfamilyEl.find('.ld-style-italic').addClass('active')
            } else {
                fontfamilyEl.find('.ld-style-italic').removeClass('active')
            }
            if (resultArr["textDecoration"].indexOf('underline') > -1) {
                fontfamilyEl.find('.ld-text-decoration').addClass('active')
            } else {
                fontfamilyEl.find('.ld-text-decoration').removeClass('active')
            }
        },
        initEventListerInputSpace: function () {
            var fontfamilyEl = this.getHiddenInput();
            //字体
            fontfamilyEl.unbind('change').bind('change', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val();

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "font-family", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
            //下划线
            fontfamilyEl.parents('.ld-font-setting').find('.ld-font-style').unbind('click').bind('click', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = '';
                $(this).toggleClass('active')
                if ($(this).attr('type') == 'text-decoration') {
                    if ($(this).hasClass('active')) {
                        // 生成样式
                        _inputVal = 'underline';
                    } else {
                        _inputVal = 'none';
                    }
                } else {
                    if ($(this).hasClass('active')) {
                        // 生成样式
                        _inputVal = 'italic';
                    } else {
                        _inputVal = 'normal';
                    }
                }
                stylePanelHelper.generatePanelObj(_selector, `${$(this).attr('type')}`, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //字号大小
    window.fontsizePanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-fontsize-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["font-size"].replace(/[A-Za-z]/g, '')
            if (resultArr["font-size"]) {
                fontsizeEl.val(_inVal);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "font-size", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //字重
    window.fontweightPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-font-weight-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["font-weight"].replace(/[A-Za-z]/g, '')
            if (resultArr["font-weight"] && fontsizeEl.find(`option[value=${_inVal}]`).length) {
                fontsizeEl.val(_inVal);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.unbind('change').bind('change', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val();

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "font-weight", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };

       //大小
       window.elementSizePanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-element-size-flag");
        },
        initInputVal: function (resultArr) {
            var elementSizeEl = this.getHiddenInput();
            var _inVal = resultArr["transform"].match(/matrix\(([^)]+)\)/);
            var zoomVal = 100;
            if (_inVal) {
                var scaleValues = _inVal[1].split(',');
                var scaleX = parseFloat(scaleValues[0]);
                var scaleY = parseFloat(scaleValues[3]);
                if(scaleX!=scaleY){//如果值 不相同则设置为100%
                    zoomVal = 100;
                }else{
                    zoomVal = scaleX * 100;
                }
              }
            
            var _widthVal = resultArr["width"].replace(/[A-Za-z]/g, '')
            var _heightVal = resultArr["height"].replace(/[A-Za-z]/g, '')
            if (resultArr["transform"]) {
                this.initSilder('#ld-show-slider-zoom',elementSizeEl,zoomVal);
            }
            if(resultArr["width"]){
                elementSizeEl.find('._pixelWidth').val(_widthVal);
            }
            if(resultArr["height"]){
                elementSizeEl.find('._pixelHeight').val(_heightVal);
            }
        },
        initEventListerInputSpace: function () {
            var elementSizeEl = this.getHiddenInput();
            var elementSizeElInputElRadio = elementSizeEl.find('input[name=ldElementSize]');
            elementSizeElInputElRadio.unbind('change').bind('change', function () {
                var checkedRadioVal = elementSizeEl.find('input[name=ldElementSize]:checked').val();
                if(checkedRadioVal == "zoom"){
                    $('.ld-show-slider').css('display','flex');
                    $('.ld-show-pixel').hide();
                }else{
                    $('.ld-show-slider').hide();
                    $('.ld-show-pixel').css('display','flex');;
                }
            })

            //宽度
            elementSizeEl.find('._pixelWidth').unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "width", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);                 

            })

            //高度
            elementSizeEl.find('._pixelHeight').unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "height", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);    

            })                

            
          
        },
        initSilder:function(silderDom,elementSizeEl,zoomVal){
            elementSizeEl.find('.ld-show-slider-zoom-text').text(zoomVal+'%');
            $(silderDom).slider({
                range: "min",
                min: 0,
                max: 300,
                step: 1,
                value: zoomVal,
                slide: function(event, ui) {
                    elementSizeEl.find('.ld-show-slider-zoom-text').text(ui.value+'%');
                    var _selector = stylePanelHelper.state.currentSelector;
                    var _inputVal = parseFloat(ui.value)/100;
    
                    // 生成样式
                    stylePanelHelper.generatePanelObj(_selector, "transform",`scale(${_inputVal})`, "");
                    stylePanelHelper.generatePanelObj(_selector, "transform-origin",`center`, "");
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }
              }); // 初始化滑块
        }
    };

    //背景颜色
    window.backgroundColorPanelHelper = {   
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-background-color-flag");
        },
        initInputVal: function (resultArr) {
            var backgroundColorEl = this.getHiddenInput();
            var _inVal = resultArr["background-color"]
            if (resultArr["background-color"]) {
                backgroundColorEl.find('#ld-font-background-color').val(_inVal);
                backgroundColorEl.find('.ld-color-val').html(_inVal)
            }
        },
        initEventListerInputSpace: function (el) {
            var tagName = $(el).prop('tagName');
            var styleType = 'background-color';
            if (tagName == 'svg') {
                styleType = 'fill'
            }
            var backgroundColorEl = this.getHiddenInput();
            backgroundColorEl.find('.ld-color-select-bg')
            initColors('#ld-font-background-color', function (color) {
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                    backgroundColorEl.find('.ld-color-val').html(color.toRgbString())
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                    backgroundColorEl.find('.ld-color-val').html('rgba(0, 0, 0, 0)')
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, styleType, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            }, function (color) {
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, styleType, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })        

            
          
        }
    }

    //行高
    window.lineHeightPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-lineHeight-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["line-height"].replace(/[A-Za-z]/g, '')
            if (resultArr["line-height"]) {
                fontsizeEl.val(_inVal);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "line-height", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //字间距
    window.letterSpacingPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-letterSpacing-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["letter-spacing"].replace(/[A-Za-z]/g, '')
            if (resultArr["letter-spacing"]) {
                fontsizeEl.val(_inVal);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "letter-spacing", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //字体颜色
    window.fontColorPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#ld-font-color-bt");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["color"]
            if (_inVal) {
                fontsizeEl.find('#ld-font-text-color').val(_inVal);
                fontsizeEl.find('.ld-color-val').html(_inVal)
            }
        },
        initEventListerInputSpace: function (el) {
            var tagName = $(el).prop('tagName');
            var styleType = 'color';
            if (tagName == 'svg') {
                styleType = 'fill'
            }
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.find('.ld-color-select-bg')
            initColors('#ld-font-text-color', function (color) {
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                    fontsizeEl.find('.ld-color-val').html(color.toRgbString())
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                    fontsizeEl.find('.ld-color-val').html('rgba(0, 0, 0, 0)')
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, styleType, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            }, function (color) {
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, styleType, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };

    //是否允许换行
    window.whiteSpacePanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-white-space-flag");
        },
        initInputVal: function (resultArr) {
            var whiteSpaceEl = this.getHiddenInput();
            var _inVal = resultArr["white-space"];
            whiteSpaceEl.find(`p`).removeClass('active')
            if (_inVal) {
                whiteSpaceEl.find(`p[value=${_inVal}]`).addClass('active')
            }
            if(resultArr["-webkit-line-clamp"]){
                $('#setting-line-number-flag').find('._lineNumber').val(resultArr["-webkit-line-clamp"]);
            }
            if(resultArr["-webkit-line-clamp"]=="none"){
                $('#setting-line-number-flag').find('._lineNumber').val(3);

            }
        },
        initEventListerInputSpace: function () {
            var whiteSpaceEl = this.getHiddenInput();
            whiteSpaceEl.find('p').unbind('click').bind('click', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).attr('value')
                $(this).addClass('active').siblings().removeClass('active')
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "white-space", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })

            $('#setting-line-number-flag').find('._lineNumber').unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val();
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "display", "-webkit-box", "");
                stylePanelHelper.generatePanelObj(_selector, "-webkit-box-orient", "vertical", "");
                stylePanelHelper.generatePanelObj(_selector, "-webkit-line-clamp", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);                 

            })
        }
    };

    //是否允许隐藏
    window.visibilityPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-visibility-flag");
        },
        initInputVal: function (resultArr) {
            var whiteSpaceEl = this.getHiddenInput();
            var _inVal = resultArr["overflow"];
            whiteSpaceEl.find(`p`).removeClass('active')
            var isHidden = _inVal.indexOf('hidden')>0 ? 'hidden' : 'visible';
            if (_inVal) {
                whiteSpaceEl.find(`p[value=${isHidden}]`).addClass('active')
            }
            if(_inVal == "hidden"){
                $('#setting-line-number-flag').show();
                $('.ld-setting-line-number-text').show();
            }else{
                $('#setting-line-number-flag').hide();
                $('.ld-setting-line-number-text').hide();
            }
        },
        initEventListerInputSpace: function () {
            var whiteSpaceEl = this.getHiddenInput();
            whiteSpaceEl.find('p').unbind('click').bind('click', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).attr('value')
                $(this).addClass('active').siblings().removeClass('active')
                if(_inputVal == "hidden"){
                    $('#setting-line-number-flag').show();
                    $('.ld-setting-line-number-text').show();
                    // 生成样式
                    stylePanelHelper.generatePanelObj(_selector, "overflow", _inputVal, "");
                    stylePanelHelper.generatePanelObj(_selector, "display", "-webkit-box", "");
                    stylePanelHelper.generatePanelObj(_selector, "-webkit-box-orient", "vertical", "");
                    stylePanelHelper.generatePanelObj(_selector, "-webkit-line-clamp",$('#setting-line-number-flag').find('._lineNumber').val(),"");
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }else{
                    $('#setting-line-number-flag').hide();
                    $('.ld-setting-line-number-text').hide();
                    // 生成样式
                    stylePanelHelper.generatePanelObj(_selector, "overflow", _inputVal, "");
                    stylePanelHelper.generatePanelObj(_selector, "display", "unset", "");
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }


            })
        }
    }; 

    

    //对齐方式
    window.textAlignPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-text-align-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _inVal = resultArr["text-align"];
            fontsizeEl.find(`p`).removeClass('active')
            if (_inVal) {
                fontsizeEl.find(`p[value=${_inVal}]`).addClass('active')
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.find('p').unbind('click').bind('click', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).attr('value')
                $(this).addClass('active').siblings().removeClass('active')
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "text-align", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //hover颜色
    window.hoverColorPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#ld-hover-color-bt");
        },
        initInputVal: function (resultArr) {
            // var fontsizeEl = this.getHiddenInput();
            // var _inVal=resultArr["color"]
            // if (_inVal) {
            //     fontsizeEl.find('#ld-font-text-color').val(_inVal);
            //     fontsizeEl.find('.ld-color-val').html(_inVal)
            // }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            initColors('#ld-hover-text-color', function (color) {
                if (color) {
                    fontsizeEl.find('.ld-color-val').html(color.toRgbString())
                } else {
                    fontsizeEl.find('.ld-color-val').html('rgba(0, 0, 0, 0)')
                }
            }, function (color) {
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector + ':hover', "color", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    };
    //边框
    window.borderPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-border-select");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.find('input').val('')
            fontsizeEl.find('select').val('')
            fontsizeEl.find('.ld-color-select-bg').css('backgroundColor', 'rgba(0, 0, 0, 0)')
            fontsizeEl.find('.ld-b-color-show').html('')
            // var _inVal = resultArr["text-align"];
            // fontsizeEl.find(`p`).removeClass('active')
            // if (_inVal) {
            //     fontsizeEl.find(`p[value=${_inVal}]`).addClass('active')
            // }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.find('.ld-s-border').removeClass("active");
            fontsizeEl.find('.ld-s-border').unbind('click').bind('click', function () {
                fontsizeEl.find('.ld-s-border').removeClass("active");
                $(this).addClass('active');
                var __styleMap = window.stylePanelHelper.state.__styleMap;
                // _b_px = __styleMap[`border${$(this).attr('type')}Width`].replace(/[A-Za-z]/g, ''),
                // _b_color = __styleMap[`border${$(this).attr('type')}Color`],
                //     _b_style = __styleMap[`border${$(this).attr('type')}Style`];
                if ($(this).attr('type') != 'All') {
                    var _b_px = __styleMap[`border${$(this).attr('type')}Width`].replace(/[A-Za-z]/g, ''),
                        _b_color = __styleMap[`border${$(this).attr('type')}Color`],
                        _b_style = __styleMap[`border${$(this).attr('type')}Style`];
                } else {
                    var _b_px = '',
                        _b_color = '',
                        _b_style = '';
                }

                if ($(this).attr('type') != 'All') {
                    fontsizeEl.find('.ld-b-px .ld-default-inp').val(_b_px);
                    fontsizeEl.find('.ld-color-select-bg').css('backgroundColor', _b_color)
                    fontsizeEl.find('.ld-b-color-show').html(_b_color)
                    fontsizeEl.find('#ld-border-s').val(_b_style);
                    $("#ld-border-color").spectrum("set", _b_color);
                    fontsizeEl.find('.ld-color-val').html($("#ld-border-color").val())
                } else {
                    fontsizeEl.find('input').val('')
                    fontsizeEl.find('select').val('')
                    fontsizeEl.find('.ld-color-select-bg').css('backgroundColor', 'rgba(0, 0, 0, 0)')
                    fontsizeEl.find('.ld-b-color-show').html('')
                }
            })
            //边框宽度
            fontsizeEl.find('.ld-b-px input').unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val() + 'px';
                var setActiveBoder = fontsizeEl.find('.ld-s-border.active').attr('type');
                // 生成样式
                if (setActiveBoder) {
                    if (setActiveBoder == 'All') {
                        var borderStyle = fontsizeEl.find('#ld-border-s').val();

                        stylePanelHelper.generatePanelObj(_selector, `border`, `${_inputVal} ${borderStyle} ${$("#ld-border-color").val()}`, "");
                    } else {
                        stylePanelHelper.generatePanelObj(_selector, `border-${setActiveBoder.toLowerCase()}-width`, _inputVal, "");
                    }
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }

            })
            //边框颜色
            initColors('#ld-border-color', function (color) {
                if (color) {
                    fontsizeEl.find('.ld-color-val').html(color.toRgbString())
                    $("#ld-border-color").val(color.toRgbString())
                } else {
                    fontsizeEl.find('.ld-color-val').html('rgba(0, 0, 0, 0)');
                    $("#ld-border-color").val('rgba(0, 0, 0, 0)')
                }
            }, function (color) {
                var setActiveBoder = fontsizeEl.find('.ld-s-border.active').attr('type')
                var _selector = stylePanelHelper.state.currentSelector;
                if (color) {
                    var _inputVal = color.toRgbString();
                } else {
                    var _inputVal = 'rgba(0, 0, 0, 0)';
                }
                // 生成样式
                if (setActiveBoder) {
                    if (setActiveBoder == 'All') {
                        var borderStyleWidth = fontsizeEl.find('.ld-b-px input').val() + 'px';
                        var borderStyle = fontsizeEl.find('#ld-border-s').val();

                        stylePanelHelper.generatePanelObj(_selector, `border`, `${borderStyleWidth} ${borderStyle} ${_inputVal}`, "");
                    } else {
                        stylePanelHelper.generatePanelObj(_selector, `border-${setActiveBoder.toLowerCase()}-color`, _inputVal, "");
                    }
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }

            })
            //边框样式
            fontsizeEl.find('#ld-border-s').unbind('change').bind('change', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val();
                var setActiveBoder = fontsizeEl.find('.ld-s-border.active').attr('type')
                // 生成样式
                if (setActiveBoder) {
                    if (setActiveBoder == 'All') {
                        var borderStyleWidth = fontsizeEl.find('.ld-b-px input').val() + 'px';
                        // console.log('$("#ld-border-color").val()', $("#ld-border-color").val())
                        stylePanelHelper.generatePanelObj(_selector, `border`, `${borderStyleWidth} ${_inputVal} ${$("#ld-border-color").val()}`, "");
                    } else {
                        stylePanelHelper.generatePanelObj(_selector, `border-${setActiveBoder.toLowerCase()}-style`, _inputVal, "");
                    }
                    var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                    stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
                }

            })

        },

    };
    //圆角//setting-borderRadius-select
    window.borderRadiusPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-borderRadius-select");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            var _borderTopLeftRadius = resultArr["borderTopLeftRadius"].replace(/[A-Za-z]/g, ''),
                _borderTopRightRadius = resultArr["borderTopRightRadius"].replace(/[A-Za-z]/g, ''),
                _borderBottomLeftRadius = resultArr["borderBottomLeftRadius"].replace(/[A-Za-z]/g, ''),
                _borderBottomRightRadius = resultArr["borderBottomRightRadius"].replace(/[A-Za-z]/g, '');
            if (
                _borderTopLeftRadius == _borderTopRightRadius &&
                _borderTopLeftRadius == _borderBottomLeftRadius &&
                _borderTopLeftRadius == _borderBottomRightRadius
            ) {
                fontsizeEl.find(`.ld-b-inp`).val(_borderTopLeftRadius);
                fontsizeEl.find(`.ld-b-all`).addClass('active');
            } else {
                fontsizeEl.find(`.ld-b-all`).removeClass('active');
                fontsizeEl.find(`._borderTopLeftRadius`).val(_borderTopLeftRadius);
                fontsizeEl.find(`._borderTopRightRadius`).val(_borderTopRightRadius);
                fontsizeEl.find(`._borderBottomLeftRadius`).val(_borderBottomLeftRadius);
                fontsizeEl.find(`._borderBottomRightRadius`).val(_borderBottomRightRadius);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.find('.ld-b-inp').unbind('input').bind('input', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).attr('value') + 'px',
                    type_style = $(this).attr('type-style');
                //关联同步
                if (fontsizeEl.find('.ld-b-all').hasClass('active')) {
                    fontsizeEl.find(`.ld-b-inp`).val($(this).attr('value'))
                    type_style = 'border-radius'
                }
                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, type_style, _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
            //关联同步点击
            fontsizeEl.find('.ld-b-all').unbind('click').bind('click', function () {
                $(this).toggleClass('active');
            })
        }
    };
    window.colorPanelHelper = {
        getHiddenInput: function () {
            var _boxContainer = $(".right-seeting-board");
            return _boxContainer.find("#setting-fontcolor-flag");
        },
        initInputVal: function (resultArr) {
            var fontsizeEl = this.getHiddenInput();
            if (resultArr["color"]) {
                fontsizeEl.val(resultArr["color"]);
            }
        },
        initEventListerInputSpace: function () {
            var fontsizeEl = this.getHiddenInput();
            fontsizeEl.unbind('blur').bind('blur', function () {
                var _selector = stylePanelHelper.state.currentSelector;
                var _inputVal = $(this).val();

                // 生成样式
                stylePanelHelper.generatePanelObj(_selector, "color", _inputVal, "");
                var googlePanelStyle = stylePanelHelper.generateJsontoStyle();
                stylePanelHelper.injectPanelStyleTwo(googlePanelStyle);
            })
        }
    }
};

var script = document.createElement("script");
script.innerHTML = `
window.setAllHelper = ${setAllHelper};
window.setAllHelper();
`
document.head.appendChild(script)