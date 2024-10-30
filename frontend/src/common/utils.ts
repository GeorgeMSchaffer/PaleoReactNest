import {
  TDiversity,
  TDiversityJSON,
  EnumEntityType,
  IQueryFilterField,
  TInterval,
  IntervalJSON,
  IPaginationSettings,
  Occurrence,
  OccurrenceJSON,
  Prevalence,
  PrevalenceJSON,
  Taxa,
  TaxaJSON,
} from "./types";
export function getEnumKeys<
  T extends string,
  TEnumValue extends string | number
>(enumVariable: { [key in T]: TEnumValue }) {
  return Object.keys(enumVariable) as Array<T>;
}

export function fetchOccurrences(): Occurrence[] {
  const occurances: Occurrence[] = [];
  fetch("/occurances/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data: OccurrenceJSON[]) => {
      console.log(data);
      data.map((o: OccurrenceJSON) => {
        const occurance = {
          occurrenceNo: o.occurrence_no,
          recordType: o.record_type,
          collectionNo: o.collection_no,
          identifiedName: o.identified_name,
          identifiedRank: o.identified_rank,
          identifiedNo: o.identified_no,
          acceptedName: o.accepted_name,
          acceptedRank: o.accepted_rank,
          acceptedNo: o.accepted_no,
          earlyInterval: o.early_interval,
          lateInterval: o.late_interval,
          maxMya: o.max_mya,
          minMya: o.min_mya,
          referenceNo: o.reference_no,
          cc: o.cc,
          latlngBasis: o.latlng_basis,
          latlngPrecision: o.latlng_precision,
          geogscale: o.geogscale,
          phylum: o.phylum,
          class: o.class,
          order: o.order,
          family: o.family,
          genus: o.genus,
        } as Occurrence;
        occurances.push(occurance);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  return occurances;
}
export function occurrencesJSONToOccurrences(
  occurrencesJSON: OccurrenceJSON[]
): Occurrence[] {
  const occurrences: Occurrence[] = [];
  occurrencesJSON.map((o: OccurrenceJSON) => {
    const occurance = {
      occurrenceNo: o.occurrence_no,
      recordType: o.record_type,
      collectionNo: o.collection_no,
      identifiedName: o.identified_name,
      identifiedRank: o.identified_rank,
      identifiedNo: o.identified_no,
      acceptedName: o.accepted_name,
      acceptedRank: o.accepted_rank,
      acceptedNo: o.accepted_no,
      earlyInterval: o.early_interval,
      lateInterval: o.late_interval,
      maxMya: o.max_mya,
      minMya: o.min_mya,
      referenceNo: o.reference_no,
      cc: o.cc,
      latlngBasis: o.latlng_basis,
      latlngPrecision: o.latlng_precision,
      geogscale: o.geogscale,
      phylum: o.phylum,
      class: o.class,
      order: o.order,
      family: o.family,
      genus: o.genus,
    } as Occurrence;
    occurrences.push(occurance);
  });
  return occurrences;
}
export function fetchTaxa(): Taxa[] {
  const taxas: Taxa[] = [];

  fetch("/taxa/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data: TaxaJSON[]) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  //[TODO] Should build a util function that take the Entity and it's JSON and handle the mapping on well... maps

  return taxas;
}
export function TaxaJSONToTaxa(taxaJSON: TaxaJSON[]): Taxa[] {
  const taxas: Taxa[] = [];
  taxaJSON.map((t: TaxaJSON) => {
    const taxa = {
      taxonNo: t.taxon_no,
      recordType: t.record_type,
      taxonRank: t.taxon_rank,
      taxonName: t.taxon_name,
      taxonAttr: t.taxon_attr,
      acceptedNo: t.accepted_no,
      acceptedRank: t.accepted_rank,
      acceptedName: t.accepted_name,
      parentNo: t.parent_no,
      referenceNo: t.reference_no,
      isExtant: t.is_extant,
      numOccurances: t.n_occs,
    } as Taxa;
    taxas.push(taxa);
  });
  return taxas;
}
export async function fetchDiversity(params?: {}): Promise<TDiversity[]> {
  let diversity: TDiversity[] = [];
  fetch("/diversity/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data: TDiversityJSON[]) => {
      data.map((p: TDiversityJSON) => {
        diversity = diversityJSONToDiversity(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  return diversity;
}
export function fetchPrevalence(): Prevalence[] {
  let prevalence: Prevalence[] = [];
  console.log("fetching prevalence data");
  const response = fetch("/prevalence /", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data: PrevalenceJSON[]) => {
      console.log(data);

      prevalence = prevalenceToPrevalenceJSON(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      return prevalence;
    });

  return prevalence;
  
}

export function prevalenceToPrevalenceJSON(
  json: PrevalenceJSON[]
): Prevalence[] {
  const prevalence: Prevalence[] = [];
  json.map((p: PrevalenceJSON) => {
    const record = {
      taxonNo: p.taxon_no,
      taxonName: p.taxon_name,
      taxonRank: p.taxon_rank,
      imageNo: p.image_no,
      numOccurances: p.num_occurances,
    } as Prevalence;
    prevalence.push(record);
  });
  return prevalence;
}

export function fetchIntervals(): TInterval[] {
  let intervals: TInterval[] = [];
  fetch("/interval", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      console.log("🚀 ~ .then ~ response:", response)
      if (!response.ok) {
        throw new Error(
          `Could not fetch intervals a network error occurred ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data: IntervalJSON[]) => {
      console.log(data);
      intervals = intervalsJSONToInterval(data);
    })
    .catch((error) => {
      console.error(error);
      throw new Error(`Failed to fetch intervals - ${error.message}`);
    });
  console.log("fetchIntervals returning", intervals);
  return intervals;
}
export function intervalsJSONToInterval(
  intervalsJSON: IntervalJSON[]
): TInterval[] {
  console.log("🚀 ~ intervalsJSON:", intervalsJSON)
  const intervals: TInterval[] = [];
  
  
  intervalsJSON?.length && intervalsJSON.map((interval: IntervalJSON) => {
    const _interval = {
      intervalNo: interval.interval_no,
      recordType: interval.record_type,
      intervalName: interval.interval_name,
      abbrv: interval.abbrv,
      parentNo: interval.parent_no,
      color: interval.color,
      tAge: interval.t_age,
      bAge: interval.b_age,
      referenceNo: interval.reference_no,
    } as TInterval;
    intervals.push(_interval);
  });
  return intervals;
}

export function filterIntervalsByIntervalName(intervalName, intervals) {
  const filteredIntervals = intervals.filter((interval) => {
    return interval.intervalName.toUpperCase().includes(intervalName);
  });
  console.log("🚀 ~ filteredIntervals ~ filteredIntervals:", filteredIntervals);
  return filteredIntervals;
}

export function filterIntervalsByMya(
  minMya: number,
  maxMya: number,
  intervals: TInterval[]
): TInterval[] {
  const filteredIntervals = intervals.filter((interval) => {
    return interval.tAge >= minMya && interval.bAge <= maxMya;
  });
  return filteredIntervals;
}

export function filterOccurancesByGenus(
  genus: string,
  occurances: Occurrence[]
): Occurrence[] {
  const filtered = occurances.filter((occ) => {
    if (!occ.genus) {
      return false;
    }
    return occ.genus.includes(genus);
  });
  return filtered;
}

export const buildApiUrl = (
  entity: EnumEntityType,
  filters: IQueryFilterField[],
  pagination: IPaginationSettings
): string => {
  const valueMap = {};
  console.log(
    `🚀 ~ buildApiUrl ~ filters`,
    filters,
    "pagination",
    pagination,
    "entity",
    entity
  );
  //Done so multiple filter settings such filter by interval_name "XYZ" OR interval_name is "ABC" translates to early_interval=XYZ&early_interval=ABC
  filters &&
    filters.map((filter) => {
      if (!filter.field || !filter.value) {
        return;
      }
      if (valueMap[filter.field]) {
        valueMap[filter.field].push(filter.value);
      } else {
        valueMap[filter.field] = [filter.value];
      }
    });
  const filterKeys = Object.keys(valueMap);

  console.log("🚀 ~ entity:", entity);
  const { take, skip, orderBy,orderDir } = pagination;
  //  const start = (page * perPage);

  //if there is no sortby we omit it 
  var orderClause = (orderBy) ? `&orderBy=${orderBy}&orderDir=${orderDir}` : '';

  let url = `/api/${entity}/?take=${take}&skip=${skip}${orderClause}`;
  filters.map((filter) => {
    url += `record_type${filter.operator}${filter.value}&`;
    //[TODO] add filter.operator vs static equals
  });
  // for (const filter of filters) {
  //   url += `${filter.field}${filter.operator}${filter.value}&`;
  // }
  console.log("🚀 ~ buildApiUrl ~ url", url);
  return url;
};
