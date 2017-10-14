package org.fortinf.gestionproduit.service;

import org.fortinf.gestionproduit.domain.Produit;
import org.fortinf.gestionproduit.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitServiceImpl implements ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Override
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @Override
    public Produit getProduit(Long id) {
        return produitRepository.findOne(id);
    }

    @Override
    public Produit createProduit(Produit produit) {
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

    @Override
    public Page<Produit> search(String exp, int page, int size) {
        String queryExp = String.format("%%%s%%", exp);
        return produitRepository.search( queryExp, new PageRequest(page, size));
    }
}
