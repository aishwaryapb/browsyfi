import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedPlaylist: undefined
};
const playlist = createContext(initialState);
const { Provider } = playlist;

const PlaylistProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SELECT_PLAYLIST':
                return { ...state, selectedPlaylist: action.payload };
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { playlist, PlaylistProvider }