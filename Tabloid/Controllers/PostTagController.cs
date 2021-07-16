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
    public class PostTagController : ControllerBase
    {
        private readonly IPostTagRepository _postTagRepository;
        public PostTagController(IPostTagRepository postTagRepo)
        {
            _postTagRepository = postTagRepo;
        }

        [HttpGet]
        public IActionResult GetAllPostTags()
        {
            return Ok(_postTagRepository.GetAll());
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            _postTagRepository.Delete(id);
            return NoContent();
        }

    }
}