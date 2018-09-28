import { IFulfilledHTTPAction } from '../../../src/store/common/types';
import { ICameraState, ISpecs } from '../../../src/store/camera/types';

export const blankAction: IFulfilledHTTPAction = {
  type: '',
  payload: {
    data: {},
  },
};

export const FSpecs: ISpecs[] = [
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

export const FInitialState: ICameraState = {
  specs: [
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
  selectCamera: 0,
};
