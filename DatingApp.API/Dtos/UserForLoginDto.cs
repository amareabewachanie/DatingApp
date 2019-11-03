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
        [StringLength(16, MinimumLength = 4, ErrorMessage = "Password must be minimum of 4 charachters and maximum of 16.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}