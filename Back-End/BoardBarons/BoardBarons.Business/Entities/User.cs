using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class User : Entity
    {
       public string? UserName { get; set; }
       public string? NormalizedUserName { get; set; }
       public string? Email {  get; set; }
       public string? NormalizedEmail { get; set; }
       public bool EmailConfirmed { get; set; }
       public string? PasswordHash { get; set; }
       public string? SecurityStamp { get; set; }
       public string? ConcurrencyStamp { get; set; }
       public string? PhoneNumber { get; set; }
       public bool PhoneNumberConfirmed { get; set; }
       public string? Created_At {  get; set; }
       public string? Desativated_At {  get; set; }
       public string? Updated_At {  get; set; }
       public bool? TwoFactorEnabled { get; set; }
       public DateTime? LockoutEnd {  get; set; }
       public bool? LockoutEnabled { get; set; }
       public int AccessFailedCount {  get; set; }
       public Guid Region_Id {  get; set; }

       public virtual Region? Region { get; set;}
    }
}
