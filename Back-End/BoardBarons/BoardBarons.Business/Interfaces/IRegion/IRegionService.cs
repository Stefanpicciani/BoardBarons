
using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;

namespace BoardBarons.Business.Interfaces.IRegion
{
    public interface IRegionService : IRepository<Region>, IDisposable
    {
    }
}
