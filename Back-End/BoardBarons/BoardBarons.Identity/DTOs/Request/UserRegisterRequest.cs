using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Identity.DTOs.Request
{
    public class UserRegisterRequest
    {

        [Required(ErrorMessage = "O field {0} is required!")]
        [EmailAddress(ErrorMessage = "O field {0} is required!")]
        public string UserName { get; set; }

        //[Required(ErrorMessage = "O campo {0} é obrigatório")]
        //[EmailAddress(ErrorMessage = "O campo {0} é inválido")]
        //public string LastName { get; set; }

        [Required(ErrorMessage = "O field {0} is required!")]
        [EmailAddress(ErrorMessage = "O field {0} is required!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O field {0} is required!")]
        [StringLength(50, ErrorMessage = "Field {0} must be between {2} and {1} characters", MinimumLength = 6)]
        public string Password { get; set; }

        [Compare(nameof(Password), ErrorMessage = "Passwords must be the same")]
        public string PasswordConfirmation { get; set; }
    }
}
