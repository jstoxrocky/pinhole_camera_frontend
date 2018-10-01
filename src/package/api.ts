import axios from 'axios';

const baseURL = 'http://192.168.99.100:5000/cameras/';
const withCredentials = true;
const api = axios.create({
  withCredentials,
  baseURL,
});

export const index = () => (
  api.get('/')
);

export const show = (id: number) => (
  api.get(`/${id}`)
);

export const create = (pinholeDiameter: number) => (
  api.post(`/`, { pinhole_diameter: pinholeDiameter })
);

export const clear = (id: number) => (
  api.delete(`/${id}`)
);
