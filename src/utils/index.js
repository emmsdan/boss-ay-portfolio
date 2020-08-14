import settings from '@settings'
// import axios from 'axios'

export function getSocialMediaInfo (name) {
  return settings.socialMedia[name.toLowerCase() || 'twitter']
}
