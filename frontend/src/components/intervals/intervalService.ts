import {
  EnumEntityType,
  IQueryFilterField,
  TInterval,
  IntervalJSON,
  IPaginationSettings,
} from "../../common/types";
import { buildApiUrl, intervalsJSONToInterval } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};


export function fetchIntervals(
  filters: IQueryFilterField[],
  pagination: IPaginationSettings
): TInterval[] {
  console.log("🚀 ~ pagination:", pagination)
  let intervals: TInterval[] = [];
    const apiURL = buildApiUrl(EnumEntityType.Interval, filters, pagination);
    console.log("🚀 ~ apiURL:", apiURL);
    
    fetch(apiURL, {
      method: "GET",
      headers: headers,
    }).then((response) => response.json())
    .then((data) => {
      console.log('INTERVALS RESPONSE', data);
      intervals = data;
      return intervals;
    })
    .catch((error) => {
      console.error(error);
      //rethrow for display
      throw new Error("Error getting all intervals");
    })
    .finally(() => {
      console.log("🚀 ~ .finally ~ intervals:", intervals)
      return intervals;
    });

}

export const fatchDiversityByIntervalName = (intervalName) => {
  return fetch(`/api/interval/diversity/${intervalName}`, {
    method: "GET",
    headers: headers,
  })
};

export const fetchDiversity = () => {
  return fetch(`/api/interval/diversity`, {
    method: "GET",
    headers: headers,
  });

};



export const getAllIntervals = () => {
  return fetch(`/api/interval/`, {
    method: "GET",
    headers: headers,
  });
};

export const create = (data) => {
  return fetch("/api/intervals", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};

export const update = (id, data) => {
  return fetch(`/api/interval/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const remove = (id) => {
  return fetch(`/api/interval/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const removeAll = () => {
  return fetch(`/api/intervals`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const findByTitle = (title) => {
  return fetch(`/intervals?title=${title}`);
};

const TutorialService = {
  searchIntervals: fetchIntervals,
  getAllIntervals,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
