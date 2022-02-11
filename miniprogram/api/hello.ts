import { get } from './request'

export function sayHello() {
  return get('/hello')
}