using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Identity.DTOs.Request
{
    public class UserLoginRequest
    {
        [Required(ErrorMessage = "O field {0} is required!")]
        [EmailAddress(ErrorMessage = "O field {0} is required!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O field {0} is required!")]
        public string Password { get; set; }
    }
}
