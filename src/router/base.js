class Dashboard {

  constructor (groups = []) {
    this.groups = groups || []
  }

  toRouter () {
    let routes = []
    for (let index in this.groups) {
      let group = this.groups[index]
      if (group.options && group.options.single) {
        let route = group.options.route
        if (!group.options.route) {
          console.info('Bad panel group route of', group.name)
          console.info('Defail panel route is', route)
          continue
        }
        route.meta = route.meta || {}
        route.meta.icon = group.options.icon
        route.meta.name = group.name
        routes.push(route)
      } else {
        for (let idx in this.groups[index].panels) {
          let panel = this.groups[index].panels[idx]
          let route = panel.routes
          route.meta = {
            parent: {
              name: this.groups[index].name,
              icon: this.groups[index].options.icon,
              slug: this.groups[index].options.slug
            },
            name: panel.name
          }
          routes.push(route)
        }
      }
    }
    return routes
  }
}

class PanelGroup {

  constructor (name, panels, options) {
    this.name = name
    this.panels = panels || []
    this.options = {
      icon: options.icon,
      single: options.single || false,
      route: options.route,
      slug: options.slug
    }
  }

  add (panel) {
    this.panels.push(panel)
  }
}

class Panel {

  constructor (name, routes, options = {}) {
    this.name = name
    this.routes = routes
    this.options = options
  }
}

export {Dashboard, PanelGroup, Panel}
