using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepo)
        {
            _postRepository = postRepo;
        }

        [HttpGet]
        public IActionResult GetAllPublishedPosts()
        {
            return Ok(_postRepository.GetAllPublishedPosts());
        }
        // Fetch all posts from user based on user Id
        [HttpGet("{FirebaseUserId}")]
        public IActionResult GetAllUserPosts(string FirebaseUserId)
        {
            var posts = _postRepository.GetAllUserPosts(FirebaseUserId);

            return Ok(posts);
        }

    };
}
