interface ImageClipBoxProps {
  src: string;
  clipClass: string;
  alt?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => {
  return (
    <div className={clipClass}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageClipBox;
