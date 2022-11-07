package com.ninjagoldgame.ninjagoldgame;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Ninjagold {
    @RequestMapping("/")
    public String index(HttpSession session) {
        if(session.getAttribute("total_gold") == null) {
            session.setAttribute("total_gold", 0);
            session.setAttribute("activities", new ArrayList<String>());
            session.setAttribute("messages", new ArrayList<String>());
        }
        return "Game.jsp";
    }
    @SuppressWarnings("unchecked")
    @RequestMapping("/process_money")
    public String processMoney(@RequestParam(value="building") String building, HttpSession session) {
        System.out.println(building);
        if("farm".equals(building)) {
            Random r = new Random();
            int max = 20;
            int min = 10;
            int n = r.nextInt(max + 1 - min) + min;
            session.setAttribute("total_gold", (Integer) session.getAttribute("total_gold") + n);
            SimpleDateFormat dateFormat = new SimpleDateFormat("E, MMMM d, y 'at' h:mm a");
            String formattedDate = dateFormat.format(new java.util.Date());
            // add the result to the beginning of the ArrayList. Display in activities box.
            ArrayList<String> temp_activities = (ArrayList<String>) session.getAttribute("activities");
            temp_activities.add(0, "Earned " + n + " gold from the farm! " + formattedDate);
            session.setAttribute("activities", temp_activities);
        } else if("cave".equals(building)) {
            session.setAttribute("message", " ");
            Random r = new Random();
            int max = 10;
            int min = 5;
            int n = r.nextInt(max + 1 - min) + min;
            session.setAttribute("total_gold", (Integer) session.getAttribute("total_gold") + n);
            SimpleDateFormat dateFormat = new SimpleDateFormat("E, MMMM d, y 'at' h:mm a");
            String formattedDate = dateFormat.format(new java.util.Date());
            // add the result to the beginning of the ArrayList. Display in activities box.
            ArrayList<String> temp_activities = (ArrayList<String>) session.getAttribute("activities");
            temp_activities.add(0, "Earned " + n + " gold from the cave! " + formattedDate);
            session.setAttribute("activities", temp_activities);
        } else if("house".equals(building)) {
            session.setAttribute("message", " ");
            Random r = new Random();
            int max = 5;
            int min = 2;
            int n = r.nextInt(max + 1 - min) + min;
            session.setAttribute("total_gold", (Integer) session.getAttribute("total_gold") + n);
            SimpleDateFormat dateFormat = new SimpleDateFormat("E, MMMM d, y 'at' h:mm a");
            String formattedDate = dateFormat.format(new java.util.Date());
            // add the result to the beginning of the ArrayList. Display in activities box.
            ArrayList<String> temp_activities = (ArrayList<String>) session.getAttribute("activities");
            temp_activities.add(0, "Earned " + n + " gold from the house! " + formattedDate);
            session.setAttribute("activities", temp_activities);
        } else if("casino".equals(building)) {
            session.setAttribute("message", " ");
            Random r = new Random();
            int max = 50;
            int min = -50;
            int n = r.nextInt(max + 1 - min) + min;
            System.out.println(n);
            session.setAttribute("total_gold", (Integer) session.getAttribute("total_gold") + n);
            SimpleDateFormat dateFormat = new SimpleDateFormat("E, MMMM d, y 'at' h:mm a");
            String formattedDate = dateFormat.format(new java.util.Date());
            // add the result to the beginning of the ArrayList. Display in activities box.
            ArrayList<String> temp_activities = (ArrayList<String>) session.getAttribute("activities");
            if(n < 0) {
                temp_activities.add(0, "Lost " + (-n) + " gold from the casino! " + formattedDate);
            } else {
                temp_activities.add(0, "Earned " + n + " gold from the casino! " + formattedDate);
            }
            session.setAttribute("activities", temp_activities);
        }
        return "redirect:/";
    }
    @RequestMapping("/reset")
    public String reset(HttpSession session) {
        session.removeAttribute("activities");
        session.removeAttribute("total_gold");
        session.removeAttribute("message");
        return "redirect:/";
    }
}
