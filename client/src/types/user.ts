export type userType = {
  fullName?: string,
  phonenumber?: string,
  email?: string
}

export type responseUserType = {
  serviceId: number,
  userInfo: userType
}
