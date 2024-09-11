import {
  EnumEntityType,
  IFilterField,
  IPaginationSettings,
  Taxa,
  TaxaJSON,
} from "../../common/types";
import { buildApiUrl, TaxaJSONToTaxa } from "../../common/utils";
const headers = {
  "Content-Type": "application/json",
};

//[TODO] [REFACTOR]  A lot of these can be unified into a single service and just pass the entity type as a parameter
export async function searchTaxa(
  filters: IFilterField[],
  pagination: IPaginationSettings
): Promise<Taxa[]> {
  let taxa: Taxa[] = [];
  try {
    const apiURL = buildApiUrl(EnumEntityType.Taxa, filters, pagination);
    console.log("🚀 ~ apiURL:", apiURL);
    const response = await fetch(apiURL, {
      method: "GET",
      headers: headers,
    }); // as unknown as TaxaJSON[];
    const data: TaxaJSON[] =
      (await (response.json() as unknown as TaxaJSON[])) || [];

    taxa = TaxaJSONToTaxa(data);
  } catch (error) {
    console.error(error);
    //rethrow for display
    throw new Error("Error getting all taxa");
  }
  // make sure to catch any error
  console.log("🚀 ~ getAll ~ taxa:", taxa);
  return taxa;
}

export const get = (id) => {
  return fetch(`/api/taxa/${id}`, {
    method: "GET",
    headers: headers,
  });
};

export const create = (data) => {
  return fetch("/api/taxa", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};

export const update = (id, data) => {
  return fetch(`/api/taxa/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const remove = (id) => {
  return fetch(`/api/taxa/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const removeAll = () => {
  return fetch(`/api/taxa`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};

export const findByTitle = (title) => {
  return fetch(`/taxa?title=${title}`);
};

const TutorialService = {
  searchTaxa,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
