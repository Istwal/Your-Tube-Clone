import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000/` });

// Attach token to every request if user is logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
  }
  return req;
});

// User Auth & Channel
export const login = (authdata) => API.post("/user/login", authdata);
export const updatechaneldata = (id, updatedata) => API.patch(`/user/update/${id}`, updatedata);
export const fetchallchannel = () => API.get("/user/getallchannel");

// Video
export const uploadvideo = (filedata, fileoption) => API.post("/video/uploadvideo", filedata, fileoption);
export const getvideos = () => API.get("/video/getvideos");
export const likevideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewsvideo = (id) => API.patch(`/video/view/${id}`);

// Comment
export const postcomment = (commentdata) => API.post("/comment", commentdata);
export const deletecomment = (id) => API.delete(`/comment/${id}`);
export const editcomment = (id, commentbody) => API.patch(`/comment/${id}`, { commentbody });
export const getallcomment = () => API.get('/comment');
export const getcomment = (videoid) => API.get(`/comment/${videoid}`); // 🔥 Specific comments for a video

// History
export const addtohistory = (historydata) => API.post("/video/history", historydata);
export const getallhistory = () => API.get('/video/getallhistory');
export const deletehistory = (userid) => API.delete(`/video/deletehistory/${userid}`);

// Like
export const addtolikevideo = (likedvideodata) => API.post('/video/likevideo', likedvideodata);
export const getalllikedvideo = () => API.get('/video/getalllikevide');
export const deletelikedvideo = (videoid, viewer) => API.delete(`/video/deletelikevideo/${videoid}/${viewer}`);

// Watch Later
export const addtowatchlater = (watchlaterdata) => API.post('/video/watchlater', watchlaterdata);
export const getallwatchlater = () => API.get('/video/getallwatchlater');
export const deletewatchlater = (videoid, viewer) => API.delete(`/video/deletewatchlater/${videoid}/${viewer}`);
