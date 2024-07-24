import React from 'react';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';

const Product_Details = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="By the Valley"   customclass="mb-0" />
        {/* <ProductSlider /> */}
        <ProductDetails />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details

