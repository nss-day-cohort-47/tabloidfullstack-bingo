using Microsoft.AspNetCore.Mvc;
using System;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAll());
        }

        [HttpGet("Deactivated")]
        public IActionResult GetDeactivated()
        {
            return Ok(_userProfileRepository.GetAllDeactivated());
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_userProfileRepository.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpGet("UserProfile/{id}")]
        public IActionResult Get(int id)
        {
            var userProfile = _userProfileRepository.GetById(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
        [HttpDelete("{id}")]
        public IActionResult Deactivate(int id)
        {
            _userProfileRepository.Deactivate(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult Activate(int id)
        {
            _userProfileRepository.Activate(id);
            return NoContent();
        }
        [HttpPut("MakeAdmin/{id}")]
        public IActionResult MakeAdmin(int id)
        {
            _userProfileRepository.MakeAdmin(id);
            return NoContent();
        }
        [HttpPut("MakeAuthor/{id}")]
        public IActionResult MakeAuthor(int id)
        {
            _userProfileRepository.MakeAuthor(id);
            return NoContent();
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.CreateDateTime = DateTime.Now;
            userProfile.UserTypeId = UserType.AUTHOR_ID;
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseUserId = userProfile.FirebaseUserId },
                userProfile);
        }
    }
}
