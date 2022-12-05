package models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Data
public class LoginUser {

    @NotEmpty(message = "Email is required!")
    @Email(message = "Please enter a valid email!")
    private String email;

    @NotEmpty(message = "Password is required!")
    @Size(min = 8, max = 128, message = "Invalid credentials!")
    private String password;

    public LoginUser() {
    }
}
