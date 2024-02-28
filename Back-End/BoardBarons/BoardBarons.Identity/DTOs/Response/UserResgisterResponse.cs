using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Identity.DTOs.Response
{
    public class UserResgisterResponse
    {
        public bool Sucess { get; private set; }

        public List<string> Errors { get; private set; }

        public UserResgisterResponse() =>
            Errors = new List<string>();

        public UserResgisterResponse(bool sucess = true) : this() =>
            Sucess = sucess;
        
        public void AddErrors(IEnumerable<string> errors) =>
            Errors.AddRange(errors);
    }
}
