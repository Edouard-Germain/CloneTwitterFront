import { useFormik } from 'formik';
import * as Yup from 'yup'

const CreateTweet = () => {
    const formik = useFormik({
        initialValues: {
            content: ""
          },
          validationSchema: Yup.object().shape({
			content: Yup.string()
            .max(280, "trop long")
          }),
          validateOnChange: false
    })
    return( 
        <div>
            <form>
                <div className = "form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quoi de neuf ?"/>

                </div>
            </form>
        </div>
    )
}

export default CreateTweet