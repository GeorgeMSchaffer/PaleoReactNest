import {
  EnumEntityType,
  IQueryFilterField,
  IPaginationSettings,
  Occurrence,
  OccurrenceJSON,
} from "../../common/types";
import { buildApiUrl, occurrencesJSONToOccurrences } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};

export function fetchOccurrances(
  filters: IQueryFilterField[],
  pagination: IPaginationSettings
): Occurrence[] {
  console.log("🚀 ~ params:", pagination);
  let occurrences: Occurrence[] = [];
    const apiURL = buildApiUrl(EnumEntityType.Occurrence, filters, pagination);
    fetch(apiURL, {
      ...pagination,
      method: "GET",
      headers: headers,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ .then ~ data:", data)
      occurrences = data as unknown as Occurrence[];
      return occurrences;
    })
    .catch((error) => {
      console.error(error);
      throw new Error("Error getting all occurrences");
    });
    
    console.log("🚀 ~ occurrences:", occurrences)
    return occurrences;
  }

   
export const getOccuranceByID = (id, params: IPaginationSettings) => {
  return fetch(`/api/occurrence/${id}`, {
    method: "GET",
    headers: headers,
    ...params,
  });
};


export const create = (data, params: IPaginationSettings) => {
  return fetch("/api/occurrence/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    ...params,
  });
};

export const update = (id, data, params: IPaginationSettings) => {
  return fetch(`/api/occurrence/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
    ...params,
  });
};

export const remove = (id, params: IPaginationSettings) => {
  return fetch(`/api/occurrence/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
    ...params,
  });
};

export const removeAll = (params = {}) => {
  return fetch(`/api/occurrences`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
    ...params,
  });
};

export const findByTitle = (title, params: IPaginationSettings) => {
  return fetch(`/occurrences?title=${title}`);
};
