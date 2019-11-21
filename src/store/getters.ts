import { RootState } from '../../typings/vuex.d';

//getters 除了能做代理之外，还能做简单的计算属性

const getters={

    orange: (state: RootState) => state.orange,

    mango: (state: RootState) => state.mango,

    cherry: (state: RootState) => state.cherry
};

export default getters;