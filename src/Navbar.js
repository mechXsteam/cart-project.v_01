import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://t4.ftcdn.net/jpg/03/18/62/29/240_F_318622912_IgyaJDXVei9YTsw2BWuJzQLxY6Mr6kDE.jpg" alt="cart-icon" />
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar;