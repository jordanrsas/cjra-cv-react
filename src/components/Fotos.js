import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery'; //'./Gallery';

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  }
  return array;
  }

const propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.shape({
          src: PropTypes.string.isRequired,
          thumbnail: PropTypes.string.isRequired,
          srcset: PropTypes.array,
          caption: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.element
          ]),
          thumbnailWidth: PropTypes.number.isRequired,
          thumbnailHeight: PropTypes.number.isRequired,
          isSelected: PropTypes.bool
      })
  ).isRequired
};

const defaultProps = {
  images: [
    {
      src: "../fotos/japan_001.JPG",
      thumbnail: "../fotos/japan_001_thumbnail.JPG",
      isSelected: false,
      thumbnailWidth: 600,
      thumbnailHeight: 400,
      caption: "Japón Febrero, 2017"
  },
  {
    src: "../fotos/japan_002.JPG",
    thumbnail: "../fotos/japan_002_thumbnail.JPG",
    isSelected: false,
    thumbnailWidth: 600,
    thumbnailHeight: 400,
    caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_003.JPG",
  thumbnail: "../fotos/japan_003_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_004.JPG",
  thumbnail: "../fotos/japan_004_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 400,
  thumbnailHeight: 600,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_005.JPG",
  thumbnail: "../fotos/japan_005_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_006.JPG",
  thumbnail: "../fotos/japan_006_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},{
  src: "../fotos/japan_007.JPG",
  thumbnail: "../fotos/japan_007_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_008.JPG",
  thumbnail: "../fotos/japan_008_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 400,
  thumbnailHeight: 600,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_009.JPG",
  thumbnail: "../fotos/japan_009_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_010.JPG",
  thumbnail: "../fotos/japan_010_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_011.JPG",
  thumbnail: "../fotos/japan_011_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_012.JPG",
  thumbnail: "../fotos/japan_012_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_013.JPG",
  thumbnail: "../fotos/japan_013_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_014.JPG",
  thumbnail: "../fotos/japan_014_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_015.JPG",
  thumbnail: "../fotos/japan_015_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_016.JPG",
  thumbnail: "../fotos/japan_016_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_017.JPG",
  thumbnail: "../fotos/japan_017_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_018.JPG",
  thumbnail: "../fotos/japan_018_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_019.JPG",
  thumbnail: "../fotos/japan_019_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
},
{
  src: "../fotos/japan_020.JPG",
  thumbnail: "../fotos/japan_020_thumbnail.JPG",
  isSelected: false,
  thumbnailWidth: 600,
  thumbnailHeight: 400,
  caption: "Japón Febrero, 2017"
}
]
}

const Fotos = () => (
  <div>
    <h2>Fotos</h2>
    <div style={{
                    display: "block",
                    marginBottom: "4rem",
                    minHeight: "1px",
                    width: "100%",
                    border: "3px solid #507BFF",
                    overflow: "auto"}}>
                <Gallery images={defaultProps.images} enableImageSelection={false} showLightboxThumbnails={true} lightboxWidth={3536} backdropClosesModal={true} />
                </div>

  </div>
);

export default Fotos;