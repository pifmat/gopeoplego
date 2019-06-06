$( document ).ready(function() {
    console.log( "ready!" );
    
    var app = new Vue({
        el: '#app',
        data: {
            product: 'Socks',
            image: 'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com',
            href: '#',
            inStock: true,
            onSale: false,
            details:['80% cotton',' 20% polyester'],
            variants: [
                {
                  variantId: 2234,
                  variantColor: 'green'    
                },
                {
                  variantId: 2235,
                  variantColor: 'blue'
                }
            ],
            sizes:[35,36,37],
            cart:0
            
        },
        methods:{
            addToCart(){
                this.cart += 1
            }
        }
    })
  
  
});