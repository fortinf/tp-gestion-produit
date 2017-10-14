package org.fortinf.gestionproduit.service;

import org.fortinf.gestionproduit.domain.Produit;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProduitService {

    List<Produit> getAllProduits();

    Produit getProduit(Long id);

    Produit createProduit(Produit produit);

    Produit updateProduit(Long id, Produit produit);

    void deleteProduit(Long id);

    Page<Produit> search(String exp, int page, int size);

}
