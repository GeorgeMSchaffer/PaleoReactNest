import { Diversity, DiversityJSON } from "../../common/types";
const headers = {
  "Content-Type": "application/json",
};
export async function fetchDiversity(): Promise<Diversity[]> {

    const response = await fetch("/api/occurrence/diversity/", {
      method: "GET",
      headers: headers,
    });
    const diversity = await response.json() as unknown as Diversity[];
    console.log('Diversity:',diversity);
    return diversity as unknown as Diversity[];
}

export const get = (id) => {
  return fetch(`/api/occurrence/diversity/${id}`, {
    method: "GET",
    headers: headers,
  });
};

export const create = (data) => {
  return fetch("/api/occurrence/diversity", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};

export const update = (id, data) => {
  return fetch(`/api/occurrence/diversity/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const remove = (id) => {
  return fetch(`/api/occurrence/diversity/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const removeAll = () => {
  return fetch(`/api/occurrence/diversity`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const findByTitle = (title) => {
  return fetch(`/api/occurrence/diversity?title=${title}`);
};

const TutorialService = {
  fetchDiversity,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
