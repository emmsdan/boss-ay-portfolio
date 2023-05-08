export const getEnv = () => {
  return {
    YOUTUBE_CHANNEL_ID: 'UC3d17xUJ_6FtmHWoJqu_jQg',
    YOUTUBE_API_KEY: 'AIzaSyCs73Z8o1aEZTI1Lfktegpd1ukALHQxhp0'
  }
}

export const get = (env) => {
  return getEnv()[env]
}
