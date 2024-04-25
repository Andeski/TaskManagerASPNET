using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.Models
//Database context class to interact with the database
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Task> Tasks { get; set; }
        public DbSet<ActivityType> ActivityTypes { get; set; }
        public DbSet<Tag> Tags { get; set; }
    }
}
