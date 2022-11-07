package com.hellohuman.hellohuman;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HumanController {
    @RequestMapping("/")
    public String hello() {
        return " Hello Human ";
    }
    @RequestMapping("/name")
    public String index(@RequestParam(value = "name") String searchQuery , @RequestParam(value="last_name")String lastName, @RequestParam(value = "times") int times ) {
        String s = "";
        for (int i = 0; i < times; i++) {
            s+="Hello " + " " + searchQuery + " " + lastName;
        }
        return s;
    }
}