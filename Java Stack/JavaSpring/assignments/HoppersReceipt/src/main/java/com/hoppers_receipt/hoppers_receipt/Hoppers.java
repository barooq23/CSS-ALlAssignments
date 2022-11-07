package com.hoppers_receipt.hoppers_receipt;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Hoppers {
    // class definition and imports here...
    @RequestMapping("/")
    public String index(Model model) {

        String name = "Laith Barq";
        String itemName = "Iced Coffe";
        double price = 5.25;
        String description = "Coled drink";
        String vendor = "Little Things Corner Store";

        // Your code here! Add values to the view model to be rendered
        model.addAttribute("name",name);
        model.addAttribute("itemName",itemName);
        model.addAttribute("price",price);
        model.addAttribute("description",description);
        model.addAttribute("vendor",vendor);


        return "Hopper.jsp";
    }
    //...


}
