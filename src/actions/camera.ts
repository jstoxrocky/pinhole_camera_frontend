import axios from 'axios';

const baseURL = 'http://localhost:3000/cameras/';
const withCredentials = true;
const api = axios.create({ 
  withCredentials,
  baseURL,
  headers: {
    Authorization: "Basic YWRtaW46bHVveGlueGlhbjkx",
  },
});

export const index = () => (
  api.get('/')
)

export const show = (id: number) => (
  api.get(`/${id}`)
)

export const create = (pinhole_diameter: number) => (
  api.post(`/`, { pinhole_diameter })
)

// export default () => ({
//   type: 'GET_ARCADE_STATE',
//   payload: show(1)
// });
