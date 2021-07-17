import ImageMarker from 'react-image-marker'
import { useState, useEffect } from 'react'
import Anatomy from '../../../anatomy.svg'
import { useField, useFormikContext } from 'formik' 

const MarkerWrapper = ({
    name,
    ...rest
}) => {
 
    const [markers, setMarkers] = useState([])
    const [field, meta] = useField(name)
    const { setFieldValue } = useFormikContext()
    const HandleAdd = (marker) => {
        setMarkers([...markers, marker])
        console.log(marker)
        console.log(markers)
    }
    useEffect((name) => {
        setFieldValue(name, markers)
        console.log("effect", markers)
    }, [markers])
    const configImageMarker =  {
        ...field,
        ...rest,
        src: Anatomy,
        markers: markers,
        onAddMarker: HandleAdd
    }

    if (meta && meta.touched && meta.error){
        configImageMarker.error = true
        configImageMarker.helperText = meta.error
    }
    return (
        <div>
            <ImageMarker
                {...configImageMarker}
                />
        </div>
    )
}



export default MarkerWrapper
