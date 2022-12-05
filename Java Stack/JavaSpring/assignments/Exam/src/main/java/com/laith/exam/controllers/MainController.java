package com.laith.exam.controllers;

import com.laith.exam.models.Team;
import com.laith.exam.models.User;
import com.laith.exam.services.TeamService;
import com.laith.exam.services.UserService;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

public class MainController {
    private final TeamService teamService;
    private final UserService userService;

    public MainController(TeamService teamService, UserService userService) {
        this.teamService = teamService;
        this.userService = userService;
    }

    @GetMapping("/")
    public String index(Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            return "redirect:/books";
        }
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new User());

        return "login.jsp";
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
        userService.register(newUser, result);
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/books";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") User newLogin, BindingResult result, Model model, HttpSession session) {
        User user = userService.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "login.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/books";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
    @RequestMapping("/teams/{id}")
    public String shoTeam(@PathVariable("id") Long id, Model model) {
        Team team = teamService.findTeam(id);
        model.addAttribute("team", team);
        return "show.jsp";
    }
    @GetMapping("/teams")
    public String allTeams(Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userService.findUserById(user_id);
            model.addAttribute("thisUser", thisUser);
            List<Team> teams = TeamService.allTeam();
            model.addAttribute("teams", teams);

            return "allTeam.jsp";
        } else {
            return "redirect:/";
        }
    }
    @RequestMapping("/teams/new")
    public String newBook(@ModelAttribute("team") Team team, HttpSession session, Model model) {
        if (session.getAttribute("user_id") != null) {
            Long userId = (Long) session.getAttribute("user_id");
            User user = userService.findUserById(userId);
            model.addAttribute("user", userId);
            return "newTeam.jsp";
        }
        return "redirect:/";
    }


}
