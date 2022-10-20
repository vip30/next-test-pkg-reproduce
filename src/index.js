import EventEmitter from 'eventemitter3'

import qs from 'qs'

class NextTest extends EventEmitter {
  constructor () {
    super()
    this.ready = false
    console.log(qs)
  }
}

const sdkInstance = new NextTest()
export default sdkInstance
