using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepo;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepo = categoryRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            List<Category> categories = _categoryRepo.GetAllCategories();

            return Ok(categories);
        }
        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepo.AddCategory(category);
            return CreatedAtAction("Get", new { id = category.Id }, category);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepo.DeleteCategory(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult Edit(int id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }
            _categoryRepo.EditCategory(category);
            return NoContent();
        }
    }
}
