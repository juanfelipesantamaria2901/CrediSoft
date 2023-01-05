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
  FORGOTPASSWORD: {
    href: '/auth/forgotPassword.vue',
    route: '/forgot-password',
    url: '/forgot-password'
  }
}

const DASHBOARD = {
  HOME: {
    href: '/index.vue',
    route: '/',
    url: '/'
  },
  FORM: {
    href: '/forms.vue',
    route: '/forms',
    url: '/forms'
  },
  TABLE: {
    href: '/tables.vue',
    route: '/tables',
    url: '/tables'
  },
  FILTERS: {
    href: '/filters.vue',
    route: '/filters',
    url: '/filters'
  },
  CHART: {
    href: '/charts.vue',
    route: '/charts',
    url: '/charts'
  },
  PROFILE: {
    href: '/profile.vue',
    route: '/user-profile',
    url: '/profile'
  },
  SETTING: {
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
