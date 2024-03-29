import {
  Typography,
  Button,
  SidePanelDesktop,
  Gap,
  Link,
  StatusComponent,
} from "../ui-kit";
import style from "./TaskModal.module.scss";
import TabsCustom from "./TabsCustom/TabsCustom";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import {
  getEmployeeData,
  getIdpData,
  getTasksSidePanelData,
  getUserData,
} from "../../services/selectors";
import {
  handleCloseSidePanel,
  patchTasksStatusByID,
} from "../../services/actions";
import { TASK_TYPES } from "../../utils/constants";

const TaskModal: React.FC = () => {
  const { is_open_side_panel, task } = useAppSelector(getTasksSidePanelData);
  const { role } = useAppSelector(getUserData);
  const {
    employee: { id: employee_id },
  } = useAppSelector(getEmployeeData);

  const {
    idp: { id: idp_id },
  } = useAppSelector(getIdpData);
  const {
    status: { slug },
  } = task;

  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(handleCloseSidePanel());

  const setTextButton = () =>
    slug === "open"
      ? "Взять в работу"
      : slug === "completed"
        ? "Вернуть в работу"
        : slug === "in_progress"
          ? "Выполнена"
          : "Взять в работу";

  const handleStatusButton = () => {
    let newStatus = "none";
    if (slug === "open") {
      newStatus = "in_progress";
    }
    if (slug === "completed") {
      if (role === "manager") {
        newStatus = "open";
      } else {
        newStatus = "in_progress";
      }
    }
    if (slug === "in_progress") {
      newStatus = "completed";
    }
    dispatch(
      patchTasksStatusByID({
        employee_id,
        idp_id,
        task_id: task.id,
        data: {
          status_slug: newStatus,
        },
      }),
    );
  };

  interface TaskValue {
    name: string;
    description: string;
    type: string;
    source: string;
  }
  const taskExtractor = (item: any): TaskValue => {
    let type;
    switch (item.type) {
      case TASK_TYPES["Книга"]:
        type = "Книга";
        break;
      case TASK_TYPES["Курс"]:
        type = "Курс";
        break;
      case TASK_TYPES["Рабочая задача"]:
        type = "Рабочая задача";
        break;
      case TASK_TYPES["Альфа академия"]:
        type = "Альфа академия";
        break;
      default:
        type = "Другое";
    }
    return {
      name: item.name,
      description: item.description,
      type: type,
      source: item.source,
    };
  };

  return (
    <SidePanelDesktop
      open={is_open_side_panel}
      onClose={handleClose}
      className={style.modal}
    >
      <SidePanelDesktop.Header
        sticky={true}
        hasCloser={true}
        className={style.header}
      >
        <Typography.Title tag="h2" weight="bold" className={style.title}>
          Задача
        </Typography.Title>
      </SidePanelDesktop.Header>
      <SidePanelDesktop.Content>
        <Gap size="xl" />
        <div>
          <Typography.Title tag="h3" view="xsmall">
            {task.name}
          </Typography.Title>
          <Gap size="xl" />

          <div className={style.box}>
            <Typography.Text
              tag="p"
              defaultMargins={false}
              view="secondary-large"
              color="secondary"
              className={style.text}
            >
              Статус задачи
            </Typography.Text>
            <div>
              <StatusComponent slag_task={task.status.slug} />
            </div>

            <Typography.Text
              tag="p"
              defaultMargins={false}
              view="secondary-large"
              color="secondary"
              className={style.text}
            >
              Тип
            </Typography.Text>

            <Typography.Text
              tag="p"
              view="primary-small"
              defaultMargins={false}
              className={style.text}
            >
              {taskExtractor(task).type}
            </Typography.Text>

            <Typography.Text
              tag="p"
              defaultMargins={false}
              color="secondary"
              view="secondary-large"
              className={style.text}
            >
              Источник
            </Typography.Text>

            {task.source.includes("http") ? (
              <Link
                view="default"
                className={style.link}
                href={task.source}
                target="_blank"
              >
                {task.source}
              </Link>
            ) : (
              <Typography.Text
                tag="p"
                view="primary-small"
                defaultMargins={false}
                className={style.text}
              >
                {task.source}
              </Typography.Text>
            )}
          </div>

          <Gap size="2xl" />

          <TabsCustom description={task.description} task_id={`${task.id}`} />
        </div>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer sticky={true}>
        {(role === "manager" && slug === "completed") || role !== "manager" ? (
          <Button
            size={"s"}
            view={slug === "completed" ? "secondary" : "primary"}
            onClick={() => handleStatusButton()}
          >
            {setTextButton()}
          </Button>
        ) : null}
      </SidePanelDesktop.Footer>
    </SidePanelDesktop>
  );
};

export default TaskModal;
