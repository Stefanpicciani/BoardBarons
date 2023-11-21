

using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;

namespace BoardBarons.Business.Interfaces.IEvent
{
    public interface IEventService : IRepository<Event>, IDisposable
    {
    }
}
