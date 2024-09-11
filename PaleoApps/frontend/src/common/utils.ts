import {
  Diversity,
  DiversityJSON,
  EnumEntityType,
  IFilterField,
  Interval,
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
          cladeClass: o.clade_class,
          cladeOrder: o.clade_order,
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
      cladeClass: o.clade_class,
      cladeOrder: o.clade_order,
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
export async function fetchDiversity(params?: {}): Promise<Diversity[]> {
  let diversity: Diversity[] = [];
  fetch("/diversity/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data: DiversityJSON[]) => {
      data.map((p: DiversityJSON) => {
        diversity = diversityJSONToDiversity(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  return diversity;
}
export function diversityJSONToDiversity(
  diversityJSON: DiversityJSON[]
): Diversity[] {
  const diversity: Diversity[] = [];
  diversityJSON.map((p: DiversityJSON) => {
    const record = {
      intervalNo: p.interval_no,
      intervalName: p.interval_name,
      maxMya: p.max_mya,
      minMya: p.min_mya,
      xBL: p.x_bL,
      xFt: p.x_Ft,
      xFL: p.x_FL,
      xBt: p.x_Bt,
      sampledInBin: p.sampled_in_bin,
      impliedInBin: p.implied_in_Bin,
      numOccurances: p.num_occs,
    } as Diversity;
    diversity.push(record);
  });
  return diversity;
}
export function fetchPrevalence(): Prevalence[] {
  let prevalence: Prevalence[] = [];
  console.log("fetching prevalence data");
  const response = fetch("/prevalence/", {
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

export function fetchIntervals(): Interval[] {
  let intervals: Interval[] = [];
  fetch("/intervals", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
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
): Interval[] {
  const intervals: Interval[] = [];
  intervalsJSON.map((interval: IntervalJSON) => {
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
    } as Interval;
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
  intervals: Interval[]
): Interval[] {
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
  filters: IFilterField[],
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
  const { page, perPage, sortBy } = pagination;
  //  const start = (page * perPage);
  var start = page * perPage;
  var end = page * perPage + perPage;

  let url = `/api/${entity}/?_start=${start}&_end=${end}&`;
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
