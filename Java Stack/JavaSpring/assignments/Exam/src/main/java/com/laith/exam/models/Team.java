package com.laith.exam.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotEmpty(message = "Name Must Be Provided")
    private String Tname;

    @NotEmpty(message = "Must Include Only Days Of The weeks")
    private String gameDay;


    @NotNull
    @Max(value = 5)
    @Min(value = 1)
    private int skill;



    @Column(updatable = false)
    private Date createdAt;
    private Date updatedAt;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "teams_user",
            joinColumns = @JoinColumn(name = "teams_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teamCreater")
    private User teamCreater;

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}
