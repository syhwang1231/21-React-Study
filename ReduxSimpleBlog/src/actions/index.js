import axios from 'axios';
// the purpose of this action creator is to fetch a list of posts

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const FECTH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

// to fetch a list of posts and return them to that reducer
// this action creator needs to reach out to that redux blog API that we are looking at
// it will involve network request
// making network requests inside of an action creator, we need to install axios
// and install redux-promise to handle the asynchronous nature of the request itself

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LAPTOPDESKTOP';  // unique한 api key

// making the axios request, assign it to the variable request, and assign the request to the payload property of the action that we're returning
// because the request is being assigned to the payload property,
// the redux-promise middleware that we made use will automatically resolve this request for us whenever it sees this action come across
// by the time this action arrives in the reducer, the payload property will contain the response object from axios, which will have array of posts
export function fetchPosts(){
    // pass in the url that we're trying to make a get request to(in this case, redux blog API)
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
        .then(()=>callback());
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}