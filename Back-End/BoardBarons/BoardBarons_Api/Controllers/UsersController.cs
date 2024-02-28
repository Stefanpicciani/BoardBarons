using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
//using BoardBarons.Api.Data;
using BoardBarons.Business.Entities;
using System.Security.Principal;
using BoardBarons.Identity.Interfaces;
using BoardBarons.Api.Controllers.Shared;
using BoardBarons.Identity.DTOs.Request;
using BoardBarons.Identity.DTOs.Response;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace BoardBarons.Api.Controllers
{
    public class UsersController : ApiControllerBase
    {
        private readonly IIdentityService _identityService;

        public UsersController(IIdentityService identityService) => _identityService = identityService;


        [HttpPost]
        [ActionName("register")]
        public async Task<IActionResult> Register(UserRegisterRequest userRegisterRequest)
        {
            if(!ModelState.IsValid) return BadRequest();

            var result = await _identityService.UserRegisterRequest(userRegisterRequest);

            if (result.Sucess) return Ok(result);

            else if(result.Errors.Count > 0)
            {
                // var problemDetails = new CustomProblemDetails(HttpStatusCode.BadRequest, Request, errors: result.Errors);
                //return BadRequest(problemDetails);
            }

            return StatusCode(StatusCodes.Status500InternalServerError);
        }


        [HttpPost]
        [ActionName("login")]
        public async Task<ActionResult<UserLoginResponse>> Login(UserLoginRequest userLoginRequest)
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _identityService.UserLoginRequest(userLoginRequest);

            if(result.Success) return Ok(result);

            return Unauthorized();
        }

        [Authorize]
        [HttpPost]
        [ActionName("refresh_token")]
        public async Task<ActionResult<UserResgisterResponse>> RefreshLogin()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            var userId = identity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId == null) return BadRequest();

            var result = await _identityService.UserLoginWithoutPassword(userId);

            if (result.Success) return Ok(result);

            return Unauthorized();
        }






        //private readonly BoardBaronsApiContext _context;

        //public UsersController(BoardBaronsApiContext context)
        //{
        //    _context = context;
        //}

        //// GET: Users
        //public async Task<IActionResult> Index()
        //{
        //      return _context.User != null ? 
        //                  View(await _context.User.ToListAsync()) :
        //                  Problem("Entity set 'BoardBaronsApiContext.User'  is null.");
        //}

        //// GET: Users/Details/5
        //public async Task<IActionResult> Details(Guid? id)
        //{
        //    if (id == null || _context.User == null)
        //    {
        //        return NotFound();
        //    }

        //    var user = await _context.User
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(user);
        //}

        //// GET: Users/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Users/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("UserName,NormalizedUserName,Email,NormalizedEmail,EmailConfirmed,PasswordHash,SecurityStamp,ConcurrencyStamp,PhoneNumber,PhoneNumberConfirmed,Created_At,Desativated_At,Updated_At,TwoFactorEnabled,LockoutEnd,LockoutEnabled,AccessFailedCount,Region_Id,Id")] User user)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        user.Id = Guid.NewGuid();
        //        _context.Add(user);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(user);
        //}

        //// GET: Users/Edit/5
        //public async Task<IActionResult> Edit(Guid? id)
        //{
        //    if (id == null || _context.User == null)
        //    {
        //        return NotFound();
        //    }

        //    var user = await _context.User.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(user);
        //}

        //// POST: Users/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(Guid id, [Bind("UserName,NormalizedUserName,Email,NormalizedEmail,EmailConfirmed,PasswordHash,SecurityStamp,ConcurrencyStamp,PhoneNumber,PhoneNumberConfirmed,Created_At,Desativated_At,Updated_At,TwoFactorEnabled,LockoutEnd,LockoutEnabled,AccessFailedCount,Region_Id,Id")] User user)
        //{
        //    if (id != user.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(user);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!UserExists(user.Id))
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
        //    return View(user);
        //}

        //// GET: Users/Delete/5
        //public async Task<IActionResult> Delete(Guid? id)
        //{
        //    if (id == null || _context.User == null)
        //    {
        //        return NotFound();
        //    }

        //    var user = await _context.User
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(user);
        //}

        //// POST: Users/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(Guid id)
        //{
        //    if (_context.User == null)
        //    {
        //        return Problem("Entity set 'BoardBaronsApiContext.User'  is null.");
        //    }
        //    var user = await _context.User.FindAsync(id);
        //    if (user != null)
        //    {
        //        _context.User.Remove(user);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool UserExists(Guid id)
        //{
        //  return (_context.User?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
