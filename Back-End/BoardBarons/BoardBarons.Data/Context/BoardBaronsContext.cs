using BoardBarons.Business.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Data.Context
{
    public  class BoardBaronsContext : DbContext
    {
        public BoardBaronsContext(DbContextOptions<BoardBaronsContext> options) : base(options) 
        {                        
        }

        public virtual DbSet<Complaint> Complaints { get; set; }
        public virtual DbSet<ComplaintType> ComplaintType { get; set; }
        public virtual DbSet<Event> Event { get; set; }
        public virtual DbSet<Event_Confirmed> Event_Confirmed { get; set; }
        public virtual DbSet<Group> Group { get; set; }
        public virtual DbSet<Groups_With_Users> GetGroups_With_Users { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<Media> Media { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserState> UserState { get; set; }
    }
}
