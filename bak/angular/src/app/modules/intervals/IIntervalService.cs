using System.Collections.Generic;
using System.Threading.Tasks;

//namespace angular.src.app.modules.intervals
{
    public interface IIntervalService
    {
        Task<IEnumerable<Interval>> GetIntervalsAsync();
        Task<Interval> GetIntervalByIdAsync(int id);
        Task AddIntervalAsync(Interval interval);
        Task UpdateIntervalAsync(Interval interval);
        Task DeleteIntervalAsync(int id);
    }
}
