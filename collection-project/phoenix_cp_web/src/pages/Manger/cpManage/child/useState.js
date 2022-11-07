export default function useState() {
    // 状态处理
    let handlerState = (state) => {
        let mapState = {
            '0': {
                stateBColor: '#f6f8fe',
                stateFColor: '#343a56',
                stateIcon: '待生成',
                stateDesc: '待生成',
            },
            '1': {
                stateBColor: '#ffeed9',
                stateFColor: '#ff8d00',
                stateIcon: '已暂停',
                stateDesc: '已暂停',
            },
            '2': {
                stateBColor: '#cdfadf',
                stateFColor: '#04ae1c',
                stateIcon: '生成成功',
                stateDesc: '已生成',
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
                stateDesc: '待更新',
            },
            '5': {
                stateBColor: '#f1f2f5',
                stateFColor: '#979797',
                stateIcon: '生成失败1',
                stateDesc: '已删除',
            }
        }
        return mapState[state] || mapState[0];
    }
    return {
        handlerState
    }
}