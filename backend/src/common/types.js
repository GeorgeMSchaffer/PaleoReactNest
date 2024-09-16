"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMessageType = exports.EnumIntervalFilterFields = exports.EnumOccuranceFilterFields = exports.EnumEntityType = exports.EnumClade = exports.EnumPhylums = exports.EnumClades = exports.EnumKingdoms = exports.EnumDomains = exports.EnumIntervalType = void 0;
//[TODO] If the project grows, we can split this file into multiple files
var EnumIntervalType;
(function (EnumIntervalType) {
    EnumIntervalType["EON"] = "Eon";
    EnumIntervalType["ERA"] = "Era";
    EnumIntervalType["PERIOD"] = "Period";
    EnumIntervalType["EPOCH"] = "Epoch";
    EnumIntervalType["AGE"] = "Age";
})(EnumIntervalType || (exports.EnumIntervalType = EnumIntervalType = {}));
(function (EnumIntervalType) {
    EnumIntervalType["eon"] = "eon";
    EnumIntervalType["era"] = "era";
    EnumIntervalType["period"] = "period";
    EnumIntervalType["epoch"] = "epoch";
    EnumIntervalType["age"] = "age";
    EnumIntervalType["int"] = "int";
})(EnumIntervalType || (exports.EnumIntervalType = EnumIntervalType = {}));
var EnumDomains;
(function (EnumDomains) {
    EnumDomains["EUKARYA"] = "Eukarya";
    EnumDomains["BACTERIA"] = "Bacteria";
    EnumDomains["ARCHAEA"] = "Archaea";
})(EnumDomains || (exports.EnumDomains = EnumDomains = {}));
var EnumKingdoms;
(function (EnumKingdoms) {
    EnumKingdoms["ANIMALIA"] = "Animalia";
    EnumKingdoms["PLANTAE"] = "Plantae";
    EnumKingdoms["FUNGI"] = "Fungi";
    EnumKingdoms["PROTISTA"] = "Protista";
    EnumKingdoms["MONERA"] = "Monera";
})(EnumKingdoms || (exports.EnumKingdoms = EnumKingdoms = {}));
var EnumClades;
(function (EnumClades) {
    EnumClades["Domain"] = "Domain";
    EnumClades["Kingdom"] = "KingdoM";
    EnumClades["Pylum"] = "Pyhylum";
    EnumClades["Class"] = "Class";
    EnumClades["Order"] = "Order";
    EnumClades["Family"] = "Family";
    EnumClades["Genus"] = "Genus";
    EnumClades["Species"] = "Species";
})(EnumClades || (exports.EnumClades = EnumClades = {}));
var EnumPhylums;
(function (EnumPhylums) {
    EnumPhylums["CHORDATA"] = "Chordata";
    EnumPhylums["ARTHROPODA"] = "Arthropoda";
    EnumPhylums["MOLLUSCA"] = "Mollusca";
    EnumPhylums["ECHINODERMATA"] = "Echinodermata";
    EnumPhylums["CNIDARIA"] = "Cnidaria";
    EnumPhylums["PORIFERA"] = "Porifera";
    EnumPhylums["PLANTAE"] = "Plantae";
    EnumPhylums["FUNGI"] = "Fungi";
    EnumPhylums["PROTISTA"] = "Protista";
    EnumPhylums["MONERA"] = "Monera";
})(EnumPhylums || (exports.EnumPhylums = EnumPhylums = {}));
var EnumClade;
(function (EnumClade) {
    EnumClade["Mammalia"] = "Mammalia";
    EnumClade["Aves"] = "Aves";
    EnumClade["Reptilia"] = "Reptilia";
    EnumClade["Amphibia"] = "Amphibia";
    EnumClade["Pisces"] = "Pisces";
    EnumClade["Insecta"] = "Insecta";
    EnumClade["Arachnida"] = "Arachnida";
    EnumClade["Crustacea"] = "Crustacea";
    EnumClade["Annelida"] = "Annelida";
    EnumClade["Chordata"] = "Chordata";
    EnumClade["Arthropoda"] = "Arthropoda";
    EnumClade["Mollusca"] = "Mollusca";
    EnumClade["Echinodermata"] = "Echinodermata";
    EnumClade["Cnidaria"] = "Cnidaria";
    EnumClade["Porifera"] = "Porifera";
    EnumClade["Platyhelminthes"] = "Platyhelminthes";
    EnumClade["Nematoda"] = "Nematoda";
})(EnumClade || (exports.EnumClade = EnumClade = {}));
var EnumEntityType;
(function (EnumEntityType) {
    EnumEntityType["Occurrence"] = "occurrences";
    EnumEntityType["Taxa"] = "taxa";
    EnumEntityType["Prevalence"] = "prevalence";
    EnumEntityType["Diversity"] = "diversity";
    EnumEntityType["Interval"] = "intervals";
})(EnumEntityType || (exports.EnumEntityType = EnumEntityType = {}));
//Currently this overlaps with the Occurance JSON interface, so it's worth revisiting if this is needed
var EnumOccuranceFilterFields;
(function (EnumOccuranceFilterFields) {
    EnumOccuranceFilterFields["occurrence_no"] = "occurrence_no";
    EnumOccuranceFilterFields["record_type"] = "record_type";
    EnumOccuranceFilterFields["collection_no"] = "collection_no";
    EnumOccuranceFilterFields["identified_name"] = "identified_name";
    EnumOccuranceFilterFields["identified_rank"] = "identified_rank";
    EnumOccuranceFilterFields["identified_no"] = "identified_no";
    EnumOccuranceFilterFields["accepted_name"] = "accepted_name";
    EnumOccuranceFilterFields["accepted_rank"] = "accepted_rank";
    EnumOccuranceFilterFields["accepted_no"] = "accepted_no";
    EnumOccuranceFilterFields["early_interval"] = "early_interval";
    EnumOccuranceFilterFields["late_interval"] = "late_interval";
    EnumOccuranceFilterFields["max_my"] = "max_mya";
    EnumOccuranceFilterFields["min_mya"] = "min_mya";
    EnumOccuranceFilterFields["reference_no"] = "reference_no";
    EnumOccuranceFilterFields["cc"] = "cc";
    EnumOccuranceFilterFields["latlng_basis"] = "latlng_basis";
    EnumOccuranceFilterFields["latlng_precision"] = "latlng_precision";
    EnumOccuranceFilterFields["geogscale"] = "geogscale";
    EnumOccuranceFilterFields["phylum"] = "phylum";
    EnumOccuranceFilterFields["order"] = "clade_class";
    EnumOccuranceFilterFields["class"] = "clade_order";
    EnumOccuranceFilterFields["family"] = "family";
    EnumOccuranceFilterFields["genus"] = "genus";
})(EnumOccuranceFilterFields || (exports.EnumOccuranceFilterFields = EnumOccuranceFilterFields = {}));
var EnumIntervalFilterFields;
(function (EnumIntervalFilterFields) {
    EnumIntervalFilterFields["interval_no"] = "interval_no";
    EnumIntervalFilterFields["record_type"] = "record_type";
    EnumIntervalFilterFields["interval_name"] = "interval_name";
    EnumIntervalFilterFields["abbrv"] = "abbrv";
    EnumIntervalFilterFields["parent_no"] = "parent_no";
    EnumIntervalFilterFields["color"] = "color";
    EnumIntervalFilterFields["tAge"] = "t_age";
    EnumIntervalFilterFields["bAge"] = "b_age";
    EnumIntervalFilterFields["reference_no"] = "reference_no";
})(EnumIntervalFilterFields || (exports.EnumIntervalFilterFields = EnumIntervalFilterFields = {}));
var EnumMessageType;
(function (EnumMessageType) {
    EnumMessageType[EnumMessageType["INFO"] = 0] = "INFO";
    EnumMessageType[EnumMessageType["WARNING"] = 1] = "WARNING";
    EnumMessageType[EnumMessageType["ERROR"] = 2] = "ERROR";
})(EnumMessageType || (exports.EnumMessageType = EnumMessageType = {}));
