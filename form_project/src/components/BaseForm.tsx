
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// to define what rules that we want to apply
const formSchema = z.object
({
    name: z.string().min(1,"*Field is required"), //minimal 1 characters
    email: z.string().email("*Field is required"),//the text must be an email
    gender: z.enum(["male", "female"],           //choice must between male or female (expected value is male or female)
        {
            required_error: "*Field is required",
            invalid_type_error: "*Field is required" // to remove the null or the ugly messages
        })
})

export const BaseForm = () => {

// so basically, this parts of the code is used as to manage the entire form validation state

// in this case the register part is used to connect all of the inputs to the zod validation system

// the handleSubmit parts is used to handle all the submit inputs from the first one
// then this parts also runs the validation and only calls the onSubmit syntax if the validation
// was completed and it passes

// the error is to pop up the error message if the validation was failed

// the resolver was used to bridge zod validation it self to the react hook form

const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(formSchema)});

// this part of the code were used to handle all of the input if the validation were completed and passed
const onSubmit = (data: z.infer<typeof formSchema>) => {console.log(data);};

  return (
    
    <div>
        <h1>FORM CHALLENGE</h1>
        <form className="form" onSubmit = {handleSubmit(onSubmit)}>
            <div className = "formGroups1">
                <label htmlFor = "name" className = "formLable1">
                    Name
                </label>
                <input type = "text" id = "name" value = "" className = "formName" {...register("name")}/>
                {errors.name && <span className="error"> 
                    {errors.name.message} 
                </span>}
            </div>


            <div className = "formGroups2">
                <label htmlFor = "email" className = "formLable2">
                    Email
                </label>
                <input type = "email" id = "email" value = "" className = "formEmail" {...register("email")}/>
                {errors.email && <span className="error"> 
                    {errors.email.message} 
                </span>}
            </div>

            <div className = "formGroups">
                <label htmlFor = "gender" className = "formLable3">
                    Gender
                </label>

                <label htmlFor = "gender" className = "formLable4">
                <label htmlFor = "male" className = "formLable">
                    <input type = "radio" id="male" value="male" className="formRadio" {...register("gender")}/>
                        Male
                </label>
                

                <label htmlFor = "female" className = "formLable5">
                    <input type = "radio" id="female" value="female" className="formRadio" {...register("gender")}/>
                        Female
                </label>

                </label>

                {errors.gender && <span className="error"> 
                    {errors.gender.message} 
                </span>}

            </div>

            <button className = "button">
                Submit
            </button>

        </form>
    </div>
  )
}
