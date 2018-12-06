let http;

export const build = (_http) => {
    http = _http;
}

export const get = (url) => {
    return http.get(url);
}

export const post = (url, data) => {
    return http.post(url,data)    
}

export const put = (url,data) => {
    return http.put(url,data);
}

export const remove = (url) => {
    return http.delete(url);
}