import { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';

const useImageToBase64 = (imagePath: string) => {
    const [imageBase64, setImageBase64] = useState('');
    const convertToBase64 = async () => {
        if (imagePath !== '') {
            try {
                const filepath = imagePath.split('//')[1];
                const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
                const base64String = 'data:image/jpeg;base64,' + imageUriBase64;
                setImageBase64(base64String);
            } catch (error) {
                console.error('Error converting image to base64:', error);
            }
        }
    };
    useEffect(() => {
        convertToBase64()
    }, [imagePath]);

    return { imageBase64 };
};

export default useImageToBase64;