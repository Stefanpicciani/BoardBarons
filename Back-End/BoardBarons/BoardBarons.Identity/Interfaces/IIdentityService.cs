using BoardBarons.Identity.DTOs.Request;
using BoardBarons.Identity.DTOs.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Identity.Interfaces
{
    public interface IIdentityService
    {
        Task<UserResgisterResponse> UserRegisterRequest(UserRegisterRequest userRequest);
        Task<UserLoginResponse> UserLoginRequest(UserLoginRequest userLoginRequest);
        Task<UserLoginResponse> UserLoginWithoutPassword(string userId);
    }
}
