export default {
	data() {
		return {
			products : [],
			tvaPercent:7.7,
			tva:0,
			finalsubPrice:0,
			livraison:25,
			finalPrice:0,
			productToDelete: '',
			id:document.querySelector("meta[name='user-id']"),
			emptyCart:true,
		}
	},
	methods:{
		deleteProduct : function (event) {
			if (this.id != null) {
				console.log(event.id)
				axios.delete('cartItem/' + event.id).catch(error => {
					console.dir(error);
				})
				var local = JSON.parse(localStorage.getItem('storedID'));
				var removeIndex = local.map(function(item) { return item.id; }).indexOf(event.id);
				local.splice(removeIndex,1);
				localStorage.setItem('storedID', JSON.stringify(local));
				this.products = JSON.parse(localStorage.getItem('storedID'));
			}else{
				var local = JSON.parse(localStorage.getItem('storedID'));
				var removeIndex = local.map(function(item) { return item.id; }).indexOf(event.id);
				local.splice(removeIndex,1);
				localStorage.setItem('storedID', JSON.stringify(local));
				this.products = JSON.parse(localStorage.getItem('storedID'));
			}
		},
		checkLocalStorage:function(){
			var local = JSON.parse(localStorage.getItem('storedID'))
			if (local=="") {
				this.emptyCart=false;
			}
		}
	},

	computed:{


	},
	
	props : ['cart'],
	mounted () {

		var local = JSON.parse(localStorage.getItem('storedID'))
		if (local=="") {
			this.emptyCart=false;
			console.log(this.emptyCart)
		}

		if (this.id != null && JSON.parse(this.cart) != null) {
			this.products = JSON.parse(this.cart);
		} else {
			this.products = JSON.parse(localStorage.getItem('storedID'));
		}
		var finalsubPrice= 0;
		this.products.forEach(function(product) {
			var total =  product.price*product.quantity;
			product.totalprice=total
			finalsubPrice=finalsubPrice+product.totalprice;
		});
		this.finalsubPrice=finalsubPrice;
		this.tva = Math.round(this.tvaPercent*this.finalsubPrice/100);
		this.finalPrice = this.finalsubPrice+this.tva+this.livraison;



	},
	beforeMount(){



	},

}