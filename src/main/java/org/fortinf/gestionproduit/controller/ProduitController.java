package org.fortinf.gestionproduit.controller;

import org.fortinf.gestionproduit.domain.Produit;
import org.fortinf.gestionproduit.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Produit getProduit(@PathVariable Long id) {
        return produitService.getProduit(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Produit createProduit(@RequestBody Produit produit) {
        return produitService.createProduit(produit);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        return produitService.updateProduit(id, produit);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }

}
