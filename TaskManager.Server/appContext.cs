using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

namespace TaskManager.Models
//Database context class to interact with the database
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("Server=localhost;Port=3306;Database=taskmanager_db;Uid=admin;Pwd=admin1234;");
        }

        public DbSet<Task> Tasks { get; set; }
        public DbSet<ActivityType> ActivityTypes { get; set; }
        public DbSet<Tag> Tags { get; set; }
    }
}
