export const state = () => ({
	show: false,
})
export const getters = {
	show: _state => _state.show,
}
export const mutations = {
  SET_SHOW: (_state, payload) => {
    _state.show = payload;
  },
}
export const actions = {
  handleShow({ commit }, payload) {
    commit('SET_SHOW', payload);
  },
}