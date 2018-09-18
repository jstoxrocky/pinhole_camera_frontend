import axios from 'axios';
import { HttpResponse } from './types';

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

export const create = (pinholeDiameter: number): Promise<HttpResponse> => (
  api.post(`/`, { pinhole_diameter: pinholeDiameter })
);
