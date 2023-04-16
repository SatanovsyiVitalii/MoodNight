export const PATHS = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  PROTECTED: '/protected',
  ACCOUNT_EDITOR: '/account-editor',
  POSTS_EDITOR: '/posts-editor',
  EVENTS_EDITOR: '/events-editor',
  POST_DETAILS: '/post',
  HOME: '/',
};

export const publicPages = {
  [PATHS.SIGNIN]: PATHS.SIGNIN,
  [PATHS.SIGNUP]: PATHS.SIGNUP,
  [PATHS.HOME]: PATHS.HOME,
  [PATHS.POST_DETAILS]: PATHS.POST_DETAILS,
};