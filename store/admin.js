export const state = () => ({
  tabIndex: 1,
  roomDetails: {}
})
export const getters = {
  tabIndex: _state => _state.tabIndex,
  roomDetails: _state => _state.roomDetails
}
export const mutations = {
  SET_TABINDEX: (_state, payload) => {
    _state.tabIndex = payload;
  },
  SET_ROOM: (_state, payload) => {
    _state.roomDetails = payload;
  },
}
export const actions = {
  handleChangeTabIndex({ commit }, payload) {
    commit('SET_TABINDEX', payload);
  },
  handleGetRoomDetails({ commit }, payload) {
    commit('SET_ROOM', payload);
  },
}