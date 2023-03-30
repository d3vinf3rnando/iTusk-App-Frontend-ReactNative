import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width * 0.9;

const images = [
  { id: 1, source: require('./images/image1.png') },
  { id: 2, source: require('./images/image1.png') },
  { id: 3, source: require('./images/image1.png') },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        {images.map((image, index) => (
          <Image
            key={image.id}
            source={image.source}
            style={[
              styles.carouselImage,
              { transform: [{ translateX: (index - activeIndex) * imageWidth }] },
            ]}
          />
        ))}

        <TouchableOpacity onPress={handlePrev}>
        <Image source={require('./images/left_arrow.png')} 
        style={styles.leftArrow} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNext}>
        <Image source={require('./images/right_arrow.png')} 
            style={styles.rightArrow}/>
      </TouchableOpacity>

      </View>
      
      <View style={styles.dotsContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={image.id}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : null,
            ]}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //width:'70%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10,
    marginVertical: 40,
  },
  leftArrow: {
    marginTop:90,
    height:20,
    width:20,
    position: 'absolute',
    left: 10,
  },
  rightArrow: {
    marginTop:88,
    height: 20,
    width:20,
    //marginTop: 10,
    position: 'absolute',
    right: 10,
  },
  carouselContainer: {
    borderRadius: 20,
    width: imageWidth*0.95,
    height: imageWidth * 0.5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  carouselImage: {
    width: imageWidth,
    height: imageWidth * 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c1d6f7',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#306ccf',
  },
});

export default Carousel;
