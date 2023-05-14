import backgroundImage from './.././assets/home.jpg';

export default function Home() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  return (
    <div className="Home" style={styles}>
      {/* Content */}
    </div>
  );
}