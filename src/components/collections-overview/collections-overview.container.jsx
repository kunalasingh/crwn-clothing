import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collections-overview.component";

const mapStatToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// const CollectionsOverviewContainer = connect(mapStatToProps)(WithSpinner(CollectionOverview))
const CollectionsOverviewContainer = compose(
  connect(mapStatToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
