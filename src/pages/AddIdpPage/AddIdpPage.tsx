import IdpForm from "../../components/IdpForm/IdpForm";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Gap } from "../../components/ui-kit";

const AddIdpPage = () => {
  return (
    <>
      <EmployeeCard />
      <Gap size="2xl" />
      <IdpForm />
      <Gap size="2xl" />
    </>
  );
};

export default AddIdpPage;
