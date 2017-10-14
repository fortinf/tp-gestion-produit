package org.fortinf.gestionproduit.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "T_PRODUIT")
public class Produit implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "LIBELLE", nullable = false, length = 100)
    private String libelle;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "PRIX", nullable = false)
    private double prix;

    public Produit() {
    }

    public Produit(String libelle, String description, double prix) {
        this.libelle = libelle;
        this.description = description;
        this.prix = prix;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    @Override
    public String toString() {
        return String.format("|%20d|%100s|%20.2f|", id, libelle, prix);
    }
}
