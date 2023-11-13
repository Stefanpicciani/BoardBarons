using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BoardBarons.Api.Data;
using BoardBarons.Business.Entities;

namespace BoardBarons.Api.Controllers
{
    public class ComplaintsController : Controller
    {
        private readonly BoardBaronsApiContext _context;

        public ComplaintsController(BoardBaronsApiContext context)
        {
            _context = context;
        }

        // GET: Complaints
        public async Task<IActionResult> Index()
        {
              return _context.Complaint != null ? 
                          View(await _context.Complaint.ToListAsync()) :
                          Problem("Entity set 'BoardBaronsApiContext.Complaint'  is null.");
        }

        // GET: Complaints/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null || _context.Complaint == null)
            {
                return NotFound();
            }

            var complaint = await _context.Complaint
                .FirstOrDefaultAsync(m => m.Id == id);
            if (complaint == null)
            {
                return NotFound();
            }

            return View(complaint);
        }

        // GET: Complaints/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Complaints/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Key,Complaint_Type_Id,Reported_User_Id,Accuser_User_Id,Message,Id")] Complaint complaint)
        {
            if (ModelState.IsValid)
            {
                complaint.Id = Guid.NewGuid();
                _context.Add(complaint);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(complaint);
        }

        // GET: Complaints/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null || _context.Complaint == null)
            {
                return NotFound();
            }

            var complaint = await _context.Complaint.FindAsync(id);
            if (complaint == null)
            {
                return NotFound();
            }
            return View(complaint);
        }

        // POST: Complaints/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Key,Complaint_Type_Id,Reported_User_Id,Accuser_User_Id,Message,Id")] Complaint complaint)
        {
            if (id != complaint.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(complaint);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ComplaintExists(complaint.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(complaint);
        }

        // GET: Complaints/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null || _context.Complaint == null)
            {
                return NotFound();
            }

            var complaint = await _context.Complaint
                .FirstOrDefaultAsync(m => m.Id == id);
            if (complaint == null)
            {
                return NotFound();
            }

            return View(complaint);
        }

        // POST: Complaints/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            if (_context.Complaint == null)
            {
                return Problem("Entity set 'BoardBaronsApiContext.Complaint'  is null.");
            }
            var complaint = await _context.Complaint.FindAsync(id);
            if (complaint != null)
            {
                _context.Complaint.Remove(complaint);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ComplaintExists(Guid id)
        {
          return (_context.Complaint?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
