package com.example.userservice.jpa;

import lombok.*;

import javax.persistence.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false,length = 50, unique = true)
    private String email;
    @Column(nullable = false,length = 50)
    private String name;
    @Column(name = "user_id", nullable = false, unique = true)
    private String userId;
    @Column(name = "encrypted_pwd", nullable = false, unique = true)
    private String encryptedPwd;
}
