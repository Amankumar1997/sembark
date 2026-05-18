describe('E-commerce Flow', () => {
  
  it('should load the home page and display products', () => {
    cy.visit('/');
    cy.get('.product-card').should('have.length.at.least', 1);
  });

  it('should navigate to product details and add to cart', () => {
    cy.visit('/');
    
    cy.get('.product-card').first().click();
    
    cy.url().should('include', '/product/');
    
    cy.get('.btn-add').contains('Add to Cart').click();
    
    cy.get('.btn-remove').should('contain', 'Remove from Cart');
    
    cy.get('.cart-badge').should('contain', '1');
  });

  it('should filter products by category and update URL', () => {
    cy.visit('/');
    
    cy.get('.filter-checkbox').first().check();
    
    cy.get('.apply-filter-btn').click();
    
    cy.url().should('include', 'categories=');
  });

  it('should persist cart after page reload', () => {
    cy.visit('/');
    cy.get('.product-card').first().click();
    cy.get('.btn-add').click();
    
    // Reload page
    cy.reload();
    
    // Check if item is still in cart
    cy.get('.cart-badge').should('contain', '1');
  });
});