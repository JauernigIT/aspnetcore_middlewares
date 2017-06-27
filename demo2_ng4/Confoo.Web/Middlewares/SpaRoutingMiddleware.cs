using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

public class SpaRoutingMiddleware 
{
    private readonly RequestDelegate next;
    public SpaRoutingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        await next(context);

        if (context.Response.StatusCode == StatusCodes.Status404NotFound)
        {
            context.Request.Path = "/";
            await next(context);
        }
    }
}