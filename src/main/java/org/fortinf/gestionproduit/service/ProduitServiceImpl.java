package org.fortinf.gestionproduit.service;

import org.fortinf.gestionproduit.domain.Produit;
import org.fortinf.gestionproduit.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitServiceImpl implements ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Override
    public List<Produit> getAllProduit() {
        return produitRepository.findAll();
    }

    @Override
    public Produit getProduit(Long id) {
        return produitRepository.findOne(id);
    }

    @Override
    public Produit addProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit updateProduit(Long id, Produit produit) {
        produit.setId(id);
        return produitRepository.save(produit);
    }

    @Override
    public void deleteProduit(Long id) {
        produitRepository.delete(id);
    }
}
