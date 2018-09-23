export interface Camera {
  id: number;
  pinhole_diameter: number;
  focal_length: number;
  image_width: number;
  distortion: number;
  pinhole_to_image_angle: number;
  created_at: string;
  updated_at: string;
}

export interface CameraState {
  get: Camera[];
  show: Camera;
}

export const enum CameraActionTypes {
  GET_CAMERAS = 'GET_CAMERAS',
  SHOW_CAMERA = 'SHOW_CAMERA',
  CREATE_CAMERA = 'CREATE_CAMERA',
}
