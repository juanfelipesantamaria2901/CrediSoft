const AUTH = {
  SIGNIN: {
    href: '/auth/signIn.vue',
    route: '/sign-in',
    url: '/sign-in'
  },
  SIGNUP: {
    href: '/auth/signUp.vue',
    route: '/sign-up',
    url: '/sign-up'
  },
  ContraseñaPerdida: {
    href: '/auth/forgotPassword.vue',
    route: '/forgot-password',
    url: '/forgot-password'
  }
}

const DASHBOARD = {
  Home: {
    href: '/index.vue',
    route: '/',
    url: '/'
  },
  Formulario: {
    href: '/forms.vue',
    route: '/forms',
    url: '/forms'
  },
  Tablas: {
    href: '/tables.vue',
    route: '/tables',
    url: '/tables'
  },
  Filtros: {
    href: '/filters.vue',
    route: '/filters',
    url: '/filters'
  },
  Graficos: {
    href: '/charts.vue',
    route: '/charts',
    url: '/charts'
  },
  Perfil: {
    href: '/profile.vue',
    route: '/user-profile',
    url: '/profile'
  },
  Ajustes: {
    href: '/settings.vue',
    route: '/user-settings',
    url: '/setting'
  }
}

const API = {
  API: {
    href: '/api/v1',
    route: '/api/v1',
    url: '/api/v1'
  }
}

module.exports = { ...AUTH, ...DASHBOARD, ...API }
