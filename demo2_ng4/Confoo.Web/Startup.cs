using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

namespace Confoo.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddTransient<OldBrowserDetectionService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            // host speaker images from folder outside of our content path (just for example)
            app.UseStaticFiles(new StaticFileOptions { 
                RequestPath = "/dwx_speakers",
                FileProvider = new PhysicalFileProvider(env.ContentRootPath +  @"\..\dwx_speakers") 
            });

            // enable Angular 4 to handle routes, which have not been resolved by MVC before
            app.UseSpaRouting();

            // detect old browsers (show old browser warning)
            app.UseOldBrowserDetection("/Home/OldBrowser");

            app.UseMvcWithDefaultRoute();
        }
    }
}
