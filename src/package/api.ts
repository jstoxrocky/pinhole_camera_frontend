import axios from 'axios';
import { IHttpResponse } from './types';

const baseURL = 'http://localhost:5000/cameras/';
const withCredentials = true;
const api = axios.create({
  withCredentials,
  baseURL,
});

export const index = (): Promise<IHttpResponse> => (
  api.get('/')
);

export const show = (id: number) => (
  api.get<IHttpResponse>(`/${id}`)
);

export const create = (pinholeDiameter: number): Promise<IHttpResponse> => (
  api.post(`/`, { pinhole_diameter: pinholeDiameter })
);
