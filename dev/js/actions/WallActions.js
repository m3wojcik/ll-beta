import { CALL_API } from '../middleware/api'

export function fetchWall(params) {
  return {
    [CALL_API]: {
      endpoint: '/wall',
      types: ["FETCH_WALL", "FETCH_WALL_FULFILLED", "FETCH_WALL_REJECTED"],
      authenticated: true,
      method: 'get',
      params:{...params}
    }
  }
}
export function wallFetched() {
  return {
    [CALL_API]: {
      endpoint: '/wallFetched',
      types: ["WALL_FETCHED", "WALL_FETCHED_FULFILLED", "WALL_FETCHED_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
