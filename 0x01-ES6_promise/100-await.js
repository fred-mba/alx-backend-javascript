import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let response = {};

  try {
    const photoResponse = await uploadPhoto();
    response.photo = photoResponse;

    const userResponse = await createUser();
    response.user = userResponse;
  } catch (error) {
    response = { photo: null, user: null };
  }

  return response;
}
