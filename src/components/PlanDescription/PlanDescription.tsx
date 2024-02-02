import { useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { Gap, Typography } from "../ui-kit";
import style from "./PlanDescription.module.scss";

export default function PlanDescription() {
  const {
    idp,
    loading,
    error,
  } = useAppSelector(getIdpData);
  //console.log(idp);

  return (
    <div className={style.block}>
      <Typography.Title view="xsmall" tag="h3" style={{ color: "#0E0E0E" }}>
        Описание плана развития
      </Typography.Title>
      <Gap size="s" />
      <Typography.Text
        view="primary-small"
        tag="p"
        defaultMargins={false}
        color="primary"
        style={{ fontFamily: "SF Pro Text" }}
      > {`${idp.description}`}
      </Typography.Text>
      <Gap size="s" />
{ /*     <Typography.Text
        view="primary-small"
        tag="p"
        defaultMargins={false}
        color="primary"
        style={{ fontFamily: "SF Pro Text" }}
      >
        План развития по soft-скиллам включает в себя определенное количество
        задач, которые необходимо закрыть к концу года. Периодически мы будем
        проводить оценку прогресса и при необходимости можем скорректировать наш
        план. Развитие soft-скиллов является процессом, который требует
        постоянного внимания!
  </Typography.Text>*/}
    </div>
  );
}
