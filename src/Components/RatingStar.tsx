import React, { FC } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RatingStarsProps {
  rating: string;
  fontSize?: number;
  color?: string;
}

const RatingStars = ({
  rating,
  fontSize = 15,
  color = '#000',
}: RatingStarsProps) => {
  const parsedRating = parseFloat(rating);
  const stars = [];

  // Crear estrellas completas
  for (let i = 0; i < Math.floor(parsedRating ); i++) {
    stars.push(
      <Icon
        key={i}
        name="star"
        style={{ fontSize: fontSize }}
        color={color}
      />,
    );
  }
  // Agregar estrella parcial si corresponde
  if (parsedRating % 1 !== 0) {
    stars.push(
      <Icon
        key={stars.length}
        name="star-half-sharp"
        style={{ fontSize: fontSize }}
        color={color}
      />,
    );
  }

  // Agregar estrellas vacías para completar hasta 5 estrellas
  while (stars.length < 4) {
    stars.push(
      <Icon
        key={stars.length}
        name="star"
        style={{ fontSize: fontSize }}
        color={color}
      />,
    );
  }

  return <View style={{ flexDirection: 'row' }}>{stars}</View>;
};

export default RatingStars;
