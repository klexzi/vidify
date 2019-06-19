import {
  videosFetch,
  playlistFetch,
  playlistItemsFetch
} from "./axios.config.js";
import { FetchError } from "../helpers/errors.js";

export const fetchVideos = async (id = undefined) => {
  try {
    let query = {};
    if (id) {
      query.id = id;
    } else {
      query.chart = "mostPopular";
      query.maxResults = "12";
      query.videoCategoryId = "10";
    }
    const videos = await videosFetch.get("", {
      params: query
    });
    return videos.data;
  } catch (error) {
    console.log(error);
    throw new FetchError(error.message);
  }
};

export const fetchPlaylist = async () => {
  try {
    const playlist = await playlistFetch.get("");
    return playlist.data;
  } catch (error) {
    console.log(error);
    throw new FetchError(error.message);
  }
};

export const fetchPlaylistItems = async id => {
  try {
    const playlistItems = await playlistItemsFetch.get("", {
      params: {
        playlistId: id
      }
    });
    return playlistItems.data;
  } catch (error) {
    console.log(error);
    throw new FetchError(error.message);
  }
};
