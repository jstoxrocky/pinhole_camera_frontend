import axios from 'axios';
import { HttpResponse } from '../common/types';

const baseURL = 'http://localhost:3000/cameras/';
const withCredentials = true;
const api = axios.create({
  withCredentials,
  baseURL,
});

export const index = (): Promise<HttpResponse> => (
  api.get('/')
);

export const show = (id: number): Promise<HttpResponse> => (
  api.get(`/${id}`)
);

// tslint:disable-next-line: variable-name
export const create = (pinhole_diameter: number): Promise<HttpResponse> => (
  api.post(`/`, { pinhole_diameter })
);

// export default () => ({
//   type: 'GET_ARCADE_STATE',
//   payload: show(1)
// });
