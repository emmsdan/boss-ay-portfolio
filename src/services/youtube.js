// import * as googleapis from 'googleapis'
import axios from 'axios'
import * as Env from '../services/environmemt'
import {formatYoutubeResponse} from "../utils";

class Youtube {
  // private scope: string[] = ['https://www.googleapis.com/auth/youtube.readonly', 'https://www.googleapis.com/auth/youtube.force-ssl']
  async getChannelTopVideos(maxResults = 10){
    // https://developers.google.com/youtube/v3/docs/search/list

    const request = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: Env.get('YOUTUBE_CHANNEL_ID'),
        type: 'video',
        maxResults,
        key: Env.get('YOUTUBE_API_KEY'),
      }
    })
    return formatYoutubeResponse(request.data)
  }
}

export default new Youtube()
