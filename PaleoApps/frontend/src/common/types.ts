export enum EnumIntervalType {
  eon = "eon",
  era = "era",
  period = "period",
  epoch = "epoch",
  age = "age",
  int = "int",
}

export enum EnumDomains {
  EUKARYA = "Eukarya",
  BACTERIA = "Bacteria",
  ARCHAEA = "Archaea",
}

export enum EnumKingdoms {
  ANIMALIA = "Animalia",
  PLANTAE = "Plantae",
  FUNGI = "Fungi",
  PROTISTA = "Protista",
  MONERA = "Monera",
}

export enum EnumClades {
  Domain = "Domain",
  Kingdom = "KingdoM",
  Pylum = "Pyhylum",
  Class = "Class",
  Order = "Order",
  Family = "Family",
  Genus = "Genus",
  Species = "Species",
}
export enum EnumPhylums {
  CHORDATA = "Chordata",
  ARTHROPODA = "Arthropoda",
  MOLLUSCA = "Mollusca",
  ECHINODERMATA = "Echinodermata",
  CNIDARIA = "Cnidaria",
  PORIFERA = "Porifera",
  PLANTAE = "Plantae",
  FUNGI = "Fungi",
  PROTISTA = "Protista",
  MONERA = "Monera",
}

export enum EnumClade {
  Mammalia = "Mammalia",
  Aves = "Aves",
  Reptilia = "Reptilia",
  Amphibia = "Amphibia",
  Pisces = "Pisces",
  Insecta = "Insecta",
  Arachnida = "Arachnida",
  Crustacea = "Crustacea",
  Annelida = "Annelida",
  Chordata = "Chordata",
  Arthropoda = "Arthropoda",
  Mollusca = "Mollusca",
  Echinodermata = "Echinodermata",
  Cnidaria = "Cnidaria",
  Porifera = "Porifera",
  Platyhelminthes = "Platyhelminthes",
  Nematoda = "Nematoda",
}

export enum EnumEntityType {
  Occurrence = "occurrences",
  Taxa = "taxa",
  Prevalence = "prevalence",
  Diversity = "diversity",
  Interval = "intervals",
}

export interface IAppSettings {
  pagination: IPaginationSettings;
}

export interface IPaginationSettings {
  page: number;
  perPage: number;
  sortBy: string;
  sortOrder: string;
}

export interface Prevalence {
  taxonNo: number;
  taxonName: string;
  taxonRank: string;
  imageNo: number;
  numOccurances: number;
}

export interface PrevalenceJSON {
  taxon_no: number;
  taxon_name: string;
  taxon_rank: string;
  image_no: number;
  num_occurances: number;
}

export interface Diversity {
  intervalNo: number;
  intervalName: string;
  maxMya: number;
  minMya: number;
  xFt: number;
  xBL: number;
  xFL: number;
  xBt: number;
  sampledInBin: number;
  impliedInBin: number;
  numOccurances: number;
}

export interface DiversityJSON {
  interval_no: number;
  interval_name: string;
  max_mya: number;
  min_mya: number;
  x_Ft: number;
  x_bL: number;
  x_FL: number;
  x_Bt: number;
  sampled_in_bin: number;
  implied_in_Bin: number;
  num_occs: number;
}
export interface Taxa {
  taxonNo: number;
  recordType: string;
  taxonRank: string;
  taxonName: string;
  taxonAttr: string;
  acceptedNo: number;
  acceptedRank: string;
  acceptedName: string;
  parentNo: number;
  referenceNo: number;
  isExtant: string;
  numOccurances: number;
}
export interface TaxaJSON {
  taxon_no: number;
  record_type: string;
  taxon_rank: string;
  taxon_name: string;
  taxon_attr: string;
  accepted_no: number;
  accepted_rank: string;
  accepted_name: string;
  parent_no: number;
  reference_no: number;
  is_extant: string;
  n_occs: number;
}
export interface Occurrence {
  occurrenceNo: number;
  recordType: string;
  collectionNo: number;
  identifiedName: string;
  identifiedRank: string;
  identifiedNo: number;
  acceptedName: string;
  acceptedRank: string;
  acceptedNo: number;
  earlyInterval: string;
  lateInterval: string;
  maxMya: number;
  minMya: number;
  referenceNo: number;
  cc: string;
  latlngBasis: string;
  latlngPrecision: number;
  geogscale: string;
  phylum: EnumPhylums;
  cladeClass: string;
  cladeOrder: "Cetacea";
  family: "NO_FAMILY_SPECIFIED";
  genus: string;
}

//Currently this overlaps with the Occurance JSON interface, so it's worth revisiting if this is needed
export enum EnumOccuranceFilterFields {
  occurrence_no = "occurrence_no",
  record_type = "record_type",
  collection_no = "collection_no",
  identified_name = "identified_name",
  identified_rank = "identified_rank",
  identified_no = "identified_no",
  accepted_name = "accepted_name",
  accepted_rank = "accepted_rank",
  accepted_no = "accepted_no",
  early_interval = "early_interval",
  late_interval = "late_interval",
  max_my = "max_mya",
  min_mya = "min_mya",
  reference_no = "reference_no",
  cc = "cc",
  latlng_basis = "latlng_basis",
  latlng_precision = "latlng_precision",
  geogscale = "geogscale",
  phylum = "phylum",
  order = "clade_class",
  class = "clade_order",
  family = "family",
  genus = "genus",
}
export enum EnumIntervalFilterFields {
  interval_no = "interval_no",
  record_type = "record_type",
  interval_name = "interval_name",
  abbrv = "abbrv",
  parent_no = "parent_no",
  color = "color",
  tAge = "t_age",
  bAge = "b_age",
  reference_no = "reference_no",
}

export interface OccurrenceJSON {
  occurrence_no: number;
  record_type: string;
  collection_no: number;
  identified_name: string;
  identified_rank: string;
  identified_no: number;
  accepted_name: string;
  accepted_rank: string;
  accepted_no: number;
  early_interval: string;
  late_interval: string;
  max_mya: number;
  min_mya: number;
  reference_no: number;
  cc: string;
  latlng_basis: string;
  latlng_precision: number;
  geogscale: string;
  phylum: EnumPhylums;
  clade_class: string;
  clade_order: string;
  family: string;
  genus: string;
}
export interface Interval {
  intervalNo: number;
  recordType: EnumIntervalType;
  intervalName: string;
  abbrv: string;
  parentNo: number;
  color: string;
  tAge: number;
  bAge: number;
  referenceNo: number;
}
export interface IntervalJSON {
  interval_no: number;
  record_type: EnumIntervalType;
  interval_name: string;
  abbrv: string;
  parent_no: number;
  color: string;
  t_age: number;
  b_age: number;
  reference_no: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
interface ChartDataItem {
  category: string;
  value: number;
}
export enum EnumMessageType {
  INFO,
  WARNING,
  ERROR,
}

export interface IMessage {
  message: string;
  type: EnumMessageType;
}
export interface IError extends IMessage {
  code: number;
  statckTrace?: string;
}

export interface IFilterField {
  field: string;
  value: string;
  operator: string;
  type?: string;
  label?: string;
}

export interface IOccurancesFilterField extends IFilterField {
  field: EnumOccuranceFilterFields;
}
export interface IIntervalsFilterField extends IFilterField {
  field: IntervalJSON;
}
