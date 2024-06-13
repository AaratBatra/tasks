// 184 61
const Logo = ({src, alt, className, width, height} : {src: string, alt: string, className:string, width: number, height: number}) => {
  return (
    <img alt={alt} className={className} loading="lazy" width={width} height={height} decoding="async" data-nimg="1"
    src = {src} />
  )
}

export default Logo
