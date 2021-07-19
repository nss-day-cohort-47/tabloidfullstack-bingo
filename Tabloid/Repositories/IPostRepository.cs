using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        public List<Post> GetAllPublishedPosts();
        public List<Post> GetAllUserPosts(string FirebaseUserId);
        public Post GetPostById(int id);
        void Update(Post post);
        public void DeletePost(int id);
    }
}