import client from '../../external/http/client';

export const axiosConfig = async (compufacilHeader: string) => {
  client.defaults.headers.common['Authorization-Compufacil'] = compufacilHeader;
};
