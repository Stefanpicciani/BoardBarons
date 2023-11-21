using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;

namespace BoardBarons.Business.Interfaces.IEvent
{
    public interface IEventRepository : IRepository<Event>
    {
    }
}
