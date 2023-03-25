import * as  Yup from "yup"

export const formschema = Yup.object({
    // Rating:Yup.number().min(1).required("Enter your Age"),
    Name:Yup.string().min(2).max(15).required("Enter your Name"),
    // Class:Yup.string().required("Enter your Class"),
    // GPA:Yup.number().min(2.0).max(4.0).required("Enter your GPA"),
})