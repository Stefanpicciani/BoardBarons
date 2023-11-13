using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Users_Status
    {
        public Guid User_Id {  get; set; }
        public UserState User_State { get; set;}
    }
}
