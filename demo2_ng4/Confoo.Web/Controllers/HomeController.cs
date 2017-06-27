using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public ActionResult Index() 
    {
        ViewBag.Title = "DWX 2017";
        return View();
    }

    public ActionResult OldBrowser()
    {
        return View();
    }

    public string Error()
    {
        return "An error occurred with request ID " + (Activity.Current?.Id ?? HttpContext.TraceIdentifier);
    }
}