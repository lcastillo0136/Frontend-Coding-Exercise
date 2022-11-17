export interface Response<T> {
  status: string;
  "message-type": string;
  "message-version": string;
  "message": ResponseMessage<T>;
}

export interface ResponseMessage<T> {
  "facets"?: any;
  "total-results": number;
  "items": T[];
  "items-per-page": number;
  "query": {
    "start-index": number;
    "search-terms": any;
  };
}