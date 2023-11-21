using System.Data.Common;

namespace BoardBarons.Business.Entities
{
    public class Region : Entity
    {
        public string? Name { get; set; }
        public Location? Location { get; set; }

        //public Guid Location_Id { get; set; }
    }
}