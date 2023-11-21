using BoardBarons.Business.Entities;

namespace BoardBarons.Business.Interfaces.IComplaint
{
    public interface IComplaintService : IDisposable
    {
        Task AddComplaint(Complaint complaint);

        Task EditComplaint(Complaint complaint);

        Task DeleteComplaint(Guid complaintId);
    }
}
