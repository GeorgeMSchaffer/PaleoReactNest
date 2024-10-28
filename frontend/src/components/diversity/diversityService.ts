import { TDiversity, TDiversityJSON, EnumRanks, IRequestParams } from "../../common/types";
const headers = {
  "Content-Type": "application/json",
};
export async function fetchDiversity(): Promise<TDiversity[]> {

    const response = await fetch("/api/occurrence/diversity/", {
      method: "GET",
      headers: headers,
    });
    const diversity = await response.json() as unknown as TDiversity[];
    console.log('Diversity:',diversity);
    return diversity as unknown as TDiversity[];
}

export const get = (id) => {
  return fetch(`/api/occurrence/diversity/${id}`, {
    method: "GET",
    headers: headers,
  });
};

//Get a list off occurrences of a given rank and interval
export const getDiversityByRankAndInterval=(
  intervalName: string,
  rank: EnumRanks,
  params:IRequestParams) =>
  {
    const {take, skip} = params;
    const _rank = rank.toLowerCase();
  return fetch(
    `/api/occurrence/interval/${intervalName}/${_rank}/interval?take=${take}&end=${skip}`,
    {
      method: "GET",
      headers: headers,
    }
  );
}

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
