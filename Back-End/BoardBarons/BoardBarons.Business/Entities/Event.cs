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
        public DateTime? Created_At { get; set; }
        public DateTime? Updated_At { get; set; }
        public DateTime? Desativated_At { get; set; }
        public Guid? Group_Id { get; set; }
        public Guid Media_Id { get; set; }



        public Media? Media { get; set; }
        public Group? Group { get; set; }
        public ICollection<User>? Users { get; set; }
    }
}
