﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.Entities
{
    public class Entity
    {
        public Guid Id { get; set; } 

        protected Entity()
        {
            Id = Guid.NewGuid();
        }
    }
}
