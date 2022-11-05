import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

import firebase from 'firebase/compat/app';

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        firebase
            .firestore()
            .collection('products')
            // .where('price','>',999)
            // .orderBy('price','asc')
            // .orderBy('price','desc')
            .onSnapshot((snapshot)=>{
                console.log(snapshot)
                snapshot.docs.map((doc)=>{console.log(doc.data())})
                const products = snapshot.docs.map((doc)=>{
                    const data = doc.data()
                    data['key'] = doc.id
                    return data})
                this.setState({
                    products,
                    loading:false
                })
            })
    }
    add_product = ()=>{
        firebase
            .firestore()
            .collection('products')
            .add({
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3CETL_OertJKScoHfblxs6CBrKGVCmVESw&usqp=CAU',
                price:1000,
                qty:1,
                title:'Some product'
            }).then((docRef)=>{console.log('product ref',docRef)})
            .catch((error)=>{console.log(error)}).catch((error)=>{console.log(error)})
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        const docRef = firebase.firestore().collection('products').doc(products[index].key)
        docRef.update({qty:products[index].qty+1}).then(()=>{console.log('updated')}).catch((error)=>{console.log(error)})
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        const docRef = firebase.firestore().collection('products').doc(products[index].key)
        if(products[index].qty>0){
            docRef.update({qty:products[index].qty-1}).then(()=>{console.log('updated')}).catch((error)=>{console.log(error)})
        }
    }
    handleDeleteProduct = (id) => {

        console.log(id)
        const docRef = firebase.firestore().collection('products').doc(id)
        docRef.delete().then(()=>{console.log('deleted')}).catch((error)=>{console.log(error)})
    }

    getCartCount = () => {
        const { products } = this.state;

        let count = 0;

        products.forEach((product) => {
            count += product.qty;
        })

        return count;
    }

    getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;

        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price
        })

        return cartTotal;
    }
    render () {
        const { products,loading } = this.state;
        return (
            <div className="App">

                <Navbar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />
                <div style={ {padding: 10, fontSize: 20} }>TOTAL: Rs. {this.getCartTotal()} </div>
                {loading && <h1>fetching product... please wait</h1>}
                <button onClick={this.add_product}>Add Product</button>
            </div>
        );
    }
}

export default App;
