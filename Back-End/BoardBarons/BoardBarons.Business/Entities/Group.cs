namespace BoardBarons.Business.Entities
{
    public class Group : Entity
    {
        public string? Name { get; set; }
        public DateTime DateEvent { get; set; }
        public Guid Region_Id { get; set; }
        public string? Created_At { get; set; }
        public string? Updated_At { get; set; }
        public string? Desativated_At { get; set; }
        public Guid Media_Id { get; set; }



        public virtual Media? Media { get; set; }
        public virtual Region? Region { get; set; }
        public virtual ICollection<User>? Users { get; set; }
        public virtual ICollection<Event>? Events { get; set; }
    }
}