import Axios from "axios";

const apiKey = "AIzaSyAn3rDyJS-_exS-alI0fNbFbmxiC5ZOsIw";
const rootURL = "https://www.googleapis.com/youtube/v3/";
const videosFetch = Axios.create({
  baseURL: `${rootURL}videos?key=${apiKey}&part=snippet`
});

const playlistFetch = Axios.create({
  baseURL: `${rootURL}playlists?part=snippet&maxResults=12&channelId=UClYiXQ2e1DUEPcWbcQtq1NA&key=${apiKey}`
});

const playlistItemsFetch = Axios.create({
  baseURL: `${rootURL}playlistItems?part=snippet&key=${apiKey}`
});
export { videosFetch, playlistFetch, playlistItemsFetch };
