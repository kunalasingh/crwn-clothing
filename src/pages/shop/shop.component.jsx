import React, { useEffect } from "react";

import { Route, useLocation } from "react-router";
import { useDispatch } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container.jsx";

const ShopPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={`${location.pathname}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${location.pathname}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
