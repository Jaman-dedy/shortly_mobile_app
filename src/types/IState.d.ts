interface State {
  error: {[key: string]: any} | any;
  loading: boolean;
  message: string;
  result: {[key: string]: any} | [] | any;
  meta?: Record<string, string | number>;
  success: boolean;
}

export default State;
