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

        public Group? Group { get; set; }
        public ICollection<User>? Users { get; set; }
    }
}
