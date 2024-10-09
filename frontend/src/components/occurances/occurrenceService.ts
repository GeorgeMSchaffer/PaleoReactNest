import {
  EnumEntityType,
  IFilterField,
  IPaginationSettings,
  Occurrence,
  OccurrenceJSON,
} from "../../common/types";
import { buildApiUrl, occurrencesJSONToOccurrences } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};

export async function searchOccurrances(
  filters: IFilterField[],
  pagination: IPaginationSettings
): Promise<Occurrence[]> {
  console.log("🚀 ~ params:", pagination);
  let occurrences: Occurrence[] = [];
  try {
    const apiURL = buildApiUrl(EnumEntityType.Occurrence, filters, pagination);
    const response = await fetch(apiURL, {
      ...pagination,
      method: "GET",
      headers: headers,
    }); // as unknown as OccurrenceJSON[];
    const data: OccurrenceJSON[] =
      (await (response.json() as unknown as OccurrenceJSON[])) || [];

    occurrences = occurrencesJSONToOccurrences(data);
  } catch (error) {
    console.error(error);
    //rethrow for display
    throw new Error("Error getting all occurrences");
  }
  // make sure to catch any error
  console.log("🚀 ~ getAll ~ occurrences:", occurrences);
  return occurrences;
}
export const getAllOccurances = async (params: IPaginationSettings) => {
  let occurrences: Occurrence[] = [];
  try {
    const response = await fetch(`/api/occurrence/`, {
      method: "GET",
      headers: headers,
      ...params,
    });
    const data: OccurrenceJSON[] =
      (await (response.json() as unknown as OccurrenceJSON[])) || [];
    occurrences = occurrencesJSONToOccurrences(data);
  } catch (err) {
    console.error("Failed to retrive all occurances.ERROR:", err);
    throw err;
  } finally {
    return occurrences;
  }
};
export const getOccuranceByID = (id, params: IPaginationSettings) => {
  return fetch(`/api/occurrence/${id}`, {
    method: "GET",
    headers: headers,
    ...params,
  });
};

export const create = (data, params: IPaginationSettings) => {
  return fetch("/api/occurrence/?_start=10&_end=20", {
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
