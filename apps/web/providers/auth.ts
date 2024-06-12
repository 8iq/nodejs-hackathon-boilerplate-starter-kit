import { AuthProvider } from '@repo/ui/refine/core'

const MOCK_USERS = [
  { email: 'demo@8iq.dev', roles: ['editor'] },
  { email: 'test@test.com', roles: ['editor'] },
  { email: 'admin@example.com', roles: ['admin'] },
]

const authProvider: AuthProvider = {
  login: async ({ providerName, email }) => {
    console.log('login', providerName, email)
    // Suppose we actually send a request to the back end here.
    const user = MOCK_USERS.find((item) => item.email === email)

    if (user) {
      localStorage.setItem('auth', JSON.stringify(user))
      return {
        success: true,
        redirectTo: '/dashboard',
      }
    }

    return {
      success: false,
      error: {
        message: 'Login Error',
        name: 'Invalid email or password',
      },
    }
  },
  register: async function (params) {
    console.log('register', params)
    const user = MOCK_USERS.find((item) => item.email === params.email)
    if (user) {
      const login = await this.login({ email: params.email })
      if (login.success) {
        return {
          success: true,
          redirectTo: '/dashboard',
        }
      }
    }
    return {
      success: false,
      error: {
        message: 'Register failed',
        name: 'Invalid email or password',
      },
    }
  },
  updatePassword: async (params) => {
    console.log('update password', params)
    if (params.password === '123456') {
      return {
        success: true,
      }
    }
    return {
      success: false,
      error: {
        message: 'Update password failed',
        name: 'Invalid password',
      },
    }
  },
  forgotPassword: async function (params) {
    console.log('forgot password', params)
    const user = MOCK_USERS.find((item) => item.email === params.email)
    if (user) {
      return {
        success: true,
      }
    }
    return {
      success: false,
      error: {
        message: 'Forgot password failed',
        name: 'Invalid email',
      },
    }
  },
  logout: async function () {
    console.log('logout')
    localStorage.removeItem('auth')
    return {
      success: true,
      redirectTo: '/login',
    }
  },
  onError: async function (error) {
    console.log('onError', error)
    if (error.response?.status === 401) {
      return {
        logout: true,
      }
    }

    return { error }
  },
  check: async function () {
    console.log('check', localStorage.getItem('auth'))
    const user = localStorage.getItem('auth')

    if (user) {
      return {
        authenticated: true,
      }
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: '/login',
      error: {
        message: 'Check failed',
        name: 'Unauthorized',
      },
    }
  },
  getPermissions: async function (params) {
    console.log('getPermissions')
    if (params) {
      // do some logic or make a request to server
    } else {
      const user = localStorage.getItem('auth')

      if (user) {
        const { roles } = JSON.parse(user)

        return roles
      }
    }

    return null
  },
  getIdentity: async function () {
    console.log('getIdentity', localStorage.getItem('auth'))
    const user = localStorage.getItem('auth')

    if (user) {
      const { email, roles } = JSON.parse(user)
      return { email, roles }
    }

    return null
  },
}

export { authProvider }
