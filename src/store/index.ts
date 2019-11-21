
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '../../typings/vuex.d';

Vue.use(Vuex);

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';


const debug = process.env.NODE_ENV !== 'procuction';

const store: StoreOptions<RootState> = {
  actions,
  getters,
  state,
  mutations,
  strict: debug
};

export default new Vuex.Store<RootState>(store);