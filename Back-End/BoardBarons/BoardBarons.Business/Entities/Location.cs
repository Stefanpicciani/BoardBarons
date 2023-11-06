namespace BoardBarons.Business.Entities
{
    public class Location : Entity
    {
        public string? Name { get; set; }
        public string? State { get; set; }
        public string? City { get; set; }
        public string? Neighborhood { get; set; }
    }
}