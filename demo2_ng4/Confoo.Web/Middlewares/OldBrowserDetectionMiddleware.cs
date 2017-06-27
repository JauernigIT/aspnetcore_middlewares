using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

public class OldBrowserDetectionMiddleware 
{
    private readonly RequestDelegate next;
    private readonly OldBrowserDetectionService service;
    private readonly string redirectPath;
    public OldBrowserDetectionMiddleware(
        RequestDelegate next, 
        OldBrowserDetectionService service,
        string redirectPath)
    {
        this.next = next;
        this.service = service;
        this.redirectPath = redirectPath;
    }

    public async Task Invoke(HttpContext context)
    {
        if (service.IsOldBrowser(context.Request.Headers["User-Agent"]))
        {
            context.Request.Path = redirectPath;
        }

        await next(context);
    }
}