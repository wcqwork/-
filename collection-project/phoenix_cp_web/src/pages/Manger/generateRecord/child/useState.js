export default function useState() {
    // 状态处理
    let handlerState = (state) => {
        let mapState = {
            '0': {
                stateBColor: '#d9eeff',
                stateFColor: '#008cff',
                stateIcon: '生成中',
                stateDesc: '生成中',
            },
            '1': {
                stateBColor: '#d9eeff',
                stateFColor: '#008cff',
                stateIcon: '生成中',
                stateDesc: '生成中',
            },
            '2': {
                stateBColor: '#cdfadf',
                stateFColor: '#04ae1c',
                stateIcon: '生成成功',
                stateDesc: '生成成功',
            },
            '3': {
                stateBColor: '#ffdedd',
                stateFColor: '#ff4642',
                stateIcon: '生成失败',
                stateDesc: '生成失败',
            },
            '4': {
                stateBColor: '#ffeed9',
                stateFColor: '#ff8d00',
                stateIcon: '已暂停',
                stateDesc: '已暂停',
            },
            '5': {
                stateBColor: '#ffeed9',
                stateFColor: '#ff8d00',
                stateIcon: '已暂停',
                stateDesc: '已暂停',
            },
            '6': {
                stateBColor: '#ffdedd',
                stateFColor: '#ff4642',
                stateIcon: '生成失败',
                stateDesc: '生成失败',
            }
        }
        return mapState[state] || mapState[0];
    }
    return {
        handlerState
    }
}