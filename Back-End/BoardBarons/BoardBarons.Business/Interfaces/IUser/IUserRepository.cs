using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Interfaces.IUser
{
    public interface IUserRepository : IRepository<User>
    {
    }
}
