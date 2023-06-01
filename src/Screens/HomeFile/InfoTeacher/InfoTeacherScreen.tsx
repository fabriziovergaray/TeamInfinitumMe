import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Animated, Platform, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import BarHome from '../../../Components/BarHome'
import { globalStyles } from '../../../Theme/Styles'
import FadeinImageSrc from '../../../Components/FadeInImageSrc'
import { windowWidth } from '../../../constans/constans'
import RatingStars from '../../../Components/RatingStar'
import { HeaderComponent } from '../../../Components/HeaderComponent'
import InfoGeneral from '../../../Components/InfoGeneral'
import RenderOpinionsUsers from '../../../Components/RenderOpinionsUsers'
import ButtonComponent from '../../../Components/ButtonComponent'
import Icon from 'react-native-vector-icons/Ionicons'
import { StylesInfoTeacher } from './Styles'
import { useAnimation } from '../../../Hooks/useAnimation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStackParamsHome } from '../../../Navigation/HomeNavigator'
interface Props extends StackScreenProps<RootStackParamsHome, 'InfoTeacherScreen'> { }
const InfoTeacherScreen = ({ navigation, route }: Props) => {
    const { profesor } = route.params
    const { calificacion, nombre, } = profesor
    const { fadeIn: fadeIn1, fadeOut: fadeOut1, opacity: opacity1 } = useAnimation()
    const { fadeIn: fadeIn2, fadeOut: fadeOut2, opacity: opacity2 } = useAnimation()
    const [showOption, setShowOption] = useState<boolean>(true)
    const { top } = useSafeAreaInsets()
    const handleToggle = () => {
        if (showOption) {
            fadeIn1()
            fadeOut2()
        } else {
            fadeOut1()
            fadeIn2()
        }
    }
    useEffect(() => {
        handleToggle()
    }, [showOption])

    return (
        <View style={{ flex: 1,}}>
            <View >
                <BarHome />
                <View style={{ flexDirection: 'row', ...globalStyles.globalMarginHorizontal }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='chevron-back-outline' size={35} color={"#000"} />
                    </TouchableOpacity>
                    <HeaderComponent title='Información del profesor' color='#000' fontSize={25} />
                </View>
            </View>

            <View style={{ ...globalStyles.globalMarginHorizontal, }}>
                <View style={{ width: (windowWidth / 3) - 20, ...StylesInfoTeacher.containerFather }}>
                    <FadeinImageSrc uri={require('../../../assets/logoTeamInfinitum.png')} style={{ ...StylesInfoTeacher.imagenStyle }} />
                    <View style={{ ...StylesInfoTeacher.containerRating }} >
                        <View style={{ ...StylesInfoTeacher.containerChilldren }}>
                            <Text style={{ color: '#fff' }}>
                                {calificacion}
                            </Text>
                        </View>
                    </View>
                    <RatingStars rating={calificacion} color='yellow' fontSize={25} />
                    <View style={{ ...StylesInfoTeacher.containerName }}>
                        <Text style={{ ...globalStyles.text }}>{nombre}</Text>
                    </View>
                </View>

                <View style={{ ...StylesInfoTeacher.contanerHearInforTeacher }}>
                    <TouchableOpacity onPress={() => setShowOption(true)} activeOpacity={0.7} style={{ ...StylesInfoTeacher.styleHeadOptionsInfo, borderBottomWidth: showOption ? 2 : 0, }}>
                        <Text style={[globalStyles.text, showOption ? StylesInfoTeacher.textStyleActive : StylesInfoTeacher.textStyleInactive]}>Informacion General</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowOption(false)} activeOpacity={0.7} style={{ ...StylesInfoTeacher.styleHeadOptionsInfo, borderBottomWidth: showOption === false ? 2 : 0 }}>
                        <Text style={[globalStyles.text, showOption ? StylesInfoTeacher.textStyleInactive : StylesInfoTeacher.textStyleActive]}>Opiniones</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {showOption ?
                <Animated.View style={{ ...globalStyles.globalMarginHorizontal, flex: 1, opacity: opacity1 }}>
                    <InfoGeneral profesor={profesor} />
                    <View style={{ ...StylesInfoTeacher.containerBtnInfoGeneral }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ButtonComponent style={{ ...StylesInfoTeacher.StyleBtnAceptar, width: windowWidth / 2 - 30 }} title='Aceptar' onPress={() => { }} colorText='#fff' styleText={{ ...StylesInfoTeacher.textBtn }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ButtonComponent style={{ ...StylesInfoTeacher.StyleBtnRegresar, width: windowWidth / 2 - 30 }} title='Regresar' onPress={() => { }} colorText='#000' styleText={{ ...StylesInfoTeacher.textBtn }} />
                        </View>

                    </View>
                </Animated.View>
                :
                <Animated.View style={{ ...globalStyles.globalMarginHorizontal, flex: 1, marginVertical: 15, opacity: opacity2 }}>
                    <RenderOpinionsUsers />
                    <ButtonComponent styleText={{ fontWeight: 'bold' }} activeOpacity={0.7} style={{ ...StylesInfoTeacher.StyleButton }} colorText='#000' title='Opinar' onPress={() => { }} />
                </Animated.View>
            }
        </View>
    )
}

export default InfoTeacherScreen
