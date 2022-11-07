package com.displaydate.displaydate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class Displaydate {
    @RequestMapping("")
    public String index() {

        return "choose.jsp";
    }
    @RequestMapping("/date")
    public String date() {

        return "date.jsp";
    }
    @RequestMapping("/time")
    public String time() {

        return "time.jsp";
    }
}
