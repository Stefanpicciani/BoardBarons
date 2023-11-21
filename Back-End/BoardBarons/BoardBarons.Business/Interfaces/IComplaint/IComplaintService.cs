using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;

namespace BoardBarons.Business.Interfaces.IComplaint
{
    public interface IComplaintService : IRepository<Complaint>, IDisposable
    {
        Task AddComplaint(Complaint complaint);

        Task EditComplaint(Complaint complaint);

        Task DeleteComplaint(Guid complaintId);
    }
}
