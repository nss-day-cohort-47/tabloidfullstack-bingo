using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpGet("{id}")]
        public IActionResult GetAllUserPosts(int id)
        {
            var posts = _postRepository.GetAllUserPosts(id);

            return Ok(posts);
        }
    };
}
