using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Groups_With_Users
    {
        public Guid Group_Id { get; set; }
        public Guid User_Id { get; set; }

        public virtual  Group? Group { get; set; }
        public virtual ICollection<User>? Users { get; set; }
    }
}
