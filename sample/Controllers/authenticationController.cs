using Microsoft.AspNetCore.Mvc;
using sample.model;

namespace sample.Controllers
{
[ApiController]
[Route ("api/[controller]")]

public class authenticationController : ControllerBase
{
     private static readonly List<Authentication> Signin = new List<Authentication>
    {
        new Authentication { Id = 1, Username = "Paul Marbella" ,Password= "123" },
        new Authentication { Id = 2, Username = "Vicent123" ,Password= "123" },
        new Authentication { Id = 3, Username = "Etr123" ,Password= "123"}
    };

    [HttpGet]
    public ActionResult<IEnumerable<Authentication>> GetAuthentication()
    {
        return Ok(Signin);
    }



}
}
