using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Event : Entity
    {
        public string? Name { get; set; }
        public DateTime DateEvent { get; set; }
        public string? Created_At { get; set; }
        public string? Updated_At { get; set; }
        public string? Desativated_At { get; set; }
        public Guid? Group_Id { get; set; }
        public Guid Media_Id { get; set; }



        public virtual Media? Media { get; set; }
        public virtual Group? Group { get; set; }
        public virtual ICollection<User>? Users { get; set; }
    }
}
