using BoardBarons.Business.Interfaces.IComplaint;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Services.Complaint
{
    public class ComplaintService : IComplaintService, IComplaintRepository
    {
        private readonly IComplaintRepository _complaintRepository;
        private readonly IComplaintService _complaintService;

        public ComplaintService(IComplaintService complaintService, IComplaintRepository complaintRepository)
        {
            _complaintRepository = complaintRepository;
            _complaintService = complaintService;
        }


        public Task AddComplaint(Entities.Complaint complaint)
        {
            throw new NotImplementedException();
        }

        public Task AddEntity(Entities.Complaint entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteComplaint(Guid complaintId)
        {
            throw new NotImplementedException();
        }


        public Task EditComplaint(Entities.Complaint complaint)
        {
            throw new NotImplementedException();
        }

        public Task<List<Entities.Complaint>> GetAllEntities()
        {
            throw new NotImplementedException();
        }

        public Task<Entities.Complaint> GetEntityById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task RemoveEntity(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Task UpdateEntity(Entities.Complaint entity)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            _complaintService.Dispose();
            _complaintRepository.Dispose();
        }
    }
}
