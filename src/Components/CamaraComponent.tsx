import { useState } from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ImagePickerResponse, launchCamera, launchImageLibrary, CameraOptions } from "react-native-image-picker";
import FadeinImage from "./FadeInImage";
import FadeinImageSrc from "./FadeInImageSrc";

interface Props {
    onImageSelected: (base64Image: string, uri: string) => void;

}
const CameraComponent: React.FC<Props> = ({ onImageSelected }) => {
    const [image, setImage] = useState<string>();

    const openCamera = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            quality: 0.5,
            includeBase64: true,
        };

        launchCamera(options, (response: ImagePickerResponse) => {
            if (response.didCancel) return
            if (!response.assets![0].uri) return

            setImage(response.assets![0].uri);
            onImageSelected(response.assets![0].base64!, response.assets![0].uri)
        });
    };
    const openGalery = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            quality: 0.5,
            includeBase64: true,
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) return
            if (!response.assets![0].uri) return
            setImage(response.assets![0].uri);
        });
    };

    return (
        <View style={{ ...stylesHere.container }}>
            {
                !image ?
                    <FadeinImageSrc uri={require('../assets/defaulImage-200.png')} style={{ ...stylesHere.imageStyle }} />
                    :
                    <FadeinImage uri={image} style={{ ...stylesHere.imageStyle }} />

            }
            <View style={{ ...stylesHere.containerBtn }}>
                <TouchableOpacity onPress={openCamera} style={{ ...stylesHere.btnStyles }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Abrir cámara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openGalery} style={{ ...stylesHere.btnStyles }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Abrir Galeria</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};
const stylesHere = StyleSheet.create({
    containerBtn: {
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    btnStyles: {
        backgroundColor: 'blue',
        padding: 8,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    imageStyle: {
        width: 200,
        height: 200
    }
})
export default CameraComponent