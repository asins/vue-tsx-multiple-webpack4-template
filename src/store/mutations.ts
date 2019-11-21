import { RootState } from '../../typings/vuex.d';

//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

const mutations = {
    //为桔子加1，不传默认加1
    //这里的state即是上面定义的state常量
    ORANGE(state: RootState, num: number = 1) {
        state.orange += num;
    },
    //为芒果加10,不传默认加10
    MANGO(state: RootState, num: number = 10) {
        state.mango += num;
    },
    //为樱桃子加20,不传默认加20
    CHERRY(state: RootState, num: number = 20) {
        state.cherry += num;
    }
};

export default mutations;