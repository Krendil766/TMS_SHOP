import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getViews } from "../actions/actionsCreator/ViewAction";

const View = () => {
  const url = "http://localhost:3001/tms/view";
  const dispatch = useDispatch();
  const viewArr = useSelector((state) => state.view);
  const { views, loading, error } = viewArr;

  useEffect(() => {
    dispatch(getViews(url));
  }, [dispatch]);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error.ok) {
    return <div>{error.text}</div>;
  }

  return (
    <div>
      {views.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default View;
