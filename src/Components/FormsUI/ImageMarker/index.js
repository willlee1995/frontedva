import ImageMarker from 'react-image-marker'
import { useState, useEffect } from 'react'
import Anatomy from '../../../images/anatomy.svg'
import { useField, useFormikContext } from 'formik'
import {

    Grid,

    Button
}
    from '@material-ui/core'


const MarkerWrapper = ({ 
    name,
    ...rest
}) => {
    const initState = []
    const { setFieldValue } = useFormikContext()
    const [markers, setMarkers] = useState(initState)
    const [field, meta] = useField(name)
    var markersArray = JSON.parse(JSON.stringify((markers))) // That's the method for cloning with drawback of flattening the type of the object
    const handleApply = () => {
        setFieldValue(name, markers)

        console.log(markers)
    }
    const handleDelete = () => {
        setMarkers([])
    }
    function handlePop() {
        markersArray.pop()
        return markersArray
        // Need to research for ways to splice an array without flattening //
    }

    function handleRemove(markersArray) {
        var newMarkersArray = handlePop()

        if ((newMarkersArray.length === 0)) {

            return setMarkers(initState)

        } else if ((newMarkersArray.length > 0)) {

            return setMarkers(newMarkersArray)

        } else {

        }
    }
    const HandleAdd = (marker) => {
        setMarkers([...markers, marker])

    }
    useEffect((name) => {
        
        console.log("effect", markers)
    }, [markers])
    const configImageMarker = {
        ...field,
        ...rest,
        src: Anatomy,
        markers: markers,
        onAddMarker: HandleAdd,

    }

    if (meta && meta.touched && meta.error) {
        configImageMarker.error = true
        configImageMarker.helperText = meta.error
    }
    return (
        <>
            <Grid container>
                <Grid maxHeight="500px" item xs={12}>
                    <ImageMarker {...configImageMarker} />
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Button fullWidth onClick={handleDelete} variant="contained" color="secondary">Reset</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth onClick={handleApply} variant="contained" color="secondary">Apply</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth onClick={handleRemove} variant="contained" color="secondary">Delete last marker</Button>
                </Grid>
                </Grid>

            </Grid>

        </>
    )
}



export default MarkerWrapper
