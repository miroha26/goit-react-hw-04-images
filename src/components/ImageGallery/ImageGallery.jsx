import React from 'react';
import clsx from 'clsx';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, modalClick }) => {
  return (
    <ul className={clsx('ImageGallery')}>
      {data.map(item => (
        <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  modalClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
