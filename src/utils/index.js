import settings from '@settings'
// import axios from 'axios'

export function getSocialMediaInfo (name) {
  return settings.socialMedia[name.toLowerCase() || 'twitter']
}

export function formatYoutubeResponse(response) {
  return response.items.map(item => {
    console.log(item)
    return {
      id: item.id.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
      title: item.snippet.title,
      date: item.snippet.publishedAt
    }
  });
}
