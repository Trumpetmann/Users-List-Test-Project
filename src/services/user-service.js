/* eslint-disable class-methods-use-this */
export default class UserService {
  async getResource(url) {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }
    return res.json()
  }
}
