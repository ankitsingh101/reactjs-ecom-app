import React from "react";
import "../../components/preview-collection/colllection-preview.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component.jsx";
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...OtherItemProps }) => (
          <CollectionItem key={id} {...OtherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
