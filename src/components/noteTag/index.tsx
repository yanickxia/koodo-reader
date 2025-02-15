import { connect } from "react-redux";
import { handleSearchResults, handleSearch } from "../../store/actions/manager";
import { stateType } from "../../store";
import { withNamespaces } from "react-i18next";
import NoteTag from "./component";
const mapStateToProps = (state: stateType) => {
  return {
    isReading: state.book.isReading,
    noteKey: state.reader.noteKey,
  };
};
const actionCreator = {
  handleSearchResults,
  handleSearch,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withNamespaces()(NoteTag as any));
