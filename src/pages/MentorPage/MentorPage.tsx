import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByID, getIdps } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import TabsCustomMentor from "../../components/TabsCustomMentor/TabsCustomMentor";
import { Gap } from "../../components/ui-kit";
import styles from './MentorPage.module.scss';

const MentorPage = () => {
    type Params = {
      id: string;
    };
  
    const { id } = useParams<Params>();
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getEmployeeByID(id));
      dispatch(getIdps(id));
    }, [dispatch]);
  
    const {
      employee: {
        is_mentor,
        idp: { status: idp_status },
      },
      employee,
      loading,
      error,
    } = useAppSelector(getEmployeeData);

console.log("employee:", employee);

  const plateSuccess = {
    hasBadge: "positive",
    hasButton: false,
    hasCloser: true,
  };
  const plateAttention = {
    hasBadge: "attention",
    hasButton: false,
    hasCloser: true,
  };
  
    const status: string = idp_status;
    return (
        <div className={styles.content}>
   { /*   {is_mentor && (
        <div>
          <MentorInfo />
          <Gap size="2xl" />
        </div>
   )} */}
     <Gap size="3xl" />
      <EmployeeCard />
      <Gap size="2xl" />
      {is_mentor && <TabsCustomMentor />}
      <Gap size="7xl" />
      {/* !! если все выполнены или отменены,то показываем зеленую плашку только тогда.
       нужно будет переделать !!
      {status === TYPE_SLAG_IDP.completed && (
        <PlateWrapper
          config={plateSuccess}
          view="positive"
          titleText="Сотрудник выполнил все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "expired" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Сотрудник не выполнил последний ИПР"
          text="Возможно, задач было слишком много? Узнайте у сотрудника, что пошло не так, и составьте новый план для развития"
        />
      )}

      {employee.idp.total_idp_count === 0 ? <NewPlanMessage /> : <IdpList />}

     Плашки для сотрудника
{status === "green" && (
        <PlateWrapper
          config={plateSuccess}
          view="positive"
          titleText="Вы выполнили все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "red" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Вы не выполнили последний ИПР"
          text="Возможно, задач было слишком много? Обратитесь к руководителю, и составьте новый план для развития"
        />
      )}
      {status === "grey" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Ваш последний ИПР был отменен"
          text="Узнайте у руководителя или ментора в чем причина отмены, и составьте новый план для развития!"
        />
      )} */}
    </div>
  );
}

export default MentorPage;