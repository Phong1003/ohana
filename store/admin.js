export const state = () => ({
	tabIndex: 1,
})
export const getters = {
	tabIndex: _state => _state.tabIndex,
}
export const mutations = {
  SET_TABINDEX: (_state, payload) => {
    _state.tabIndex = payload;
  },
}
export const actions = {
  handleChangeTabIndex({ commit }, payload) {
    commit('SET_TABINDEX', payload);
  },
}