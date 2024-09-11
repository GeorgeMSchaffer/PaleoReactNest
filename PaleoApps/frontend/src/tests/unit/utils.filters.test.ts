import { describe, expect, it } from "vitest";
import {
  EnumIntervalType,
  Interval,
  IntervalJSON,
  Occurrence,
  OccurrenceJSON,
} from "../../common/types";
import {
  filterIntervalsByMya,
  intervalsJSONToInterval,
  occurrencesJSONToOccurrences,
} from "../../common/utils";
import _intervals from "../data/intervals.json";
import _occurances from "../data/occurances.json";

describe("filterIntervalsByMya", () => {
  it("should return intervals within the specified age range", () => {
    console.log("DATA", _intervals);
    const intervals = intervalsJSONToInterval(
      _intervals.intervals as unknown as IntervalJSON[]
    );
    const filteredIntervals = filterIntervalsByMya(65, 252, intervals);
    expect(filteredIntervals).toHaveLength(1);
    expect(filteredIntervals[0]).toEqual({ tAge: 65, bAge: 252 });
  });

  it("should return an empty array if no intervals match the age range", () => {
    const intervals = intervalsJSONToInterval(
      _intervals.intervals as unknown as IntervalJSON[]
    );
    // Assuming there are no intervals within the age range 40 to 50
    const filteredIntervals = filterIntervalsByMya(40, 50, intervals);
    expect(filteredIntervals).toHaveLength(0);
  });

  it("should filter intervals by interval type", () => {
    const intervals = intervalsJSONToInterval(
      _intervals.intervals as unknown as IntervalJSON[]
    );
    const intervalType = EnumIntervalType.AGE;
    // Assuming there are no intervals within the age range 40 to 50
    const filtered = intervals.filter((interval: Interval) => {
      return interval.recordType === intervalType;
    });
    console.log(
      `Found ${filtered.length} intervals of type ${intervalType} from ${intervals.length} records`
    );
    expect(filtered.length).toBeGreaterThan(0);
  });

  it("should filter using interval keys", () => {
    const intervals = intervalsJSONToInterval(
      _intervals.intervals as unknown as IntervalJSON[]
    );
    const filtered = filterIntervalsByFilterKey(
      "recordType",
      EnumIntervalType.INTERVAL,
      intervals
    );
    console.log(
      `Found ${filtered.length} intervals of type ${EnumIntervalType.INTERVAL} from ${intervals.length} records`
    );
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered[0].recordType).toBe(EnumIntervalType.INTERVAL);
    expect(filtered.length).toBeLessThan(intervals.length);
  });

  it("should filter on a valid interval Name", () => {
    const intervals = intervalsJSONToInterval(
      _intervals.intervals as unknown as IntervalJSON[]
    );
    console.log("Trying to filter intervals by interval name");
    const intervalList = [];
    const counts = {};

    console.log("Interval", counts);
    //intervalList.push(interval.intervalName);
    // Assuming there are no intervals within the age range 40 to 50

    // const filteredIntervals = filterIntervalsByIntervalName(
    //   "Early Devonian",
    //   intervals
    // );
    const filteredIntervals = filterIntervalsByFilterKey(
      "intervalName",
      "Early Devonian",
      intervals
    );
    console.log(
      `Found ${filteredIntervals.length} intervals for ${"Early Devonian"}`
    );
    expect(filteredIntervals.length).toBeGreaterThan(0);
    expect(filteredIntervals[0].intervalName).toBe("Early Devonian");
  });
});

it("Should filter occurances by valid genera", () => {
  const occurances = occurrencesJSONToOccurrences(
    _occurances.occurances as unknown as OccurrenceJSON[]
  );
  const genus = "Thinocetus";
  const unfilteredCount = occurances.length;
  const counts = {};

  const filtered = filterOccurancesByFilterKey("genus", genus, occurances);
  console.log(`Found ${filtered.length} matches for genus ${genus}`);
  //    return occ.genus === "Sachalinocetus";
  expect(filtered.length).toBeGreaterThan(0);
  expect(occurances.length).toBeGreaterThan(filtered.length);
});

it("Should filter occurances by valid clade", () => {
  const occurances: Occurrence[] = occurrencesJSONToOccurrences(
    _occurances.occurances as unknown as OccurrenceJSON[]
  );
  const cladeClass = "Mammalia";
  const unfilteredCount = occurances.length;
  const counts = {};
  const temp: Occurrence[] = [];
  //   occurances.map((occ: Occurrence) => {
  //     temp.push(occ);
  //   });
  //   const filtered = occurances.filter(
  //     (occ: Occurrence) => occ.cladeClass === clade
  //   );
  const x = occurances.filter((occ: Occurrence) => {
    occ.cladeClass === cladeClass;
  });
  console.log("X", x);
  const filtered = filterOccurancesByFilterKey(
    "cladeClass",
    cladeClass,
    occurances
  );

  console.log(`Found ${filtered.length} matches for genus ${cladeClass}`);
  //    return occ.genus === "Sachalinocetus";
  expect(filtered.length).toBeGreaterThan(0);
  expect(occurances.length).toBeGreaterThan(filtered.length);
});

function filterIntervalsByFilterKey(
  filterKey: string,
  filterValue,
  intervals: Interval[]
): Interval[] {
  const filtered = intervals.filter((interval: Interval) => {
    console.log(
      `Filtering by ${filterKey} and ${filterValue} of type`,
      intervals
    );
    if (!interval.hasOwnProperty(filterKey)) {
      return false;
    }
    const val = interval[filterKey];
    console.log(
      `val: ${val.toUpperCase} vs filterValue: ${filterValue.toUpperCase}`
    );
    return val.toUpperCase() === filterValue.toUpperCase();
  });

  return filtered;
}

function filterOccurancesByFilterKey(
  filterKey: string,
  filterValue,
  occurances: Occurrence[]
): Occurrence[] {
  Object.keys(occurances[0]).map((key: string) => {
    console.log(`key: ${key} and ${occurances[key]}`);
  });
  console.log(occurances[0]);

  return occurances.filter((occurance: Occurrence) => {
    if (!occurance.hasOwnProperty(filterKey)) {
      return false;
    }
    const val = occurances[filterKey];
    if (!val) {
      return false;
    }
    console.log(`val: ${val} vs filterValue: ${filterValue}`);
    return val.toUpperCase() === filterValue.toUpperCase();
  });
}
