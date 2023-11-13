using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BoardBarons.Business.Entities;

namespace BoardBarons.Api.Data
{
    public class BoardBaronsApiContext : DbContext
    {
        public BoardBaronsApiContext (DbContextOptions<BoardBaronsApiContext> options)
            : base(options)
        {
        }

        public DbSet<BoardBarons.Business.Entities.Complaint> Complaint { get; set; } = default!;
    }
}
