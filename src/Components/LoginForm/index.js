import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../FormsUI/Textfield'

function LoginForm() {
    const iValues = {
        user: '',
        password: ''
    }
    const validationSchema = Yup.object({
        user: Yup.string().required(),
        password: Yup.string().required()

    })

    const onSubmit = (values) => {
        console.log(values)
        // setFieldValue(initialValues, markers)

        //       console.log(markers)
    }
    return (
        <Formik initialValues={iValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <TextField
                    name="user"
                    label="User Name"
                />
                <TextField
                    name="password"
                    label="Password"
                />

            </Form>
        </Formik>
    )
}

export default LoginForm
