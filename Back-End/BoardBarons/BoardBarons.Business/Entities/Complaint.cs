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
        public DateTime CreatedAt { get; set; }
        public DateTime ActivedAt { get; set; }
        public DateTime DesActivedAt { get; set; }
        public string? Reported_User_Id  { get; set; }
        public string? Accuser_User_Id { get; set; }
        public string? Message { get; set; }


        public ComplaintState? ComplaintState { get; set; }
        public User? User_Reported { get; set; }
        public User? User_Accuser { get; set; }
        public ComplaintType? ComplaintType { get; set; }
    }
}
