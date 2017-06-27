using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace demo3_change_response
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.Use(async (context, next) =>
            {
                // use a temporary MemoryStream to disallow sending the response to the client,
                // until the MemoryStream gets disposed -- hence we can change the response
                var originalBody = context.Response.Body;
                using (var newBody = new System.IO.MemoryStream())
                {
                    context.Response.Body = newBody;

                    await next();

                    newBody.Seek(0, System.IO.SeekOrigin.Begin);
                    using (var bodyReader = new System.IO.StreamReader(context.Response.Body))
                    {
                        string content = await bodyReader.ReadToEndAsync();
                        content = FilterBadWords(content);
                        context.Response.Body = originalBody;

                        await context.Response.WriteAsync(content);
                    }
                }
            });

            app.UseMvcWithDefaultRoute();
        }

        private string FilterBadWords(string content)
        {
            return content.Replace("Mist", "toll");;
        }
    }
}
