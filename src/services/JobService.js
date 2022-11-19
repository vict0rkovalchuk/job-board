import { useHttp } from '../hooks/http.hook';

const useJobService = () => {
  const { loading, request, error, clearError } = useHttp();

  const ACCESS_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  const _apiBase = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data/?access_token=${ACCESS_TOKEN}`;

  // const _apiBase = `http://localhost:3000/jobs`;

  const getJobs = async () => {
    const res = await request(`${_apiBase}`);
    return res;
  };

  return {
    loading,
    error,
    getJobs,
    clearError
  };
};

export default useJobService;
