export const email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export const mobile = /^1(3|4|5|6|7|8|9)\d{9}$/
export const name = /^[a-zA-Z\u4e00-\u9fa5]+$/
export const digit = /^[0-9]*$/
export const positiveInteger = /^[1-9]\d*$/
export const naturalNumber = /(^0$)|(^[1-9]\d*$)/
export const phoneNumber = /(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^1(3|4|5|6|7|8|9)\d{9}$)/
export const IDNumber = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
export const numberBetween = /^(1|[1-9]|1[0-9]?|20)$/