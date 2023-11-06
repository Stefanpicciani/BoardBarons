using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Media : Entity
    {
        public string? User_Id{ get; set; }
        public string? Name { get; set; }
        public MediaType  Media_Type { get; set; }
    }
}
