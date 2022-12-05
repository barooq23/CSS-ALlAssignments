package com.laith.exam.services;



import com.laith.exam.models.Team;
import com.laith.exam.repositories.TeamRepository;
import com.laith.exam.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {
    // adding the book repository as a dependency
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;


    public TeamService(TeamRepository teamRepository, TeamRepository teamRepository1, UserRepository userRepository) {
        this.teamRepository = teamRepository1;
        this.userRepository = userRepository;
    }

    public static List<Team> allTeam() {
        return null;
    }

    // returns all the Teams
    public List<Team> allTeams() {
        return teamRepository.findAll();
    }

    // creates a Team
    public Team createTeam(Team t) {
        return teamRepository.save(t);
    }


    // retrieves a book
    public Team findTeam(Long id) {
        Optional<Team> optionalBook = teamRepository.findById(id);
        return optionalBook.orElse(null);
    }

    public Team updateTeam(Team t) {
        return teamRepository.save(t);
    }

    public void deleteBook(Long id) {
        Optional<Team> op = teamRepository.findById(id);
        if (op.isPresent()) {
            teamRepository.deleteById(id);
        }
    }
}
