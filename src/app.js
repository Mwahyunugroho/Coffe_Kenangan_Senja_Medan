document.addEventListener('alpine:init', () => {
    Alpine.data('products' , () => ({
        items : [
            {
                id : 1 , name: 'robusta 1', img: '1.jpeg', price: 50000
            },
            {
                id : 2 , name: 'robusta 2', img: '2.jpeg', price: 50000
            },
            {
                id : 3 , name: 'robusta 3', img: '3.jpeg', price: 50000
            },
            {
                id : 4 , name: 'robusta 4', img: '4.jpeg', price: 50000
            },
            {
                id : 5 , name: 'robusta 5', img: '5.jpeg', price: 50000
            },
            {
                id : 6 , name: 'robusta 6', img: '6.jpeg', price: 50000
            },
            
        ],
    }));


    Alpine.store('cart', {
      items: [],
      total:0,
      quantity:0,
      add(newItem){
        // cek apakah ada barang yang sama di cart 
        const cartItem = this.items.find((item) => item.id === newItem.id);


        // jika belum ada /cart masih kosong

        if (!cartItem){
            this.items.push({...newItem, quantity:1, total: newItem.price });
            this.quantity++;
            this.total += newItem.price;
        } else {
            // jika barang nya suda ada , cek barang beda atau sama dengan yang ada di cart
            this.items = this.items.map((item) =>{
            // jika barang berbeda
            if (item.id !== newItem.id){
                return item;
            } else {
                // jika barang yang suda ada ,tambah quantity dan total ny sub total nya
                item.quantity++;
                item.total = item.price * item.quantity;
                this.quantity++;
                this.total += item.price;
                return item;
                
            }
            });

        }
      },
      remove(id) {
        // ambil item yang mau di remove berdasarkan id nyaa
        const cartItem =this.items.find((item) => item.id === id);

        // jika item lebih dari 1
        if(cartItem.quantity > 1){
            // terlusurin 1 - 1
            this.items =this.items.map((item) => {
                // jika bukan barang yang di klik skip aj 8a
                if(item.id !== id ){
                    return item;
                }else{
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                } 
            })
        } else if(cartItem.quantity === 1){
            // jika barang sisa 1 
            this.items = this.items.filter((item) => item.id !== id);
            this.quantity--;
            this.total -= cartItem.price;
        }
      },
    });
});


// form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0){
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        } else{ 
            return false;
        }
    }
    
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
});


// kirm data ke tika tombol check ut di klik
checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    window.open('http://wa.me/62895329181905?text=' + encodeURIComponent(message));
});

// format pesan whatsap 
const formatMessage = (obj) => {
   return `Data Custumer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n` )}
    TOTAL: ${rupiah(obj.total)}
    Terima Kasih.
    `;
     
};
 

//formtat uang ke javascript texs 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency :'IDR',
        minimumFractionDigits: 0,
    }).format(number);
   
};
