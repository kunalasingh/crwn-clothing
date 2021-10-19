import React, { useEffect } from "react";

import { Route, useLocation, useParams } from "react-router";
import { useDispatch } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container.jsx";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  console.log("shop params : ", params);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div>
      <Route
        path={`${location.pathname}/:collectionId`}
        component={CollectionPageContainer}
      />
      <Route
        path={`${location.pathname}`}
        component={CollectionsOverviewContainer}
      />
    </div>
  );
};

export default ShopPage;
