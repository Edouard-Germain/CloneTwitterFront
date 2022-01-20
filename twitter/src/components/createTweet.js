import { useFormik } from 'formik';
import * as Yup from 'yup'




const CreateTweet = () => {
    const formik = useFormik({
        initialValues: {
            content: ""
          },
          onSubmit: values =>{
            fetch("http://localhost:5000/tweets/",{
                method: 'post',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(values)
            })
            .then(response=>response.json())
            .then(data=>data)
          },
          validationSchema: Yup.object().shape({
			content: Yup.string()
            .max(280, "trop long")
          }),
          validateOnChange: false
    })
    return( 
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className = "form-group">
                <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="Quoi de neuf ?"/>

                </div>
            </form>
        </div>
    )
}

export default CreateTweet