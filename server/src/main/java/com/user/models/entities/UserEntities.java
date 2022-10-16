package com.user.models.entities;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntities implements Serializable {

    @Id
    private Long nik;
    private String name;
    private String gender;
    @Column(length = 500)
    private String address;
    private Date date;
    private String country;

    public UserEntities() {
    }

    public UserEntities(Long id, Long nik, String name, String gender,  String address, Date date,
            String country) {
        this.nik = nik;
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.date = date;
        this.country = country;
    }

    public Long getNik() {
        return nik;
    }

    public void setNik(Long nik) {
        this.nik = nik;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}
