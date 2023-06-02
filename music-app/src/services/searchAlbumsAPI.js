const searchAlbumsAPI = async (artist) => {
  const musicTrackURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=song&term=${musicTrackURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  const response = results.map(
    ({
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      releaseDate,
      trackName,
      previewUrl
    }) => ({
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      releaseDate,
      trackName,
      previewUrl
    }),
  );
  return response;
};

export default searchAlbumsAPI;

//exaplain all this code