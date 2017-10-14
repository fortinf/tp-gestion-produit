package org.fortinf.gestionproduit.service;

import org.fortinf.gestionproduit.domain.Produit;

import java.util.List;

public interface ProduitService {

    List<Produit> getAllProduits();

    Produit getProduit(Long id);

    Produit createProduit(Produit produit);

    Produit updateProduit(Long id, Produit produit);

    void deleteProduit(Long id);

}
