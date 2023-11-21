using BoardBarons.Business.Entities;
using BoardBarons.Business.Interfaces.IRepository;
using BoardBarons.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Data.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        protected readonly BoardBaronsContext Db;
        protected readonly DbSet<TEntity> DbSet;

        public Repository(BoardBaronsContext db)
        {
            Db = db;
            DbSet = db.Set<TEntity>();
        }


        public async Task<List<TEntity>> GetAllEntities()
        {
            return await DbSet.ToListAsync();
        }


        public virtual async Task<TEntity> GetEntityById(Guid id)
        {
            return await DbSet.FindAsync(id);
        }


        public async Task AddEntity(TEntity entity)
        {
            DbSet.Add(entity);
            await SaveChanges();
        }

        public async Task UpdateEntity(TEntity entity)
        {
            DbSet.Update(entity);
            await SaveChanges();
        }

        public virtual async Task RemoveEntity(Guid id)
        {
            DbSet.Remove(new TEntity { Id = id });
            await SaveChanges();
        }
              

        public async Task<int> SaveChanges()
        {
            return await Db.SaveChangesAsync();
        }


        public void Dispose()
        {
            Db?.Dispose();
        }

    }
}
