using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        public List<Post> GetAllPublishedPosts();
        public List<Post> GetAllUserPosts(string FirebaseUserId);
        public Post GetPostById(int id);
    }
}