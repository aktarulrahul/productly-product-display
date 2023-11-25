import instance from '../config/axios';

export const getProducts = async () => {
  try {
    const response = await instance.get(`/products`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
