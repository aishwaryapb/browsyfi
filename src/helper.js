export const divideTracks = (tracks = []) => {
    const count = tracks.length;
    const mid = Math.floor(count / 2);
    return {
        list1: tracks.slice(0, mid),
        list2: tracks.slice(mid + 1, count - 1)
    }
}

export const msToTime = (s) => {

    const pad = (n) => ('00' + n).slice(-2);

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return (hrs ? (pad(hrs) + ':') : '') + (mins ? (pad(mins) + ':') : '') + pad(secs);
}