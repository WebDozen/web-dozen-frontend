import { useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import { ProgressBar, Space } from "../ui-kit";

import styleStatus from "./InfoProgressStatusBar.module.scss";

export default function InfoProgressStatusBar() {
  const {
    employee,
    loading,
    error,
  } = useAppSelector(getEmployeeData);
  
  return (
    <div className={styleStatus.infoProgress}>
      <div className={styleStatus.infoTextBlock}>
        <p className={styleStatus.infoProgressStatus}>Задач по текущему ИПР</p>
        <p className={styleStatus.infoProcent}>
          <span className={styleStatus.infoProcentBold}>{`${employee.idp.completed_tasks_count}
`}</span> из 5
        </p>
      </div>
      <Space size={20} fullWidth>
        <ProgressBar view="positive" size="s" value={(employee.idp.completed_tasks_count / 5) * 100} />
      </Space>
    </div>
  );
}
