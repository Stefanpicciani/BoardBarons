using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Complaint : Entity
    {
        public string? Key { get; set; }
        public Guid Complaint_Type_Id { get; set; }
        public string? Reported_User_Id  { get; set; }
        public string? Accuser_User_Id { get; set; }
        public string? Message { get; set; }

        public virtual ComplaintType? ComplaintType { get; set; }
    }
}
