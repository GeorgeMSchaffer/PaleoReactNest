import { IRequestParams } from "./types";
export function buildRequestParams(query){
    const params: IRequestParams = {
      take: query?.take || 10,
      skip: query?.skip || 0,
      orderBy: query?.orderBy || 'occurrenceNo',
      orderDir: query?.orderDir || 'DESC',
      queryParams: {

      },
    }
      const filterKeys = Object.keys(query);
      console.log("🚀 ~ SpeciesController ~ findAll ~ filterKeys:", filterKeys)
      if(filterKeys.length){
        filterKeys.forEach(key => {
          //Ignore pagination and sorting params
          if(key === "take" || key === "skip" || key === "orderBy" || key === "orderDir"){
            return;
          }
          const filterValue = query.queryParams[key]
          //[TODO] checking the entity for a valid field via hasOwnProperty does not work with the entity objects so we need to find a way to validate the keys

          if(filterValue?.length ) {
            query.andWhere(`${key} LIKE :${key}`, {[key]: `%${filterValue}%`})
          }
        })
      }
      return params; 
}