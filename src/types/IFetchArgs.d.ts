export interface FetchArgs {
  method: 'GET' | 'POST';
  url: string;
  baseUrl?: string;
  data?: any;
  params?: {[key: string]: string | number | boolean};
  bodyType?: 'json';
  resType?: 'json';
  token?: string;
  options?: {[key: string]: string | number | boolean};
  headers?: {[key: string]: string | number};
  cache?: string;
}

export default FetchArgs;
