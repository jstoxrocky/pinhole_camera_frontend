export interface ISpecs {
  id: number;
  pinhole_diameter: number;
  focal_length: number;
  image_width: number;
  distortion: number;
  pinhole_to_image_angle: number;
  created_at: string;
  updated_at: string;
}

export interface ICameraState {
  specs: ISpecs[];
}

export const enum CameraActionTypes {
  GET_CAMERAS = 'GET_CAMERAS',
  GET_CAMERAS_PENDING = 'GET_CAMERAS_PENDING',
  GET_CAMERAS_FULFILLED = 'GET_CAMERAS_FULFILLED',
  GET_CAMERAS_REJECTED = 'GET_CAMERAS_REJECTED',
  SHOW_CAMERA = 'SHOW_CAMERA',
  SHOW_CAMERA_PENDING = 'SHOW_CAMERA_PENDING',
  SHOW_CAMERA_FULFILLED = 'SHOW_CAMERA_FULFILLED',
  SHOW_CAMERA_REJECTED = 'SHOW_CAMERA_REJECTED',
  CREATE_CAMERA = 'CREATE_CAMERA',
  CREATE_CAMERA_PENDING = 'CREATE_CAMERA_PENDING',
  CREATE_CAMERA_FULFILLED = 'CREATE_CAMERA_FULFILLED',
  CREATE_CAMERA_REJECTED = 'CREATE_CAMERA_REJECTED',
}
