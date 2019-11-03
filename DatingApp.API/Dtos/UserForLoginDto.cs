using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        [DisplayName("User Name")]
        [DataType(DataType.EmailAddress)]
        public string UserName { get; set; }
        [Required]
        [DisplayName("Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}