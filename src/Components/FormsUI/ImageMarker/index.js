import ImageMarker from 'react-image-marker'
import { useState, useEffect } from 'react'
import Anatomy from '../../../anatomy.svg'
import { useField, useFormikContext } from 'formik'
import { Button } from '@material-ui/core';

const MarkerWrapper = ({
    name,
    ...rest
}) => {
    const initState = []
    const { setFieldValue } = useFormikContext()
    const [markers, setMarkers] = useState(initState)
    const [field, meta] = useField(name)
    const handleApply = () => {
        setFieldValue(name, markers)
        
        console.log(markers)
    }
    const handleDelete = () => {
        setMarkers([])
    }
    const handleRemove = () => {
        var markersArray = [...markers]
        console.log("ori", markersArray)
        markersArray.pop()
        console.log( [markersArray])
        if (markersArray.length = 0) {
            setMarkers(initState)
        } else {
            console.log("else", markersArray)
            setMarkers(markersArray)
        }
       // Need to research for ways to splice an array without flattening//
    }
    const HandleAdd = (marker) => {
        setMarkers([...markers, marker])
        console.log(marker)
        console.log(markers)
    }
    useEffect((name) => {
       
        console.log("effect", markers)
    }, [markers])
    const configImageMarker = {
        ...field,
        ...rest,
        src: Anatomy,
        markers: markers,
        onAddMarker: HandleAdd
    }

    if (meta && meta.touched && meta.error) {
        configImageMarker.error = true
        configImageMarker.helperText = meta.error
    }
    return (
        <>
        <div>
            <ImageMarker {...configImageMarker} />
        </div>
        <div>
            <Button center onClick={handleDelete} variant="contained" color="secondary">Reset</Button>
        </div>
        <div>
            <Button center onClick={handleApply} variant="contained" color="secondary">Apply</Button>
        </div>
        <div>
            <Button center onClick={handleRemove} variant="contained" color="secondary">Delete last marker</Button>
        </div>
        </>
    )
}



export default MarkerWrapper
