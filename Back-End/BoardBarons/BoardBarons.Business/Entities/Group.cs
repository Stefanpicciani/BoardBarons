namespace BoardBarons.Business.Entities
{
    public class Group : Entity
    {
        public string? Name { get; set; }
        //public DateTime DateEvent { get; set; }
        public Guid Region_Id { get; set; }
        public DateTime? Created_At { get; set; }
        public DateTime? Updated_At { get; set; }
        public DateTime? Desativated_At { get; set; }
        public Guid Media_Id { get; set; }



        public Media? Media { get; set; }
        public Region? Region { get; set; }
        public ICollection<User>? Users { get; set; }
        public ICollection<Event>? Events { get; set; }
    }
}