import style from "./ManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/hook";
import { getEmployees, getManagersStatistics } from "../../services/actions";

const ManagerPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getManagersStatistics(1));
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className={style.content}>
      <TeamInfoBlock />
      <TeamList />
    </div>
  );
};

export default ManagerPage;
