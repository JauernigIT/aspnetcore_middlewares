using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public ActionResult Index() 
    {
        ViewBag.Title = "DWX 2017";
        return View();
    }
}