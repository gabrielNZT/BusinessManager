package businessmanager.api

class Product {
    String code
    String name
    String price
    String unity
    Integer stock = 0
    Integer minStock = 0
    byte[] productImage
    String contentType
    boolean isEnabled = true
    Company company

    static constraints = {
        price nullable: false, blank: false
        code unique: true, nullable: false, blank: false
        productImage nullable: true, blank: true
        minStock blank: true, nullable: true
        unity nullable: false, blank: false
        stock nullable: true, blank: true
        isEnabled nullable: true, blank: true
        contentType nullable: true
        company nullable: false
    }

    static mapping = {
        company column: 'company_id'
        productImage sqlType: 'longblob'
    }
}
