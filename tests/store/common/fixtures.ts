import { IApplicationState } from '../../../src/store/common/types';

export const FInitialState: IApplicationState = {
  camera: {
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
  },
};
