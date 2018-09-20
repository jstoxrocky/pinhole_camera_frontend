export const blankAction = {
  type: '',
  payload: {},
};

export const cameras = [
  {
    id: 1,
    pinhole_diameter: 1.1,
    focal_length: 1.2,
    image_width: 1.3,
    distortion: 1.4,
    pinhole_to_image_angle: 1.5,
    created_at: '1.6',
    updated_at: '1.7',
  },
  {
    id: 2,
    pinhole_diameter: 2.1,
    focal_length: 2.2,
    image_width: 2.3,
    distortion: 2.4,
    pinhole_to_image_angle: 2.5,
    created_at: '2.6',
    updated_at: '2.7',
  },
];

export const camera = {
  id: 1,
  pinhole_diameter: 1.1,
  focal_length: 1.2,
  image_width: 1.3,
  distortion: 1.4,
  pinhole_to_image_angle: 1.5,
  created_at: '1.6',
  updated_at: '1.7',
};

export const initialState = {
  cameras: [
    {
      id: 0,
      pinhole_diameter: 0,
      focal_length: 0,
      image_width: 0,
      distortion: 0,
      pinhole_to_image_angle: 0,
      created_at: '',
      updated_at: '',
    },
  ],
  camera: {
    id: 0,
    pinhole_diameter: 0,
    focal_length: 0,
    image_width: 0,
    distortion: 0,
    pinhole_to_image_angle: 0,
    created_at: '',
    updated_at: '',
  },
};
