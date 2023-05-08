export const getEnv = () => {
  return {
    YOUTUBE_CHANNEL_ID: 'UC3d17xUJ_6FtmHWoJqu_jQg',
    YOUTUBE_API_KEY: 'AIzaSyD5sfi-A0NuG8Yrf1ENfn3ve0OoG6o6fTI'
  }
}

export const get = (env) => {
  return getEnv()[env]
}
