using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace demo1_starter
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Use(): inserts middleware (here: measuring elapsed time) in the middle of the pipeline
            app.Use(async (context, next) => {
                var watch = new Stopwatch();
                watch.Start();

                await next();

                watch.Stop();
                Console.WriteLine($"#### Elapsed time: {watch.Elapsed} #####");
            });

            // Map(): branches the current pipeline to another pipeline, doesn't execute further code from the main pipeline
            // hint: MapWhen() allows arbitrary boolean conditions
            app.Map("/dwx", appBranch =>
            {
                appBranch.Run(async context =>
                {
                    await context.Response.WriteAsync("<h1>Hello DWX!</h1>");
                });
            });

            // Run(): runs the given middleware, but doesn't allow to call next middleware (end of pipeline)
            app.Run(async context =>
            {
                await context.Response.WriteAsync("<h1>Hello World!</h1>");
            });
        }
    }
}
