using BoardBarons.Business.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardBarons.Business.IRepository
{
    public interface IRepository<TEntity> : IDisposable where TEntity : Entity
    {
        Task<TEntity> GetEntityById(Guid id);

        Task<List<TEntity>> GetAllEntities();

        Task AddEntity(TEntity entity);

        Task UpdateEntity(TEntity entity);

        Task RemoveEntity(Guid id);

        Task<int> SaveChanges();
    }
}
