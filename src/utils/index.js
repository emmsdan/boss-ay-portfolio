import settings from '@settings'

export function getSocialMediaInfo (name) {
  return settings.socialMedia[name.toLowerCase() || 'twitter']
}
