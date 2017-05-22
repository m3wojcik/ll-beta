import { CALL_API } from '../middleware/api'

export function fetchDashboardClasses() {
  return {
    [CALL_API]: {
      endpoint: '/classes',
      types: ["FETCH_DASHBOARD_CLASSES", "FETCH_DASHBOARD_CLASSES_FULFILLED", "FETCH_DASHBOARD_CLASSES_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
