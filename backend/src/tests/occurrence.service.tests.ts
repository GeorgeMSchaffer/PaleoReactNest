import { OccurrenceService } from 'src/occurrence/occurrence.service';
import { EnumRanks } from 'src/common/types'; // Adjust the import path as necessary
import { IntervalService } from 'src/interval/interval.service';

describe('OccurrenceService', () => {
  let service: OccurrenceService;
  let repo: { find: jest.Mock };

  beforeEach(() => {
    repo = { find: jest.fn() };
    service = new OccurrenceService(repo as any,new IntervalService(repo as any));
  });

  it('should call repo.find with correct parameters', async () => {
    const intervalName = 'Induan';
    const rank = EnumRanks.SPECIES;

    await service.getDiversityByRankAndInterval(intervalName, rank);

    expect(repo.find).toHaveBeenCalledWith({
      where: [
        { earlyInterval: intervalName },
        { acceptedRank: rank },
      ],
    });
  });

  it('should handle different intervalName and rank values', async () => {
    const intervalName = 'Olenekian';
    const rank = EnumRanks.GENUS;

    await service.getDiversityByRankAndInterval(intervalName, rank);

    expect(repo.find).toHaveBeenCalledWith({
      where: [
        { earlyInterval: intervalName },
        { acceptedRank: rank },
      ],
    });
  });

  it('Get the correct results from the DB',async()=>{
    const intervalName = 'Induan';
    const rank = EnumRanks.SPECIES;
    const expectedResults = [{ earlyInterval: intervalName, acceptedRank: rank, diversity: 0.5 }];
    repo.find.mockResolvedValue(expectedResults);

    const result = await service.getDiversityByRankAndInterval(intervalName, rank);

    expect(result).toEqual(expectedResults);
  })

  // Add more test cases as needed
});