import { ApiConstant, AppConstant, EnvConstant } from "@root/constant";
import cookies from "js-cookie";

type CustomOptions = RequestInit & {
  baseUrl?: string;
};

class HttpError extends Error {
  result: number;
  payload: any;
  constructor({ result, payload }: { result: number; payload: any }) {
    super("http error");
    this.result = result;
    this.payload = payload;
  }
}

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions
) => {
  const body = options?.body
    ? options.body instanceof FormData
      ? options.body
      : JSON.stringify(options.body)
    : undefined;

  const baseUrl =
    options?.baseUrl === undefined
      ? EnvConstant.NEXT_PUBLIC_MAIN_URL
      : options.baseUrl;

  let headers: HeadersInit | undefined = {
    ...ApiConstant.HEADER_DEFAULT,
    ...options?.headers,
  };

  const token = cookies.get(AppConstant.ACCESS_TOKEN);

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
  if (options?.body instanceof FormData) {
    headers = undefined;
    delete options.headers;
  }

  const res = await fetch(`${baseUrl}${url}`, {
    cache: "no-cache",
    ...options,
    headers,
    body,
    method,
  });

  const payload: Response = await res.json();

  if (res.status >= ApiConstant.STT_INTERNAL_SERVER) {
    const data = {
      result: res.status,
      payload,
    };
    throw new HttpError(data);
  }
  return payload;
};

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> & { params?: { [x: string]: any } }
  ) {
    let newUrl: any = url;
    const newParams = new URLSearchParams();
    if (options?.params) {
      for (let key in options.params) {
        const valueParams = options.params[key];

        if (
          valueParams === undefined ||
          Number.isNaN(valueParams) ||
          (Array.isArray(valueParams) && valueParams.length === 0)
        ) {
          delete options.params[key];
        } else if (Array.isArray(valueParams)) {
          valueParams.map((item) => {
            newParams.append(key, item);
          });
        } else {
          newParams.append(key, valueParams);
        }
      }

      newUrl = newUrl + "?" + newParams.toString();
    }

    return request<Response>("GET", newUrl, options);
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body">
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, "body">) {
    return request<Response>("PUT", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body">
  ) {
    return request<Response>("DELETE", url, { ...options, body });
  },
};

export default http;
