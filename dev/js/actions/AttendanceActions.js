import { CALL_API } from '../middleware/api'

export function fetchAttendance() {
  return {
    [CALL_API]: {
      endpoint: '/attendance',
      types: ["FETCH_ATTENDANCE", "FETCH_ATTENDANCE_FULFILLED", "FETCH_ATTENDANCE_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
