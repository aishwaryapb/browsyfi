[![Netlify Status](https://api.netlify.com/api/v1/badges/eb8f7c4c-ea6d-42ae-a913-b5f12a3dd6c9/deploy-status)](https://app.netlify.com/sites/browsyfi/deploys)

# [browsyfi](https://browsyfi.netlify.app/)


This is a simple React application that allows an user to browse the latest featured song playlists from all around the world and view all the tracks under each of them. It also provides audio preview for few of the song tracks.


Check out the app - [browsyfi](https://browsyfi.netlify.app/)

And [here](https://github.com/aishwaryapb/spotify-graphql-wrapper) is the GraphQL back-end code for this project.

## Key takeaways for React Developers

- Configure Apollo Client
- Use Apollo React Hooks and GraphQL tag to query the data from a GraphQL server
- Use Apollo's In-memory cache for local state management
- Apply middleware to Apollo client
- Use Context and Reducer hooks by React


## Is Apollo's in-memory cache useful here?
Yes. The GraphQL back-end for this project fetches data using Spotify API. The song tracks data is not paginated hence, it can be quite time consuming to fetch every time the user clicks on an item in the playlist. Because of apollo client's in-memory cache, a significant number of network requests can be avoided without the user seeing any difference at all while switching between various playlists.
