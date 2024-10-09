import { Diversity, DiversityJSON } from "../../common/types";
import { diversityJSONToDiversity } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};
export async function getAll(): Promise<Diversity[]> {
  let diversity: Diversity[] = [];
  try {
    const response = await fetch("/api/diversity/", {
      method: "GET",
      headers: headers,
    }); // as unknown as DiversityJSON[];
    const data: DiversityJSON[] =
      (await (response.json() as unknown as DiversityJSON[])) || [];

    diversity = diversityJSONToDiversity(data);
  } catch (error) {
    console.error(error);
    //rethrow for display
    throw new Error("Error getting all diversitys");
  }
  // make sure to catch any error
  console.log("🚀 ~ getAll ~ diversitys:", diversity);
  return diversity;
}

export const get = (id) => {
  return fetch(`/api/diversity/${id}`, {
    method: "GET",
    headers: headers,
  });
};

export const create = (data) => {
  return fetch("/api/diversity", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};

export const update = (id, data) => {
  return fetch(`/api/diversity/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const remove = (id) => {
  return fetch(`/api/diversity/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const removeAll = () => {
  return fetch(`/api/diversity`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const findByTitle = (title) => {
  return fetch(`/diversity?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
