//* constants
import { endpoint } from "../constants/endpoint";
import apiKey from "../constants/endpoint-with-api-key";
import resourcesPerPage from "../constants/number-resources-per-page";

//* interfaces
import FilterParamsType from "../interfaces/filter-params-type";

const generateEndpoint = (queries: FilterParamsType, type: string) => {
  let urlApi = `${endpoint}/${type}?${apiKey}&limit=${resourcesPerPage}`;

  for (const query in queries) {
    if (queries[query as keyof FilterParamsType]?.value) {
      urlApi = `${urlApi}&${
        queries[query as keyof FilterParamsType]?.query_param
      }=${queries[query as keyof FilterParamsType]?.value}`;
    }
  }
  return urlApi;
};

export default generateEndpoint;
