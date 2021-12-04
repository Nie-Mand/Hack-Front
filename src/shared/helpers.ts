import { concat, isArray } from "lodash"

export const getHeader = (defaults: any) => ({
  headers: {
    ...defaults,
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

export const makeRule = (value: any, message: string = '') => {
  return {
    value,
    message,
  }
}

export const getFormErrors = (errors) => {
  let _errors: string[] = []
  Object.keys(errors).forEach(key => {
    if (isArray(errors[key])) {
      _errors = concat(_errors, ...errors[key].map(e => Object.values(e).map(_e => _e.message)))
    }
    else _errors = [..._errors, errors[key].message]
  })

  return _errors
}
  


