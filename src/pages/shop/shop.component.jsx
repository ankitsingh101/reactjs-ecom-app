import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/preview-collection/colllection-preview.component";
class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...CollectionProps }) => (
          <CollectionPreview key={id} {...CollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
