using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Event_Confirmed 
    {
        public Guid User_Id { get; set; }
        public Guid Event_Id { get; set; }
        public bool IsConfirmed { get; set; }

        public virtual Event? Event { get; set; }
        public virtual User? User { get; set; }
    }
}
