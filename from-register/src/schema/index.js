import  {Yup} from "yup"

export const Index=Yup.object({
    name:Yup.string().min(3).required("enter name")

})