var startWordOrder = function () {
    console.log('开始');

    async function initStartWork() {
        await workerHelper.initWorker();
        // workerHelper.state.workerInstance.getWordListProxy();
        console.log('加载完成……');
    }
    initStartWork();
}

var script = document.createElement("script");
script.innerHTML = `
window.startWordOrder = ${startWordOrder};
window.startWordOrder();
`

document.head.appendChild(script)