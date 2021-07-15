using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepo,
            IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepo;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult GetAllPublishedPosts()
        {
            return Ok(_postRepository.GetAllPublishedPosts());
        }
        // Fetch all posts from current logged in user
        [HttpGet("GetAllUserPosts")]
        public IActionResult GetAllUserPosts()
        {
            var user = GetCurrentUserProfile();
            if (user == null)
            {
                return Unauthorized();
            }
            else
            {
                var posts = _postRepository.GetAllUserPosts(user.FirebaseUserId);
                return Ok(posts);
            }
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            if(firebaseUserId != null)
            {
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }
    };
}
