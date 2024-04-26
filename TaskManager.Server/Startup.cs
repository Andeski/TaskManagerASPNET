using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Options;
using TaskManager.Models;
using MySql.EntityFrameworkCore.Extensions;



namespace TaskManager.Server
{
    public class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddTransient<ApplicationContext>();

            var connectionString = "Server=localhost;Port=3306;Database=taskmanager_db;Uid=admin;Pwd=admin1234;";
            
            
            /*
            services.AddLogging(builder =>
            {
                builder.AddConsole(options =>
                {
                    options.IncludeScopes = true;
                });
            });


            services.AddDbContext<ApplicationContext>(options =>
            {
                options.UseLoggerFactory(LoggerFactory.Create(builder =>
                {
                    builder.AddConsole();
                }));
                options.UseMySQL(connectionString);
            });*/
        }
    }
}
