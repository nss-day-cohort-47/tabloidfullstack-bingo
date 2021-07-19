using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        List<UserProfile> GetAllDeactivated();
        UserProfile GetById(int Id);
        void Add(UserProfile userProfile);
        void Deactivate(int id);
        void Activate(int id);
        void MakeAdmin(int id);
        void MakeAuthor(int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}