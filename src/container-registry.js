const log = require('debug')('testcontainers:ContainerRegistry')

class ContainerRegistry {
  constructor ({ containers }) {
    this.containers = containers
  }

  registerContainer (container) {
    log('registering container')
    this.containers = [...this.containers, container]
  }

  getContainers () {
    return this.containers
  }
}

module.exports = ContainerRegistry