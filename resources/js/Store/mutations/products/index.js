let getFilteredProducts = function (state, payload) {
    state.searchProducts = [];

    fetch('/search', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            payload
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            state.searchProducts = data;
            state.closeListener = true;
        })
        .catch((err) => {
            console.log('search err', err);
        })
}

let deleteProductFromCart = function (state, {id}) {
    let that = this;

    fetch(`/cart.delete`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            id
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            that.dispatch('CHECK_CART_STATE');
        })
}
let updateProductInCart = function (state, {rowId, amount}) {
    let that = this;

    fetch(`/cart.update`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            rowId, amount
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            that.dispatch('CHECK_CART_STATE');
        })
}

let addProductToCart = function (state, {id, amount}) {
    let that = this;

    fetch(`/cart.add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            id, amount
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            that.dispatch('CHECK_CART_STATE');
        })

    let gObj = {
        category: 'catalog',
        eventAction: 'click',
        eventLabel: 'add product to cart',
        eventValue: `${id} - ${amount}`
    };


    this.dispatch('SEND_GOOGLE_ANALYTICS', gObj);
}


let getProductById = function (state, prd) {
    state.singleProduct = prd;

    return state.singleProduct;
}

let setProductsLoaded = function (state) {
    state.productsLoaded = true;
}

let filterProductsByBrand = function (state, query) {
    let newProducts = [];

    state.products.forEach((prdt) => {
        let cape = JSON.stringify(Object.keys(prdt.cape));

        if (cape.indexOf(query.brand) >= 0) {
            newProducts.push(prdt)
        }
    });

    if (newProducts.length > 0) {
        state.filteredProducts = newProducts;
    }
}

let filterProductsByPrinterType = function (state, query) {
    let newProducts = [];

    state.products.forEach((prdt) => {
        let param = prdt.params;
        if (param.printertype.indexOf(query.printertype) >= 0) {
            newProducts.push(prdt)
        }
    });

    state.filteredProducts = newProducts;
}

let filterProductsByModel = function (state, query) {
    let newProducts = [];

    state.products.forEach((prdt) => {
        let cape = JSON.stringify(Object.values(prdt.cape));

        if (cape.indexOf(query.model) >= 0) {
            newProducts.push(prdt)
        }
    });

    if (newProducts.length > 0) {
        state.filteredProducts = newProducts;
    }
}

let filterProductByQuery = function (state, query) {
    if (query.printertype) {
        this.dispatch('FILTER_PRODUCTS_BY_PRINTERTYPE', query);
    }
    if (query.brand) {
        this.dispatch('FILTER_PRODUCTS_BY_BRAND', query)
    }
    if (query.model) {
        this.dispatch('FILTER_PRODUCTS_BY_MODEL', query)
    }

    if (Object.keys(query).length === 0) {
        state.filteredProducts = state.products
    }

    this.dispatch('GET_MODEL_BRAND_FILTERS')
}

let getProductTypeFilters = function (state) {
    state.typeFilters = [...new Set(state.products.map(item => item.params.printertype))];
}

let getProductModelBrandFilters = function (state) {
    let allProductBrands = [];
    let allProductModels = [];

    state.filteredProducts.map((prdct) => {
        let cape = prdct.cape;
        let brands = Object.keys(cape);
        let models = Object.values(cape);

        brands.forEach(brand => allProductBrands.push(brand));
        models.forEach(model => allProductModels.push(model));
    })

    state.brandFilters = [...new Set(allProductBrands)];
    state.modelFilters = [...new Set(allProductModels)];
}

let getProductModelFilters = function (state, data = {}) {
    let newProducts = state.products.filter(item => {
        let param = item.params
        for (let key in data) {
            if (param[key] === undefined || param[key] != data[key])
                return false;
        }

        return true;
    });

    state.modelFilters = [...new Set(newProducts.map(item => item.params.art))];
}

let getViewedProducts = function (state) {
    fetch(`/getViewed`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            state.viewedProducts = data;
        })
        .catch((err) => {
            console.log(err);
        })
}

let setProductViewed = function (state, {pid}) {
    fetch(`/setViewed/${pid}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            id: pid
        })
    })
        .then((response) => {
            return response.json();
        })

    let gObj = {
        category: 'catalog modal',
        eventAction: 'click',
        eventLabel: 'catalog modal opened',
        eventValue: pid
    };

    this.dispatch('SEND_GOOGLE_ANALYTICS', gObj);
}

export {
    getFilteredProducts,
    updateProductInCart,
    addProductToCart,
    getProductModelFilters,
    getProductTypeFilters,
    filterProductsByModel,
    filterProductByQuery,
    getProductById,
    getProductModelBrandFilters,
    filterProductsByPrinterType,
    filterProductsByBrand,
    setProductsLoaded,
    getViewedProducts,
    setProductViewed,
    deleteProductFromCart
}
