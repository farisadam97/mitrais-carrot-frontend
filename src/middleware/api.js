const api = (store) => (next) => async (action) => {
  if (action.type !== "apiRequest") return next(action);

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9901/api",
      url,
      method,
      data,
    });

    store.dispatch(apiProductsRequestSucceeded({ lists: response.data }));
  } catch (error) {
    store.dispatch(apiProductsRequestFailed(error));
  }
};
export default api;
