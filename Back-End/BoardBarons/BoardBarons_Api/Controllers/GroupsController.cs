using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
//using BoardBarons.Api.Data;
using BoardBarons.Business.Entities;

namespace BoardBarons.Api.Controllers
{
    public class GroupsController : Controller
    {
        //private readonly BoardBaronsApiContext _context;

        //public GroupsController(BoardBaronsApiContext context)
        //{
        //    _context = context;
        //}

        //// GET: Groups
        //public async Task<IActionResult> Index()
        //{
        //      return _context.Group != null ? 
        //                  View(await _context.Group.ToListAsync()) :
        //                  Problem("Entity set 'BoardBaronsApiContext.Group'  is null.");
        //}

        //// GET: Groups/Details/5
        //public async Task<IActionResult> Details(Guid? id)
        //{
        //    if (id == null || _context.Group == null)
        //    {
        //        return NotFound();
        //    }

        //    var @group = await _context.Group
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (@group == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(@group);
        //}

        //// GET: Groups/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Groups/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("Name,DateEvent,Region_Id,Created_At,Updated_At,Desativated_At,Media_Id,Id")] Group @group)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        @group.Id = Guid.NewGuid();
        //        _context.Add(@group);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(@group);
        //}

        //// GET: Groups/Edit/5
        //public async Task<IActionResult> Edit(Guid? id)
        //{
        //    if (id == null || _context.Group == null)
        //    {
        //        return NotFound();
        //    }

        //    var @group = await _context.Group.FindAsync(id);
        //    if (@group == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(@group);
        //}

        //// POST: Groups/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(Guid id, [Bind("Name,DateEvent,Region_Id,Created_At,Updated_At,Desativated_At,Media_Id,Id")] Group @group)
        //{
        //    if (id != @group.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(@group);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!GroupExists(@group.Id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(@group);
        //}

        //// GET: Groups/Delete/5
        //public async Task<IActionResult> Delete(Guid? id)
        //{
        //    if (id == null || _context.Group == null)
        //    {
        //        return NotFound();
        //    }

        //    var @group = await _context.Group
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (@group == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(@group);
        //}

        //// POST: Groups/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(Guid id)
        //{
        //    if (_context.Group == null)
        //    {
        //        return Problem("Entity set 'BoardBaronsApiContext.Group'  is null.");
        //    }
        //    var @group = await _context.Group.FindAsync(id);
        //    if (@group != null)
        //    {
        //        _context.Group.Remove(@group);
        //    }
            
        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool GroupExists(Guid id)
        //{
        //  return (_context.Group?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
