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

        public  DbSet<Complaint> Complaints { get; set; }
        public  DbSet<ComplaintType> ComplaintType { get; set; }
        public  DbSet<ComplaintState> ComplaintState { get; set; }
        public  DbSet<Event> Event { get; set; }
        public  DbSet<Event_Confirmed> Event_Confirmed { get; set; }
        public  DbSet<Group> Group { get; set; }
        public  DbSet<Groups_With_Users> Groups_With_Users { get; set; }
        public  DbSet<Location> Location { get; set; }
        public  DbSet<Media> Media { get; set; }
        public  DbSet<Region> Region { get; set; }
        public  DbSet<User> User { get; set; }
        public  DbSet<UserState> UserState { get; set; }
    }
}
