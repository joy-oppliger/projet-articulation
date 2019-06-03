export default {
	data() {
		return {
			product : [],
			isHiddenDescr:true,
			isHiddenInfo:false,
			isHiddenRating:false,
			cartItem : '',
            product_id: '',
            quantity : '',
		}
	},
	methods:{
		underline: function(event){
			var clickedElement = event.target;
			$(clickedElement).addClass("more_info_selected");
			$(clickedElement).siblings().removeClass("more_info_selected");
			$(clickedElement).siblings().addClass("more_info");
		},
		set_choice:function(event){
			var clickedElement = event.target;
			$(clickedElement).addClass("product_selection_selected");
			$(clickedElement).siblings().removeClass("product_selection_selected");
			$(clickedElement).siblings().addClass("product_selection");
		},
		submitCartItem (e) {
			  
		  },
		  input: function (test) {
			localStorage.setItem('storedData', test);
			console.log(localStorage.getItem('storedData'));
			this.cartItem  = {
				product_id: this.product.id,
				quantity: this.quantity
			};
			console.log(this.cartItem);
			axios.post('../add', this.cartItem).then(function (response) {
				console.log(response);
			})
      	}
	},
	props : ['prod'],
	mounted () {
		let json = JSON.parse(this.prod);
		console.log(json);
        this.product = json.product;
        this.products = json.recommandations;
        this.products = json.products;
	},

}

