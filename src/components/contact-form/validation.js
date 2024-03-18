export const formState = {
  name: "",
  email: "",
  phoneNo: "",
  typeOfService: "",
  message: "",
};

export const validateValues = (formData) => {
  let errors = {};
  if (formData?.name?.length <= 0) {
    errors.name = "field is required";
  }
  if (formData?.email?.length <= 0) {
    errors.email = "field is required";
  }
  if (formData?.phoneNo?.length <= 0) {
    errors.phoneNo = "field is required";
  }
  if (formData?.typeOfService?.length <= 0) {
    errors.typeOfService = "field is required";
  }
  if (formData?.message?.length <= 0) {
    errors.message = "field is required";
  }
  return errors;
};
