using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BoardBarons.Identity.DTOs.Response
{
    public class UserLoginResponse
    {
        public bool Success => Errors.Count == 0;

        public List<string> Errors { get; private set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AccessToken { get; private set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RefreshToken { get; private set; }

        public UserLoginResponse() =>
            Errors = new List<string>();

        public UserLoginResponse(bool success, string accessToken, string refreshToken) : this ()
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
        }

        public void AddError(string erro) =>
            Errors.Add(erro);

        public void AddErrors(IEnumerable<string> errors) =>
            Errors.AddRange(errors);
    }
}
