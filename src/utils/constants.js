export const GOOGLE_API_KEY = "AIzaSyDrxo1A75CtxYS-Z8zzkc-iPwHGch_G5S4"


// const GOOGLE_API_KEY = "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=in&key="+GOOGLE_API_KEY;

  export const SEARCH_RESULT_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

//  export const YOUTUBE_VIDEOS_API ='https://youtube-data8.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US';
//  export const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e629fdad72msh9bd1000f4641eafp1baca2jsn65191c537d28',
// 		'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
// 	}
// };





// export const API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4"
// export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_KEY ;
// export const SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
// export const CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY;
// export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
// export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${API_KEY}&relatedToVideoId=`;
// export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;