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
    }
}
