using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class PostTagRepository : BaseRepository, IPostTagRepository
    {
        public PostTagRepository(IConfiguration configuration) : base(configuration) { }

        public List<PostTag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, PostId, TagId
                        
                    FROM PostTag";

                    var reader = cmd.ExecuteReader();

                    var postTags = new List<PostTag>();
                    while (reader.Read())
                    {
                        postTags.Add(new PostTag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            PostId = DbUtils.GetInt(reader, "PostId"),
                            TagId = DbUtils.GetInt(reader, "TagId"),
                        });
                    }

                    reader.Close();

                    return postTags;
                }
            }
        }

        //public void Add(PostTag comment)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //            INSERT INTO PostTag (PostId, UserProfileId, Subject, Content, CreateDateTime)
        //            OUTPUT INSERTED.ID
        //            VALUES (@PostId, @UserProfileId, @Subject, @Content, @CreateDateTime)
        //            ";

        //            DbUtils.AddParameter(cmd, "@PostId", comment.PostId);
        //            DbUtils.AddParameter(cmd, "@UserProfileId", comment.UserProfileId);
        //            DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
        //            DbUtils.AddParameter(cmd, "@Content", comment.Content);
        //            DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);


        //            comment.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

        //public void Update(PostTag comment)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //            UPDATE PostTag
        //            SET Subject = @Subject,
        //                Content = @Content,
        //                CreateDateTime = @CreateDateTime
        //            WHERE Id = @Id
        //            ";


        //            DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
        //            DbUtils.AddParameter(cmd, "@Content", comment.Content);
        //            DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);
        //            DbUtils.AddParameter(cmd, "@Id", comment.Id);

        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE PostTag WHERE Id=@Id";
                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
