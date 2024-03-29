import IdpForm from "../../components/IdpForm/IdpForm";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Gap } from "../../components/ui-kit";
import { useAppDispatch } from "../../services/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByID, getEmployees } from "../../services/actions";
import style from './AddIdpPage.module.scss';

const AddIdpPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeeByID(id));
    dispatch(getEmployees());
  }, [id, dispatch]);

  return (
    <>
    <div className={style.content}>
      <EmployeeCard />
      <Gap size="2xl" />
      <IdpForm />
      <Gap size="2xl" />
      </div>
    </>
  );
};

export default AddIdpPage;
