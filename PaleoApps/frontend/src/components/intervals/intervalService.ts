import {
  EnumEntityType,
  IFilterField,
  Interval,
  IntervalJSON,
  IPaginationSettings,
} from "../../common/types";
import { buildApiUrl, intervalsJSONToInterval } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};
export async function searchIntervals(
  filters: IFilterField[],
  pagination: IPaginationSettings
): Promise<Interval[]> {
  let intervals: Interval[] = [];
  try {
    const apiURL = buildApiUrl(EnumEntityType.Interval, filters, pagination);
    console.log("🚀 ~ apiURL:", apiURL);
    const response = await fetch(apiURL, {
      method: "GET",
      headers: headers,
    }); // as unknown as IntervalJSON[];
    const data: IntervalJSON[] =
      (await (response.json() as unknown as IntervalJSON[])) || [];

    intervals = intervalsJSONToInterval(data);
  } catch (error) {
    console.error(error);
    //rethrow for display
    throw new Error("Error getting all intervals");
  }
  // make sure to catch any error
  console.log("🚀 ~ getAll ~ intervals:", intervals);
  return intervals;
}

export const get = (id) => {
  return fetch(`/api/intervals/${id}`, {
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
  return fetch(`/api/intervals/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const remove = (id) => {
  return fetch(`/api/intervals/${id}`, {
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
  getAll: searchIntervals,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
