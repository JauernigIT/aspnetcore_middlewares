using Microsoft.AspNetCore.Builder;

public static class IApplicationBuilderExtensions
{
    public static IApplicationBuilder UseSpaRouting(this IApplicationBuilder app)
    {
        return app.UseMiddleware<SpaRoutingMiddleware>();
    }

    public static IApplicationBuilder UseOldBrowserDetection(this IApplicationBuilder app, string redirectPath)
    {
        return app.UseMiddleware<OldBrowserDetectionMiddleware>(redirectPath);
    }
}